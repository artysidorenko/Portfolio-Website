<template>
  <div class="wrapper">
    <img src="../assets/profilepic.jpg" alt="Profile Photo">
    <div>
      <h2 class="">Tech Skills</h2>
      <ul class="">
        <li>
          <strong>Front-End:</strong> JavaScript, jQuery, CSS & SCSS, HTML, React.js & Redux
        </li>
        <li>
          <strong>Back-End & Database:</strong> Node.js & Express; SQL and MongoDB; REST APIs and Socket.io
        </li>
        <li>
          <strong>Other:</strong> Git version-control, Meteor Full-stack Framework, Linux OS, also some experience with Java (Eclipse/Maven,
          together with Spring Framework)
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;

  img {
    align-self: center;
    box-sizing: border-box;
    max-width: 30%;
    margin: 0 40px;
    height: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 40%;
    h2 {
      text-align: center;
      font-size: 1.6rem;
    }
    ul {
      display: block;
    }
  }
}

@media screen and (max-width: 700px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0 5px;
    img {
      max-width: 50%;
      margin: 10px;
    }
    div {
      padding-top: 5px;
      max-width: 75%;
      h2 {
        font-size: 1.2rem;
        padding-top: 5px;
      }
      ul {
        padding: 0;
        * {font-size: 0.8rem;}
      }
    }
  }
}
</style>

<script>
export default {
  name: 'About'
}
</script>
