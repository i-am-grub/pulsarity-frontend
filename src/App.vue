<script setup lang="ts">
  import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="nav-link">Home</RouterLink> |
      <RouterLink to="/login" class="nav-link">Login</RouterLink>
    </div>
  </nav>
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
  .navbar {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    color: #42b883;
    background-color: #f5fff8;
  }

  .nav-link.router-link-active {
    color: #42b883;
    background-color: #e8fbf5;
  }

  .main-content {
    min-height: calc(100vh - 60px);
    padding: 40px 20px;
    background-color: #f8f9fa;
  }
</style>
