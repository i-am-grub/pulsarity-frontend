<!-- @format -->

<!-- Component for rendering markdown field components -->

<script setup lang="ts">
	import { type ComputedRef } from "vue";
	import { pulsarity } from "@/utils/pulsarity_pb";
	import { useUIElementStore } from "@/stores/ui_elements";
	import { computed } from "vue";

	const uiStore = useUIElementStore();

	const props = defineProps({
		id: { type: Number, required: true },
		depth: { type: Number, required: true },
	});

	const fieldData: ComputedRef<pulsarity.ui.UIMarkdownField | undefined> =
		computed(() => uiStore.markdownFields.get(props.id));
</script>

<template></template>
