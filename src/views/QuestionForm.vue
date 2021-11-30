<template>
  <div class="py-28">
    <h2 class="text-center font-bold text-3xl mb-8">Add New Question</h2>
    <form
      v-on:submit.prevent
      class="flex flex-col max-w-xl mx-auto gap-4 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg"
    >
      <textarea
        required
        rows="4"
        class="rounded-lg py-3 px-2 focus:ring-2 focus:ring-blue-600 outline-none"
        placeholder="Question's body goes here"
      ></textarea>

      <select class="py-3 px-2 rounded-lg" required>
        <option value="">Choose a category for the question</option>
        <option value="Trainee">JS</option>
        <option value="Junioe">HTML/CSS</option>
        <option value="Middle">React JS</option>
        <option value="Senior">Vue JS</option>
      </select>

      <select class="py-3 px-2 rounded-lg" required>
        <option value="">Choose a level</option>
        <option value="Trainee">Trainee</option>
        <option value="Junioe">Junior</option>
        <option value="Middle">Middle</option>
        <option value="Senior">Senior</option>
      </select>

      <textarea
        rows="6"
        class="rounded-lg py-3 px-2 focus:ring-2 focus:ring-blue-600 outline-none"
        placeholder="Right a code example if you need"
      ></textarea>

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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "QuestionForm",
};
</script>
