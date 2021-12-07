<template>
  <div>
    <div>{{ technology }}</div>
    <h2>Junior</h2>
    <p>{{ levels.junior }}</p>
    <h2>Middle</h2>
    <p>{{ levels.middle }}</p>
    <h2>Senior</h2>
    <p>{{ levels.senior }}</p>
    <h2>Lead</h2>
    <p>{{ levels.lead }}</p>
    <h2>Architect</h2>
    <p>{{ levels.architect }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: ["technology", "levels"],
};
</script>

<style scoped></style>
