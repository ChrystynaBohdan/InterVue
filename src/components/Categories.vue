<template>
  <div class="flex flex-col gap-y-8">
    <div class="flex flex-col gap-y-1">
      <h2 class="font-bold">Junior Developer</h2>
      <p>{{ levels.junior }}</p>
    </div>
    <div class="flex flex-col gap-y-1">
      <h2 class="font-bold">Middle Developer</h2>
      <p>{{ levels.middle }}</p>
    </div>
    <div class="flex flex-col gap-y-1">
      <h2 class="font-bold">Senior Developer</h2>
      <p>{{ levels.senior }}</p>
    </div>
    <div class="flex flex-col gap-y-1">
      <h2 class="font-bold">Lead Developer</h2>
      <p>{{ levels.lead }}</p>
    </div>
    <div class="flex flex-col gap-y-1">
      <h2 class="font-bold">Principal Developer</h2>
      <p>{{ levels.architect }}</p>
    </div>
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
