<template>
  <div class="flex flex-col gap-y-6">
    <div class="flex gap-x-5 text-base text-black font-bold cursor-pointer">
      <router-link :to="{ name: 'Grade2' }" class="border-b border-transparent hover:border-current hover:text-gray-500"
        >Grades</router-link
      >
      <router-link
        :to="{ name: 'Technologies' }"
        class="border-b border-transparent hover:border-current hover:text-gray-500"
        >Technologies</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Docs",
};
</script>

<style scoped>
.router-link-exact-active {
  color: #831843;
}
.router-link-active {
  color: #831843;
}
</style>
