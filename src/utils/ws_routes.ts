import { pulsarity } from "./pulsarity_pb";

/**
 * Example setup for the websocket connection
 * to be included in the future
 */
// const ws = new WebSocket("/api/ws");
// ws.binaryType = "arraybuffer";
// ws.addEventListener("message", (event) => {
//   if (event.data instanceof ArrayBuffer) {
//     const msg = pulsarity.ws.WebsocketEvent.decode(new Uint8Array(event.data));
//     processWebsocketMessage(msg);
//   } else {
//     console.log(event.data);
//   }
// });

/**
 * Process a parsed websocket message. Handles the provided
 * message based on its internal event id.
 * @param [message] The websocket message to process
 */
export function processWebsocketMessage(
  message: pulsarity.ws.WebsocketEvent,
): void {
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
 * Map event ids to processing functions.
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
function logWebsocketEvent(message: pulsarity.ws.WebsocketEvent) {
  console.log(`Processed websocketwith event id ${message.eventId}`);
}
