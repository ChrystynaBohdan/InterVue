<template>
  <div id="app" class="app">
    <div>
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: { Header, Footer },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@400;500;600;700&display=swap");
.app {
  font-family: "Hind Vadorada", Arial, sans-serif;
  box-sizing: border-box;
}
</style>
