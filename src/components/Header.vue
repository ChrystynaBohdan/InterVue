<template>
  <div class="flex py-3 px-32 w-full justify-between items-center bg-white h-16 border-b-2">
    <div class="flex gap-x-4 items-center">
      <router-link to="/">
        <img src="../assets/soft-blues-logo-white.png" alt="logo" class="h-6" />
      </router-link>
      <div class="flex gap-x-4">
        <router-link v-if="isLogged" tag="button" to="/questions/addnew"
          ><i class="far fa-plus-square fa-lg hover:text-gray-500 text-gray-300 mt-3 cursor-pointer"></i>
        </router-link>
        <router-link v-if="isLogged" tag="button" to="/docs"
          ><div class="border-b border-transparent hover:border-current text-gray-500 mt-1 cursor-pointer px-1 text-sm">
            Docs
          </div></router-link
        >
        <router-link v-if="isLogged" tag="button" to="/recruiters"
          ><div class="border-b border-transparent hover:border-current text-gray-500 mt-1 cursor-pointer px-1 text-sm">
            For Recruiters
          </div></router-link
        >
        <router-link v-if="isLogged" tag="button" to="/faq"
          ><div class="border-b border-transparent hover:border-current text-gray-500 mt-1 cursor-pointer px-1 text-sm">
            FAQ
          </div></router-link
        >
      </div>
    </div>
    <div>
      <div
        v-if="isLogged"
        class="
          hover:text-gray-500
          leading-normal
          cursor-pointer
          text-gray-300
          font-bold
          transition
          duration-500
          ease-in-out
          inline-block
        "
      >
        <i class="far fa-user-circle fa-lg"></i>
      </div>
      <i
        v-if="isLogged"
        v-on:click="handleLogOut"
        class="fas fa-sign-out-alt fa-lg hover:text-gray-500 text-gray-300 mx-10 cursor-pointer"
      ></i>
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
