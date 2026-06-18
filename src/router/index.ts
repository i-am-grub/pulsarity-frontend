/** @format
 * Routes specific views to paths
 */

import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/admin/", component: AdminView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
