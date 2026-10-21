<!-- @format -->

<script setup lang="ts">
	import { type ComputedRef } from "vue";
	import { useUIElementStore } from "@/stores/ui_elements";
	import { computed } from "vue";
	import { pulsarity } from "@/utils/pulsarity_pb";

	const uiStore = useUIElementStore();

	const props = defineProps({
		id: { type: Number, required: true },
	});

	const fieldData: ComputedRef<pulsarity.ui.UIValueField | undefined> =
		computed(() => uiStore.valueFields.get(props.id));
</script>

<template>
	<label for="quantity">Quantity:</label>
	<input
		type="number"
		id="quantity"
		:value="fieldData?.number?.value ?? ''"
		:min="fieldData?.number?.min ?? ''"
		:max="fieldData?.number?.max ?? ''"
		:step="fieldData?.number?.step ?? ''"
	/>
</template>
