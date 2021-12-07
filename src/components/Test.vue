<template>
  <div>
    <button @click="checkAuth">click me</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Test",
  methods: {
    async checkAuth() {
      const response = await axios.get("http://localhost:8000/test");

      console.log(response);
    },
  },
};
</script>

<style scoped></style>
