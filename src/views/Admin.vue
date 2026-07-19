<!-- @format -->

<!-- Admin/RD base view -->

<script setup lang="ts">
	import RaceControl from "@components/RaceControl.vue";
	import RaceClock from "@components/RaceClock.vue";
	import RaceState from "@components/RaceState.vue";

	import rhLogo from "@/assets/RotorHazard_Logo.svg";
	import ElementTreeContainer from "@/components/elements/ElementTreeContainer.vue";

	const adminNavItems = [
		{
			path: "/admin/settings",
			name: "Timer Setup",
			children: [
				{ path: "/admin/settings/frequency", name: "Frequency Setup" },
				{ path: "/admin/settings/tuning", name: "Sensor Tuning" },
				{ path: "/admin/settings/actions", name: "Event Actions" },
				{ path: "/admin/settings/leds", name: "LED Setup" },
				{ path: "/admin/settings/audio", name: "Audio Defaults" },
				{ path: "/admin/settings/users", name: "Users" },
			],
		},
		{
			path: "/admin/event",
			name: "Event Setup",
			children: [
				{ path: "/admin/event/pilots", name: "Pilots" },
				{ path: "/admin/event/heats", name: "Heats" },
			],
		},
		{ path: "/admin/race", name: "Run Races" },
		{ path: "/admin/marshal", name: "Marshal" },
		{ path: "/admin/results", name: "Results" },
		{
			path: "/admin/plugins",
			name: "Plugins",
			children: [{ path: "/admin/plugins/add", name: "Add New" }],
		},
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
			<RouterLink to="/admin"
				><img :src="rhLogo" alt="RotorHazard Admin"
			/></RouterLink>
			<ul>
				<li v-for="item in adminNavItems">
					<RouterLink :to="item.path">{{ item.name }}</RouterLink>
					<ul v-if="item.children">
						<li v-for="sub_item in item.children">
							<RouterLink :to="sub_item.path">{{ sub_item.name }}</RouterLink>
						</li>
					</ul>
				</li>
			</ul>
			<RouterLink to="/">Public View</RouterLink>
		</nav>
		<main>
			<RouterView />
			<ElementTreeContainer :elementKey="$route.params.page as string" />
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
		min-height: 100vh;
	}

	header {
		grid-area: header;
		display: flex;
		gap: 1rem;
		padding: 0.25rem 0.5rem;
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
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_high)),
				hsl(var(--hue_0), var(--sat_0), var(--lum_0_low))
			);
		display: flex;
		flex-direction: column;
	}

	nav > a:first-child {
		padding: 0.5rem 1rem;
		display: block;
	}

	nav ul {
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

	nav a {
		display: block;
		padding: 0.5rem;
		text-decoration: none;
		font-weight: 600;
		color: light-dark(var(--ui-black), var(--ui-white));
		transition:
			background-color 0.2s,
			color 0.2s;
	}

	nav a:hover {
		background: light-dark(
			hsla(var(--hue_0), var(--sat_0), var(--lum_0_high), 15%),
			hsla(var(--hue_0), var(--sat_0), var(--lum_0_low), 40%)
		);
	}

	nav ul a.router-link-active {
		background: light-dark(
			hsl(var(--hue_0), var(--sat_0), var(--lum_0_high)),
			hsl(var(--hue_0), var(--sat_0), var(--lum_0_low))
		);
		color: light-dark(var(--contrast_0_high), var(--contrast_0_low));
	}

	nav > ul > li > ul > li a {
		font-weight: 300;
		margin-inline-start: 1rem;
	}

	nav ul a.router-link-exact-active,
	nav ul > li > ul > li a.router-link-active {
		background: light-dark(
			hsl(var(--hue_0), var(--sat_0), var(--lum_0_low)),
			hsl(var(--hue_0), var(--sat_0), var(--lum_0_high))
		);
		color: light-dark(var(--contrast_0_low), var(--contrast_0_high));
	}

	nav > :last-child {
		margin-block-start: auto;
		display: block;
		padding: 0.5rem;
	}

	main {
		grid-area: main;
		padding: 1rem;
	}
</style>
