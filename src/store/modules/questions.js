import axios from "axios";

const state = {
  questions: [],
};
const getters = {
  allQuestions: (state) => state.questions,
  questionByID: (state) => (id) => {
    return state.questions.find((question) => question._id === id);
  },
  filteredQuestions: (state) => (selectedCategories, selectedLevels) => {
    let questions = state.questions;

    if (selectedCategories.length > 0) {
      questions = questions.filter((question) =>
        selectedCategories.some((category) => question.category.includes(category))
      );
    }

    if (selectedLevels.length > 0) {
      questions = questions.filter((question) => selectedLevels.some((level) => question.level.includes(level)));
    }

    return questions;
  },
};
const actions = {
  async fetchQuestions({ commit }) {
    const response = await axios.get("http://localhost:5001/api/questions");

    commit("setQuestions", response.data);
  },

  async addQuestion({ dispatch }, question) {
    try {
      await axios.post("http://localhost:5001/api/questions", { ...question });

      dispatch("fetchQuestions");
      console.log(question);
    } catch (e) {
      console.log(e.message);
    }
  },

  async editQuestion({ dispatch }, question) {
    try {
      await axios.put(`http://localhost:5001/api/questions/${question._id}`, {
        title: question.title,
        body: question.body,
        codeSnippet: question.codeSnippet,
        level: question.selectedLevel.code,
        category: question.selectedCategory.code,
      });
      dispatch("fetchQuestions");
    } catch (e) {
      console.log(e.message);
    }
  },

  async deleteQuestion({ commit }, questionId) {
    try {
      await axios.delete(`http://localhost:5001/api/questions/${questionId}`);

      commit("deleteQuestion", questionId);
    } catch (e) {
      console.log(e.message);
    }
  },

  async commentNew({ dispatch }, commentData) {
    await axios.post(`http://localhost:5001/api/questions/${commentData.id}`, {
      text: commentData.commentText,
    });

    dispatch("fetchQuestions");
  },

  async addLikes({ dispatch }, { question, like }) {
    await axios.post(`http://localhost:5001/api/questions/${question}/like`, {
      like,
    });

    dispatch("fetchQuestions");
  },
};
const mutations = {
  setQuestions: (state, questions) => (state.questions = questions),
  addQuestion: (state, question) => (state.questions = [...state.questions, question]),
  deleteQuestion: (state, questionId) => (state.questions = state.questions.filter((q) => q._id !== questionId)),
  changeQuestion: (state, question) => {
    state.questions = state.questions.map((q) => {
      if (q._id === question._id) {
        return question;
      }

      return q;
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
