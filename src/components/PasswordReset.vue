<!-- @format -->

<script setup lang="ts">
	import { ref } from "vue";
	import { useAuthenticationStore } from "@stores/auth";

	const props = defineProps({
		oldPassword: String,
	});

	const authStore = useAuthenticationStore();

	const password = ref("");
	const newPassword = ref("");

	if (props.oldPassword) {
		password.value = props.oldPassword;
	}

	const handleSubmit = async () => {
		authStore.runPasswordReset(password.value, newPassword.value);
	};

	authStore.serverErrorMsg = "";
</script>

<template>
	<form @submit.prevent="handleSubmit" id="password-reset">
		<p v-if="authStore.passwordResetRequired">
			<strong>A password change is required.</strong>
		</p>

		<input
			v-if="oldPassword"
			id="password-reset-old-password"
			v-model="password"
			type="hidden"
			name="password"
			required
		/>
		<template v-else>
			<label for="password-reset-old-password">Old Password:</label>
			<input
				id="password-reset-old-password"
				v-model="password"
				type="password"
				name="password"
				autocomplete="current-password"
				required
			/>
		</template>

		<label for="password-reset-new-password">New Password:</label>
		<input
			id="password-reset-new-password"
			v-model="newPassword"
			type="password"
			name="new-password"
			autocomplete="new-password"
			required
		/>

		<div v-if="authStore.serverErrorMsg" class="error">
			{{ authStore.serverErrorMsg }}
		</div>

		<button type="submit" :disabled="authStore.isLoading">
			{{ authStore.isLoading ? "Setting password..." : "Set new password" }}
		</button>
	</form>
</template>

<style scoped>
	form {
		margin-block-start: 1rem;
	}

	input {
		display: block;
		width: 100%;
		box-sizing: border-box;
		margin-block-start: 0.25rem;
	}
</style>
