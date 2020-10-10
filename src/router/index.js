import Vue from "vue";
import VueRouter from "vue-router";
import DynamicComponet from "../views/DynamicComponet.vue";
import Frame from "../views/Frame.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DynamicComponet",
    component: DynamicComponet
  },
  {
    path: "/frame",
    name: "Frame",
    component: Frame
  },
  {
    path: "/DynamicMounted",
    name: "DynamicMounted",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DynamicMounted.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
