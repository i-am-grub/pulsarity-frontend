<!-- @format -->

<script setup lang="ts">
	import { onMounted, onUnmounted } from "vue";
	import { RouterView } from "vue-router";
	import { useServerStore } from "./stores/server_data";
	import { useAuthenticationStore } from "./stores/auth";
	import { closeWebsocketConnection } from "./ws/ws_router";

	const serverStore = useServerStore();
	const authStore = useAuthenticationStore();

	onMounted(() => {
		serverStore.fetchServerData();
		authStore.checkUserAuthenticated();
	});

	onUnmounted(() => {
		closeWebsocketConnection();
	});
</script>

<template>
	<RouterView />
</template>
