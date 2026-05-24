import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthenticationStore = defineStore("counter", () => {
  const isLoggedIn = ref(false);

  return { isLoggedIn };
});
