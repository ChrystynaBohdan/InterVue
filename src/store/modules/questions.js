import axios from "axios";

const state = {
  questions: [],
  question: [],
};
const getters = {
  allQuestions: (state) => state.questions,
  questionbyID: (state) => (id) => {
    return state.questions.find((question) => question._id === id);
  },
};
const actions = {
  async addQuestion({ commit }, question) {
    try {
      const access = localStorage.getItem("accessToken");
      const resp = await axios.post(
        "http://localhost:5001/api/questions",
        { ...question },
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );
      console.log(resp), "****";

      commit("addQuestion", question);
    } catch (e) {
      console.log(e.message);
    }
  },
  async editQuestion({ commit }, question) {
    try {
      const access = localStorage.getItem("accessToken");
      const resp = await axios.put(
        `http://localhost:5001/api/questions/${question._id}`,
        {
          title: question.title,
          body: question.body,
          codeSnippet: question.codeSnippet,
          level: question.level,
          category: question.category,
        },
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );
      let newQuestion = resp.data;

      commit("changeQuestion", question);
      return newQuestion;
    } catch (e) {
      console.log(e.message);
    }
  },
  async deleteQuestion({ commit }, question) {
    try {
      const access = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:5001/api/questions/${question._id}`, {
        headers: { Authorization: `Bearer ${access}` },
      });

      commit("deleteQuestion", question);
    } catch (e) {
      console.log(e.message);
    }
  },
  async fetchQuestions({ commit }) {
    const access = localStorage.getItem("accessToken");
    const response = await axios.get("http://localhost:5001/api/questions", {
      headers: { Authorization: `Bearer ${access}` },
    });

    console.log(response.data);
    commit("setQuestions", response.data);
  },

  async fetchQuestion({ commit }) {
    const access = localStorage.getItem("accessToken");
    const id = history;
    console.log(id);
    const response = await axios.get("http://localhost:5001/api/questions", {
      headers: { Authorization: `Bearer ${access}` },
    });

    console.log(response.data);
    commit("setQuestionsbyID", response.data);
  },
};
const mutations = {
  addQuestion: (state, question) => (state.questions = [...state.questions, question]),
  deleteQuestion: (state, question) => (state.questions = state.questions.filter((q) => q._id !== question._id)),
  changeQuestion: (state, question) => {
    const idx = state.questions.findIndex((q) => q.id === question.id);
    return (state.questions = [...state.questions.splice(idx, 1, question)]);
  },
  setQuestions: (state, questions) => (state.questions = questions),
  setQuestionsbyID: (state, question) => (state.questions = question),
  addComment: (state, data) => {
    return state.questions
      .find((question) => question.id === data.id)
      .comments.push({
        text: data.commentText,
        user: state.currentUser.name,
        date: new Date(),
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
