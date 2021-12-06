<template>
  <div class="router-size">
    <router-link to="level/1" class="ml-6">Level</router-link>
    <router-link to="categories" class="ml-6">Categories</router-link>
    <router-link to="features" class="ml-6">Features</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Grades",
};
</script>

<style scoped></style>
