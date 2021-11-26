import Vue from "vue";
import Vuex from "vuex";
import allquestions from "./modules/allquestions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { allquestions },
  state: {
    isLogged: false,
    questions: [
      {
        id: 1,
        title: "Do you use CSS preprocessors? What are their pros and cons?",
        category: "CSS",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 2,
        title: "Explain the difference between Flexbox and CSS Grid.",
        category: "CSS",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 3,
        title: "Explain how you can use JavaScript functions such as forEach, Map, or Reduce",
        category: "JS Core",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 4,
        title: "What is and how you can take advantage of PureComponent?",
        category: "React",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 5,
        title: "What are higher-order components (HOC) and how you can use them in practice.",
        category: "React",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 6,
        title: "What do you think about the latest updates of React – go over the benefits and uses of React Hooks.",
        category: "React",
        level: "Middle",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 7,
        title: "What is and why to use the Block Element Modifier (BEM) convention?",
        category: "SCSS",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 8,
        title: "What is the difference between classical inheritance and prototypal inheritance?",
        category: "JS Core",
        level: "Middle",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 9,
        title: "What are two-way data binding and one-way data flow, and how are they different?",
        category: "VueJs",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
      {
        id: 10,
        title: "What is asynchronous programming, and why is it important in JavaScript?",
        category: "JS Core",
        level: "Junior",
        likes: 0,
        dislikes: 0,
      },
    ],
  },

  getters: {
    allQuestions: (state) => state.questions,
    isLogged: (state) => state.isLogged,
  },

 
  actions: {
    checkLogin({ commit }) {
      console.log('bravo, you are logged in');
      commit('handleLogin', true);
    },

    logOut({ commit }) {
      console.log('you have logged out');
      commit('loggingOut', false)
    }

  },

  mutations: {
    handleLogin: (state, isLogged) => (state.isLogged = isLogged),
    loggingOut: (state, logOut) => (state.isLogged = logOut),
  },
});
