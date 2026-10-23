/** @format
 * Routes specific views to paths
 */

import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/Home.vue";
import HomeOverview from "@/views/HomeOverview.vue";
import HomeCurrentRace from "@/views/HomeCurrentRace.vue";
import HomeResults from "@/views/HomeResults.vue";
import PasswordResetView from "@/views/PasswordResetView.vue";
import AdminView from "@/views/Admin.vue";
import AdminOverview from "@/views/AdminOverview.vue";
import AdminMarshal from "@/views/AdminMarshal.vue";
import AdminPluginManager from "@/views/AdminPluginManager.vue";
import AdminPluginAdd from "@/views/AdminPluginAdd.vue";
import AdminResultsEditor from "@/views/AdminResultsEditor.vue";
import AdminRunRace from "@/views/AdminRunRace.vue";
import { getPages } from "@/utils/http_api";
import BlankView from "@/views/BlankView.vue";

const routes = [
	{
		path: "/",
		component: HomeView,
		children: [
			{
				path: "",
				component: HomeOverview,
			},
			{
				path: "current",
				component: HomeCurrentRace,
			},
			{
				path: "results",
				component: HomeResults,
			},
		],
	},
	{
		path: "/reset-password",
		component: PasswordResetView,
	},
	{
		path: "/admin",
		name: "admin",
		component: AdminView,
		children: [
			{
				path: "admin_overview",
				name: "admin_overview",
				component: AdminOverview,
				meta: { title: "Admin Overview" },
			},
			// {
			// 	path: "event",
			// 	name: "event_setup",
			// 	meta: { title: "Event Setup" },
			// 	children: [],
			// },
			{
				path: "plugins",
				name: "plugins",
				meta: { title: "Plugins" },
				component: AdminPluginManager,
				children: [
					{
						path: "add",
						name: "add_plugin",
						meta: { title: "Add Plugin" },
						component: AdminPluginAdd,
					},
				],
			},
			{
				path: "marshal",
				name: "marshal",
				meta: { title: "Marshal" },
				component: AdminMarshal,
			},
			{
				path: "results",
				name: "results",
				meta: { title: "Results" },
				component: AdminResultsEditor,
			},
			{
				path: "race",
				name: "race",
				meta: { title: "Race" },
				component: AdminRunRace,
			},
			// {
			// 	path: "settings",
			// 	name: "settings",
			// 	meta: { title: "Settings" },
			// 	children: [],
			// },
		],
	},
	// Admin route fallback for dynamic admin pages
	{
		path: "/admin/:pathMatch(.*)*",
		redirect: "/admin",
	},
	// General default route fallback
	{
		path: "/:pathMatch(.*)*",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

/**
 * Dynamically load routes from the server
 *
 * Logic for updating accessible routes after signing in/out
 * not currently implemented
 */
async function loadDynamicRoutes() {
	const pages = await getPages();

	if (pages.pages != null) {
		pages.pages.forEach((val) => {
			if (val.name != null && val.parentName != null) {
				router.addRoute(val.parentName, {
					path: `${val.name}`,
					name: val.name,
					meta: { title: val.name },
					component: BlankView,
				});
			}
		});
	}
}

export { router, loadDynamicRoutes };
