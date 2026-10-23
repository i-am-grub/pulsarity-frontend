<!-- @format -->

<!-- Component for rendering markdown field components -->

<script setup lang="ts">
	import { type ComputedRef } from "vue";
	import { useUIElementStore } from "@/stores/ui_elements";
	import { computed } from "vue";
	import { VueMarkdown } from "@crazydos/vue-markdown";

	const uiStore = useUIElementStore();

	const props = defineProps({
		id: { type: Number, required: true },
		depth: { type: Number, required: true },
	});

	const rawMarkdown: ComputedRef<string> = computed(() => {
		const field = uiStore.markdownFields.get(props.id);
		return field?.text || "";
	});
</script>

<template>
	<VueMarkdown :markdown="rawMarkdown" :sanitize="true" />
</template>
