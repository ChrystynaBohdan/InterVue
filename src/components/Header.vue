<template>
  <div
    class="
      flex
      py-3
      px-10
      w-full
      justify-between
      items-center
      fixed
      z-10
      top-0
      left-0
      bg-gradient-to-r
      from-green-400
      to-blue-500
      h-16
    "
  >
    <div class="flex gap-x-4 items-center">
      <router-link to="/">
        <img src="../assets/soft-blues-logo-white.png" alt="logo" class="h-6" />
      </router-link>
      <div>
        <router-link
          v-if="isLogged"
          to="/addnew"
          tag="button"
          class="
            border-2 border-white
            px-2
            py-1
            rounded-md
            cursor-pointer
            text-white
            font-semibold
            hover:bg-blue-400
            transition
            duration-500
            ease-in-out
            shadow-md
          "
          >Add New
        </router-link>
      </div>
    </div>
    <div>
      <div
        v-if="isLogged"
        class="
          hover:text-black
          leading-normal
          cursor-pointer
          text-white
          font-bold
          transition
          duration-500
          ease-in-out
          inline-block
        "
      >
        <i class="fas fa-user-circle fa-lg"></i>
      </div>
      <i v-if="isLogged" v-on:click="handleLogOut" class="fas fa-sign-out-alt text-white mx-10 cursor-pointer"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../router";

export default {
  name: "Header",

  computed: { ...mapGetters(["isLogged"]) },

  methods: {
    ...mapActions(["logOut"]),

    handleLogOut() {
      console.log("logging out");
      this.logOut();
      router.replace("/login");
    },
  },
};
</script>

<style scoped></style>
