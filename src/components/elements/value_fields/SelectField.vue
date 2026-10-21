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

	fieldData?.value?.select?.mapping;
</script>

<template>
	<label for="quantity">Quantity:</label>
	<select id="quantity">
		<option
			v-for="(value, key) in fieldData?.select?.mapping"
			:key="key"
			:value="value"
		>
			{{ value }}
		</option>
	</select>
</template>
