<!-- @format -->

<!--  Component for rendering a button field -->

<script setup lang="ts">
	import { type ComputedRef } from "vue";
	import { useUIElementStore } from "@/stores/ui_elements";
	import { computed } from "vue";

	const uiStore = useUIElementStore();

	const props = defineProps({
		id: { type: Number, required: true },
		depth: { type: Number, required: true },
	});

	const buttonName: ComputedRef<string> = computed(() => {
		const field = uiStore.buttonFields.get(props.id);
		return field?.text || "";
	});
</script>

<template>
	<button type="button">{{ buttonName }}</button>
</template>
