<template>
  <div class="wrapper">
    
    <div @click="hiddenOff" class="frame">
      <img class="img-fluid thumbnail" :src="getImgUrl(img)" :alt="name">
      <p class="overlay">{{ name }} - Click to Learn More</p>
    </div>

    <div class="modal" :class="{hidden: isHidden}" v-on:keyup.esc="hiddenOn" ref="modal" tabindex="0">
      <span @click="hiddenOn" class="close">×</span>
      <img class="modal-image" :src="getImgUrl(img)">
      <div class="caption">
        <strong>Visit:</strong>
        <a :href="visit" target="_blank">Website Link</a>
        <br>
        <strong>Description:</strong>
        {{ desc }}
        <br>
        <strong>Tools/Frameworks Used:</strong>
        {{ tools }}
        <br>
        <strong>Github:</strong>
        <a :href="source">Source Code</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['name', 'img', 'visit', 'desc', 'tools', 'source'],
  data: function () {
    return { isHidden: true }
  },
  methods: {
    hiddenOff () {
      this.isHidden = false
      this.$refs.modal.focus()
    },
    hiddenOn () {
      this.isHidden = true
    },
    onEscapeKeyUp (event) {
      if (event.key === 'Escape') this.isHidden = true
    },
    getImgUrl (img) {
      return require('../../assets/' + img)
    }
  },
  watch: {
    isHidden () {
      if (this.isHidden === false) {
        window.addEventListener('keyup', this.onEscapeKeyUp)
      } else {
        window.removeEventListener('keyup', this.onEscapeKeyUp)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none!important;
}

.wrapper {
  position: relative;
  margin-bottom: 30px;
}

.frame {
  position: relative;
  overflow: hidden;
  padding: none!important;
  max-width: 350px !important;
  display: block;
  cursor: pointer;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.thumbnail {
  width: 100%;
  opacity: 1;
  -webkit-transition: opacity 1s; /* Safari */
  transition: opacity 1s;
  border-radius: 10px;
}

.overlay {
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  opacity: 0;
  -webkit-transition: opacity 1s; /* Safari */
  transition: opacity 1s;
  font-weight: bold;
}

.frame:hover .frame:hover > .thumbnail {
  filter: blur(1px);
  opacity: 0.4;
  -webkit-transition: opacity 1s; /* Safari */
  transition: opacity 1s;
}

.frame:hover .frame:hover > .overlay {
  opacity: 1;
  -webkit-transition: opacity 1s; /* Safari */
  transition: opacity 1s;
}

.modal {
  display: flex;
  position: fixed;
  z-index: 100; /* Sit on top */
  padding: 100px; /* Location of the box */
  left: 0;
  top: 300vh;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
  flex-direction: row;
  align-items: center;
}

.caption {
  float: right;
  margin: auto;
  display: block;
  width: 45%;
  max-width: 700px;
  text-align: left;
  color: #ccc;
  padding: 10px 0;
  padding-left: 20px;
}

.caption > strong {
  text-decoration: underline;
}

.modal-image {
  float: left;
  margin: auto;
  display: block;
  max-width: 700px;
  padding: 0px 0px;
  width: 50%;
  border-radius: 5px;
}

/* Add Animation */
.modal-image, .caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform: scale(0)}
  to {-webkit-transform: scale(1)}
}

@keyframes zoom {
  from {transform: scale(0.1)}
  to {transform: scale(1)}
}

/* The Close Button */
.close {
  // position: fixed;
  align-self: flex-start;
  order: 99;
  top: 50px;
  right: 100px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .frame {
    position: relative;
    width: 100%;
    height: auto;
  }
  .thumbnail {
    width: 100%;
    height: 100px;
  }
  .wrapper {
    margin: 0px;
  }
  .overlay {
    display: none;
  }
  .modal-image {
    width: 75%
  }
}

@media screen and (max-width: 1000px) {
  .modal {
    flex-direction: column;
    padding: 30px;
    padding-top: 50px;
  }
  .caption {
    width: 100% !important;
    margin: 0 !important;
    font-size: small !important;
  }
  .close {
    top: 60px !important;
    right: 10px !important;
  }
}

@media screen and (min-width: 701px) {
  .frame {
    width: 350px !important;
    height: 225px !important;
  }
}
/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal__image {
    width: 100%;
  }
}
</style>

