<template>
  <div class="my-36">
    <h2 class="text-center font-bold text-3xl mb-8">Add New Question</h2>
    <form class="
      flex
      flex-col
      max-w-md
      mx-auto
      gap-4
      p-6
      bg-gradient-to-r from-blue-50 to-blue-200
      rounded-lg
    ">
      <input
        type="text"
        placeholder="Question's body"
        class="
          py-3
          px-2
          focus:ring-2 focus:ring-blue-600
          outline-none
          rounded-lg
        "
      >

      <select class="py-3 px-2 rounded-lg">
        <option value="">Choose a category for the question</option>
        <option value="Trainee">JS</option>
        <option value="Junioe">HTML/CSS</option>
        <option value="Middle">React JS</option>
        <option value="Senior">Vue JS</option>
      </select>

      <select class="py-3 px-2 rounded-lg">
        <option value="">Choose a level</option>
        <option value="Trainee">Trainee</option>
        <option value="Junioe">Junior</option>
        <option value="Middle">Middle</option>
        <option value="Senior">Senior</option>
      </select>

      <textarea
        rows="6"
        class="
          rounded-lg
          py-3
          px-2
          focus:ring-2 focus:ring-blue-600
          outline-none
        "
        placeholder="Insert a code example if you need"
      ></textarea>
      

      <button
         type="submit"
         class="
          bg-blue-600
          rounded-lg
          py-3
          px-2
          text-white
          hover:bg-blue-800
          transition-colors
         "
      >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "QuestionForm",
};
</script>
