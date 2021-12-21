<template>
  <div class="flex">
    <button class="px-2 cursor-pointer" @click="increment(question)">
      <i class="far fa-thumbs-up"></i>
      {{ getLikes(question, true) }}
    </button>
    <button class="px-2 cursor-pointer" @click="decrement(question)">
      <i class="far fa-thumbs-down"></i>
      {{ getLikes(question, false) }}
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "QuestionLikes",
  props: ["question"],
  methods: {
    ...mapActions(["addLikes"]),
    increment(question) {
      this.addLikes({ question: question._id, like: true });
    },
    decrement(question) {
      this.addLikes({ question: question._id, like: false });
    },
    getLikes(question, like) {
      if (question.likes.length === 0) {
        return 0;
      }

      return question.likes.reduce((accum, currentQuestionLike) => {
        if (currentQuestionLike.like === like) {
          accum++;
        }
        return accum;
      }, 0);
    },
  },
};
</script>

<style scoped></style>
