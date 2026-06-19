<!-- @format -->

<script setup lang="ts">
	import { onMounted } from "vue";
	import { RouterView } from "vue-router";
	import { useServerStore } from "./stores/server_data";
	import { useAuthenticationStore } from "./stores/auth";

	const serverStore = useServerStore();
	const authStore = useAuthenticationStore();

	onMounted(() => {
		serverStore.fetchServerData();
		authStore.checkUserAuthenticated();
	});
</script>

<template>
	<RouterView />
</template>
