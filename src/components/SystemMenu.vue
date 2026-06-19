<!-- @format -->

<script setup lang="ts">
	import { useServerStore } from "../stores/server_data";
	import { useAuthenticationStore } from "../stores/auth";
	import LoginView from "./Login.vue";

	import rhLogo from "../assets/RotorHazard_Logo.svg";

	const serverStore = useServerStore();
	const authStore = useAuthenticationStore();
</script>

<template>
	<div id="system-menu">
		<div class="branding">
			<img :src="rhLogo" alt="" />
		</div>

		<div class="timer-info">
			<p v-if="!serverStore.isLoading">
				{{ serverStore.systemName }} {{ serverStore.systemVersion }}
			</p>
			<p v-else>Loading...</p>
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

		<div class="user-state">
			<LoginView v-if="!authStore.isAuthenticated" />
			<template v-else>
				<p v-if="!serverStore.isLoading">
					Logged in as <strong>{{ authStore.displayName }}</strong>
				</p>
				<p><a href="/admin/">Admin console</a></p>
				<button @click="authStore.runLogoutUser">Logout</button>
			</template>
		</div>
	</div>
</template>

<style>
	#system-menu {
		width: calc(100vw - 4rem);
		max-width: 60rem;
		display: grid;
		gap: 1rem;
		grid-template-areas:
			"branding"
			"user"
			"info"
			"actions";
	}

	@media (min-width: 42em) {
		#system-menu {
			grid-template-columns: 10.6rem 1fr 16rem;
			grid-template-areas:
				"branding branding actions"
				"null info actions"
				"null user actions";
		}
	}

	.branding {
		grid-area: branding;
	}

	.timer-info {
		grid-area: info;
	}

	.branding img {
		max-width: 30rem;
	}

	.actions {
		grid-area: actions;
	}

	.user-state {
		grid-area: user;
	}
</style>
