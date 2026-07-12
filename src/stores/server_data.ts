/** @format */

import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getServerData } from "@/utils/http_api";

/**
 * Store containing general server information
 */
export const useServerStore = defineStore("serverData", () => {
	const systemVersion = ref("");
	const systemName = ref("");
	const languagePackVersion = ref("");
	const languagePackKeys = reactive<Array<string>>([]);

	async function fetchServerData() {
		try {
			const data = await getServerData();
			systemVersion.value = data?.version ?? "";
			systemName.value = data?.serverName ?? "";
			languagePackVersion.value = data?.languageVersion ?? "";
			languagePackKeys.length = 0;
			data?.languagePacks.forEach((value) => languagePackKeys.push(value));
		} catch (error) {
			console.error("Failed to load system data:", error);
		}
	}

	return {
		systemName,
		systemVersion,
		languagePackVersion,
		languagePackKeys,
		fetchServerData,
	};
});
