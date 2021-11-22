import Vue from "vue";
import VueRouter from "vue-router";
import Edit from "../views/Edit";
import List from "../views/List";
import Question from "../views/Question";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/edit",
    name: "Edit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Edit.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/question",
    name: "Question",
    component: Question,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404'
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
