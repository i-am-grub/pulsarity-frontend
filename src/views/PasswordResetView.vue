<!-- @format -->

<!-- The Root View -->

<script setup lang="ts">
	import PasswordResetComponent from "../components/PasswordReset.vue";

	import rhLogo from "../assets/RotorHazard_Logo.svg";
</script>

<template>
	<main>
		<img :src="rhLogo" alt="" />
		<PasswordResetComponent />
	</main>
</template>

<style scoped>
	main {
		width: 20rem;
		max-width: calc(100vw - 2rem);
		margin: auto;
	}
</style>
