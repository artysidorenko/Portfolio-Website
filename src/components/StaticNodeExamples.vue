<template>
  <div class="wrapper">
    <div class="frame">

      <Project
        name="Pizza Recipe Portal"
        img="PracticePizza.jpeg"
        visit="https://practicepizza.herokuapp.com/"
        desc="Full stack web application for sharing pizza recipes."
        tools="Node/Express.js, Handlebars Templating, Sequelize ORM with SQL Database"
        source="https://github.com/artysidorenko/PracticePizza"
      ></Project>

      <Project
        name="Leghorn Chat/Reply WebApp"
        img="Leghorn.png"
        visit="https://leghorn-pj.herokuapp.com/"
        desc="Full stack web application for user status messaging/replying (static messaging - without Sockets)."
        tools="Node.js PostGreSQL and bcrypt"
        source="https://github.com/artysidorenko/Leghorn"
      ></Project>

    </div>
  </div>
</template>

<script>
import Project from './ProjectTemplate/Project'
export default {
  name: 'StaticNodeExamples',
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
