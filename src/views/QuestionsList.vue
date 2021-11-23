<template>
  <div class="relative">
    <Header />
    <div class="flex flex-col items-center justify-center">
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

      <div class="p-4">
        <ol class="list-decimal">
          <router-link
            :to="{ path: '/question/' + question.id }"
            tag="li"
            v-for="question in allQuestions"
            :key="question.id"
            >{{ question.title }}
            <button class="px-2 bg-green-100">Like</button>
            <button class="px-2 bg-red-600">Dislike</button>
          </router-link>
        </ol>
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
