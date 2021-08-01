<template>
  <div class="container">
    <div v-for="(book, index) in bookList" :key="index" class="row">
      <Book v-bind:book ="book"/>
    </div>
  </div>

</template>


<script>
import Book from './Book.vue'
export default {
  name: "Books",
  props: ['bookList'],
  components: {
    Book
  },
  data() {
    return {
      loading: false
    };
  },
  mounted() {},
  methods: {}
};
</script>


<style scoped>

</style>
