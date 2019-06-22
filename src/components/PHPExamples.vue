<template>
  <div class="wrapper">
    <div class="frame">

      <Project
        name="Hotel0Local"
        img="hotel0local.png"
        visit="https://hotel0local.herokuapp.com"
        desc="Hotel booking simulator - PHP based back-end API with Vue.js front-end interface"
        tools="Laravel PHP framework, Vue.js"
        source="https://github.com/artysidorenko/Hotel-API"
      ></Project>

      <Project
        name="PHP Bookstore"
        img="phpbooks.png"
        visit="https://phpbooks.herokuapp.com"
        desc="Bookstore inventory simulator"
        tools="Symfony PHP framework"
        source="https://github.com/artysidorenko/PHPBooks"
      ></Project>

    </div>
  </div>
</template>

<script>
import Project from './ProjectTemplate/Project'
export default {
  name: 'PHPExamples',
  components: { Project }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.frame {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 80vh;
  max-width: 900px;
  margin: auto;
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 1.1rem;
  }
}
</style>
