<template>
  <div class="wrapper">
    <div>
      <h2>
        <a target="_blank" href="https://focallocal.org">Focallocal.org</a>
      </h2>
      <ul>
        <p>
          Part of core team of front-end development volunteers, working on maintenance and
          re-designing site features using
          Meteor, React.js and MongoDB stack.
        </p>
        <li>Introduced video player and seamless social media sharing to drive user engagement</li>
        <li>Facilitated Discourse forum integration for live synchronisation between website and forum</li>
        <li>Redesigned site calendar logic for smart user-focused event tracking</li>
        <li>Part of technical documentation taskforce to improve on-boarding for new contributors</li>
      </ul>
      <p>
        <a
          target="_blank"
          href="https://github.com/focallocal/fl-maps/pulls?page=1&q=is%3Apr+author%3Aartysidorenko+is%3Aclosed"
        >
          Click here
          for a snapshot of code contributions via GitHub
        </a>
      </p>
    </div>
    <a target="_blank" href="https://focallocal.org">
      <img src="../assets/Focallocal.jpg" alt="Focallocal homepage">
    </a>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}
ul {
  max-width: 900px;
  margin: auto;
  list-style-type:disc;
  * {
    font-size: 1rem;
  }
}
div > p {
  text-align: center;
}
div > a {
  display: block;
  margin: auto;
}
img {
  height: 300px;
  width: auto;
  display: block;
  margin: auto;
}

@media screen and (min-width: 1000px) {
  .wrapper {
    border: 2px solid $bg-dark;
    background-color: $bg-neutral;
    border-radius: 10px;
    max-width: 900px;
    margin: auto;
    z-index: 99999;
    height: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 700px) {
  img {
    width: 80%;
    height: auto;
  }
  h2 {
    font-size: 0.8rem;
  }
  ul {
    padding-left: 15px;
    padding-right: 15px;
  }
  p, li {
    font-size: 0.6rem;
    // margin-bottom: 0px;
  }
}
</style>

<script>
export default {
  name: 'OpenSource'
}
</script>
