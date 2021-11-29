<template>
  <div class="w-full">
    <div v-for="(comment, index) in comments" :key="index">{{ comment.user }} {{ comment.text }}</div>
    <div
      class="
        relative
        flex
        items-center
        justify-between
        bg-gray-200
        rounded-2xl
        overflow-hidden
        w-5/6
        h-12
        p-1
        shadow-md
      "
    >
      <div class="flex items-center justify-center">
        <i class="fas fa-user-circle fa-lg"></i>
        <input
          class="comment-input bg-gray-200 flex items-center gap-x-2 pl-1 focus:outline-none"
          placeholder="Leave a comment..."
          maxlength="250"
          requiredtype="text"
          v-model="comment"
        />
      </div>
      <button
        @click="submitComment"
        class="
          transition
          duration-500
          ease-in-out
          absolute
          right-3
          top-2
          inline-block
          border-solid border-2 border-blue-400
          bg-transparent
          text-blue-400
          font-normal
          text-center
          align-middle
          text-sm
          rounded-2xl
          cursor-pointer
          hover:bg-blue-400 hover:text-white
          p-1
        "
      >
        <i class="fa fa-paper-plane"></i>Add
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Comments",
  props: ["comments", "guestionId"],
  methods: {
    ...mapActions(["commentNew"]),
    submitComment() {
      this.commentNew({ id: this.guestionId, comment: { text: this.comment, user: "Khrystya" } });
      this.comment = "";
    },
  },
  data() {
    return {
      comment: "",
    };
  },
};
</script>

<style scoped>
.comment-input {
  width: 90%;
}
</style>
