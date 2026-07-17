<!-- @format -->

<script setup lang="ts">
import { useServerStore } from "@stores/server_data";
import { useAuthenticationStore } from "@stores/auth";
import LoginComponent from "@components/Login.vue";
import PasswordResetComponent from "@components/PasswordReset.vue";

import rhLogo from "@/assets/RotorHazard_Logo.svg";

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
			<p>{{ serverStore.systemName }} {{ serverStore.systemVersion }}</p>

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
				<p>
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

	@media (min-width: 42em) {
		grid-template-columns: 10.6rem 1fr 16rem;
		grid-template-areas:
			"branding branding user"
			"null info user"
			"null actions user";
	}
}

.branding {
	grid-area: branding;

	img {
		max-width: 30rem;
	}
}

.timer-info {
	grid-area: info;
}

.public-actions {
	grid-area: actions;
}

.user-state {
	grid-area: user;
	padding: 1rem;
	border: solid thin
		light-dark(
			oklch(var(--lum_0_high) var(--chr_0) var(--hue_0)),
			oklch(var(--lum_0_low) var(--chr_0) var(--hue_0))
		);
	border-radius: 0.25rem;
	background: linear-gradient(
		light-dark(oklch(1 0 var(--hue_0)), oklch(0 0 var(--hue_0))) 0%,
		90%,
		light-dark(
				oklch(0.85 calc(var(--chr_0) / 3) var(--hue_0)),
				oklch(0.15 var(--chr_0) var(--hue_0))
			)
			100%
	);
}

.system-actions {
	margin-block-start: 1rem;
	border-block-start: solid thin
		light-dark(
			oklch(var(--lum_0_high) var(--chr_0) var(--hue_0))
				oklch(var(--lum_0_low) var(--chr_0) var(--hue_0))
		);
	padding-block-start: 1rem;
}
</style>
