<!-- @format -->

<!-- Admin/RD base view -->

<script setup lang="ts">
	import AdminPage from "../components/AdminPageComponent.vue";
</script>

<template>
	<header>
		<div class="race-controls">
			<button id="race-control-start">Start</button>
			<button id="race-control-stop">Stop</button>
			<button id="race-control-save">Save</button>
			<button id="race-control-discard">Discard</button>
		</div>
		<div class="race-clock">00:00</div>
		<div class="event-state">
			<div class="event-current-heat">Heat 1</div>
			<div class="event-current-round">Round 1</div>
		</div>
	</header>
	<nav>
		<ul>
			<li><a href="#">Timer Setup</a></li>
			<li><a href="#">Event Setup</a></li>
			<li><a href="#">Run Races</a></li>
			<li><a href="#">Marshal</a></li>
			<li><a href="#">Results</a></li>
			<li><a href="#">...</a></li>
		</ul>
	</nav>
	<main>
		<AdminPage />
	</main>
</template>
