<template>
  <div class="w-full">
    <label class="font-semibold text-xl mt-2">{{ label }}</label>
    <multiselect
      v-model="value"
      v-on:input="onInput"
      tag-placeholder="Add this as new tag"
      :placeholder="placeholder"
      label="name"
      track-by="code"
      :options="options"
      :multiple="true"
      :taggable="true"
      @tag="addTag"
      class="h-16"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },

  props: ["label", "options", "value", "placeholder"],
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

<style>
.multiselect.invalid .multiselect__tags span {
  background-color: aliceblue;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

