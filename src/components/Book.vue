<template>
  <div class="container">
    <div class="row">
      <div class="col">{{ title }}</div>
      <div class="col">{{ description }}</div>
      <div class="col">{{ author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: { title, description, author },
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
h1 {
  margin: 40px 0 0;
}
</style>
