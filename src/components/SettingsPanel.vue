<!-- @format -->

<!-- Basic settings panel -->

<script setup lang="ts">
	defineProps({
		section: String,
		page: String,
		panel: String,
	});
</script>

<template>
	<div class="settings-panel">
		<p>Section: {{ section }}</p>
		<p>Page: {{ page }}</p>
		<p>Panel: {{ panel }}</p>
	</div>
</template>

<style></style>
