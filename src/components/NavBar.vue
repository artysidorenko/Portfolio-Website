<template>
  <header>
    <b-navbar class="navbar fixed-top" toggleable="lg" type="dark">
      <b-navbar-brand class="navbar-text" href="#welcome">Arty Sidorenko</b-navbar-brand>
      <b-navbar-toggle class="toggle" target="navList"></b-navbar-toggle>
      <b-collapse id="navList" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item class="navbar-text" href="#about" data-menuanchor="about">About</b-nav-item>
          <li class="divider">/</li>
          <b-nav-item class="navbar-text" href="#opensource" data-menuanchor="opensource">Open Source Projects</b-nav-item>
          <li class="divider">/</li>
          <b-nav-item class="navbar-text" href="#portfolio" data-menuanchor="portfolio">Personal Projects</b-nav-item>
          <li class="divider">/</li>
          <b-nav-item class="navbar-text" href="#contact" data-menuanchor="contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style lang="scss" scoped>
  @import '../styles/_variables.scss';
  @mixin navtext {
    color: $bg-neutral!important;
    font-weight: bold!important;
  }
  .navbar {
    background-color: $bg-dark;
    color: $bg-neutral;
  }
  .divider {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    .divider {display: none}
    .navbar {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .navbar-text {
    @include navtext();
    font-size: 1.2rem!important;
    * {
      @include navtext();
      font-size: 1rem!important;
    }
  }
  .active, .active * {
    color: $text-focus!important;
  }
</style>

<script>
export default {
  name: 'NavBar'
}
</script>
