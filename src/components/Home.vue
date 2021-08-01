<template>
  <div class="container">
    <div>
      <b-form-select v-model="categorySelected" :options="categoryOptions" size="sm" class="mb-3"></b-form-select>
      <div v-if="categorySelected !== null" class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          v-on:keyup.enter="getBooksbyCategory(categorySelected)"
        />
        <span class="input-group-text border-0" id="search-addon">
          <b-icon-search></b-icon-search>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { CategoryService } from "../js/services/categoryService.js";
import { BookService } from "../js/services/bookService.js";
export default {
  name: "Home",
  props: {},
  data() {
    return {
      loading: false,
      error: null,
      category: [],
      categorySelected: null,
      categoryOptions: []
    };
  },
  mounted() {
    this.saveFirstResults();
  },
methods: {
    saveFirstResults() {
      //First categories given by the endpoint
      this.loading = true;
      CategoryService.getAll$()
        .then(response => {
          this.loading = false;
          let topCategories = 10;
          if (response.data.num_results < 10) {
             topCategories = response.data.num_results;
          }
          this.category = response.data.results.slice(0, topCategories);
          //Provide a selection of categories
          this.categoryOptions = this.category.map(el => ({text: el.list_name, value: el.list_name_encoded}));
        })
        .catch(error => {
          this.loading = false;
          this.error = error;
        });
    },
      getBooksbyCategory(category) {
      this.loadingBookList = true;
      BookService.getListByCategory$(category)
        .then(response => {
          this.loadingBookList = false;
          //Provide a selection of categories
          console.log(response.data);
        })
        .catch(error => {
          this.loadingBookList = false;
          this.error = error;
        });
    }
  }
};
</script>


<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
