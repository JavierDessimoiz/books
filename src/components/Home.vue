<template>
  <div class="container">
      <Header />
      <b-form-group v-if="!loadingCategoryOptions" label="Filter by category:" label-for="select-company">
      <b-form-select
        v-model="categorySelected"
        :options="categoryOptions"
        v-on:change="getBooksbyCategory(categorySelected)"
        size="sm"
        class="mb-3"
        
      ></b-form-select>
      </b-form-group >
      <div v-else>
        <b-spinner variant="primary"></b-spinner>
      </div>

      <div v-if="categorySelected != null" class="input-group rounded mb-2">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search by title"
          aria-label="Search"
          aria-describedby="search-addon"
          v-model="titleSearch"
        />
        <span class="input-group-text border-0" id="search-addon">
          <b-icon-search></b-icon-search>
        </span>
      </div>

      <div v-if="categorySelected != null  && !loadingFilteredBooks">
      <div class="row-center mb-2" >{{ getResultsMessage() }}</div>
        <Books v-bind:books="filteredBooks" />
      </div>
      <div v-if="loadingFilteredBooks">
        <b-spinner variant="primary"></b-spinner>
      </div>
      <Footer />
    </div>

</template>

<script>
import { CategoryService } from "../js/services/categoryService.js";
import { BookService } from "../js/services/bookService.js";
import Books from "./Books.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Home",
  components: { Books, Header, Footer },
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
      if (!category) {
        this.books = [];
        return;
      }
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
    },
    getResultsMessage() {
      return this.filteredBooks.length == 1
        ? this.filteredBooks.length + " Result."
        : this.filteredBooks.length + " Results.";
    }
  }
};
</script>


<style scoped>

</style>
