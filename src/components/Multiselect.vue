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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style>
.multiselect__tags {
    border: none !important;
    background: transparent;
    font-family: WorkSans-light !important;
    font-size: 14px !important;
    padding: 5px !important;
}

.multiselect__tag {
    border: 1px solid rgba(60, 60, 60, 0.26) !important;
    margin-bottom: 0px !important;
    margin-right: 5px !important;
    background-color: rgb(174, 163, 163) !important;
    /* min-height: 20px !important;
    min-width: 25px !important; */
}
.multiselect__placeholder {
    display: inline-block !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
}

.multiselect__option--highlight {
  background-color: grey;
}
</style>