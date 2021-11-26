<template>
  <div>
    <div class="flex">
      <label class="px-2 font-semibold text-xl mt-2">{{ label }}</label>
      <multiselect
        v-model="value"
        v-on:input="onInput"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
        class="w-72 h-16"
      ></multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  props: ["label", "options", "value"],
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    onInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style></style>
