<template>
  <div class="container">
    <div>
      <b-form-select v-model="categorySelected" :options="categoryOptions" size="sm" class="mt-3"></b-form-select>
      <div class="mt-3">
        Selected:
        <strong>{{ categorySelected }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { CategoryService } from "../js/services/categoryService.js";

export default {
  name: "Home",
  props: {},
  data() {
    return {
      loading: false,
      error: null,
      categoryList: {},
      categorySelected: null,
      categoryOptions: null
    };
  },
  mounted() {
    this.saveFirstResults();
  },
  methods: {
    saveFirstResults() {
      //First categories given by the endpoint
      const topCategories = 10;
      this.loading = true;
      CategoryService.getAll$()
        .then(response => {
          this.loading = false;
          if (response.data.num_results >= topCategories) {
            this.categoryList = response.data.results.slice(0, topCategories);
            //Provide a selection of categories
            this.categoryOptions = this.categoryList.map(el => ({text: el.list_name, value: el.list_name_encoded}));
          }
        })
        .catch(error => {
          this.loading = false;
          this.error = error;
        });
    },
  }
};
</script>


<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
