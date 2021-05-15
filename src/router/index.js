import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/editer/:id",
    name: "Editer",
    component: () =>
      import(/* webpackChunkName: "editer" */ "../views/Editer.vue"),
  },
  {
    path: "/inscription",
    name: "Inscription",
    component: () =>
      import(/* webpackChunkName: "Inscription" */ "../views/Inscription.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
