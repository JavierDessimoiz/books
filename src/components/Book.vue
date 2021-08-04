<template>
  <div>
    <b-card
      :title="book.title"
      :img-src="book.book_image"
      :img-alt="book.title"
      img-top
      class="mb-2"
      style="max-height: 600px; overflow: auto;"
    >
        <b-card-text>By {{ book.author }}</b-card-text>
        <b-card-text>{{ book.description }}</b-card-text>

        <b-button
          pill
          variant="primary"
          type="button"
          :href="generateUrl()"
          target="_blank"
        >See on google</b-button>
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
