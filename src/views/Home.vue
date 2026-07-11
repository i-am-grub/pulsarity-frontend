<!-- @format -->

<!-- The Root View -->

<script setup lang="ts">
	import { useServerStore } from "../stores/server_data";
	import SystemMenuComponent from "../components/SystemMenu.vue";
	import rhIcon from "../assets/RotorHazard_Icon.svg";

	const serverStore = useServerStore();

	const eventHostName = "Multirotor Vermont";
	const eventName = "2026-06-14 Whoop Race at Generator";

	const homeNavItems = [
		{ path: "/", messageKey: 'messages.overview' },
		{ path: "/current", messageKey: 'messages.current_race' },
		{ path: "/results", messageKey: 'messages.results' },
	];
</script>

<template>
	<header>
		<div class="title">
			<span class="system-title">{{ eventHostName }}</span> :
			<span class="event-title"> {{ eventName }}</span>
		</div>
		<nav id="nav-main">
			<ul>
				<li v-for="item in homeNavItems">
					<RouterLink :to="item.path">{{ $t(item.messageKey) }}</RouterLink>
				</li>
			</ul>
		</nav>
		<button popovertarget="system-dialog">
			<img :src="rhIcon" alt="" /><span class="screen-reader-text"
				>System Menu</span
			>
		</button>
	</header>
	<main>
		<RouterView />
	</main>
	<footer>
		<span
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
		background: linear-gradient(
			to bottom,
			light-dark(
					hsl(var(--hue_0), var(--sat_0), var(--lum_0_high)),
					hsl(var(--hue_0), var(--sat_0), var(--lum_1_high))
				)
				0%,
			25%,
			light-dark(
					hsl(var(--hue_0), var(--sat_0), var(--lum_0_low)),
					hsl(var(--hue_0), var(--sat_0), var(--lum_0_low))
				)
				100%
		);
		color: light-dark(var(--contrast_0_high), var(--contrast_0_low));
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
        text-transform: capitalize;
	}

	nav a {
		color: light-dark(var(--contrast_0_high), var(--contrast_0_low));
		font-weight: 700;
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

    .event-details > h2 {
        text-transform: capitalize;
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
