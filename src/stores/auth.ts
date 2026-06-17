/** @format */

import { defineStore } from "pinia";
import { ref } from "vue";
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
    const permissions = ref(new Set());

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
            authId.value = response?.userinfo?.authId ?? "";
            username.value = response?.userinfo?.username ?? "";
            displayName.value = response?.userinfo?.dispayName ?? "";
            response?.userinfo?.permissions?.forEach((value) =>
                permissions.value.add(value),
            );
            if (response !== null) isAuthenticated.value = true;
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
            authId.value = "";
            username.value = "";
            displayName.value = "";
            permissions.value.clear();
            passwordResetRequired.value = false;
            isAuthenticated.value = false;
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
            passwordResetRequired.value = false;
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
            authId.value = response?.userinfo?.authId ?? "";
            username.value = response?.userinfo?.username ?? "";
            displayName.value = response?.userinfo?.dispayName ?? "";
            response?.userinfo?.permissions?.forEach((value) =>
                permissions.value.add(value),
            );
            if (response !== null) isAuthenticated.value = true;
        } catch (error) {
            isAuthenticated.value = false;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        isAuthenticated,
        passwordResetRequired,
        isLoading,
        authId,
        username,
        displayName,
        permissions,
        runLoginUser,
        runLogoutUser,
        runPasswordReset,
        checkUserAuthenticated,
    };
});
