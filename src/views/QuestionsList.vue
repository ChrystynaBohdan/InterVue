<template>
  <div class="relative py-24 bg-gray-100">
    <div class="flex flex-col items-center justify-center pt-10 max-w-screen-2xl mx-auto">
      <div class="flex justify-between content-center items-center max-w-screen-2xl space-x-96">
        <div class="flex gap-x-16 gap-y-4 flex-wrap justify-center">
          <div>
            <Multiselect />
          </div>
          <div>
            <Multiselect />
          </div>
        </div>
      </div>
      <div class="pt-8">
        <ul>
          <li class="p-2 grid gap-4 items-center question" v-for="question in allQuestions" :key="question.id">
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
              "
              >{{ question.title }}</span
            >
            <button class="px-2 cursor-pointer">
              <i class="far fa-thumbs-up"></i>
            </button>
            <button class="px-2 cursor-pointer">
              <i class="far fa-thumbs-down"></i>
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
  computed: { ...mapGetters(["allQuestions"]) },
  methods: {
    goToQuestion(id) {
      router.push({ path: "/question/" + id });
    },
  },
};
</script>
<style>
.question {
  grid-template-columns: 32px 1fr 32px 32px minmax(50px, 100px);
}
</style>
