<!-- @format -->

<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from "vue";
	import { RouterView } from "vue-router";
	import { useServerStore } from "./stores/server_data";
	import { useAuthenticationStore } from "./stores/auth";
	import { closeWebsocketConnection } from "./ws/ws_router";
  import { loadLocalizatioPack } from "./utils/i18n";

	const serverStore = useServerStore();
	const authStore = useAuthenticationStore();

    const isLoading = ref(true);

    /**
     * Fetch all general data from the servee
     */
    async function mountedData() {
        
        const promises = [
            serverStore.fetchServerData(), 
            authStore.checkUserAuthenticated(), 
            loadLocalizatioPack()
        ];

        await Promise.allSettled(promises)
    }

    /**
     * Load all general data from the server 
     * when the application is mounted
     */
	onMounted(() => {
		mountedData();
        isLoading.value = false;
	});

	onUnmounted(() => {
		closeWebsocketConnection();
	});
</script>

<template>
	<RouterView v-if="!isLoading"/>
</template>
