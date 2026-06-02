<script setup lang="ts">
  import { ref } from "vue";
  import { loginUser } from "../utils/http_api";

  const username = ref("");
  const password = ref("");
  const loading = ref(false);
  const error = ref("");

  const handleSubmit = async () => {
    loading.value = true;
    error.value = "";

    loginUser(username.value, password.value);

    loading.value = false;
  };
</script>

<template>
  <div class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          id="username"
          v-model="username"
          type="username"
          required
          :disabled="loading"
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          :disabled="loading"
        />
      </div>

      <div v-if="error" class="error">{{ error }}</div>

      <button type="submit" :disabled="loading">
        {{ loading ? "Logging in..." : "Login" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 12px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }

  button:hover {
    background-color: #369a6e;
  }

  .error {
    color: #d9534f;
    margin-top: 10px;
    font-size: 14px;
  }
</style>
