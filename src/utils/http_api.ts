import { pulsarity } from "./pulsarity_pb";

/**
 * Handle errors from attempting to fetch and parse data from the server.
 */
function handleError(error: unknown) {
  let errorMessage = "n/a";

  if (error instanceof Error) {
    errorMessage = error.message;
  }

  console.error("Fetch operation failed: ", errorMessage);
}

/**
 * Gets the current authentication status of the client as a StatusResponse
 */
export async function authCheck(): Promise<pulsarity.http.StatusResponse | null> {
  const url = "/api/auth-check";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.http.StatusResponse.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Attempt to login the client. Responses with a 400 status code
 * if invalid credentials are provided
 * @param [username] Username to use for authentication
 * @param [password] Password to use for authentication
 */
export async function loginUser(
  username: string,
  password: string,
): Promise<pulsarity.http.LoginResponse | null> {
  const url = "/api/login";

  const message = pulsarity.http.LoginRequest.create({
    username: username,
    password: password,
  });
  const body = pulsarity.http.LoginRequest.encode(
    message,
  ).finish() as Uint8Array<ArrayBuffer>;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-protobuf" },
      body: body,
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.http.LoginResponse.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Logout the client from the server
 */
export async function logoutUser(): Promise<void> {
  const url = "/api/logout";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }
  } catch (error) {
    let errorMessage = "n/a";

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log("Fetch operation failed: ", errorMessage);
  }
}

/**
 * Attempt to login the client. Responses with a 400 status code
 * if the client is not authenticated in or invalid credentials are provided.
 * Password is reset sucessful with a 200 status code
 * @param [oldPassword] Current password
 * @param [newPassword] New password
 */
export async function resetPassword(
  oldPassword: string,
  newPassword: string,
): Promise<void> {
  const url = "/api/reset-password";

  const message = pulsarity.http.ResetPasswordRequest.create({
    oldPassword: oldPassword,
    newPassword: newPassword,
  });
  const body = pulsarity.http.ResetPasswordRequest.encode(
    message,
  ).finish() as Uint8Array<ArrayBuffer>;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-protobuf" },
      body: body,
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
  } catch (error) {
    handleError(error);
  }
}

/**
 * Attempt to get the pilot data from the server with the
 * associated id value.
 * @param [id] The id of the pilot
 */
export async function getPilot(id: number): Promise<pulsarity.db.Pilot | null> {
  const url = `/api/pilots/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    if (response.status === 204) {
      return null;
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.Pilot.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Get the data for multiple pilots at once.
 * @param [idCursor] The id to start getting pilot data at
 * @param [limit] The maximum number of pilots to get.
 */
export async function getPilots(
  idCursor: number = 0,
  limit: number = 25,
): Promise<pulsarity.db.Pilots | null> {
  const url = `/api/pilots/?cursor=${idCursor}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.Pilots.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Attempt to get the race event data from the server with the
 * associated id value.
 * @param [id] The id of the race event
 */
export async function getRaceEvent(
  id: number,
): Promise<pulsarity.db.RaceEvent | null> {
  const url = `/api/events/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    if (response.status === 204) {
      return null;
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.RaceEvent.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Get the data for multiple pilots at once.
 * @param [idCursor] The id to start getting pilot data at
 * @param [limit] The maximum number of pilots to get.
 */
export async function getRaceEvents(
  idCursor: number = 0,
  limit: number = 25,
): Promise<pulsarity.db.RaceEvents | null> {
  const url = `/api/events/?cursor=${idCursor}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.RaceEvents.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Attempt to get the race event data from the server with the
 * associated id value.
 * @param [id] The id of the race event
 */
export async function getRaceClass(
  id: number,
): Promise<pulsarity.db.RaceClass | null> {
  const url = `/api/raceclasses/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    if (response.status === 204) {
      return null;
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.RaceClass.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Get the data for multiple race classes for a race event at once.
 * @param [eventId] The id of the event to load the data from
 * @param [idCursor] The minimum id to start getting race class data at
 * @param [limit] The maximum number of raceclasses to get.
 */
export async function getRaceClasses(
  eventId: number,
  idCursor: number = 0,
  limit: number = 25,
): Promise<pulsarity.db.RaceClasses | null> {
  const url = `/api/events/${eventId}/raceclasses?cursor=${idCursor}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.RaceClasses.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Attempt to get the race event data from the server with the
 * associated id value.
 * @param [id] The id of the round
 */
export async function getRound(id: number): Promise<pulsarity.db.Round | null> {
  const url = `/api/rounds/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    if (response.status === 204) {
      return null;
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.Round.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Get the data for multiple rounds for a raceclass at once.
 * @param [raceclassId] The id of the race class to load the data from
 * @param [idCursor] The minimum id to start getting round data at
 * @param [limit] The maximum number of rounds to get.
 */
export async function getRounds(
  raceclassId: number,
  idCursor: number = 0,
  limit: number = 25,
): Promise<pulsarity.db.Rounds | null> {
  const url = `/api/raceclasses/${raceclassId}/rounds?cursor=${idCursor}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.Rounds.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Attempt to get the heat data from the server with the
 * associated id value.
 * @param [id] The id of the heat
 */
export async function getHeat(id: number): Promise<pulsarity.db.Heat | null> {
  const url = `/api/rounds/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    if (response.status === 204) {
      return null;
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.Heat.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Get the data for multiple heats for a round at once.
 * @param [heatId] The id of the round to load the data from
 * @param [idCursor] The minimum id to start getting heat data at
 * @param [limit] The maximum number of heats to get
 */
export async function getHeats(
  roundId: number,
  idCursor: number = 0,
  limit: number = 25,
): Promise<pulsarity.db.Heats | null> {
  const url = `/api/rounds/${roundId}/heats?cursor=${idCursor}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.db.Heats.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}

/**
 * Gets the general server information
 */
export async function getServerData(): Promise<pulsarity.http.ServerData | null> {
  const url = "/api/server-info";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const buffer = await response.arrayBuffer();
    return pulsarity.http.ServerData.decode(new Uint8Array(buffer));
  } catch (error) {
    handleError(error);
  }
  return null;
}