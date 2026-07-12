/** @format */
/// <reference lib="WebWorker" />

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

// Track active connections across tabs
const connections: Set<MessagePort> = new Set<MessagePort>();
let mode: WebSocketModeType = WebSocketMode.OFF;

// Cast self to SharedWorkerGlobalScope
const ctx = self as unknown as SharedWorkerGlobalScope;

let ws: WebSocket;

/**
 * Sends the websocket connection mode to all connections
 * @param new_mode The mode to send to the worker's connections
 */
function sendConnectionMode(new_mode: WebSocketModeType) {
	const data: ConnectEventMessage = {
		action: WebWorkerAction.CONNECT,
		wsMode: new_mode,
	};
	connections.forEach((port) => {
		port.postMessage(data);
	});
}

/**
 * Generate a websocket connection
 * @param new_mode The mode to update the websocket connection to
 */
function connectWebSocket(new_mode: WebSocketModeType) {
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

	// Switch the binary type to be compatible with protocol buffers
	ws.binaryType = "arraybuffer";

	// Set websocket callbacks
	ws.onopen = (_) => {
		console.log("WebSocket is connected.");
		sendConnectionMode(new_mode);
	};

	ws.onmessage = handleServerEvt;

	ws.onclose = (event) => {
		mode = WebSocketMode.OFF;
		sendConnectionMode(mode);

		console.log(
			`Connection closed. Code: ${event.code}, Reason: ${event.reason}. Attempting to reconnect in 3 seconds...`,
		);

		// Reconnect after a delay - TODO: exponential backoff
		setTimeout(connectWebSocket, 3000, new_mode);
	};

	ws.onerror = (error) => {
		console.error("WebSocket Error: ", error);
		ws.close(); // Triggers onclose event to handle retry
	};

	// Update the global websocket mode
	mode = new_mode;
}

/**
 * Set the websocket mode the worker should use
 * @param new_mode The mode to set the websocket connection to
 */
function setWebsocketMode(new_mode: WebSocketModeType) {
	// No need to update the connection if the mode is the same
	if (new_mode === mode) {
		return;
	}

	// Create a new connection immediately
	if (mode === WebSocketMode.OFF) {
		connectWebSocket(new_mode);
	}
	// Update the connection to prevent it from trying to reconnect and then close it
	else if (new_mode === WebSocketMode.OFF) {
		ws.onclose = (event) => {
			mode = WebSocketMode.OFF;
			sendConnectionMode(mode);

			console.log(
				`Connection closed. Code: ${event.code}, Reason: ${event.reason}. Turning off websocket...`,
			);
		};

		ws.close(1000, "Closing client websocket");
	}
	// Update the connection to reconnect immediately after closing
	else {
		ws.onclose = (event) => {
			mode = WebSocketMode.OFF;
			sendConnectionMode(mode);

			console.log(
				`Connection closed. Code: ${event.code}, Reason: ${event.reason}. Reconnecting immediately...`,
			);

			setTimeout(connectWebSocket, 0, new_mode);
		};

		ws.close(1000, "Closing client websocket");
	}
}

/**
 * Handle websocket event data coming from the server
 * @param evt The message event data to process
 */
function handleServerEvt(evt: MessageEvent<ArrayBuffer>) {
	const msg = pulsarity.ws.WebsocketEvent.decode(new Uint8Array(evt.data));

	// Handle the heartbeat response without forwading to connections
	if (msg.eventId === pulsarity.ws.EventID.EVENT_HEARTBEAT) {
		console.log("Server heartbeat...");
		return;
	}

	// Send the parsed event to each connection
	const data: WebSocketEventMessage = {
		action: WebWorkerAction.WEBSOCKET,
		messageData: msg,
	};
	connections.forEach((port) => {
		port.postMessage(data);
	});
}

/**
 * Send data to the server over the websocket connection
 * @param evt The protocol buffer message to sent to the server
 */
function sendMessageToServer(evt: pulsarity.ws.WebsocketEvent) {
	const body = pulsarity.ws.WebsocketEvent.encode(
		evt,
	).finish() as Uint8Array<ArrayBuffer>;
	ws.send(body);
}

/**
 * Handle message event data coming from shared worker clients
 * @param evt The event data to process from the client
 */
function handleWorkerClientEvt(evt: MessageEvent<WorkerMessage>) {
	const eventData = evt.data;

	if (isWebSocketEventMessage(eventData)) {
		sendMessageToServer(eventData.messageData);
	} else if (isConnectEventMessage(eventData)) {
		setWebsocketMode(eventData.wsMode);
	}
}

/**
 * Setup shared worker
 */
ctx.onconnect = (event: MessageEvent) => {
	const port = event.ports[0];

	if (port === undefined) return;

	connections.add(port);

	/**
	 * Add event handler for when the shared worker recieves data from
	 * a connection
	 */
	port.onmessage = handleWorkerClientEvt;

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
	const data: ConnectEventMessage = {
		action: WebWorkerAction.CONNECT,
		wsMode: mode,
	};
	port.postMessage(data);
};
