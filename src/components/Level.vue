<template>
  <div class="router-size">
    level!
    <h2>selected level: {{ selectedLevel }}</h2>
  </div>
</template>

<script>
export default {
  name: "Level",
  computed: {
    selectedLevel() {
      return this.$route.params.level;
    },
  },
};
</script>

<style scoped></style>
