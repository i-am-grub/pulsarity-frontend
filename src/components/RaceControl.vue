<!-- @format -->

<!-- Admin/RD base view -->

<template>
	<div class="race-controls">
		<button id="race-control-start">Start</button>
		<button id="race-control-stop">Stop</button>
		<button id="race-control-save">Save</button>
		<button id="race-control-discard">Discard</button>
	</div>
</template>

<style>
	.race-controls {
		display: flex;
		gap: 1rem;
	}
	.race-controls > button {
		flex: 1;
		padding: 0.5rem;
	}
</style>
