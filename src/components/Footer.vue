<template>
  <div class="container">

      <b-button
        href="https://www.linkedin.com/in/javierdessimoiz/"
        target="_blank"
        variant="outline-primary"
        class="mr-2"
      >
        <b-icon icon="linkedin" font-scale="1"></b-icon>
      </b-button>
      <b-button href="https://github.com/JavierDessimoiz" target="_blank" variant="outline-dark">
        <b-icon icon="github" font-scale="1"></b-icon>
      </b-button>

      <b-button href="mailto:dessimoiz@gmail.com" target="_blank" variant="outline-danger">
        <b-icon icon="envelope" font-scale="1"></b-icon>
      </b-button>
    </div>

</template>


<script>
export default {
  name: "Footer",

  data() {
    return {};
  }
};
</script>


<style scoped>
</style>
