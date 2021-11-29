<template>
  <div class="flex h-screen flex-col bg-gray-100 justify-center items-center max-w-full">
    <div class="text-center flex-grow flex justify-center items-center flex-col gap-y-4 w-1/2">
      <div class="flex w-full">
        <span
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
            gap-x-3
          "
        >
          {{ question.title }}
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
      </div>

      <div class="flex gap-x-5">
        <button
          @click="back"
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
          <i class="fas fa-arrow-left"></i>
        </button>
        <button
          @click="next"
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
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <Comments :comments="question.comments" :guestionId="question.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Comments from "../components/Comments";

export default {
  name: "Question",
  components: { Comments },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allQuestions"]),

    question() {
      return this.allQuestions.find((q) => q.id == this.$route.params.id);
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      this.$router.push({ path: `/question/${+this.$route.params.id + 1}` });
    },
    increment(question) {
      question.likes++;
    },
    decrement(question) {
      question.dislikes++;
    },
  },
};
</script>

<style scoped></style>
