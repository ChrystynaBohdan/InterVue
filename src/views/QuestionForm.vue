<template>
  <div class="flex flex-col mt-32 max-w-xl min-h-screen py-24">
    <form
      v-on:submit.prevent
      class="flex flex-col gap-4 text-sm"
    >
      <h2 class="font-bold text-3xl">Add New Question Here</h2>
      <label class="flex flex-col gap-2"> Title:
        <input
          type="text"
          placeholder="Question's title"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
        >
      </label>

      <div class="h-20 w-3/5">
        <label class="flex flex-col gap-2">Grade:
          <Multiselect :options="gradeOptions" v-model="selectedGrade" :placeholder="'Select a technology'"/>
        </label>
      </div>

      <div class="h-20 w-3/5">
        <label class="flex flex-col gap-2"> Technology:
          <Multiselect :options="categories" v-model="selectedCategory" :placeholder="'Select a grade for a question'" />
        </label>
      </div>

      <label class="flex flex-col gap-2"> Question's body:
        <textarea
          required
          rows="3"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Question's body goes here"
        ></textarea>
      </label>

      <label class="flex flex-col gap-2">Code snippet
        <textarea
          rows="4"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Right a code example here"
        ></textarea>
      </label>

      <div class="flex justify-end gap-4">
        <button
            type="button"
            class="
            p-2
            cursor-pointer
            bg-white
            hover:bg-gray-500
            hover:text-white
            rounded-md
            text-black
            border
            border-grey-100
            transition
            duration-500
            ease-in-out
            "
          >
          Reset
        </button>

        <button
            type="submit"
            class="
            p-2
            cursor-pointer
            bg-white
            hover:bg-gray-500
            hover:text-white
            rounded-md
            text-black
            border
            border-grey-100
            transition
            duration-500
            ease-in-out
            "
          >
          Submit
        </button>
      </div>
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
