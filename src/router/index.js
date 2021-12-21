import Vue from "vue";
import VueRouter from "vue-router";
import QuestionForm from "../views/Question/QuestionAdd";
import QuestionsList from "../views/Question/QuestionList";
import Question from "../views/Question/Question";
import NotFound from "../views/NotFound";
import Login from "../views/Login";
import Docs from "../views/Docs/Docs";
import Recruiters from "../views/Recruiters";
import FAQ from "../views/FAQ";
import Grades2 from "../views/Docs/Grades2";
import Technologies from "../views/Docs/Technologies";
import EditForm from "../views/Question/QuestionEdit";
import QuestionContainer from "../views/Question/QuestionContainer";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/questions",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/questions",
    component: QuestionContainer,
    children: [
      {
        path: "/",
        name: "QuestionsList",
        component: QuestionsList,
      },
      {
        path: "addnew",
        name: "QuestionForm",
        component: QuestionForm,
      },
      {
        path: ":id",
        name: "Question",
        component: Question,
      },
      {
        path: ":id/edit",
        name: "EditForm",
        component: EditForm,
      },
    ],
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
