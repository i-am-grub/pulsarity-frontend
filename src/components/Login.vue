<!-- @format -->

<script setup lang="ts">
	import { ref } from "vue";
	import { useAuthenticationStore } from "../stores/auth";

	const authStore = useAuthenticationStore();

	const username = ref("");
	const password = ref("");
	const error = ref("");

	const handleSubmit = async () => {
		error.value = "";
		console.log(authStore.isAuthenticated);
		authStore.runLoginUser(username.value, password.value);
		console.log(authStore.isAuthenticated);
	};
</script>

<template>
	<div class="login-container">
		<h1>Login</h1>

		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label for="username">Username:</label>
				<input
					id="username"
					v-model="username"
					type="username"
					required
					:disabled="authStore.isLoading"
				/>
			</div>

			<div class="form-group">
				<label for="password">Password:</label>
				<input
					id="password"
					v-model="password"
					type="password"
					required
					:disabled="authStore.isLoading"
				/>
			</div>

			<div v-if="error" class="error">{{ error }}</div>

			<button type="submit" :disabled="authStore.isLoading">
				{{ authStore.isLoading ? "Logging in..." : "Login" }}
			</button>
		</form>
	</div>
</template>
