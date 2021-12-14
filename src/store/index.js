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
  },

  getters: {
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

    refreshAccessToken() {
      setInterval(async () => {
        const response = await axios.post("/refresh");

        localStorage.setItem("accessToken", response.data.accessToken);
      }, 600000 - 6000);
    },
  },

  mutations: {
    handleLogin: (state, isLogged) => (state.isLogged = isLogged),
    loggingOut: (state, logOut) => (state.isLogged = logOut),
  },
});
