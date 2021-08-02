<template>
  <div>
    <b-card
      :title="book.title"
      :img-src="book.book_image"
      :img-alt="book.title"
      img-top
      class="mb-2"
    >
      <b-card-text>By {{ book.author }}</b-card-text>
      <b-card-text>{{ book.description }}</b-card-text>
      <!-- <b-link :href= "https://www.google.com/search?q=" target="_blank" class="card-link">Search</b-link>-->
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: ["book"],
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
