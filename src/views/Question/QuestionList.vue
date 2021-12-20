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
          <li class="grid gap-4 py-4 items-center question" v-for="question in myFilteredQuestions" :key="question._id">
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
            <QuestionLikes :question="question"></QuestionLikes>
          </li>
        </ul>
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
      const selectedCategories = this.selectedCategory.map((category) => category.code);
      const selectedLevels = this.selectedGrade.map((level) => level.code);

      return this.filteredQuestions(selectedCategories, selectedLevels);
    },
  },
  methods: {
    ...mapActions(["fetchQuestions", "addLikes"]),
    increment(question) {
      this.addLikes(question._id, true);
    },
    decrement(question) {
      this.addLikes(question._id, false);
    },

    updateTechnologies(values) {
      this.selectedCategory = values;
    },

    updateGrades(values) {
      this.selectedGrade = values;
    },

    getLikes(question, like) {
      if (question.likes.length === 0) {
        return 0;
      }

      return question.likes.reduce((accum, currentQuestionLike) => {
        if (currentQuestionLike.like === like) {
          accum++;
        }
        return accum;
      }, 0);
    },
  },
  mounted() {
    this.fetchQuestions();
  },
  data() {
    return {
      languageOptions: [
        { name: "HTML", code: "HTML" },
        { name: "CSS", code: "CSS" },
        { name: "SCSS", code: "SCSS" },
        { name: "React", code: "React" },
        { name: "Redux", code: "Redux" },
        { name: "Vue", code: "Vue" },
        { name: "JS", code: "JS" },
      ],
      gradeOptions: [
        { name: "Junior", code: "Junior" },
        { name: "Middle", code: "Middle" },
        { name: "Senior", code: "Senior" },
      ],
      selectedCategory: [],
      selectedGrade: [],
    };
  },
};
</script>
<style>
.question {
  grid-template-columns: 1fr 32px 32px;
}
</style>
