<template>
  <paginate v-model="page" :pageCount="10" :containerClass="'pagination'" :clickHandler="clickCallback"></paginate>
</template>
<script>
import Paginate from "vuejs-paginate";
export default {
  name: "Pagination",
  components: {
    Paginate,
  },
  methods: {
    clickCallback: function (page) {
      console.log(page);
    },
  },
  data() {
    return {
      page: "15",
    };
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 20px;
  margin: 50px 0;
}
.page-item {
  color: red;
}
</style>
