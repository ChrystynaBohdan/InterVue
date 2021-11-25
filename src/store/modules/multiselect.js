const state = {
  languageValue: null,
  gradeValue: null,
  languageOptions: [
    { name: "Vue.js", code: "vu" },
    { name: "Javascript", code: "js" },
    { name: "Open Source", code: "os" },
  ],
  gradeOptions: [
    { name: "Junior", code: "jun" },
    { name: "Middle", code: "mid" },
    { name: "Senior", code: "sen" },
  ],
};
const getters = {
  getlanguageOptions: (state) => state.languageOptions,
  getgradeOptions: (state) => state.gradeOptions,
  getlanguageValue: (state) => state.languageValue,
  getgradeValue: (state) => state.gradeValue,
};
const actions = {
  addTag(newTag) {
    const tag = {
      name: newTag,
      code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
    };
    this.options.push(tag);
    this.value.push(tag);
  },
};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
