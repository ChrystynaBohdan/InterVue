<template>
  <div class="flex flex-col gap-y-4">
    <div class="flex gap-x-10 text-gray-400">
      <router-link
        :to="{ params: { technology: 'javascript' } }"
        class="border-b border-transparent hover:border-current hover:text-black font-bold"
        >Javascript</router-link
      >
      <router-link
        :to="{ params: { technology: 'react' } }"
        class="border-b border-transparent hover:border-current hover:text-black font-bold"
        >React</router-link
      >
      <router-link
        :to="{ params: { technology: 'vue' } }"
        class="border-b border-transparent hover:border-current hover:text-black font-bold"
        >Vue</router-link
      >
      <router-link
        :to="{ params: { technology: 'angular' } }"
        class="border-b border-transparent hover:border-current hover:text-black font-bold"
        >Angular</router-link
      >
      <router-link
        :to="{ params: { technology: 'php' } }"
        class="border-b border-transparent hover:border-current hover:text-black font-bold"
        >PHP</router-link
      >
      <router-link
        :to="{ params: { technology: 'wordpress' } }"
        class="border-b border-transparent hover:border-current hover:text-black font-bold"
        >Wordpress</router-link
      >
    </div>
    <Categories :technology="selectedTechnology" :levels="categories[selectedTechnology]"></Categories>
  </div>
</template>

<script>
import Categories from "../components/Categories";
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
        javascript: {
          junior: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.",
          middle: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.",
          senior: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.",
          lead: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.",
          architect: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.",
        },
        react: {
          junior:
            "React Native combines the best parts of native development with React, a best-in-class JavaScript library",
          middle:
            "React Native combines the best parts of native development with React, a best-in-class JavaScript library ",
          senior:
            "React Native combines the best parts of native development with React, a best-in-class JavaScript library ",
          lead: "React Native combines the best parts of native development with React, a best-in-class JavaScript library ",
          architect:
            "React Native combines the best parts of native development with React, a best-in-class JavaScript library ",
        },
        vue: {
          junior: "Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely",
          middle: "Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely",
          senior: "Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely",
          lead: "Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely",
          architect:
            "Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely",
        },
        angular: {
          junior:
            "Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS",
          middle:
            "Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS",
          senior:
            "Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS",
          lead: "Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS",
          architect:
            "Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS",
        },
        php: {
          junior:
            "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications.",
          middle:
            "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications.",
          senior:
            "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications.",
          lead: "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications.",
          architect:
            "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications.",
        },
        wordpress: {
          junior: "All created from professional WordPress developers and marketers to perfectly fit your business.",
          middle: "All created from professional WordPress developers and marketers to perfectly fit your business.",
          senior: "All created from professional WordPress developers and marketers to perfectly fit your business.",
          lead: "All created from professional WordPress developers and marketers to perfectly fit your business.",
          architect: "All created from professional WordPress developers and marketers to perfectly fit your business.",
        },
      },
    };
  },
};
</script>

<style scoped></style>
