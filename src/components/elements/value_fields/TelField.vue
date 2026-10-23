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

	const tel_id = "tel_" + props.id.toString();

	const fieldData: ComputedRef<pulsarity.ui.UIValueField | undefined> =
		computed(() => uiStore.valueFields.get(props.id));
</script>

<template>
	<label :for="tel_id">{{ fieldData?.description || "" }}</label>
	<input type="tel" :id="tel_id" :value="fieldData?.text || ''" />
</template>
