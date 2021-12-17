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
        <ul v-if="allQuestions.length > 0">
          <li class="grid gap-4 py-4 items-center question" v-for="question in filteredQuestions" :key="question._id">
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
            <button class="px-2 cursor-pointer" @click="increment(question)">
              <i class="far fa-thumbs-up"></i>
              {{ question.likes.length }}
            </button>
            <button class="px-2 cursor-pointer" @click="decrement(question)">
              <i class="far fa-thumbs-down"></i>
              {{ question.unLikes.length }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Dropdown from "../components/Dropdown.vue";

export default {
  name: "QuestionsList",
  components: {

    Dropdown,
  },
  computed: {
    ...mapGetters(["allQuestions"]),

    filteredQuestions() {
      const selectedCategories = this.selectedCategory.map((category) => category.code); // ["HTML","React"]
      const selectedLevels = this.selectedGrade.map((level) => level.code); // ["Junior"]

      if (selectedCategories.length === 0 && selectedLevels.length === 0) {
        return this.allQuestions;
      } else if (selectedCategories.length > 0 && selectedLevels.length === 0) {
        return this.allQuestions.filter((question) =>
          selectedCategories.some((category) => question.category.includes(category))
        );
      } else if (selectedCategories.length === 0 && selectedLevels.length > 0) {
        return this.allQuestions.filter((question) => selectedLevels.some((level) => question.level.includes(level)));
      } else {
        return this.allQuestions.filter((question) =>
          selectedLevels.some(
            (level) =>
              question.level.includes(level) &&
              selectedCategories.some((category) => question.category.includes(category))
          )
        );
      }
    },
  },
  methods: {
    ...mapActions(["fetchQuestions"]),
    increment(question) {
      question.likes.push(null);
    },
    decrement(question) {
      question.unLikes.push(null);
    },

    updateTechnologies(values) {
      this.selectedCategory = values;
    },

    updateGrades(values) {
      this.selectedGrade = values;
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
