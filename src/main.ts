/** @format */

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./router";
import { i18n } from "./utils/i18n";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.mount("#app");
