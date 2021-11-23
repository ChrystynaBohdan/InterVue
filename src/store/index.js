import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [
      {
        id: 1,
        title: "Do you use CSS preprocessors? What are their pros and cons?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 2,
        title: "Explain the difference between Flexbox and CSS Grid.",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 3,
        title:
          "Explain how you can use JavaScript functions such as forEach, Map, or Reduce",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 4,
        title: "What is and how you can take advantage of PureComponent?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 5,
        title:
          "What are higher-order components (HOC) and how you can use them in practice.",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 6,
        title:
          "What do you think about the latest updates of React – go over the benefits and uses of React Hooks.",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 7,
        title:
          "What is and why to use the Block Element Modifier (BEM) convention?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 8,
        title:
          "What is the difference between classical inheritance and prototypal inheritance?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 9,
        title:
          "What are two-way data binding and one-way data flow, and how are they different?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
      {
        id: 10,
        title:
          "What is asynchronous programming, and why is it important in JavaScript?",
        comments: [{ user: "", avatar: "image", comment: "" }],
      },
    ],
  },
  getters: {
    allQuestions: (state) => state.questions,
  },
  mutations: {},
  actions: {},
  modules: {},
});
