import axios from "axios";

const state = {
  questions: [],
  question: [],
};
const getters = {
  allQuestions: (state) => state.questions,
  questionbyID: (state) => state.question,
};
const actions = {
  async addQuestion({ commit }, question) {
    // await axios.post("/questions", question);
    const access = localStorage.getItem("accessToken");
    // await axios({
    //   method: "post",
    //   url: "http://localhost:5001/api/questions",
    //   headers: { Authorization: `Bearer ${access}` },
    // });
    const resp = await axios.post(
      "http://localhost:5001/api/questions",
      { ...question },
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );
    console.log(resp), "****";

    commit("addQuestion", question);
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
