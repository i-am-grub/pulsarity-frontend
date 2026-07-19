<!-- @format -->

<script setup lang="ts">
	import { computed, type ComputedRef } from "vue";
	import { useUIElementStore } from "@/stores/ui_elements";
	import ElementTree from "@components/elements/ElementTree.vue";

	const uiStore = useUIElementStore();

	const props = defineProps({
		elementKey: { type: String, required: true },
	});

	const etreeIDs: ComputedRef<number[]> = computed(() => {
		const ids = uiStore.elementTreeMapping.get(props.elementKey) || [];

		// Filter ids by currently loaded elements
		return ids.filter((value) => uiStore.elementTreeValues.has(value));
	});
</script>

<template>
	<ElementTree
		v-for="etreeID in etreeIDs"
		:key="etreeID.toString()"
		:id="etreeID"
		:depth="1"
	/>
</template>
