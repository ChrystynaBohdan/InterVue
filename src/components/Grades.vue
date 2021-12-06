<template>
  <div class="router-size">
    <router-link :to="{ name: 'Grade2' }" class="ml-6">Grades</router-link>
    <router-link :to="{ name: 'Technologies' }" class="ml-6">Technologies</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Grades",
};
</script>

<style scoped></style>
