<template>
  <div class="container">
    <div>
      <b-form-select
        v-model="categorySelected"
        :options="categoryOptions"
        v-on:change="getBooksbyCategory(categorySelected)"
        size="sm"
        class="mb-3"
      ></b-form-select>
      <div v-if="categorySelected !== null" class="input-group rounded mb-2">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          v-model="titleSearch"
        />
        <span class="input-group-text border-0" id="search-addon">
          <b-icon-search></b-icon-search>
        </span>
      </div>
      <Books v-bind:books="filteredBooks" />
    </div>
  </div>
</template>

<script>
import { CategoryService } from "../js/services/categoryService.js";
import { BookService } from "../js/services/bookService.js";
import Books from "./Books.vue";
export default {
  name: "Home",
  components: { Books },
  props: {},
  data() {
    return {
      loading: false,
      error: null,
      category: [],
      categorySelected: null,
      categoryOptions: [],
      books: [],
      titleSearch: ""
    };
  },
  mounted() {
    this.saveFirstResults();
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book =>
        book.title.toLowerCase().includes(this.titleSearch.toLowerCase())
      );
    }
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
          this.categoryOptions = this.category.map(el => ({
            text: el.list_name,
            value: el.list_name_encoded
          }));
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
          this.books = response.data.results.books;
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
