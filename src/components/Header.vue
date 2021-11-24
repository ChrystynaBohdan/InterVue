<template>
  <div
    class="
      flex
      py-3
      px-10
      w-full
      justify-between
      items-center
      fixed
      z-10
      top-0
      left-0
      bg-gradient-to-r
      from-green-400
      to-blue-500
    "
  >
    <div class="flex gap-x-4 items-center">
      <router-link to="/">
        <img src="../assets/soft-blues-logo-white.png" alt="logo" class="h-6" />
      </router-link>
      <div>
        <router-link
          to="/addnew"
          tag="button"
          class="
            border-2 border-white
            px-2
            py-1
            rounded-md
            cursor-pointer
            text-white
            font-semibold
            hover:bg-blue-400
            transition
            duration-500
            ease-in-out
            shadow-md
          "
          >Add New
        </router-link>
      </div>
    </div>
    <div
      class="hover:text-black leading-normal cursor-pointer text-white font-bold transition duration-500 ease-in-out"
    >
      Current User
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
