import Vue from "vue";
import VueRouter from "vue-router";
import QuestionForm from "../views/QuestionForm";
import QuestionsList from "../views/QuestionsList";
import Question from "../views/Question";
import NotFound from "../views/NotFound";
import Login from "../views/Login";
import Docs from "../views/Docs";
import Recruiters from "../views/Recruiters";
import FAQ from "../views/FAQ";
import Grades2 from "../views/Grades2";
import Technologies from "../views/Technologies";
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
    path: "/login",
    name: "Login",
    component: Login,
  },
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
    path: "/docs",
    name: "Docs",
    component: Docs,
    children: [
      { path: "/", redirect: "grades/javascript" },
      {
        path: "grades/:technology?",
        name: "Grade2",
        component: Grades2,
      },
      { path: "technologies", name: "Technologies", component: Technologies },
    ],
  },
  {
    path: "/recruiters",
    name: "Recruiters",
    component: Recruiters,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
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
