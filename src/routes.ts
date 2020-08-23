import Vue from "vue";
import VueRouter from "vue-router";
import AuthForm from "./views/AuthForm.vue";
import Callback from "./views/Callback.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: AuthForm },
  { path: "/stihlmediapool-dev/authCallback.htm", component: Callback },
  { path: "/login", component: Callback },
  { path: "/about", component: () => import("./views/About.vue") },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
