import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  // {
  //   path: "/:id",
  //   component: () => import("../components/Details.vue"),
  //   props: true,
  //   meta: {
  //     title: "Details Page",
  //   },
  // },

  {
    path: "/about",
    component: () => import("../views/AboutUs.vue"),
  },
  {
    path: "/faq",
    component: () => import("../views/Faq.vue"),
  },
  //{
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
