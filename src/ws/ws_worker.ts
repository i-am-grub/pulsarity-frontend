/** @format */
/// <reference lib="WebWorker" />

import { pulsarity } from "../utils/pulsarity_pb";
import { WebWorkerAction, type EventData } from "./ws_types";
import { WebSocketMode } from "./ws_types";

// Track active connections across tabs
const connections: Set<MessagePort> = new Set<MessagePort>();
let mode = WebSocketMode.OFF;

// Cast self to SharedWorkerGlobalScope
const ctx = self as unknown as SharedWorkerGlobalScope;

let ws: WebSocket;

/**
 * Sends the websocket connection mode to all
 * connections
 */
function sendConnectionMode(new_mode: WebSocketMode) {
	const data: EventData = {
		action: WebWorkerAction.CONNECT,
		wsMode: new_mode,
	};
	connections.forEach((port) => {
		port.postMessage(data);
	});
}

/**
 * Generate a websocket connection
 */
function connectWebSocket(new_mode: WebSocketMode) {
	switch (new_mode) {
		case WebSocketMode.DUPLEX:
			console.debug("Starting duplex websocket...");
			ws = new WebSocket("/api/ws/duplex");
			break;
		case WebSocketMode.SIMPLEX:
			console.debug("Starting simplex websocket...");
			ws = new WebSocket("/api/ws/simplex");
			break;
		default:
			return;
	}

	ws.binaryType = "arraybuffer";

	ws.onopen = (_) => {
		console.log("WebSocket is connected.");
		sendConnectionMode(new_mode);
	};

	ws.onmessage = handleServerEvt;

	ws.onclose = (event) => {
		mode = WebSocketMode.OFF;
		console.log(
			`Connection closed. Code: ${event.code}, Reason: ${event.reason}. Attempting to reconnect in 3 seconds...`,
		);
		// Reconnect after a delay - TODO: exponential backoff
		setTimeout(connectWebSocket, 3000, new_mode);
		sendConnectionMode(WebSocketMode.OFF);
	};

	ws.onerror = (error) => {
		console.error("WebSocket Error: ", error);
		ws.close(); // Triggers onclose event to handle retry
	};

	mode = new_mode;
}

/**
 * Generate a websocket connection
 */
function setWebsocketMode(new_mode: WebSocketMode) {
	if (new_mode === mode) {
		return;
	}

	if (mode === WebSocketMode.OFF) {
		connectWebSocket(new_mode);
	} else if (new_mode === WebSocketMode.OFF) {
		ws.onclose = (event) => {
			mode = WebSocketMode.OFF;
			console.log(
				`Connection closed. Code: ${event.code}, Reason: ${event.reason}. Turning off websocket...`,
			);
			sendConnectionMode(WebSocketMode.OFF);
		};

		ws.close(1000, "Closing client websocket");
	} else {
		ws.onclose = (event) => {
			mode = WebSocketMode.OFF;
			console.log(
				`Connection closed. Code: ${event.code}, Reason: ${event.reason}. Reconnecting immediately...`,
			);
			setTimeout(connectWebSocket, 0, new_mode);
		};

		ws.close(1000, "Closing client websocket");
	}
}

/**
 * Handle websocket data coming from the server
 */
function handleServerEvt(evt: MessageEvent<ArrayBuffer>) {
	const msg = pulsarity.ws.WebsocketEvent.decode(new Uint8Array(evt.data));

	// Handle the heartbeat response without forwading to connections
	if (msg.eventId === pulsarity.ws.EventID.EVENT_HEARTBEAT) {
		console.log("Server heartbeat...");
		return;
	}

	// Send the parsed event to each connection
	const data: EventData = { action: WebWorkerAction.MESSAGE, evtData: msg };
	connections.forEach((port) => {
		port.postMessage(data);
	});
}

/**
 * Send data to the server over the websocket connection
 */
function sendMessageToServer(evt: pulsarity.ws.WebsocketEvent) {
	const body = pulsarity.ws.WebsocketEvent.encode(evt).finish();
	ws.send(body);
}

/**
 * Setup shared worker
 */
ctx.onconnect = (event: MessageEvent) => {
	const port = event.ports[0];
	connections.add(port);

	/**
	 * Add event handler for when the shared worker recieves data from
	 * a connection
	 */
	port.onmessage = (e: MessageEvent<EventData>) => {
		const eventData = e.data;

		switch (eventData.action) {
			// Encode the message and send the websocket data to the server
			case WebWorkerAction.MESSAGE:
				if (eventData.evtData !== undefined) {
					sendMessageToServer(eventData.evtData);
				}
				break;

			// Reconnect the websocket
			case WebWorkerAction.CONNECT:
				if (eventData.wsMode !== undefined) {
					setWebsocketMode(eventData.wsMode);
				}

				break;
		}
	};

	/**
	 * Remove the connection from the list. Clean up the websocket
	 * connection if all clients are disconnected.
	 */
	port.addEventListener("close", () => {
		connections.delete(port);

		if (connections.size === 0) {
			ws.close();
		}
	});

	// Start the port
	port.start();

	// Send the current websocket connection mode
	const data: EventData = {
		action: WebWorkerAction.CONNECT,
		wsMode: mode,
	};
	port.postMessage(data);
};
