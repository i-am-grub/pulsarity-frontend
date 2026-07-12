<!-- @format -->

<script setup lang="ts">
	import SettingsPanel from "@components/SettingsPanel.vue";
</script>

<template>
	<h1>Timer Settings</h1>

	<SettingsPanel
		section="admin"
		:page="$route.params.page as string"
		panel=""
	/>
</template>
