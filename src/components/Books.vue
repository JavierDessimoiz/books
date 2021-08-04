<template>
  <div class="row">
    <b-card-group class="col-sm-12 col-md-6 col-lg-4" v-for="(book, index) in books" :key="index">
      <Book v-bind:book ="book"/>
    </b-card-group>  
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
