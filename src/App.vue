<template>
  <div id="app" class="app">
    <div>
      <Header />
      <router-view class="router-size" />
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
    if (!this.isLogged) {
      router.replace("/login");
    } else {
      router.replace("/");
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@400;500;600;700&display=swap");
.app {
  font-family: "Hind Vadorada", Arial, sans-serif;
  box-sizing: border-box;
}

.router-size {
  margin: 0 11%;
}
</style>
