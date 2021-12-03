<template>
  <div class="flex flex-col mt-32 max-w-xl min-h-screen pt-32">
      
    <form
      v-on:submit.prevent
      class="flex flex-col gap-4"
    >
      <div class="flex justify-between align-center">
        <h2 class="font-bold text-3xl">Add New Question Here</h2>
        <button
          type="submit"
          class="
            py-3 px-2
            border
            border-grey-200
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
      </div>
      <div class="flex gap-4">
        <Multiselect :options="gradeOptions" v-model="selectedGrade" :placeholder="'Select technology'"/>
        <Multiselect :options="categories" v-model="selectedCategory" :placeholder="'Select grade'" />
      </div>
     

      <input
        type="text"
        placeholder="Question's title"
        class="rounded-lg py-3 px-2 outline-none border border-solid border-gray-300"
      >

      <textarea
        required
        rows="4"
        class="rounded-lg py-3 px-2 outline-none border border-solid border-gray-300"
        placeholder="Question's body"
      ></textarea>

      <textarea
        rows="6"
        class="rounded-lg py-3 px-2 outline-none border border-solid border-gray-300"
        placeholder="Right a code example here"
      ></textarea>
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
