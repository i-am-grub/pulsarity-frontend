/** @format */

import { pulsarity } from "../utils/pulsarity_pb";
import { WebWorkerAction, WebSocketMode, type EventData } from "./ws_types";
import { wsRouteHandlers } from "./ws_handlers";
import { ref } from "vue";

export const wsMode = ref(WebSocketMode.OFF);

/**
 * Define and start the websocket worker connection
 */
const worker = new SharedWorker(new URL("./ws_worker.ts", import.meta.url), {
	name: "pulsarity-websocket-worker",
	type: "module",
});
worker.port.onmessage = (event: MessageEvent<EventData>) => {
	const eventData = event.data;

	switch (eventData.action) {
		// Process websocket data from the worker
		case WebWorkerAction.MESSAGE:
			if (eventData.evtData !== undefined)
				processWebsocketMessage(eventData.evtData);
			break;

		// Process websocket worker connection state
		case WebWorkerAction.CONNECT:
			if (eventData.wsMode !== undefined) wsMode.value = eventData.wsMode;
			break;
	}
};
worker.port.start();

/**
 * Close the connection to the websocket worker
 */
export function closeWebsocketConnection() {
	worker.port.close();
}

/**
 * Set the mode of the websocket worker
 */
export function setWebsocketMode(mode: WebSocketMode) {
	const data: EventData = { action: WebWorkerAction.CONNECT, wsMode: mode };
	worker.port.postMessage(data);
}

/**
 * Send an event message to the websocket worker
 */
export function sendEventMessage(event: pulsarity.ws.WebsocketEvent) {
	const data: EventData = { action: WebWorkerAction.MESSAGE, evtData: event };
	worker.port.postMessage(data);
}

/**
 * Process a parsed websocket message. Handles the provided
 * message based on its internal event id.
 * @param [message] The websocket message to process
 */
function processWebsocketMessage(message: pulsarity.ws.WebsocketEvent): void {
	try {
		wsRoutes[message.eventId](message);
	} catch (error) {
		let errorMessage = "n/a";

		if (error instanceof Error) {
			errorMessage = error.message;
		}

		console.error(
			"Failed to process websocket message: ",
			message.eventId,
			errorMessage,
		);
	}
}

/**
 * Map event ids to handling functions.
 * Using a mapping for a large amount of options is faster
 * than a switch.
 */
type EventHandler = (message: pulsarity.ws.WebsocketEvent) => void;
const wsRoutes: Record<pulsarity.ws.EventID, EventHandler> = {
	// Throwaway
	[pulsarity.ws.EventID.EVENT_UNSPECIFIED]: wsRouteHandlers.logWebsocketEvent,

	// System Events
	[pulsarity.ws.EventID.EVENT_HEARTBEAT]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_PERMISSIONS_UPDATE]:
		wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_STARTUP]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RESTART]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_SHUTDOWN]: wsRouteHandlers.logWebsocketEvent,

	// Database Updates
	[pulsarity.ws.EventID.EVENT_PILOT_ADD]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_PILOT_ALTER]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_PILOT_DELETE]: wsRouteHandlers.logWebsocketEvent,

	// Race Sequence
	[pulsarity.ws.EventID.EVENT_RACE_SCHEDULE]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_STAGE]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_START]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_FINISH]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_STOP]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_PAUSE]: wsRouteHandlers.logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_RESUME]: wsRouteHandlers.logWebsocketEvent,
};
