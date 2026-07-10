/** @format */

import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {
	loginUser,
	authCheck,
	logoutUser,
	resetPassword,
} from "../utils/http_api";

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
	const invalidCredentials = ref(false);
	const serverErrorMsg = ref("");

	/**
	 * Log the user into the system with the provided username and password
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

			invalidCredentials.value = false;
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
	 * Logout the user
	 */
	async function runLogoutUser() {
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
	 * Reset the user's password
	 */
	async function runPasswordReset(oldPassword: string, newPassword: string) {
		isLoading.value = true;
		try {
			await resetPassword(oldPassword, newPassword);

			passwordResetRequired.value = false;

			await checkUserAuthenticated();

			invalidCredentials.value = false;
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
	 * Get the current authentication status of the user
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
	 * Check if the user has a specific permission
	 */
	function hasPermission(permission: string): boolean {
		return permissions.has(permission);
	}

	return {
		isAuthenticated,
		passwordResetRequired,
		isLoading,
		authId,
		username,
		displayName,
		invalidCredentials,
		serverErrorMsg,
		runLoginUser,
		runLogoutUser,
		runPasswordReset,
		checkUserAuthenticated,
		hasPermission,
	};
});
