<template>
    <b-card
      class="mb-4"
    >
        <b-card :img-src="book.book_image" :img-alt="book.title" overlay class="mb-2"></b-card>
        <b-card-title :title="book.title" class="mb-2"> </b-card-title>
        <b-card-text class="mb-2">By {{ book.author }}</b-card-text>
        <b-card-text class="mb-2">{{ book.description }}</b-card-text>

        <b-button class="btn btn-light btn-sm"
          pill
          type="button"
          :href="generateUrl()"
          target="_blank"
          
        >See on google <b-icon icon="link45deg" font-scale="1"></b-icon></b-button>
    </b-card>
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
  methods: {
    generateUrl() {
      return (
        "https://www.google.com/search?q=" +
        this.book.title.replace(/\s/g, "+") +
        "+" +
        this.book.author.replace(/\s/g, "+")
      );
    }
  }
};
</script>


<style scoped>
</style>
