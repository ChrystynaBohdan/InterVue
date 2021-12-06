<template>
  <div class="router-size">
    <router-link :to="{ name: 'Javascript' }" class="ml-6">Javascript</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Grades2",
};
</script>

<style scoped></style>
