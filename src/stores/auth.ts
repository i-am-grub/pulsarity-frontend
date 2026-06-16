/** @format */

import { defineStore } from "pinia";
import { ref } from "vue";
import { loginUser, authCheck } from "../utils/http_api";

export const useAuthenticationStore = defineStore("authStore", () => {
    const isAuthenticated = ref(false);
    const passwordResetRequired = ref(false);
    const authId = ref("");
    const username = ref("");
    const displayName = ref("");
    const permissions = ref(new Set());

    const isLoading = ref(false);

    async function runLoginUser(username_: string, password: string) {
        isLoading.value = true;
        try {
            const response = await loginUser(username_, password);
            if (response !== null) {
                if (response.userinfo != null) {
                    authId.value ?? response.userinfo.authId;
                    username.value ?? response.userinfo.username;
                    displayName.value ?? response.userinfo.dispayName;
                    response.userinfo.permissions?.forEach((value) =>
                        permissions.value.add(value),
                    );
                } else {
                    authId.value = "";
                    username.value = "";
                    displayName.value = "";
                    permissions.value.clear();
                }

                isAuthenticated.value = true;
            }
        } catch (error) {
            isAuthenticated.value = false;
        } finally {
            isLoading.value = false;
        }
    }

    async function checkUserAuthenticated() {
        isLoading.value = true;
        try {
            const response = await authCheck();
            if (response !== null) {
                if (response.status && response.userinfo != null) {
                    authId.value ?? response.userinfo.authId;
                    username.value ?? response.userinfo.username;
                    displayName.value ?? response.userinfo.dispayName;
                    response.userinfo.permissions?.forEach((value) =>
                        permissions.value.add(value),
                    );
                } else {
                    authId.value = "";
                    username.value = "";
                    displayName.value = "";
                    permissions.value.clear();
                }
                isAuthenticated.value = response.status;
            }
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
        checkUserAuthenticated,
    };
});
