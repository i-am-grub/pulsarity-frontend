<!-- @format -->

<script setup lang="ts">
	import { ref } from "vue";
	import { useAuthenticationStore } from "../stores/auth";

	const authStore = useAuthenticationStore();

	const username = ref("");
	const password = ref("");
	const error = ref("");

	const emit = defineEmits(["success"]);

	const handleSubmit = async () => {
		error.value = "";
		authStore.runLoginUser(username.value, password.value);
		// if (authStore.isAuthenticated) {
		emit("success", password.value);
		// }
	};
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

		<div v-if="error" class="error">{{ error }}</div>

		<button type="submit" :disabled="authStore.isLoading">
			{{ authStore.isLoading ? "Logging in..." : "Log in" }}
		</button>
	</form>
</template>

<style scoped>
	form {
		padding: 1rem;
		border: solid thin
			light-dark(
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_high)),
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_low))
			);
		border-radius: 0.25rem;
		background: linear-gradient(
			light-dark(
					hsl(var(--hue_0), var(--sat_0), 100%),
					hsl(var(--hue_0), var(--sat_0), 0%)
				)
				0%,
			90%,
			light-dark(
					hsl(var(--hue_0), var(--sat_0), 85%),
					hsl(var(--hue_0), var(--sat_0), 15%)
				)
				100%
		);
	}
</style>
