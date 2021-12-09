<template>
  <div class="flex flex-col max-w-xl min-h-screen">
    <form v-on:submit.prevent="submit" class="flex flex-col gap-4 text-sm">
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
          v-model="title"
        />
      </label>

      <div class="h-18 w-3/5">
        <label class="flex flex-col gap-2"
          >Level:
          <Multiselect :options="gradeOptions" v-model="selectedLevel" :placeholder="'Select a technology'" />
        </label>
      </div>

      <div class="h-18 w-3/5">
        <label class="flex flex-col gap-2">
          Category:
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
          v-model="body"
        ></textarea>
      </label>

      <label class="flex flex-col gap-2"
        >Code snippet:
        <textarea
          rows="4"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Right a code example here"
          v-model="codeSnippet"
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
import { mapActions } from "vuex";

export default {
  name: "QuestionForm",
  components: { Multiselect },
  methods: {
    ...mapActions(["addQuestion"]),
    submit() {
      const data = {
        title: this.title,
        body: this.body,
        codeSnippet: this.codeSnippet,
        level: this.selectedLevel.map((a) => a.code),
        category: this.selectedCategory.map((a) => a.code),
      };
      this.$store.dispatch("addQuestion", data);
      this.title = "";
      this.body = "";
      this.codeSnippet = "";
      this.level = "";
      this.category = "";
    },
  },
  data() {
    return {
      categories: [
        { name: "HTML", code: "html" },
        { name: "CSS", code: "css" },
        { name: "SCSS", code: "scss" },
        { name: "React", code: "react" },
        { name: "Redux", code: "redux" },
        { name: "Vue", code: "vuejs" },
        { name: "JS", code: "jscore" },
      ],

      gradeOptions: [
        { name: "Junior", code: "junior" },
        { name: "Middle", code: "middle" },
        { name: "Senior", code: "senior" },
        { name: "Lead", code: "lead" },
        { name: "Architect", code: "architect" },
      ],

      selectedCategory: [],
      selectedLevel: [],
      title: "",
      codeSnippet: "",
      body: "",
    };
  },
};
</script>
