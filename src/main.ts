import Vue from "vue";
import App from "./App.vue"
import router from "./routes"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./assets/custom.scss";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
