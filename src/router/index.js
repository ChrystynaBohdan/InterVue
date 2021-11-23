import Vue from "vue";
import VueRouter from "vue-router";
import QuestionForm from "../views/QuestionForm";
import QuestionsList from "../views/QuestionsList";
import Question from "../views/Question";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "QuestionsList",
    component: QuestionsList,
  },
  // {
  //     path: "/edit",
  //     name: "Edit",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //         import(/* webpackChunkName: "about" */ "../views/QuestionForm.vue"),
  // },
  {
    path: "/question/:id",
    name: "Question",
    component: Question,
  },
  {
    path: "/addnew",
    name: "QuestionForm",
    component: QuestionForm,
  },
  {
    path: "/edit",
    name: "QuestionForm",
    component: QuestionForm,
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
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
