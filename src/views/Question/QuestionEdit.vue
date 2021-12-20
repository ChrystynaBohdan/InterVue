<template>
  <div class="flex flex-col max-w-xl min-h-screen">
    <form v-on:submit.prevent="submit" class="flex flex-col gap-4 text-sm">
      <div>
        <h2 class="font-bold text-3xl">Edit Question</h2>
        <h1 class="text-xs font-extralight text-gray-400">by Volodymyr Sen</h1>
      </div>
      <label class="flex flex-col gap-2">
        Title:
        <input
          type="text"
          placeholder="Question's title"
          class="rounded-md py-1 px-2 outline-none border border-solid border-gray-300"
          v-model="formValue.title"
        />
      </label>

      <div class="h-18 w-3/5">
        <div class="flex flex-col gap-2">
          Level:
          <Dropdown placeholder="Select a grade" :options="gradeOptions" @updateSelected="updateGrades" />
        </div>
      </div>
      <div class="h-18 w-3/5">
        <div class="flex flex-col gap-2">
          Category:
          <Dropdown placeholder="Select a category" :options="categories" @updateSelected="updateTechnologies" />
        </div>
      </div>

      <label class="flex flex-col gap-2">
        Question's body:
        <textarea
          required
          rows="3"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Question's body goes here"
          v-model="formValue.body"
        ></textarea>
      </label>

      <label class="flex flex-col gap-2"
        >Code snippet:
        <textarea
          rows="4"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Right a code example here"
          v-model="formValue.codeSnippet"
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
import { mapActions, mapGetters } from "vuex";
import Dropdown from "../../components/Dropdown.vue";

export default {
  name: "EditForm",
  components: { Dropdown },
  computed: {
    ...mapGetters(["questionByID"]),
    question() {
      return this.questionByID(this.$route.params.id);
    },
  },

  methods: {
    ...mapActions(["editQuestion"]),
    async submit() {
      await this.$store.dispatch("editQuestion", this.formValue);
      this.title = "";
      this.body = "";
      this.codeSnippet = "";
      this.level = "";
      this.category = "";
      await this.$router.push({ path: "/" });
    },

    updateTechnologies(values) {
      this.formValue.selectedCategory = values;
    },

    updateGrades(values) {
      this.formValue.selectedLevel = values;
    },
  },

  data() {
    return {
      categories: [
        { name: "HTML", code: "HTML" },
        { name: "CSS", code: "CSS" },
        { name: "SCSS", code: "SCSS" },
        { name: "React", code: "React" },
        { name: "Redux", code: "Redux" },
        { name: "Vue", code: "Vue" },
        { name: "JS", code: "JS" },
      ],

      gradeOptions: [
        { name: "Junior", code: "Junior" },
        { name: "Middle", code: "Middle" },
        { name: "Senior", code: "Senior" },
        { name: "Lead", code: "Lead" },
        { name: "Architect", code: "Architect" },
      ],

      formValue: {
        title: "",
        body: "",
        selectedLevel: [],
        selectedCategory: [],
        codeSnippet: "",
      },
    };
  },
  mounted() {
    this.formValue = { ...this.question };
  },
};
</script>
