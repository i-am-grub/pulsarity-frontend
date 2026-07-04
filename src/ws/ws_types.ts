/** @format */

import { pulsarity } from "../utils/pulsarity_pb";

export const WebSocketMode = {
	OFF: 0,
	SIMPLEX: 1,
	DUPLEX: 2,
} as const;

export type WebSocketModeType =
	(typeof WebSocketMode)[keyof typeof WebSocketMode];

export const WebWorkerAction = {
	WEBSOCKET: 0,
	CONNECT: 1,
} as const;

export type WebWorkerActionType =
	(typeof WebWorkerAction)[keyof typeof WebWorkerAction];

export interface WorkerMessage {
	action: WebWorkerActionType;
}

export interface WebSocketEventMessage extends WorkerMessage {
	action: 0;
	messageData: pulsarity.ws.WebsocketEvent;
}

export function isWebSocketEventMessage(
	message: WorkerMessage,
): message is WebSocketEventMessage {
	return message.action === WebWorkerAction.WEBSOCKET;
}

export interface ConnectEventMessage extends WorkerMessage {
	action: 1;
	wsMode: WebSocketModeType;
}

export function isConnectEventMessage(
	message: WorkerMessage,
): message is ConnectEventMessage {
	return message.action === WebWorkerAction.CONNECT;
}
