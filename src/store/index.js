import Vue from "vue";
import Vuex from "vuex";
import questions from "./modules/questions";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { questions },
  state: {
    user: [],
    email: "TestUser@gmail.com",
    password: "TestUser#3000",
    isLogged: !!localStorage.getItem("accessToken"),
    currentUser: { name: "User" },
    // questions: [],
    // question: [],
  },

  getters: {
    // allQuestions: (state) => state.questions,
    isLogged: (state) => state.isLogged,
    curUser: (state) => state.currentUser.name,
    isEmail: (state) => state.email,
    isPassword: (state) => state.password,
    // questionbyID: (state) => state.question,
  },

  actions: {
    // async addQuestion({ commit }, question) {
    //   // await axios.post("/questions", question);
    //   const access = localStorage.getItem("accessToken");
    //   // await axios({
    //   //   method: "post",
    //   //   url: "http://localhost:5001/api/questions",
    //   //   headers: { Authorization: `Bearer ${access}` },
    //   // });
    //   const resp = await axios.post(
    //     "http://localhost:5001/api/questions",
    //     { ...question },
    //     {
    //       headers: { Authorization: `Bearer ${access}`, "content-type": "text/json" },
    //     }
    //   );
    //   console.log(resp);
    //
    //   commit("addQuestion", question);
    // },

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
    // async fetchQuestions({ commit }) {
    //   const access = localStorage.getItem("accessToken");
    //   const response = await axios.get("http://localhost:5001/api/questions", {
    //     headers: { Authorization: `Bearer ${access}` },
    //   });
    //
    //   console.log(response.data);
    //   commit("setQuestions", response.data);
    // },
    //
    // async fetchQuestion({ commit }) {
    //   const access = localStorage.getItem("accessToken");
    //   const id = history;
    //   console.log(id);
    //   const response = await axios.get("http://localhost:5001/api/questions", {
    //     headers: { Authorization: `Bearer ${access}` },
    //   });
    //
    //   console.log(response.data);
    //   commit("setQuestionsbyID", response.data);
    // },

    refreshAccessToken() {
      setInterval(async () => {
        const response = await axios.post("/refresh");

        localStorage.setItem("accessToken", response.data.accessToken);
      }, 600000 - 6000);
    },
  },

  mutations: {
    // addQuestion: (state, question) => (state.questions = [...state.questions, question]),
    // setQuestions: (state, questions) => (state.questions = questions),
    // setQuestionsbyID: (state, question) => (state.questions = question),
    handleLogin: (state, isLogged) => (state.isLogged = isLogged),
    loggingOut: (state, logOut) => (state.isLogged = logOut),
    // addComment: (state, data) => {
    //   return state.questions
    //     .find((question) => question.id === data.id)
    //     .comments.push({
    //       text: data.commentText,
    //       user: state.currentUser.name,
    //       date: new Date(),
    //     });
  },
  // },
});
