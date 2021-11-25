<template>
  <div class="py-28 bg-gray-100 h-screen flex">
    <form
      v-on:submit.prevent
      class="
        flex
        flex-col
        max-w-xl
        mx-auto
        gap-6
        p-6
        bg-gradient-to-r from-blue-100 to-blue-200
        rounded-lg
        shadow-lg
        w-96
        self-center
      "
    >
      <div class="flex flex-col">
        <i class="fas fa-user self-center text-blue-700"></i>
        <h2 class="text-blue-900 font-bold text-center text-lg mt-2">Sign In To Continue</h2>
      </div>
      

      <input
        type="text"
        placeholder="Login"
        class="
          rounded-lg
          py-3
          px-2
          focus:ring-2 focus:ring-blue-600
          outline-none
        "
      >
      <input
        type="password"
        placeholder="Password"
        class="
          rounded-lg
          py-3
          px-2
          focus:ring-2 focus:ring-blue-600
          outline-none
        "
      >
      <button 
        type="submit"
        class="
          bg-blue-600
          rounded-lg
          py-3
          px-2
          text-white
          w-40
          mx-auto
          font-semibold
          hover:bg-blue-800
          transition
          duration-500
          ease-in-out
          shadow-md
        "
      >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin() {
      console.log('loged in')
    },
  }
}
</script>
