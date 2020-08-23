import Vue from "vue";
import VueRouter from "vue-router";
import AuthForm from "./views/AuthForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: AuthForm,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
