<template>
  <div class="wrapper">
    <div class="frame">
      <a href="https://en-gb.facebook.com/public/Arty-Sidorenko" rel="nofollow" target="_blank">
        <font-awesome-layers class="fa-4x">
          <font-awesome-icon :icon="['fab', 'facebook-square']" class="fa-facebook-square"></font-awesome-icon>
        </font-awesome-layers>
      </a>
      <a href="https://www.codewars.com/users/PJSmooth" rel="nofollow" target="_blank">
        <img src="../assets/codewars-logo.png" class="contact__img"/>
      </a>
      <a href="https://www.linkedin.com/in/arty-sidorenko-536a3927/" rel="nofollow" target="_blank">
        <font-awesome-layers class="fa-4x">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-linkedin"></font-awesome-icon>
        </font-awesome-layers>
      </a>
      <a href="https://github.com/artysidorenko" rel="nofollow" target="_blank">
        <font-awesome-layers class="fa-4x">
          <font-awesome-icon :icon="['fab', 'github-square']" class="fa-github-square"></font-awesome-icon>
        </font-awesome-layers>
      </a>
     </div>

    <footer>
      <p>
        Navigation icons made by
        <a href="https://www.freepik.com/" title="Freepik" target="_blank">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a> is licensed by
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >CC 3.0 BY</a>
      </p>
      <p>
        Site built by <a class="footer__link" target="_blank" href="https://github.com/artysidorenko">pjsmooth/Arty Sidorenko</a> using Vue.js & <a target="_blank" href="https://github.com/alvarotrigo/vue-fullpage.js">vue-fullpage.js</a>. Source code available on <a target="_blank" href="https://github.com/artysidorenko/Portfolio-Website">GitHub</a>.
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

.frame {
  display: flex;
  max-width: 400px;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  margin: auto;
}

a {
  height: 64px;
  line-height: 61px; /* need to manually adjust line height to center img with fa icons */
}

img {
  height: 56px;
  border-radius: 3px;
}

a:hover, img:hover {
  filter: sepia(100%);
  filter: blur(1px);
}

.fa-facebook-square {
  color: rgb(41, 72, 125);
}

.fa-linkedin {
  color: #006097;
}

.fa-github-square {
  color: black;
}

footer {
  position: relative;
}

p {
  height: 20px;
  line-height: 20px;
  bottom: 20px;
}

@media screen and (min-width: 1000px) {
  .wrapper {
    border: 2px solid $bg-dark;
    background-color: $bg-neutral;
    border-radius: 10px;
    max-width: 900px;
    margin: auto;
    z-index: 99999
  }
  .wrapper {
    height: auto;
    padding-bottom: 10px;
  }
}

@media screen and (max-width: 700px) {
  footer, p {
    line-height: 10px;
    margin: 0px;
  }
  footer {
    height: 100px;
    a {
      line-height: 20px!important;
    }
  }
  p {
    height: 50px;
  }
}
</style>

<script>
export default {
  name: 'Contact'
}
</script>
