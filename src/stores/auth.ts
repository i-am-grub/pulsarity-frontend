/** @format */

import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {
	loginUser,
	authCheck,
	logoutUser,
	resetPassword,
} from "@/utils/http_api";
import { setWebsocketMode } from "@/ws/ws_router";
import { WebSocketMode, type WebSocketModeType } from "@/ws/ws_types";

/**
 * The authentication store
 */
export const useAuthenticationStore = defineStore("authStore", () => {
	const isAuthenticated = ref(false);
	const passwordResetRequired = ref(false);
	const authId = ref("");
	const username = ref("");
	const displayName = ref("");
	const permissions = reactive<Set<string>>(new Set());

	const isLoading = ref(false);
	const serverErrorMsg = ref("");

	/**
	 * Send a request to log the user into the
	 * system with the provided username and password
	 */
	async function runLoginUser(username_: string, password: string) {
		isLoading.value = true;
		try {
			const response = await loginUser(username_, password);

			passwordResetRequired.value = response.passwordResetRequired;
			isAuthenticated.value = response.userinfo?.authenticated ?? false;
			authId.value = response.userinfo?.authId ?? "";
			username.value = response.userinfo?.username ?? "";
			displayName.value = response.userinfo?.dispayName ?? "";
			permissions.clear();
			response.userinfo?.permissions?.forEach((value) =>
				permissions.add(value),
			);

			updateWebSocketMode();

			serverErrorMsg.value = "";
		} catch (error) {
			if (error instanceof Error) {
				serverErrorMsg.value = error.message;
			}

			isAuthenticated.value = false;
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Send a request to log the client out of the server.
	 */
	async function runLogoutClient() {
		isLoading.value = true;
		try {
			await logoutUser();
			await checkUserAuthenticated();

			serverErrorMsg.value = "";
		} catch (error) {
			if (error instanceof Error) {
				serverErrorMsg.value = error.message;
			}
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Send a request to reset the client's password.
	 */
	async function runPasswordReset(oldPassword: string, newPassword: string) {
		isLoading.value = true;
		try {
			await resetPassword(oldPassword, newPassword);

			passwordResetRequired.value = false;

			await checkUserAuthenticated();

			serverErrorMsg.value = "";
		} catch (error) {
			if (error instanceof Error) {
				serverErrorMsg.value = error.message;
			}
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Send a request to get the current authentication status of the user.
	 * Checks if a user is authenticated to the server. On a successful
	 * response, update the websocket mode of the user.
	 */
	async function checkUserAuthenticated() {
		isLoading.value = true;
		try {
			const response = await authCheck();

			isAuthenticated.value = response.userinfo?.authenticated ?? false;
			authId.value = response.userinfo?.authId ?? "";
			username.value = response.userinfo?.username ?? "";
			displayName.value = response.userinfo?.dispayName ?? "";
			permissions.clear();
			response.userinfo?.permissions?.forEach((value) =>
				permissions.add(value),
			);

			updateWebSocketMode();

			serverErrorMsg.value = "";
		} catch (error) {
			if (error instanceof Error) {
				serverErrorMsg.value = error.message;
			}

			isAuthenticated.value = false;
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Check if the user has a specific permission.
	 *
	 * TODO: Potentially set up a protobuf structure
	 * to allow for default persmissions to be identified
	 * by an enum.
	 */
	function hasPermission(permission: string): boolean {
		return permissions.has(permission);
	}

	/**
	 * Changes the websocket mode to reflect the user's current
	 * set of permissions. Note: The permissions on the server
	 * will dictate whether the client will actually be able to
	 * connect in the respective mode or not.
	 */
	function updateWebSocketMode() {
		let mode: WebSocketModeType;

		if (hasPermission("read_websocket")) {
			if (hasPermission("write_websocket")) {
				mode = WebSocketMode.DUPLEX;
			} else {
				mode = WebSocketMode.SIMPLEX;
			}
		} else {
			mode = WebSocketMode.OFF;
		}

		setWebsocketMode(mode);
	}

	return {
		isAuthenticated,
		passwordResetRequired,
		isLoading,
		authId,
		username,
		displayName,
		serverErrorMsg,
		runLoginUser,
		runLogoutClient,
		runPasswordReset,
		checkUserAuthenticated,
		hasPermission,
	};
});
