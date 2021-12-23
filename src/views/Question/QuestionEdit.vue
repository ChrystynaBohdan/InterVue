<template>
  <div class="flex flex-col max-w-xl min-h-screen">
    <form v-on:submit.prevent class="flex flex-col gap-4 text-sm">
      <div>
        <h2 class="font-bold text-3xl">{{ formValue.title }}</h2>
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
          <Dropdown
            placeholder="Choose level:"
            :selected="formValue.selectedLevel"
            :options="gradeOptions"
            @updateSelected="updateGrades"
          />
        </div>
      </div>
      <div class="h-18 w-3/5">
        <div class="flex flex-col gap-2">
          Category:
          <Dropdown
            placeholder="Choose category: "
            :selected="formValue.selectedCategory"
            :options="categories"
            @updateSelected="updateTechnologies"
          />
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
          @click="submit"
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
      await this.$router.push({ path: `/questions/${this.$route.params.id}` });
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
      categories: ["HTML", "CSS", "SCSS", "React", "Redux", "Vue", "JS"],
      gradeOptions: ["Junior", "Middle", "Senior", "Lead", "Architect"],
      formValue: {
        title: "",
        body: "",
        selectedLevel: [],
        selectedCategory: [],
        codeSnippet: "",
      },
    };
  },
  created() {
    this.formValue = {
      _id: this.question._id,
      title: this.question.title,
      body: this.question.body,
      selectedLevel: this.question.level,
      selectedCategory: this.question.category,
      codeSnippet: this.question.codeSnippet,
    };
  },
};
</script>
