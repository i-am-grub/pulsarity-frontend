<!-- @format -->

<!-- The Root View -->

<script setup lang="ts">
	import { useServerStore } from "../stores/server_data";
	import { useAuthenticationStore } from "../stores/auth";
	import SystemMenuComponent from "../components/SystemMenu.vue";
	import rhIcon from "../assets/RotorHazard_Icon.svg";

	const serverStore = useServerStore();
	const authStore = useAuthenticationStore();

	const eventHostName = "Multirotor Vermont";
	const eventName = "2026-06-14 Whoop Race at Generator";
</script>

<template>
	<header>
		<div class="title">
			<span class="system-title">{{ eventHostName }}</span> :
			<span class="event-title"> {{ eventName }}</span>
		</div>
		<nav>
			<ul>
				<li><RouterLink to="/" class="nav-link">Overview</RouterLink></li>
				<li><a href="#">Current Race</a></li>
				<li><a href="#">Results</a></li>
			</ul>
		</nav>
		<button popovertarget="system-dialog">
			<img :src="rhIcon" alt="" /><span class="screen-reader-text"
				>System Menu</span
			>
		</button>
	</header>
	<main>
		<div class="event-details" v-if="authStore.hasPermission('read_events')">
			<h1>{{ eventName }}</h1>
			<h2>Event Description</h2>
			<p>...</p>
			<h2>Registered Pilots</h2>
			<p>...</p>
			<h2>Heats and Classes</h2>
			<p>...</p>
			<h2>...</h2>
		</div>
		<div class="event-host-info">
			<h2>{{ eventHostName }}</h2>
			<div class="timer-logo">[timer logo]</div>
			<div class="timer-info">
				<p>
					One of the oldest continuously running FPV racing communities, since
					2015. Offering outdoor racing through summer and indoor racing year
					round.
				</p>
				<ul>
					<li>
						<a
							href="https://www.multigp.com/chapters/view/?chapter=Multirotor-Vermont---"
							>MultiGP</a
						>
					</li>
					<li>
						<a href="https://fpvscores.com/organisation/mrvt">FPVScores</a>
					</li>
				</ul>
			</div>
		</div>
	</main>
	<footer>
		<span v-if="!serverStore.isLoading"
			>Powered by {{ serverStore.systemName }}
			{{ serverStore.systemVersion }}</span
		>
	</footer>
	<dialog id="system-dialog" popover>
		<button popovertarget="system-dialog" popovertargetaction="hide">
			<span class="screen-reader-text">Close</span>
		</button>
		<SystemMenuComponent />
	</dialog>
</template>

<style scoped>
	header {
		position: sticky;
		padding: 1rem;
		display: grid;
		grid-template-areas:
			"title sys"
			"nav sys";
		grid-template-columns: 1fr auto;
		border-bottom: solid thin light-dark(#222, #000);
	}

	.title {
		grid-area: title;
	}

	nav {
		grid-area: nav;
	}

	nav > ul {
		display: flex;
		gap: 1rem;
		margin: 1rem 0 0 0;
		padding: 0;
		list-style: none;
	}

	nav > ul > li {
		margin: 0;
		padding: 0;
	}

	header > button {
		grid-area: sys;
		background: transparent;
		border: 0;
		cursor: pointer;
	}

	header > button img {
		width: 2rem;
		height: 2rem;
		object-fit: contain;
	}

	main {
		padding: 1rem;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	#system-dialog > button {
		position: absolute;
		top: 0;
		right: 0;
	}

	#system-dialog > button::after {
		content: "\00d7";
	}

	main {
		grid-template-areas:
			"eventinfo"
			"hostinfo";
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	@media (min-width: 42em) {
		main {
			grid-template-areas: "eventinfo hostinfo";
			grid-template-columns: 1fr clamp(16em, 17.39vw + 8.6962em, 20em);
		}
	}
	/*
  (20 - 16 = 4) / (65 - 42 = 23) = 0.1739
  16 - 42*0.1739 = 8.6962
  */

	.event-details {
		grid-area: eventinfo;
	}

	.event-host-info {
		grid-area: hostinfo;
		display: flex;
		flex-direction: column;
	}

	.timer-logo {
		order: -1;
		aspect-ratio: 1;
		background: light-dark(#ccc, #111);
		max-width: 20rem;
	}

	.timer-logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
