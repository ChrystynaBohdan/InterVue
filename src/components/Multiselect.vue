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
  border: 1px solid #d1d5db;
  background: #fff;
  font-family: "Hind Vadorada", Arial, sans-serif;
  font-size: .875rem;
  padding: .5rem .75rem;
}

.multiselect__tag {
  background: #6B7280;  
}

.multiselect__option--highlight {
  background-color: #6B7280;
}

.multiselect__option--highlight:after {
  background-color: #6B7280;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: #969696;
}

.multiselect__tag-icon:after {
  content: "×";
  color: #fff;
  font-size: .875rem;
}

.multiselect,
.multiselect__input,
.multiselect__single {
  font-size: .875rem;
}

.multiselect__placeholder {
  color: #969ea7; 
  display: inline-block;
  margin-bottom: 8px;
  padding-top: 2px;
  font-size: .875rem;
}
</style>
