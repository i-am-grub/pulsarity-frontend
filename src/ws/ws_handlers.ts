/** @format */

import { pulsarity } from "../utils/pulsarity_pb";

export namespace wsRouteHandlers {
	/**
	 * Placeholder until event specific logic is added
	 * @param [message] The websocket message to process
	 */
	export function logWebsocketEvent(message: pulsarity.ws.WebsocketEvent) {
		console.log(`Processed websocket message with event id ${message.eventId}`);
	}
}
