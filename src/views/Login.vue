<template>
  <div class="py-28 h-screen flex">
    <form
      v-on:submit.prevent="handleLogin"
      class="
        flex flex-col
        max-w-xl
        mx-auto
        gap-6
        p-6
        bg-gradient-to-r
        from-blue-100
        to-blue-200
        rounded-lg
        shadow-lg
        w-96
        self-center
      "
    >
      <div class="flex flex-col">
        <i class="fas fa-user self-center text-blue-700"></i>
        <h2 class="text-blue-900 font-bold text-center text-lg mt-2">Sign In To Continue</h2>
      </div>

      <input
        required
        v-model="login"
        type="text"
        placeholder="Login"
        class="rounded-lg py-3 px-2 focus:ring-2 focus:ring-blue-600 outline-none"
      />
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
        class="rounded-lg py-3 px-2 focus:ring-2 focus:ring-blue-600 outline-none"
      />
      <button
        @click="axiosLogin"
        type="submit"
        class="
          bg-blue-600
          rounded-lg
          py-3
          px-2
          text-white
          w-40
          mx-auto
          font-semibold
          hover:bg-blue-800
          transition
          duration-500
          ease-in-out
          shadow-md
        "
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import router from "../router";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      login: "",
      password: "",
    };
  },

  computed: { ...mapGetters(["isLogged", "isEmail", "isPassword"]) },

  methods: {
    ...mapActions(["refreshAccessToken"]),
    async axiosLogin() {
      // const response = await axios.post("http://localhost:8000/auth/login", {
      const response = await axios.post("http://localhost:5001/api/login", {
        email: this.login,
        password: this.password,
      });
      console.log(response);
      // const token = response.data.access_token;
      // localStorage.setItem("accessToken", token);

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      this.refreshAccessToken();
    },
    ...mapActions(["checkLogin", "fetchTodos"]),

    handleLogin() {
      this.checkLogin();

      this.login = "";
      this.password = "";

      if (!this.isLogged) {
        router.replace("/login");
      } else {
        router.replace("/");
      }
    },
  },
};
</script>
