/** @format */

import { pulsarity } from "@/utils/pulsarity_pb";
import {
	isConnectEventMessage,
	isWebSocketEventMessage,
	type WebSocketModeType,
	WebSocketMode,
	type WorkerMessage,
	type ConnectEventMessage,
	type WebSocketEventMessage,
	WebWorkerAction,
} from "./ws_types";
import { ref, type Ref } from "vue";

export const wsMode: Ref<WebSocketModeType> = ref(WebSocketMode.OFF);

/**
 * Define and start the websocket worker connection
 */
const worker = new SharedWorker(new URL("./ws_worker.ts", import.meta.url), {
	name: "pulsarity-websocket-worker",
	type: "module",
});
worker.port.onmessage = (event: MessageEvent<WorkerMessage>) => {
	const eventData = event.data;

	if (isWebSocketEventMessage(eventData)) {
		processWebsocketMessage(eventData.messageData);
	} else if (isConnectEventMessage(eventData)) {
		if (eventData.wsMode !== undefined) wsMode.value = eventData.wsMode;
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
 * @param mode The mode to sent the websocket connection to
 */
export function setWebsocketMode(mode: WebSocketModeType) {
	const data: ConnectEventMessage = {
		action: WebWorkerAction.CONNECT,
		wsMode: mode,
	};
	worker.port.postMessage(data);
}

/**
 * Send an event message to the websocket worker
 * @param event The event message to send to the server
 */
export function sendEventMessage(event: pulsarity.ws.WebsocketEvent) {
	// Don't send the message - the server will only process the message
	// if the connection mode is duplex
	if (wsMode.value !== WebSocketMode.DUPLEX) return;

	const data: WebSocketEventMessage = {
		action: WebWorkerAction.WEBSOCKET,
		messageData: event,
	};
	worker.port.postMessage(data);
}

/**
 * Process a parsed websocket message. Handles the provided
 * message based on its internal event id.
 * @param message The websocket message to process
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
	[pulsarity.ws.EventID.EVENT_UNSPECIFIED]: logWebsocketEvent,

	// System Events
	[pulsarity.ws.EventID.EVENT_HEARTBEAT]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_PERMISSIONS_UPDATE]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_STARTUP]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RESTART]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_SHUTDOWN]: logWebsocketEvent,

	// Database Updates
	[pulsarity.ws.EventID.EVENT_PILOT_ADD]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_PILOT_ALTER]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_PILOT_DELETE]: logWebsocketEvent,

	// Race Sequence
	[pulsarity.ws.EventID.EVENT_RACE_SCHEDULE]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_STAGE]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_START]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_FINISH]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_STOP]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_PAUSE]: logWebsocketEvent,
	[pulsarity.ws.EventID.EVENT_RACE_RESUME]: logWebsocketEvent,
};

/**
 * Placeholder until event specific logic is added
 * @param [message] The websocket message to process
 */
export function logWebsocketEvent(message: pulsarity.ws.WebsocketEvent) {
	console.log(`Processed websocket message with event id ${message.eventId}`);
}
