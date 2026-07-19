<!-- @format -->

<script setup lang="ts">
	import { useUIElementStore } from "@/stores/ui_elements";
	import { computed } from "vue";

	const uiStore = useUIElementStore();

	const props = defineProps({
		id: { type: Number, required: true },
		depth: { type: Number, required: true },
	});

	const elementData = computed(() => uiStore.valueFields.get(props.id));
</script>

<template></template>
