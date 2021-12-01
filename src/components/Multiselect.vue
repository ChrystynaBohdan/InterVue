<template>
  <div class="flex gap-2">
    <label class="font-medium mt-2">{{ label }}</label>
    <multiselect
      v-model="value"
      v-on:input="onInput"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="options"
      :option-height="104"
      :multiple="true"
      :taggable="true"
      @tag="addTag"
      class="flex-grow h-16 border-red-500"
      :class="{ invalid: isInvalid }"
    ></multiselect>
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

<style>
.multiselect.invalid .multiselect__tags span {
  background-color: aliceblue;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
