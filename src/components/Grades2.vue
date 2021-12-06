<template>
  <div class="router-size">
    <router-link :to="{ params: { technology: 'Javascript' } }" class="ml-6">Javascript</router-link>
    <router-link :to="{ params: { technology: 'React' } }" class="ml-6">React</router-link>
    <router-link :to="{ params: { technology: 'Vue' } }" class="ml-6">Vue</router-link>
    <router-link :to="{ params: { technology: 'Angular' } }" class="ml-6">Angular</router-link>
    <router-link :to="{ params: { technology: 'PHP' } }" class="ml-6">PHP</router-link>
    <router-link :to="{ params: { technology: 'Wordpress' } }" class="ml-6">Wordpress</router-link>

    <Categories :technology="selectedTechnology" :levels="categories[selectedTechnology]"></Categories>
  </div>
</template>

<script>
import Categories from "./Categories";
export default {
  name: "Grades2",
  components: { Categories },
  computed: {
    selectedTechnology() {
      return this.$route.params.technology;
    },
  },
  data() {
    return {
      categories: {
        Javascript: {
          junior: "text one",
          middle: "lorem ipsum",
          senior: "senior level",
          lead: "asdas",
          architect: "asdasd",
        },
        React: {
          junior: "zxczxc",
          middle: "zxczxc",
          senior: "vcxvwq",
          lead: "2134",
          architect: "asda",
        },
        Vue: {
          junior: "",
          middle: "",
          senior: "",
          lead: "",
          architect: "",
        },
        Angular: {
          junior: "",
          middle: "",
          senior: "",
          lead: "",
          architect: "",
        },
        PHP: {
          junior: "",
          middle: "",
          senior: "",
          lead: "",
          architect: "",
        },
        Wordpress: {
          junior: "",
          middle: "",
          senior: "",
          lead: "",
          architect: "",
        },
      },
    };
  },
};
</script>

<style scoped></style>
