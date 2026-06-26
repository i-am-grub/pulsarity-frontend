/** @format
 * Routes specific views to paths
 */

import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/Home.vue";
import HomeOverview from "../views/HomeOverview.vue";
import HomeCurrentRace from "../views/HomeCurrentRace.vue";
import HomeResults from "../views/HomeResults.vue";
import AdminView from "../views/Admin.vue";
import AdminOverview from "../views/AdminOverview.vue";
import AdminEventSetup from "../views/AdminEventSetup.vue";
import AdminMarshal from "../views/AdminMarshal.vue";
import AdminPluginManager from "../views/AdminPluginManager.vue";
import AdminResultsEditor from "../views/AdminResultsEditor.vue";
import AdminRunRace from "../views/AdminRunRace.vue";
import AdminTimerSettings from "../views/AdminTimerSettings.vue";

const routes = [
	{ 
    path: "/", 
    component: HomeView,
		children: [
			{
				path: '',
				component: HomeOverview,
			},
			{
				path: 'current',
				component: HomeCurrentRace,
			},
			{
				path: 'results',
				component: HomeResults,
			},
    ]
  },
	{
		path: "/admin/", 
		component: AdminView,
		children: [
			{
				path: '',
				component: AdminOverview,
			},
			{
				path: 'event',
				component: AdminEventSetup,
			},
			{
				path: 'plugins',
				component: AdminPluginManager,
			},
			{
				path: 'marshal',
				component: AdminMarshal,
			},
			{
				path: 'results',
				component: AdminResultsEditor,
			},
			{
				path: 'race',
				component: AdminRunRace,
			},
			{
				path: 'settings',
				component: AdminTimerSettings,
			},
		]
	},
];

export const router = createRouter({
		history: createWebHistory(),
		routes,
});
