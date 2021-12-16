<template>
  <div class="w-full">
    <div class="w-full flex items-start gap-2">
      <div class="w-16 flex flex-col items-center">
        <img src="../assets/square-user.png" alt="user" />
        <div class="font-semibold">{{ curUser }}</div>
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
    <div v-for="(comment, index) in comments" :key="index" class="w-full flex items-center gap-2 pl-16">
      <div class="flex py-3">
        <div class="flex gap-x-2">
          <img src="../assets/square-user.png" alt="user" class="w-11" />
          <div class="flex flex-col w-11/12">
            <div class="flex gap-x-1 items-center">
              <div class="font-semibold pr-1">{{ comment.user.name }}</div>
              <div class="text-xs font-semibold text-gray-400">|</div>
              <div class="text-xs font-semibold text-gray-400 pl-1">
                {{ fromNow(comment.date) }}
              </div>
            </div>
            <div class="w-full text-sm">{{ comment.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
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
      console.log(this.guestionId);
      this.commentNew({ id: this.guestionId, commentText: this.comment });
      this.comment = "";
    },
    fromNow(date) {
      return moment(date).fromNow();
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
