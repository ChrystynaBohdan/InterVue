<template>
  <div class="flex flex-col mt-32 max-w-xl min-h-screen pt-32">
      <h2 class="font-bold text-3xl mb-8">Add New Question Here</h2>
    <form
      v-on:submit.prevent
      class="flex flex-col gap-4"
    >
      <textarea
        required
        rows="4"
        class="rounded-lg py-3 px-2 outline-none border border-solid border-gray-300"
        placeholder="Question's body"
      ></textarea>
      <Multiselect :options="gradeOptions" v-model="selectedGrade" :placeholder="'Select technology'"/>
      <Multiselect :options="categories" v-model="selectedCategory" :placeholder="'Select grade'" />

      <textarea
        rows="6"
        class="rounded-lg py-3 px-2 outline-none border border-solid border-gray-300"
        placeholder="Right a code example if you need"
      ></textarea>

      <button
        type="submit"
        class="
          border
          border-grey-200
          px-2
          py-1
          rounded-md
          text-black
          cursor-pointer
          font-bold
          transition
          duration-500
          ease-in-out
          hover:bg-gray-600
          hover:text-white
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
