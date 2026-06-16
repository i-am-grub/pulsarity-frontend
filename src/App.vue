<script setup lang="ts">
    import { onMounted } from 'vue'
    import { RouterView } from "vue-router";
    import { useServerStore } from "./stores/server_data"

    const serverStore = useServerStore()

    onMounted(() => {
        serverStore.fetchServerData()
    })
</script>

<template>
	<RouterView />
  <footer>
  	<span v-if="~serverStore.isLoading">Powered by {{ serverStore.systemName }} {{ serverStore.systemVersion }}</span>
  </footer>
</template>

<style>
@font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    src: local(''),
             url('./fonts/BarlowRH-Light.woff2') format('woff2');
}

@font-face {
    font-family: 'Barlow';
    font-style: italic;
    font-weight: 400;
    src: local(''),
             url('./fonts/Barlow-LightItalic.woff2') format('woff2');
}

@font-face {
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 700;
    src: local(''),
             url('./fonts/BarlowRH-Bold.woff2') format('woff2');
}

@font-face {
    font-family: 'Barlow';
    font-style: italic;
    font-weight: 700;
    src: local(''),
             url('./fonts/Barlow-BoldItalic.woff2') format('woff2');
}

:root {
    --uses-color-scheme: light dark;
    color-scheme: var(--uses-color-scheme);
}

html {
	background: light-dark(#eee, #222);
	color: light-dark(#222, #eee);
	margin: 0;
	padding: 0;
	overflow-x: clip;
	font-family: 'Barlow', sans-serif;
	font-variant-numeric: tabular-nums;
}

body {
	margin: 0;
	padding: 0;
}

#app {
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
}

footer {
	margin-block-start: auto;
	padding: 1rem;
	text-align: center;
}

dialog {
	padding: 1rem;
	border: solid thin light-dark(#222, #eee);
}

dialog::backdrop {
	background: rgba(0,0,0,0.75);
}

.screen-reader-text {
	clip: rect(1px, 1px, 1px, 1px);
	position: absolute;
}

.screen-reader-text:focus {
	background-color: #f1f1f1;
	border-radius: 3px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
	clip: auto;
	color: #21759b;
	display: block;
	font-size: 14px;
	font-weight: bold;
	height: auto;
	line-height: normal;
	padding: 15px 23px 14px;
	left: 5px;
	top: 5px;
	text-decoration: none;
	text-transform: none;
	width: auto;
	z-index: 100000;
}

</style>
