<template>
  <div>
    <div class="mt-40 text-center">{{ question.title }}</div>
    <button
      @click="back"
      class="
        bg-gray-200
        font-bold
        rounded-full
        text-gray-500
        h-20
        w-20
        text-center
        leading-8
        m-4
        transition
        duration-500
        ease-in-out
        shadow-md
        hover:bg-green-100 hover:text-black
      "
    >
      Back
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Question",
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
  },
};
</script>

<style scoped></style>
