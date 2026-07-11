<!-- @format -->

<!-- Admin/RD base view -->

<script setup lang="ts"></script>

<template>
	<div class="race-state">
		<div class="event-current-heat">
			<span class="current-class">Class 1</span>:
			<span class="current-heat">Heat 1</span>
		</div>
		<div class="event-current-round">Round 1</div>
	</div>
</template>

<style scoped>
	.current-class,
	.current-heat {
		white-space: nowrap;
	}
</style>
