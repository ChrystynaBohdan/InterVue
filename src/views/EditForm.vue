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
          v-model="formModel.title"
        />
      </label>

      <div class="h-18 w-3/5">
        <label class="flex flex-col gap-2"
          >Level:
          <Multiselect :options="gradeOptions" v-model="formModel.selectedLevel" :placeholder="'Select a technology'" />
        </label>
      </div>

      <div class="h-18 w-3/5">
        <label class="flex flex-col gap-2">
          Category:
          <Multiselect
            :options="categories"
            v-model="formModel.selectedCategory"
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
          v-model="formModel.body"
        ></textarea>
      </label>

      <label class="flex flex-col gap-2"
        >Code snippet:
        <textarea
          rows="4"
          class="rounded-md py-3 px-2 outline-none border border-solid border-gray-300"
          placeholder="Right a code example here"
          v-model="formModel.codeSnippet"
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditForm",
  components: { Multiselect },
  computed: {
    ...mapGetters({ questionbyID: "questionbyID" }),
    question() {
      console.log("question");
      return this.questionbyID(this.$route.params.id);
    },
    // selectedCategory() {
    //   return this.question ? this.question.category : [];
    // },
    selectedLevel: {
      get() {
        return this.question ? this.question.level : [];
      },
      set() {
        return this.question.level;
      },
    },
    title: {
      get() {
        return this.question ? this.question.title : "";
      },
      set() {
        return this.question.title;
      },
    },
    codeSnippet: {
      get() {
        return this.question ? this.question.codeSnippet : "";
      },
      set() {
        return this.question.codeSnippet;
      },
    },
    body: {
      get() {
        return this.question ? this.question.body : "";
      },
      set() {
        return this.question.body;
      },
    },
  },

  methods: {
    ...mapActions(["editQuestion"]),
    submit() {
      const data = {
        id: this.id,
        title: this.title,
        body: this.body,
        codeSnippet: this.codeSnippet,
        level: this.selectedLevel.map((a) => a.code),
        category: this.selectedCategory.map((a) => a.code),
      };
      console.log(data);
      this.$store.dispatch("editQuestion", data);
      this.title = "";
      this.body = "";
      this.codeSnippet = "";
      this.level = "";
      this.category = "";
    },
  },
  watch: {
    questionbyID(value) {
      console.log("jkjhgh", value);
      this.formModel.id = value.id;
      this.formModel.title = value.title;
      this.formModel.body = value.body;
      this.formModel.codeSnippet = value.codeSnippet;
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
      formModel: {
        id: NaN,
        title: "",
        body: "",
        codeSnippet: "",
        level: [],
        category: [],
        selectedLevel: [],
        selectedCategory: [],
      },
    };
  },
};
</script>
