<template>
  <div class="relative max-w-screen-md w-9/12">
    <div class="flex flex-col max-w-screen-md mx-auto min-h-screen">
      <div class="flex gap-x-4">
        <div class="w-1/2">
          <Dropdown
            :options="languageOptions"
            placeholder="Filter based on technology"
            @updateSelected="updateTechnologies"
          />
        </div>
        <div class="w-1/2">
          <Dropdown :options="gradeOptions" placeholder="Filter based on grade" @updateSelected="updateGrades" />
        </div>
      </div>
      <div>
        <ul>
          <li
            class="grid gap-4 py-4 items-center question"
            v-for="question in currentPage"
            :key="question._id"
            v-bind:class="{
              'bg-green-400': question.openB === 'true',
              'bg-red-400': question.openB === 'false',
            }"
          >
            <router-link
              tag="span"
              :to="{ name: 'Question', params: { id: question._id } }"
              class="
                font-bold
                inline-block
                cursor-pointer
                bg-white
                rounded-md
                transition
                duration-500
                ease-in-out
                flex flex-col
                gap-x-3 gap-y-1
              "
              >{{ question.title }}
              <div
                v-if="question.isOpened"
                class="opacity-30 text-xs overflow-y-hidden transition duration-150 ease-out"
              >
                {{ question.body }}
              </div>
              <div class="flex gap-x-1">
                <div
                  v-for="category in question.category"
                  :key="category"
                  class="
                    text-black
                    w-5
                    rounded-full
                    h-7
                    w-20
                    flex
                    items-center
                    justify-center
                    text-xs
                    border border-gray-200
                    bg-gray-50
                  "
                >
                  {{ category }}
                </div>
                <div
                  v-for="level in question.level"
                  :key="level"
                  class="
                    text-black
                    w-7
                    rounded-full
                    h-7
                    w-20
                    flex
                    items-center
                    justify-center
                    text-xs
                    border border-gray-200
                    bg-gray-50
                  "
                >
                  {{ level }}
                </div>
              </div>
            </router-link>
            <button @click="toggleOpen(question)">
              <i
                v-if="question.isOpened"
                class="far fa-arrow-alt-circle-up fa-lg hover:text-gray-500 text-gray-300 cursor-pointer"
              ></i>
              <i v-else class="far fa-arrow-alt-circle-down fa-lg hover:text-gray-500 text-gray-300 cursor-pointer"></i>
            </button>
            <QuestionLikes :question="question"></QuestionLikes>
          </li>
        </ul>
      </div>
      <div class="flex space-between">
        <button v-for="page in pages" :key="page" @click="setPage(page)">{{ page }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Dropdown from "../../components/Dropdown.vue";
import QuestionLikes from "./QuestionLikes";

export default {
  name: "QuestionsList",
  components: {
    QuestionLikes,
    Dropdown,
  },
  computed: {
    ...mapGetters(["filteredQuestions"]),
    myFilteredQuestions() {
      return this.filteredQuestions(this.selectedCategory, this.selectedGrade);
    },
    currentPage() {
      const from = (this.page - 1) * this.pageSize;
      const to = this.page * this.pageSize;
      return this.myFilteredQuestions.slice(from, to);
    },
    totalPages() {
      return Math.ceil(this.myFilteredQuestions.length / this.pageSize);
    },
    pages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
  methods: {
    ...mapActions(["fetchQuestions", "addLikes"]),
    toggleOpen(question) {
      question.isOpened = !question.isOpened;
    },

    updateTechnologies(values) {
      this.selectedCategory = values;
    },

    updateGrades(values) {
      this.selectedGrade = values;
    },

    setPage(page) {
      this.page = page;
    },
  },
  mounted() {
    this.fetchQuestions();
  },
  data() {
    return {
      languageOptions: ["HTML", "CSS", "SCSS", "React", "Redux", "Vue", "JS"],
      gradeOptions: ["Junior", "Middle", "Senior", "Lead", "Architect"],

      selectedCategory: [],
      selectedGrade: [],
      page: 1,
      pageSize: 5,
    };
  },
};
</script>
<style>
.question {
  grid-template-columns: 1fr 32px 32px;
}
</style>
