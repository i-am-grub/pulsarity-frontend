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

	const date_id = "date_" + props.id.toString();

	const fieldData: ComputedRef<pulsarity.ui.UIValueField | undefined> =
		computed(() => uiStore.valueFields.get(props.id));

	const date: ComputedRef<string> = computed(() => {
		return new Date(
			((fieldData.value?.datetime?.seconds as number) || 0) * 1000,
		).toLocaleDateString("sv-SE");
	});
</script>

<template>
	<label :for="date_id">{{ fieldData?.description || "" }}</label>
	<input type="date" :id="date_id" :value="date" />
</template>
