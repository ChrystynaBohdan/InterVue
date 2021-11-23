<template>
  <div class="relative question-container">
    <div class="flex flex-col items-center justify-center bg-gray-100 pt-10 max-w-screen-2xl">
      <div class="flex justify-between content-center items-center max-w-screen-2xl space-x-96">
        <div>
          <router-link
            to="/addnew"
            tag="button"
            class="
              border-solid
              p-4
              rounded-md
              bg-blue-400
              cursor-pointer
              text-white
              font-semibold
              hover:text-black hover:bg-green-400
              transition
              duration-500
              ease-in-out
              shadow-md
            "
            >Add New
          </router-link>
        </div>
        <div class="flex space-x-16">
          <div>
            <label for="position" class="font-semibold text-xl">Position:</label>
            <select id="position" class="px-2 py-2 ml-2 focus:ring-2 focus:ring-blue-600 rounded-md shadow-md">
              <option>Junior</option>
              <option>Middle</option>
              <option>Senior</option>
            </select>
          </div>
          <div>
            <label for="technologies" class="font-semibold text-xl">Technologies:</label>
            <select
              name="Technologies"
              id="technologies"
              class="px-2 py-2 ml-2 focus:ring-2 focus:ring-blue-600 rounded-md shadow-md"
            >
              <option>HTML</option>
              <option>CSS</option>
              <option>JS Core</option>
              <option>React</option>
              <option>Redux</option>
              <option>Vue</option>
            </select>
          </div>
        </div>
      </div>
      <div class="pt-12">
        <ul>
          <li class="p-4" v-for="question in allQuestions" :key="question.id">
            <span
              class="bg-gray-300 inline-block font-extrabold rounded-full text-gray-100 h-8 w-8 text-center leading-8"
              >{{ question.id }}</span
            >
            <span
              @click="goToQuestion(question.id)"
              class="
                ml-2
                p-4
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
            <button class="px-4 cursor-pointer">
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

export default {
  name: "QuestionsList",
  computed: { ...mapGetters(["allQuestions"]) },
  methods: {
    goToQuestion(id) {
      router.push({ path: "/question/" + id });
    },
  },
};
</script>
<style>
.question-container {
  margin-top: 115px;
}
</style>
