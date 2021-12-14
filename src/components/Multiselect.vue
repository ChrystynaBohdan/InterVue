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
    multiselect: Multiselect,
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

    onInput(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.multiselect {
  min-height: 32px;
}
.multiselect__select {
  height: 32px;
  top: 0;
}
.multiselect__tags {
  border: 1px solid #d1d5db;
  background: #fff;
  font-family: "Hind Vadorada", Arial, sans-serif;
  font-size: 0.875rem;
  min-height: 32px;
  padding: 0 40px 0 8px;
}

.multiselect__tag {
  background: #e2e8f0;
}

.multiselect__option--highlight {
  background-color: #e2e8f0;
}

.multiselect__option--highlight:after {
  background-color: #e2e8f0;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: #e2e8f0;
}

.multiselect__tag-icon:after {
  content: "×";
  color: #fff;
  font-size: 0.875rem;
}

.multiselect,
.multiselect__input,
.multiselect__single {
  font-size: 0.875rem;
}

.multiselect__placeholder {
  color: #969ea7;
  display: inline-block;
  margin-bottom: 8px;
  padding-top: 2px;
  font-size: 0.875rem;
}
</style>
