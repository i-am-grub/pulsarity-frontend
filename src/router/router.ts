import { createMemoryHistory, createRouter } from "vue-router";

import LoginPage from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/login", component: LoginPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
