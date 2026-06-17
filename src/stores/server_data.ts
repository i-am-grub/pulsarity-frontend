/** @format */

import { defineStore } from "pinia";
import { ref } from "vue";
import { getServerData } from "../utils/http_api";

/**
 * Store containing general server information
 */
export const useServerStore = defineStore("serverData", () => {
    const isLoading = ref(false);
    const systemVersion = ref("");
    const systemName = ref("");

    async function fetchServerData() {
        isLoading.value = true;
        try {
            const data = await getServerData();
            systemVersion.value = data?.version ?? "";
            systemName.value = data?.serverName ?? "";
        } catch (error) {
            console.error("Failed to load system data:", error);
        } finally {
            isLoading.value = false;
        }
    }

    return { systemName, systemVersion, isLoading, fetchServerData };
});
