<template>
  <div class="relative py-24 bg-gray-100">
    <div class="flex flex-col items-center justify-center pt-10 max-w-screen-2xl mx-auto min-h-screen">
      <div class="flex justify-between content-center items-center max-w-screen-2xl space-x-96">
        <div class="flex gap-x-16 gap-y-4 flex-wrap justify-center">
          <div>
            <Multiselect label="Categories:" :options="languageOptions" v-model="selectedCategory" />
          </div>
          <div>
            <Multiselect label="Grades:" :options="gradeOptions" v-model="selectedGrade" />
          </div>
        </div>
      </div>
      <div class="pt-8">
        <ul>
          <li class="p-2 grid gap-4 items-center question" v-for="question in filteredQuestions" :key="question.id">
            <span
              class="bg-gray-300 inline-block font-extrabold rounded-full text-gray-100 h-8 w-8 text-center leading-8"
              >{{ question.id }}</span
            >
            <span
              @click="goToQuestion(question.id)"
              class="
                ml-2
                p-3
                font-bold
                inline-block
                cursor-pointer
                bg-white
                hover:bg-gray-300
                rounded-md
                transition
                duration-500
                ease-in-out
                shadow-md
                flex
                justify-between
                gap-x-3
              "
              >{{ question.title }}
              <div
                v-bind:class="{
                  'bg-green-400': question.category === 'CSS',
                  'bg-red-400': question.category === 'JS Core',
                  'bg-blue-400': question.category === 'React',
                  'bg-indigo-400': question.category === 'SCSS',
                  'bg-yellow-400': question.category === 'VueJs',
                }"
                class="text-white w-10 rounded-full h-6 w-20 flex items-center justify-center text-xs"
              >
                {{ question.category }}
              </div>
            </span>
            <button class="px-2 cursor-pointer" @click="increment(question)">
              <i class="far fa-thumbs-up"></i>
              {{ question.likes }}
            </button>
            <button class="px-2 cursor-pointer" @click="decrement(question)">
              <i class="far fa-thumbs-down"></i>
              {{ question.dislikes }}
            </button>
            <button
              @click="goToQuestion(question.id)"
              class="
                p-2
                cursor-pointer
                bg-gradient-to-r
                from-green-400
                to-blue-500
                hover:from-pink-500 hover:to-yellow-500
                rounded-md
                text-white
                font-semibold
              "
            >
              Open
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../router";
import Multiselect from "../components/Multiselect";

export default {
  name: "QuestionsList",
  components: { Multiselect },
  computed: {
    ...mapGetters(["allQuestions"]),
    filteredQuestions() {
      const selectedCategories = this.selectedCategory.map((category) => category.code);
      const selectedLevels = this.selectedGrade.map((level) => level.code);

      if (selectedCategories.length === 0 && selectedLevels.length === 0) {
        return this.allQuestions;
      } else if (selectedCategories.length > 0 && selectedLevels.length === 0) {
        return this.allQuestions.filter((question) => selectedCategories.includes(question.category));
      } else if (selectedCategories.length === 0 && selectedLevels.length > 0) {
        return this.allQuestions.filter((question) => selectedLevels.includes(question.level));
      } else {
        return this.allQuestions.filter(
          (question) => selectedLevels.includes(question.level) && selectedCategories.includes(question.category)
        );
      }
    },
  },
  methods: {
    goToQuestion(id) {
      router.push({ path: "/question/" + id });
    },
    increment(question) {
      question.likes++;
    },
    decrement(question) {
      question.dislikes++;
    },
  },
  updated() {
    console.log(this.selectedCategory);
  },
  data() {
    return {
      languageOptions: [
        { name: "HTML", code: "HTML" },
        { name: "CSS", code: "CSS" },
        { name: "SCSS", code: "SCSS" },
        { name: "React", code: "React" },
        { name: "Redux", code: "Redux" },
        { name: "Vue", code: "VueJs" },
        { name: "JS", code: "JS Core" },
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
  grid-template-columns: 32px 1fr 32px 32px minmax(50px, 100px);
}
</style>
