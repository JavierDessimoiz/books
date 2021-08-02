<template>
  <div>
    <div v-for="(book, index) in books" :key="index">
      <Book v-bind:book ="book"/>
    </div>
  </div>

</template>


<script>
import Book from './Book.vue'
export default {
  name: "Books",
  props: ['books'],
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
