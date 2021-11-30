<template>
  <div class="w-full">
    <div class="w-full flex items-start gap-2">
      <div class="w-16 flex flex-col items-center">
        <img src="../assets/square-user.png" alt="user" />
        <div>{{ curUser }}</div>
      </div>
      <div
        class="
          relative
          flex
          items-start
          justify-between
          bg-white
          border border-gray-200
          overflow-hidden
          w-full
          h-24
          p-1
        "
      >
        <div class="w-full flex items-start gap-2">
          <input
            class="comment-input bg-white flex items-center gap-x-2 pl-1 focus:outline-none flex"
            placeholder="Leave a comment..."
            maxlength="250"
            requiredtype="text"
            v-model="comment"
            v-on:keyup.enter="submitComment"
          />
        </div>
      </div>
    </div>
    <div v-for="(comment, index) in comments" :key="index" class="w-full flex items-center gap-2">
      <div class="flex pt-2">
        <div class="w-20 flex flex-col items-center">
          <img src="../assets/square-user.png" alt="user" />
          <div>{{ curUser }}</div>
        </div>
        <div class="pl-3.5 w-full">{{ comment.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Comments",
  props: ["comments", "guestionId"],
  computed: { ...mapGetters(["curUser"]) },
  methods: {
    ...mapActions(["commentNew"]),
    submitComment() {
      if (this.comment === "") {
        return;
      }
      this.commentNew({ id: this.guestionId, commentText: this.comment });
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
