<!-- @format -->

<script setup lang="ts">
	import { ref } from "vue";
	import { useAuthenticationStore } from "@stores/auth";

	const authStore = useAuthenticationStore();

	const username = ref("");
	const password = ref("");

	const emit = defineEmits(["success"]);

	const handleSubmit = async () => {
		authStore.runLoginUser(username.value, password.value);
		// if (authStore.isAuthenticated) {
		emit("success", password.value);
		// }
	};

	authStore.serverErrorMsg = "";
</script>

<template>
	<form @submit.prevent="handleSubmit" id="login">
		<label for="username">Username:</label>
		<input
			id="username"
			v-model="username"
			type="username"
			name="username"
			autocomplete="username"
			required
			:disabled="authStore.isLoading"
		/>

		<label for="password">Password:</label>
		<input
			id="password"
			v-model="password"
			type="password"
			name="password"
			autocomplete="current-password"
			required
			:disabled="authStore.isLoading"
		/>

		<p class="error" role="alert" aria-atomic="true">
			{{ authStore.serverErrorMsg }}
		</p>

		<button type="submit" :disabled="authStore.isLoading">
			{{ authStore.isLoading ? "Logging in..." : "Log in" }}
		</button>
	</form>
</template>
