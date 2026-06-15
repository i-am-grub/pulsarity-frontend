<script setup lang="ts">
  import { ref } from "vue";
  import { loginUser } from "../utils/http_api";

	const systemName = "RotorHazard";
	const systemVersion = "v5.0.0-alpha.1";

  const username = ref("");
  const password = ref("");
  const loading = ref(false);
  const error = ref("");

  const handleSubmit = async () => {
    loading.value = true;
    error.value = "";

    loginUser(username.value, password.value);

    loading.value = false;
  };
</script>

<template>
<div id="system-menu">
	<div class="timer-info">
		<img src="../assets/RotorHazard%20Logo.svg" alt="" />
		<p>{{ systemName }} {{ systemVersion }}</p>
		<p>License, github, support, etc. etc.</p>
	</div>

	<div class="actions">
		<ul>
			<li><a href="#">Documentation</a></li>
			<li><a href="#">Frequency Chart</a></li>
			<li><a href="#">Action</a></li>
			<li><a href="#">Action</a></li>
		</ul>
	</div>

	<div class="login-container">
		<h2>Login</h2>

		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label for="username">Username:</label>
				<input
					id="username"
					v-model="username"
					type="username"
					required
					:disabled="loading"
				/>
			</div>

			<div class="form-group">
				<label for="password">Password:</label>
				<input
					id="password"
					v-model="password"
					type="password"
					required
					:disabled="loading"
				/>
			</div>

			<div v-if="error" class="error">{{ error }}</div>

			<button type="submit" :disabled="loading">
				{{ loading ? "Logging in..." : "Login" }}
			</button>
		</form>
	</div>
</div>
</template>

<style>
</style>