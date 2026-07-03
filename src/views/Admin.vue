<!-- @format -->

<!-- Admin/RD base view -->

<script setup lang="ts">
	import RaceControl from "../components/RaceControl.vue";
	import RaceClock from "../components/RaceClock.vue";
	import RaceState from "../components/RaceState.vue";

	import rhLogo from "../assets/RotorHazard_Logo.svg";

	const adminNavItems = [
		{ path: "/admin/settings", name: "Timer Setup" },
		{ path: "/admin/event", name: "Event Setup" },
		{ path: "/admin/race", name: "Run Races" },
		{ path: "/admin/marshal", name: "Marshal" },
		{ path: "/admin/results", name: "Results" },
	];
</script>

<template>
	<div class="temp-wrapper">
		<header>
			<RaceControl />
			<RaceClock />
			<RaceState />
		</header>
		<nav>
			<RouterLink to="/admin"><img :src="rhLogo" alt="" /></RouterLink>
			<ul>
				<li v-for="item in adminNavItems">
					<RouterLink :to="item.path">{{ item.name }}</RouterLink>
				</li>
			</ul>
		</nav>
		<main>
			<RouterView />
		</main>
	</div>
</template>

<style scoped>
	.temp-wrapper {
		display: grid;
		grid-template-areas:
			"nav header"
			"nav main";
		grid-template-columns: 16em 1fr;
		grid-template-rows: auto 1fr;
		min-height: 100vw;
	}

	header {
		grid-area: header;
		display: flex;
		gap: 1rem;
	}

	.race-state {
		margin-inline-start: auto;
	}

	.race-clock {
		order: 10;
		flex-basis: 10rem;
		font-size: 2rem;
	}

	nav {
		grid-area: nav;
		border-inline-end: solid thin
			light-dark(
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_low)),
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_high))
			);
	}

	nav > a:first-child {
		padding: 0.5rem 1rem;
		display: block;
	}

	nav > ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav > ul > li {
		list-style: none;
		padding: 0;
	}

	nav > ul > li + li {
		margin-top: 1rem;
	}

	nav > ul > li > a {
		display: block;
		padding: 0.5rem;
		background: light-dark(
			hsla(var(--hue_0), var(--sat_0), var(--lum_0_high), 15%),
			hsla(var(--hue_0), var(--sat_0), var(--lum_0_low), 15%)
		);
		text-decoration: none;
		font-weight: 600;
		color: light-dark(var(--ui-black), var(--ui-white));
		transition:
			background-color 0.2s,
			color 0.2s;
	}

	nav > ul > li > a:hover {
		background: light-dark(
			hsl(var(--hue_0), var(--sat_0), var(--lum_0_high)),
			hsl(var(--hue_0), var(--sat_0), var(--lum_0_low))
		);
		color: light-dark(var(--contrast_0_high), var(--contrast_0_low));
	}

	main {
		grid-area: main;
	}
</style>
