<template>
  <div class="flex flex-col max-w-xl min-h-screen">
    <form v-on:submit.prevent="submit" class="flex flex-col gap-4 text-sm">
      <div>
        <h2 class="font-bold text-3xl">Add New Question</h2>
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
        <div class="flex flex-col gap-2">
          Technology:
          <Dropdown placeholder="Select a technology" :options="categories" @updateSelected="updateTechnologies" />
        </div>
      </div>

      <div class="h-18 w-3/5">
        <div class="flex flex-col gap-2">
          Grade:
          <Dropdown placeholder="Grade a grade" :options="gradeOptions" @updateSelected="updateGrades" />
        </div>
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
import Dropdown from "../../components/Dropdown.vue";
import { mapActions } from "vuex";

export default {
  name: "QuestionForm",
  components: { Dropdown },
  methods: {
    ...mapActions(["addQuestion"]),
    submit() {
      const data = {
        title: this.title,
        body: this.body,
        codeSnippet: this.codeSnippet,
        level: this.selectedLevel,
        category: this.selectedCategory,
      };
      this.$store.dispatch("addQuestion", data);
      this.title = "";
      this.body = "";
      this.codeSnippet = "";
      this.level = "";
      this.category = "";
      this.$router.push({ path: "/" });
    },

    updateTechnologies(values) {
      this.selectedCategory = values;
    },

    updateGrades(values) {
      this.selectedLevel = values;
    },
  },
  data() {
    return {
      categories: ["HTML", "CSS", "SCSS", "React", "Redux", "Vue", "JS"],
      gradeOptions: ["Junior", "Middle", "Senior", "Lead", "Architect"],

      selectedCategory: [],
      selectedLevel: [],
      title: "",
      codeSnippet: "",
      body: "",
    };
  },
};
</script>
