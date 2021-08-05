<template>
  <div class="footer-nav">
      <b-button
        href="https://www.linkedin.com/in/javierdessimoiz/"
        target="_blank"
        variant="outline-primary"
        class="footer-icon"
      >
        <b-icon icon="linkedin" font-scale="1"></b-icon>
      </b-button>
      <b-button href="https://github.com/JavierDessimoiz" target="_blank" variant="outline-primary" class="footer-icon">
        <b-icon icon="github" font-scale="1"></b-icon>
      </b-button>

      <b-button href="mailto:dessimoiz@gmail.com" target="_blank" variant="outline-primary" class="footer-icon">
        <b-icon icon="envelope" font-scale="1"></b-icon>
      </b-button>
      </div>

</template>


<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-icon{
  margin: 0 10px;
}

.footer-nav{
   padding-top: 10px;
   padding-bottom: 10px;
}
</style>