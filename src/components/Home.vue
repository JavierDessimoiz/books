<template>
  <div class="container">
    <div>
      <b-form-select
        v-model="categorySelected"
        :options="categoryOptions"
        v-on:change="getBooksbyCategory(categorySelected)"
        size="sm"
        class="mb-3"
        v-if="!loadingCategoryOptions"
      ></b-form-select>
      <b-form-select v-else class="spinner-border" role="status">
        <span class="sr-only"></span>
      </b-form-select>

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
      <div v-if="categorySelected == null || !loadingFilteredBooks">

          <div v-if="this.filteredBooks.length == 1">{{ this.filteredBooks.length }} result</div>
          <div v-else>{{ this.filteredBooks.length }} results</div>

          <Books v-bind:books="filteredBooks" />
      </div>
      <div v-else class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
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
      loadingCategoryOptions: false,
      error: null,
      category: [],
      categorySelected: null,
      categoryOptions: [],
      books: [],
      titleSearch: "",
      loadingFilteredBooks: false
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
      this.loadingCategoryOptions = true;
      CategoryService.getAll$()
        .then(response => {
          this.loadingCategoryOptions = false;
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
          this.loadingCategoryOptions = false;
          this.error = error;
        });
    },
    getBooksbyCategory(category) {
      this.loadingFilteredBooks = true;
      BookService.getListByCategory$(category)
        .then(response => {
          this.books = response.data.results.books;
          this.loadingFilteredBooks = false;
        })
        .catch(error => {
          this.loadingFilteredBooks = false;
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
