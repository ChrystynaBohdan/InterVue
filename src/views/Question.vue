<template>
  <div class="flex min-h-screen max-w-full">
    <div class="flex flex-col gap-y-6 w-9/12">
      <div class="flex justify-between">
        <button
          @click="back"
          class="p-2 text-xs cursor-pointer bg-white hover:text-gray-400 rounded-md text-black border border-grey-100"
        >
          Previous
        </button>
        <button
          @click="next"
          class="p-2 text-xs cursor-pointer bg-white hover:text-gray-400 rounded-md text-black border border-grey-100"
        >
          Next
        </button>
      </div>
      <div class="flex w-full grid gap-4 onequestion">
        <h1 class="py-1.5 font-bold inline-block bg-white flex flex-col gap-x-3 gap-y-2 text-4xl">
          {{ question.title }}
          <h1 class="text-xs font-extralight text-gray-400">by Volodymyr Sen</h1>
          <div class="flex gap-x-1">
            <div
              v-for="category in question.category"
              :key="category"
              v-bind:class="{
                'bg-green-400': category === 'javascript',
                'bg-red-400': category === 'vue',
                'bg-blue-400': category === 'angular',
                'bg-indigo-400': category === 'php',
                'bg-yellow-400': category === 'wordpress',
              }"
              class="text-white w-5 rounded-full h-7 w-20 flex items-center justify-center text-xs"
            >
              {{ category }}
            </div>
            <div
              v-for="level in question.level"
              :key="level"
              v-bind:class="{
                'bg-blue-400': level === 'junior',
                'bg-indigo-400': level === 'middle',
                'bg-yellow-400': level === 'senior',
              }"
              class="text-white w-7 rounded-full h-7 w-20 flex items-center justify-center text-xs"
            >
              {{ level }}
            </div>
          </div>
        </h1>
        <button class="px-2 cursor-pointer flex flex-col pt-4" @click="increment(question)">
          <i class="far fa-thumbs-up"></i>
          {{ question.likes }}
        </button>
        <button class="px-2 cursor-pointer flex flex-col pt-4" @click="decrement(question)">
          <i class="far fa-thumbs-down"></i>
          {{ question.dislikes }}
        </button>
      </div>
      <div>{{ question.body }}</div>
      <div class="pt-5 text-xl">Discuss the question</div>
      <div class="border-b-2 font-semibold">10 comments</div>
      <Comments :comments="question.comments" :guestionId="question.id" />
    </div>
    <div class="w-3/12 flex"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Comments from "../components/Comments";

export default {
  name: "Question",
  components: { Comments },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allQuestions"]),
    ...mapActions(["fetchQuestion"]),

    question() {
      return this.allQuestions.find((q) => q._id == this.$route.params.id);
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

  // mounted() {
  //   // console.log("here");
  //   this.fetchQuestion();
  // },
};
</script>

<style scoped>
.onequestion {
  grid-template-columns: 1fr 32px 32px;
}
</style>
