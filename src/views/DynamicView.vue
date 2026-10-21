<!-- @format -->

<script setup lang="ts">
	import ElementTreeContainer from "@/components/elements/ElementTreeContainer.vue";
	import { useRoute } from "vue-router";

	const route = useRoute();
</script>

<template>
	<h1>{{ route.name }}</h1>
	<ElementTreeContainer :elementKey="$route.params.page as string" />
</template>
