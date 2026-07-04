/** @format */

import { pulsarity } from "../utils/pulsarity_pb";

export enum WebSocketMode {
	OFF,
	SIMPLEX,
	DUPLEX,
}

export enum WebWorkerAction {
	MESSAGE,
	CONNECT,
}

export type EventData = {
	action: WebWorkerAction;
	evtData?: pulsarity.ws.WebsocketEvent;
	wsMode?: WebSocketMode;
};
