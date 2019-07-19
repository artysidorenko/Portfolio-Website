<template>
  <div class="wrapper">
    <img src="../assets/profilepic.jpg" alt="Profile Photo">
    <div>
      <h3>Tech Skills</h3>
      <ul>
        <li>
          <strong>Front-End:</strong> <span
          desktop-content="HTML and CSS (SCSS, and Bootstrap), JavaScript including jQuery, Vue.js & Vuex, and React.js & Redux"
          mobile-content="JavaScript, jQuery, CSS & SCSS, HTML, Vue.js, React.js & Redux"
          ></span>
        </li>
        <li>
          <strong>Back-End & Database:</strong>
          <span
          desktop-content="PHP, including OOP principles and Symfony/Laravel; Node.js/Express; SQL and MongoDB together with ORM tools; REST APIs"
          mobile-content="PHP (Symfony/Laravel), Node.js/Express; SQL and MongoDB; REST APIs"
          ></span>
        </li>
        <li>
          <strong>Other:</strong>
          <span
          desktop-content="Wide range of tools: all major operating systems including Linux; Git version control; build and deployment tools such as Webpack; Meteor full-stack framework; some experience with Java (including Spring and Maven); as well as experience with Drupal CMS platform"
          mobile-content="Git version-control, Meteor Full-stack Framework, Linux OS, also some experience with Java (Eclipse/Maven,
          together with Spring Framework)"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.wrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;

  img {
    align-self: center;
    box-sizing: border-box;
    max-width: 250px;
    margin: 0 40px;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    h3 {
      font-weight: bold;
      text-align: center;
      font-size: 1.4rem;
    }
    ul {
      display: block;
      
      li {
        margin-top: 10px;
      }
    }
  }
}

span {
  &::after{
  content: attr(desktop-content)}
}

@media screen and (min-width: 1000px) {
  .wrapper {
    border: 2px solid $bg-dark;
    background-color: $bg-light;
    border-radius: 10px;
    max-width: 900px;
    margin: auto;
    z-index: 99999
  }
}

@media screen and (max-width: 700px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0 5px;
    img {
      max-width: 40%;
      margin: 10px;
    }
    div {
      padding-top: 0px;
      max-width: 75%;
      h2 {
        font-size: 1.2rem;
        padding-top: 0px;
        font-size: 1.1rem;
      }
      ul {
        padding: 0;
        * {font-size: 0.8rem;}
        li {margin-top: 0;}
      }
    }
  }

  span {
    &::after{
    content: attr(mobile-content)}
  }
}
</style>

<script>
export default {
  name: 'About'
}
</script>
