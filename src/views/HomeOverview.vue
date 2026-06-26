<!-- @format -->

<script setup lang="ts">
	import { useAuthenticationStore } from "../stores/auth";
	const authStore = useAuthenticationStore();

	const eventHostName = "Multirotor Vermont";
	const eventName = "2026-06-14 Whoop Race at Generator";
	const timerLogo = "/src/assets/RotorHazard_Logo.svg";
	const timerInfo = `
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
			</ul>`;

	//  v-if="authStore.hasPermission('read_events')"
</script>

<template>
	<div class="event-details">
		<h1>{{ eventName }}</h1>
		<div class="event-detail-panel">
			<h2>Event Description</h2>
			<p>...</p>
		</div>
		<div class="event-detail-panel">
			<h2>Registered Pilots</h2>
			<p>...</p>
		</div>
		<div class="event-detail-panel">
			<h2>Heats and Classes</h2>
			<p>...</p>
		</div>
	</div>
	<div class="event-host-info">
		<h2>{{ eventHostName }}</h2>
		<div v-if="timerLogo" class="timer-logo">
			<img :src="timerLogo" alt="" />
		</div>
		<div v-html="timerInfo" class="timer-info"></div>
	</div>
</template>

<style scoped>
	.event-details {
		grid-area: eventinfo;
	}

	.event-detail-panel {
		border: solid 1px;
		border-color: light-dark(#ccc, #555);
		background-color: light-dark(#ddd, #333);
		padding: 1rem;
		margin: 1rem 0;
	}

	.event-host-info {
		grid-area: hostinfo;
		display: flex;
		flex-direction: column;
	}

	.timer-logo {
		order: -1;
		aspect-ratio: 1;
		max-width: 20rem;
		margin-block-end: 1rem;
		padding-block-end: 1rem;
		border-block-end: solid thin currentColor;
	}

	.timer-logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
