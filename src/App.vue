<!-- @format -->

<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from "vue";
	import { RouterView } from "vue-router";
	import { useServerStore } from "@stores/server_data";
	import { useAuthenticationStore } from "@stores/auth";
	import { closeWebsocketConnection } from "@/ws/ws_router";
	import { loadLocalizatioPack } from "@/utils/i18n";
	import { useUIElementStore } from "./stores/ui_elements";

	const serverStore = useServerStore();
	const authStore = useAuthenticationStore();
	const uiStore = useUIElementStore();

	const isLoading = ref(true);

	/**
	 * Fetch all general data from the servee
	 */
	async function mountedData() {
		const promises = [
			serverStore.fetchServerData(),
			authStore.checkUserAuthenticated(),
			uiStore.loadElementsFromServer(),
			loadLocalizatioPack(),
		];

		await Promise.allSettled(promises);

		isLoading.value = false;
	}

	/**
	 * Load all general data from the server
	 * when the application is mounted
	 */
	onMounted(mountedData);
	onUnmounted(closeWebsocketConnection);
</script>

<template>
	<RouterView v-if="!isLoading" />
</template>
