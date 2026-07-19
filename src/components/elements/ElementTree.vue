<!-- @format -->

<script setup lang="ts">
	import { computed, type Component, type ComputedRef } from "vue";
	import { useUIElementStore } from "@/stores/ui_elements.ts";
	import { pulsarity } from "@/utils/pulsarity_pb";
	import MarkdownField from "./MarkdownField.vue";
	import ButtonField from "./ButtonField.vue";
	import ValueField from "./ValueField.vue";
	import ErrorField from "./ErrorField.vue";

	const maxTreeDepth = 2;
	const uiStore = useUIElementStore();

	const props = defineProps({
		key: { type: String, required: true },
		id: { type: Number, required: true },
		depth: { type: Number, required: true },
	});

	const componentTypes: Record<pulsarity.ui.UIElementType, Component> = {
		[pulsarity.ui.UIElementType.ELEMENT_TYPE_UNKNOWN]: ErrorField,
		[pulsarity.ui.UIElementType.ELEMENT_TYPE_VALUE]: ValueField,
		[pulsarity.ui.UIElementType.ELEMENT_TYPE_MARKDOWN]: MarkdownField,
		[pulsarity.ui.UIElementType.ELEMENT_TYPE_BUTTON]: ButtonField,
		[pulsarity.ui.UIElementType.ELEMENT_TYPE_ETREE]: self,
	};

	const ltMaxDepth: ComputedRef<boolean> = computed(() => {
		return props.depth < maxTreeDepth;
	});

	const elementEntries: ComputedRef<Array<pulsarity.ui.UIElementTreeEntry>> =
		computed(() => {
			const ids = uiStore.elementTreeValues.get(props.id) || [];

			// Filter ids by currently loaded elements
			return ids.filter((value) => {
				switch (value.type) {
					case pulsarity.ui.UIElementType.ELEMENT_TYPE_VALUE:
						return uiStore.valueFields.has(value.elementId);
					case pulsarity.ui.UIElementType.ELEMENT_TYPE_MARKDOWN:
						return uiStore.markdownFields.has(value.elementId);
					case pulsarity.ui.UIElementType.ELEMENT_TYPE_BUTTON:
						return uiStore.buttonFields.has(value.elementId);
					case pulsarity.ui.UIElementType.ELEMENT_TYPE_ETREE:
						// Check to make sure the max depth isn't exceeded
						// before rendering another element tree level
						return (
							ltMaxDepth.value && uiStore.elementTreeValues.has(value.elementId)
						);
					default:
						return false;
				}
			});
		});
</script>

<template>
	<!-- Dynamically set the component(s) type based on the element data -->
	<component
		v-for="elementEntry in elementEntries"
		:key="props.key + '.' + elementEntry.elementId.toString()"
		:is="componentTypes[elementEntry.type]"
		:id="elementEntry.elementId"
		:depth="props.depth + 1"
	/>
</template>
