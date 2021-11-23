<template>
  <div class="relative">
    <Header />
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-row justify-between w-3/4 content-center">
        <div>
          <router-link
            to="/question"
            tag="button"
            class="
              border-solid
              p-2
              rounded-md
              ring-4 ring-indigo-300
              cursor-pointer
              mt-10
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
      <div class="p-4">
        <ul>
          <router-link
            :to="{ path: '/question/' + question.id }"
            class="p-6"
            tag="li"
            v-for="question in allQuestions"
            :key="question.id"
            ><span
              class="
                bg-green-100
                font-extrabold
                rounded-full
                h-8
                w-8
                flex
                items-center
                justify-center
              "
              >{{ question.id }}.</span
            >
            <span class="px-5 font-bold">{{ question.title }}</span>
            <button>Like</button>
            <button class="px-2 bg-red-600">Dislike</button>
            <button class="px-2 bg-blue-200">Open</button>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "../components/Header";

export default {
  name: "QuestionsList",
  components: { Header },
  computed: { ...mapGetters(["allQuestions"]) },
};
</script>
