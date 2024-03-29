<template>
  <div class="flex min-h-screen max-w-full">
    <div class="flex flex-col gap-y-6 w-9/12">
      <div class="flex justify-between">
        <button
          @click="back(question)"
          class="p-2 text-xs cursor-pointer bg-white hover:text-gray-400 rounded-md text-black border border-grey-100"
        >
          Previous
        </button>
        <div>
          <button
            @click="edit"
            class="p-2 text-xs cursor-pointer bg-white hover:text-gray-400 rounded-md text-black border border-grey-100"
          >
            Edit
          </button>
          <button
            @click="next(question)"
            class="
              ml-2
              p-2
              text-xs
              cursor-pointer
              bg-white
              hover:text-gray-400
              rounded-md
              text-black
              border border-grey-100
            "
          >
            Next
          </button>
        </div>
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
                'bg-green-400': category === 'JS',
                'bg-red-400': category === 'Vue',
                'bg-blue-400': category === 'Redux',
                'bg-indigo-400': category === 'React',
                'bg-yellow-400': category === 'SCSS',
                'bg-red-700': category === 'HTML',
                'bg-red-600': category === 'CSS',
              }"
              class="text-white w-5 rounded-full h-7 w-20 flex items-center justify-center text-xs"
            >
              {{ category }}
            </div>
            <div
              v-for="level in question.level"
              :key="level"
              v-bind:class="{
                'bg-blue-400': level === 'Junior',
                'bg-green-400': level === 'Middle',
                'bg-indigo-400': level === 'Lead',
                'bg-yellow-400': level === 'Senior',
                'bg-red-400': level === 'Architect',
              }"
              class="text-white w-7 rounded-full h-7 w-20 flex items-center justify-center text-xs"
            >
              {{ level }}
            </div>
          </div>
        </h1>
        <QuestionLikes :question="question"></QuestionLikes>
      </div>
      <div>{{ question.body }}</div>
      <div v-html="markdownToHtml"></div>
      <span @click="remove(question)" class="text-xs cursor-pointer bg-white text-gray-400 hover:text-black">
        ( Delete Question )
      </span>
      <div class="pt-5 text-xl">Discuss the question</div>
      <div class="border-b-2 font-semibold">10 comments</div>
      <Comments :comments="question.comments" :guestionId="question._id" />
    </div>
    <div class="w-3/12 flex"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Comments from "../../components/Comments";
import QuestionLikes from "./QuestionLikes";
import { marked } from "marked";

export default {
  name: "Question",
  components: { Comments, QuestionLikes },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allQuestions", "questionByID"]),

    question() {
      return this.questionByID(this.$route.params.id);
    },
    markdownToHtml() {
      return marked(this.question.codeSnippet);
    },
  },
  methods: {
    ...mapActions(["deleteQuestion", "fetchQuestions"]),
    back(question) {
      const idx = this.allQuestions.findIndex((q) => q._id === question._id);

      if (idx === 0) {
        return;
      }

      const nextQuestion = this.allQuestions[idx - 1]._id;

      this.$router.push({ path: `/questions/${nextQuestion}` });
    },
    next(question) {
      const idx = this.allQuestions.findIndex((q) => q._id === question._id);

      if (idx === this.allQuestions.length - 1) {
        return;
      }

      const nextQuestion = this.allQuestions.slice(idx).find((item) => item.category[0] === question.category[0]);
      this.$router.push({ path: `/questions/${nextQuestion}` });
    },
    edit() {
      this.$router.push({ path: `/questions/${this.$route.params.id}/edit` });
    },
    async remove(q) {
      let response = confirm("Are you sure you want to delete this question?");
      if (response) {
        await this.deleteQuestion(q._id);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.onequestion {
  grid-template-columns: 1fr 32px 32px;
}
</style>
