<script setup lang="ts">
  import { useServerStore } from "../stores/server_data"
  import { useAuthenticationStore } from "../stores/auth"
  import LoginView from './LoginView.vue'

  import rhLogo from '../assets/RotorHazard_Logo.svg'

  const serverStore = useServerStore()
  const authStore = useAuthenticationStore()
</script>

<template>
<div id="system-menu">
	<div class="timer-info">
		<img :src="rhLogo" alt="" />
		<p v-if="!serverStore.isLoading">{{ serverStore.systemName }} {{ serverStore.systemVersion }}</p>
        <p v-else>Loading...</p>
		<p>License, github, support, etc. etc.</p>
	</div>

	<div class="actions">
		<ul>
			<li><a href="#">Documentation</a></li>
			<li><a href="#">Frequency Chart</a></li>
			<li><a href="#">Action</a></li>
			<li><a href="#">Action</a></li>
		</ul>
	</div>

	<LoginView v-if="!authStore.isAuthenticated"/>

</div>
</template>

<style>
</style>