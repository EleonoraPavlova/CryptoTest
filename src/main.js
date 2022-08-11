import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./assets/normalize.css";
import "./assets/app-style.css";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
const app = createApp(App);
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

app.use(store).use(router).mount("#app");
