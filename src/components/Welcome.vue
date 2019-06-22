<template>
  <div class="wrapper">
    <div>
      <h1>
        Arty Sidorenko - Self-Taught Web Developer
      </h1>
      <br>
      <!-- <p>Welcome to my Homepage!</p> -->
      <p>Scroll Down to Continue, or</p>
      <a href="#portfolio" class="btn btn-secondary btn-wide">Skip to Projects</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: middle;
  position: relative;

  .button-group {
    display: flex!important;
    flex-direction: row;
    justify-content: center;
  }
  .btn {
    width: 225px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1, p {
      position: relative;
      text-align: center;
      color: $bg-neutral;
    }
    h1 {font-size: 1.8rem}
    p {font-size: 1.4rem}
    a {
      position: relative;
      display: inline!important;
      margin: auto;
    }
  }
}
</style>

<script>
export default {
  name: 'Welcome'
}
</script>
