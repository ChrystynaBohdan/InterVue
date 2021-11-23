<template>
  <div
    class="
      flex
      py-10
      px-20
      w-full
      justify-between
      sticky
      z-1
      hover:bg-green-100
      cursor-pointer
      top-0
      left-0
      bg-white
    "
  >
    <img src="../assets/soft-blues-logo-white.png" alt="logo" />
    <div class="hover:text-blue-700 leading-normal">Current User</div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
