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

	const txt_id = "txt_" + props.id.toString();

	const fieldData: ComputedRef<pulsarity.ui.UIValueField | undefined> =
		computed(() => uiStore.valueFields.get(props.id));
</script>

<template>
	<label :for="txt_id">{{ fieldData?.description || "" }}</label>
	<input type="text" :id="txt_id" :value="fieldData?.text || ''" />
</template>
