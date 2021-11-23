<template>
  <div class="relative question-container">
    <div class="flex flex-col items-center justify-center bg-gray-100 pt-10">
      <div class="flex flex-row w-auto content-center justify-between">
        <div>
          <router-link
            to="/addnew"
            tag="button"
            class="
              border-solid
              p-2
              rounded-md
              ring-4 ring-indigo-300
              cursor-pointer
            "
            >Add New
          </router-link>
        </div>
        <div>
          <label for="position">Position:</label>
          <select id="position">
            <option>Junior</option>
            <option>Middle</option>
            <option>Senior</option>
          </select>
          <label for="technologies">Technologies:</label>
          <select name="Technologies" id="technologies">
            <option>HTML</option>
            <option>CSS</option>
            <option>JS Core</option>
            <option>React</option>
            <option>Redux</option>
            <option>Vue</option>
          </select>
        </div>
      </div>
      <div class="pt-12">
        <ul>
          <router-link
            :to="{ path: '/question/' + question.id }"
            class="p-4"
            tag="li"
            v-for="question in allQuestions"
            :key="question.id"
            ><span
              class="
                bg-gray-300
                inline-block
                font-extrabold
                rounded-full
                text-gray-100
                h-8
                w-8
                text-center
                leading-8
              "
              >{{ question.id }}</span
            >
            <span
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
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "QuestionsList",
  computed: { ...mapGetters(["allQuestions"]) },
};
</script>
<style>
.question-container {
  margin-top: 115px;
}
</style>
