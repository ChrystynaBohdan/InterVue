<template>
  <div class="flex flex-col max-w-xl min-h-screen">
    <form v-on:submit.prevent class="flex flex-col gap-4 text-sm">
      <div>
        <h2 class="font-bold text-3xl">Add New Question Here</h2>
        <h1 class="text-xs font-extralight text-gray-400">by Volodymyr Sen</h1>
      </div>
      <label class="flex flex-col gap-2">
        Title:
        <input
          type="text"
          placeholder="Question's title"
          class="rounded-md py-1 px-2 outline-none border border-solid border-gray-300"
        />
      </label>

      <div class="h-18 w-3/5">
        <label class="flex flex-col gap-2"
          >Grade:
          <Multiselect :options="gradeOptions" v-model="selectedGrade" :placeholder="'Select a technology'" />
        </label>
      </div>

      <div class="h-18 w-3/5">
        <label class="flex flex-col gap-2">
          Technology:
          <Multiselect
            :options="categories"
            v-model="selectedCategory"
            :placeholder="'Select a grade for a question'"
          />
        </label>
      </div>

      <label class="flex flex-col gap-2">
        Question's body:
        <textarea
          required
          rows="3"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Question's body goes here"
        ></textarea>
      </label>

      <label class="flex flex-col gap-2"
        >Code snippet:
        <textarea
          rows="4"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Right a code example here"
        ></textarea>
      </label>

      <div class="flex justify-end gap-3">
        <button
          type="button"
          class="p-2 text-xs cursor-pointer bg-white hover:text-gray-400 rounded-md text-black border border-grey-100"
        >
          Reset
        </button>

        <button
          type="submit"
          class="p-2 text-xs cursor-pointer bg-white hover:text-gray-400 rounded-md text-black border border-grey-100"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Multiselect from "../components/Multiselect.vue";

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
      selectedGrage: [],
    };
  },
};
</script>
