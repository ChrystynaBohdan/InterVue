<template>
  <div class="relative max-w-screen-md w-9/12">
    <div class="flex flex-col max-w-screen-md mx-auto min-h-screen">
      <div class="flex gap-x-4">
        <Multiselect
          :options="languageOptions"
          v-model="selectedCategory"
          :placeholder="'Filter based on technology'"
        />
        <Multiselect :options="gradeOptions" v-model="selectedGrade" :placeholder="'Filter based on grade'" />
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
              {{ question.likes }}
            </button>
            <button class="px-2 cursor-pointer" @click="decrement(question)">
              <i class="far fa-thumbs-down"></i>
              {{ question.dislikes }}
            </button>
          </li>
        </ul>
      </div>
      <!--      <Pagination />-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import router from "../router";
import Multiselect from "../components/Multiselect";
// import Pagination from "../components/Pagination";
// import axios from "axios";

export default {
  name: "QuestionsList",
  components: {
    // Pagination,
    Multiselect,
  },
  computed: {
    ...mapGetters(["allQuestions"]),

    filteredQuestions() {
      const selectedCategories = this.selectedCategory.map((category) => category.code);
      const selectedLevels = this.selectedGrade.map((level) => level.code);

      if (selectedCategories.length === 0 && selectedLevels.length === 0) {
        return this.allQuestions;
      } else if (selectedCategories.length > 0 && selectedLevels.length === 0) {
        return this.allQuestions.filter((question) => selectedCategories.some((r) => question.category.includes(r)));
      } else if (selectedCategories.length === 0 && selectedLevels.length > 0) {
        return this.allQuestions.filter((question) => selectedLevels.some((r) => question.level.includes(r)));
      } else {
        return this.allQuestions.filter((question) =>
          selectedLevels.some(
            (r) => question.level.includes(r) && selectedCategories.some((r) => question.category.includes(r))
          )
        );
      }
    },
  },
  methods: {
    ...mapActions(["fetchQuestions", "fetchQuestion"]),
    increment(question) {
      question.likes++;
    },
    decrement(question) {
      question.dislikes++;
    },
  },
  // updated() {
  //   this.fetchQuestions();
  // },
  mounted() {
    // console.log(this.fetchQuestions);
    // this.fetchQuestions();
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
