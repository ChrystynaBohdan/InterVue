import Vue from "vue";
import Vuex from "vuex";
import allquestions from "./modules/allquestions";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { allquestions },
  // state: {
  //   isLogged: false,
  //   currentUser: { name: "User" },
  //   questions: [
  //     {
  //       id: 1,
  //       title: "Do you use CSS preprocessors? What are their pros and cons?",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "CSS",
  //       level: "Junior",
  //       codesnippet: '',
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 2,
  //       title: "Explain the difference between Flexbox and CSS Grid.",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "CSS",
  //       level: "Junior",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 3,
  //       title: "Explain how you can use JavaScript functions such as forEach, Map, or Reduce",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "JS Core",
  //       level: "Junior",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 4,
  //       title: "What is and how you can take advantage of PureComponent?",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "React",
  //       level: "Junior",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 5,
  //       title: "What are higher-order components (HOC) and how you can use them in practice.",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "React",
  //       level: "Junior",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 6,
  //       title: "What do you think about the latest updates of React – go over the benefits and uses of React Hooks.",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "React",
  //       level: "Middle",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 7,
  //       title: "What is and why to use the Block Element Modifier (BEM) convention?",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "SCSS",
  //       level: "Junior",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 8,
  //       title: "What is the difference between classical inheritance and prototypal inheritance?",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "JS Core",
  //       level: "Middle",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 9,
  //       title: "What are two-way data binding and one-way data flow, and how are they different?",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "VueJs",
  //       level: "Junior",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //     {
  //       id: 10,
  //       title: "What is asynchronous programming, and why is it important in JavaScript?",
  //       body: "CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations.CSS preprocessors all do similar things but in a different way and with their own syntaxes.",
  //       category: "JS Core",
  //       level: "Junior",
  //       likes: 0,
  //       dislikes: 0,
  //       comments: [],
  //     },
  //   ],
  // },
  state: {
    user: [],
    email: "TestUser@gmail.com",
    password: "TestUser#3000",
    isLogged: !!localStorage.getItem("accessToken"),
    currentUser: { name: "User" },
    questions: [],
  },

  getters: {
    allQuestions: (state) => state.questions,
    isLogged: (state) => state.isLogged,
    curUser: (state) => state.currentUser.name,
    isEmail: (state) => state.email,
    isPassword: (state) => state.password,
  },

  actions: {
    checkLogin({ commit }) {
      console.log("bravo, you are logged in");
      commit("handleLogin", true);
    },

    async logOut({ commit }) {
      const access = localStorage.getItem("accessToken");

      await axios.post("http://localhost:5001/api/logout", {
        headers: { Authorization: `Bearer ${access}` },
      });
      localStorage.removeItem("accessToken");

      commit("loggingOut", false);
    },
    commentNew({ commit }, commentData) {
      commit("addComment", commentData);
    },
    async fetchQuestions({ commit }) {
      const access = localStorage.getItem("accessToken");
      const response = await axios.get("http://localhost:5001/api/questions", {
        headers: { Authorization: `Bearer ${access}` },
      });

      console.log(response.data);
      commit("setQuestions", response.data);
    },

    refreshAccessToken() {
      setInterval(async () => {
        const response = await axios.post("/refresh");

        localStorage.setItem("accessToken", response.data.accessToken);
      }, 600000 - 6000);
    },
  },

  mutations: {
    setQuestions: (state, questions) => (state.questions = questions),
    handleLogin: (state, isLogged) => (state.isLogged = isLogged),
    loggingOut: (state, logOut) => (state.isLogged = logOut),
    addComment: (state, data) => {
      return state.questions
        .find((question) => question.id === data.id)
        .comments.push({
          text: data.commentText,
          user: state.currentUser.name,
          date: new Date(),
        });
    },
  },
});
