<!-- @format -->

<script setup lang="ts">
	const props = defineProps({
		id: { type: Number, required: true },
	});

	const hidden_id = "hidden_" + props.id.toString();
</script>

<template>
	<input type="hidden" :id="hidden_id" />
</template>
