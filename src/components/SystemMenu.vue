<!-- @format -->

<script setup lang="ts">
	import { useServerStore } from "../stores/server_data";
	import { useAuthenticationStore } from "../stores/auth";
	import LoginComponent from "./Login.vue";
	import PasswordResetComponent from "./PasswordReset.vue";

	import rhLogo from "../assets/RotorHazard_Logo.svg";

	const serverStore = useServerStore();
	const authStore = useAuthenticationStore();

	var password: String | undefined = undefined;

	function loginSuccessCallback(usedPassword: String) {
		password = usedPassword;
	}
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

		<div class="public-actions">
			<ul>
				<li><a href="#">Documentation</a></li>
				<li><a href="#">Frequency Chart</a></li>
				<li><a href="#">Action</a></li>
				<li><a href="#">Action</a></li>
			</ul>
		</div>

		<div class="user-state">
			<LoginComponent
				v-if="!authStore.isAuthenticated"
				@success="loginSuccessCallback"
			/>
			<template v-else>
				<p v-if="!serverStore.isLoading">
					Logged in as <strong>{{ authStore.displayName }}</strong>
				</p>
				<PasswordResetComponent
					v-if="authStore.passwordResetRequired"
					:old-password="password"
				/>
				<template v-else>
					<p><RouterLink to="/admin">Admin console</RouterLink></p>
					<button @click="authStore.runLogoutUser">Logout</button>
				</template>
			</template>

			<div v-if="authStore.isAuthenticated" class="system-actions">
				<button>Restart</button>
				<button>Shut Down</button>
			</div>
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
				"branding branding user"
				"null info user"
				"null actions user";
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

	.public-actions {
		grid-area: actions;
	}

	.user-state {
		grid-area: user;
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

	.system-actions {
		margin-block-start: 1rem;
		border-block-start: solid thin
			light-dark(
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_high)),
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_low))
			);
		padding-block-start: 1rem;
	}
</style>
