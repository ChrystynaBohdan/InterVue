<template>
  <div id="app" class="app">
    <div class="header">
      <Header />
    </div>
    <div class="main px-32">
      <router-view />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

import router from "./router";
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: { Header, Footer },

  computed: { ...mapGetters(["isLogged"]) },

  beforeMount() {
    if (!localStorage.getItem("accessToken")) {
      router.replace("/login");
    } else {
      console.log(localStorage.getItem("accessToken"));
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@400;500;600;700&display=swap");

.app {
  font-family: "Hind Vadorada", Arial, sans-serif;
  box-sizing: border-box;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr 50px;
  row-gap: 16px;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

.header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 1;
}

.main {
  grid-area: main;
}

.aside {
  grid-area: aside;
}

.footer {
  grid-area: footer;
}
</style>
