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

	const sel_id = "sel_id" + props.id.toString();

	const fieldData: ComputedRef<pulsarity.ui.UIValueField | undefined> =
		computed(() => uiStore.valueFields.get(props.id));
</script>

<template>
	<label :for="sel_id">{{ fieldData?.description || "" }}</label>
	<select :id="sel_id">
		<option
			v-for="(value, key) in fieldData?.select?.mapping"
			:key="key"
			:value="value"
		>
			{{ value }}
		</option>
	</select>
</template>
