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

      <div class="mx-auto">
        <Multiselect label="Grades:" :options="gradeOptions" v-model="selectedGrade" />
      </div>
      
      <div class="mx-auto">
        <Multiselect label="Categories:" :options="categories" v-model="selectedCategory" />
      </div>

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
import Multiselect from '../components/Multiselect.vue'

export default {
  name: "QuestionForm",
  components: { Multiselect },

  data() {
    return {
      categories: [
        { name: "HTML", code: "HTML" },
        { name: "CSS", code: "CSS" },
        { name: "SCSS", code: "SCSS" },
        { name: "React", code: "React" },
        { name: "Redux", code: "Redux" },
        { name: "Vue", code: "VueJs" },
        { name: "JS", code: "JS Core" },
      ],

      gradeOptions: [
        { name: "Junior", code: "Junior" },
        { name: "Middle", code: "Middle" },
        { name: "Senior", code: "Senior" },
      ],

      selectedCategory: [],
      selectedGrage: []
    }
  }
};
</script>
