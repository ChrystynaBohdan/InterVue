<template>
  <div class="mt-40 text-center">{{ question.title }}</div>
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
};
</script>

<style scoped></style>
