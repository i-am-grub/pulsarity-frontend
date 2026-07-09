<!-- @format -->

<script setup lang="ts">
	import SettingsPanel from "../components/SettingsPanel.vue";
</script>

<template>
	<h1>Event Setup</h1>

	<SettingsPanel
		section="event"
		:page="$route.params.page as string"
		panel=""
	/>
</template>
