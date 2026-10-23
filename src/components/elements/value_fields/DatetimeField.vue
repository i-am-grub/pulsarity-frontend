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

	const dt_id = "dt_" + props.id.toString();

	const fieldData: ComputedRef<pulsarity.ui.UIValueField | undefined> =
		computed(() => uiStore.valueFields.get(props.id));

	const dateTime: ComputedRef<string> = computed(() => {
		const date = new Date(
			((fieldData.value?.datetime?.seconds as number) || 0) * 1000,
		);
		return `${date.toLocaleDateString("sv-SE")}T${date.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit", hour12: false })}`;
	});
</script>

<template>
	<label :for="dt_id">{{ fieldData?.description || "" }}</label>
	<input type="datetime-local" :id="dt_id" :value="dateTime" />
</template>
