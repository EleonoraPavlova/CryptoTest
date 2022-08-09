import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./assets/normalize.css";
import "./assets/app-style.css";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

createApp(App).use(store).use(router).mount("#app");
