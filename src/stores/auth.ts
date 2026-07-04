/** @format */

import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {
	loginUser,
	authCheck,
	logoutUser,
	resetPassword,
} from "../utils/http_api";
import { setWebsocketMode } from "../ws/ws_router";
import { WebSocketMode } from "../ws/ws_types";

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

	/**
	 * Log the user into the system with the provided username and password
	 */
	async function runLoginUser(username_: string, password: string) {
		isLoading.value = true;
		try {
			const response = await loginUser(username_, password);
			passwordResetRequired.value =
				response?.passwordResetRequired ?? passwordResetRequired.value;
			isAuthenticated.value = response?.userinfo?.authenticated ?? false;
			authId.value = response?.userinfo?.authId ?? "";
			username.value = response?.userinfo?.username ?? "";
			displayName.value = response?.userinfo?.dispayName ?? "";
			permissions.clear();
			response?.userinfo?.permissions?.forEach((value) =>
				permissions.add(value),
			);
			updateWebSocketMode();
		} catch (error) {
			isAuthenticated.value = false;
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Logout the user
	 */
	async function runLogoutUser() {
		isLoading.value = true;
		try {
			await logoutUser();
			await checkUserAuthenticated();
		} catch (error) {
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Reset the user's password
	 */
	async function runPasswordReset(oldPassword: string, newPassword: string) {
		isLoading.value = true;
		try {
			await resetPassword(oldPassword, newPassword);
			await checkUserAuthenticated();
		} catch (error) {
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Get the current authentication status of the user
	 */
	async function checkUserAuthenticated() {
		isLoading.value = true;
		try {
			const response = await authCheck();
			isAuthenticated.value = response?.userinfo?.authenticated ?? false;
			authId.value = response?.userinfo?.authId ?? "";
			username.value = response?.userinfo?.username ?? "";
			displayName.value = response?.userinfo?.dispayName ?? "";
			permissions.clear();
			response?.userinfo?.permissions?.forEach((value) =>
				permissions.add(value),
			);
			updateWebSocketMode();
		} catch (error) {
			isAuthenticated.value = false;
		} finally {
			isLoading.value = false;
		}
	}

	/**
	 * Check if the user has a specific permission
	 */
	function hasPermission(permission: string): boolean {
		return permissions.has(permission);
	}

	/**
	 * Changes the websocket mode to reflect the user's current
	 * set of permissions
	 */
	function updateWebSocketMode() {
		let mode: WebSocketMode;

		if (hasPermission("duplex_websocket")) {
			mode = WebSocketMode.DUPLEX;
		} else if (hasPermission("simplex_websocket")) {
			mode = WebSocketMode.SIMPLEX;
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
		runLoginUser,
		runLogoutUser,
		runPasswordReset,
		checkUserAuthenticated,
		hasPermission,
	};
});
