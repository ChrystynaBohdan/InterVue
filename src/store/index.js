import Vue from "vue";
import Vuex from "vuex";
import allquestions from "./modules/allquestions";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { allquestions },
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
