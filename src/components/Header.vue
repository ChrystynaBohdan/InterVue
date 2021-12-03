<template>
  <div class="flex py-3 px-32 w-full justify-between items-center fixed z-10 top-0 left-0 bg-white h-16 border-b-2">
    <div class="flex gap-x-4 items-center">
      <router-link to="/">
        <img src="../assets/soft-blues-logo-white.png" alt="logo" class="h-6 ml-8" />
      </router-link>
      <div class="flex gap-x-4">
        <router-link v-if="isLogged" tag="button" to="/addnew"
          ><i class="far fa-plus-square fa-lg hover:text-gray-500 text-gray-300 mt-3 cursor-pointer"></i>
        </router-link>
        <router-link v-if="isLogged" tag="button" to="/addnew"
          ><div
            class="hover:text-gray-500 text-gray-300 mt-3 cursor-pointer border-2 border-gray-300 px-1 rounded text-xs"
          >
            Grades
          </div></router-link
        >
        <router-link v-if="isLogged" tag="button" to="/addnew"
          ><div
            class="hover:text-gray-500 text-gray-300 mt-3 cursor-pointer border-2 border-gray-300 px-1 rounded text-xs"
          >
            For Recruiters
          </div></router-link
        >
        <router-link v-if="isLogged" tag="button" to="/addnew"
          ><div
            class="hover:text-gray-500 text-gray-300 mt-3 cursor-pointer border-2 border-gray-300 px-1 rounded text-xs"
          >
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
