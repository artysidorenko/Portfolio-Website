<template>
  <div id="app">
    <NavBar></NavBar>

    <full-page ref="fullpage" :options="options" id="fullpage">

      <div class="section">
        <Welcome></Welcome>
      </div>

      <div class="section about">
        <div class="inner-section">
          <h1>About Me</h1>
          <img class="fp-prev" src="./assets/arrow-left.svg" alt="left arrow">
          <img class="fp-next" src="./assets/arrow-right.svg" alt="right arrow">
          <div class="slide">
            <About></About>
          </div>
          <div class="slide">
            <Timeline></Timeline>
          </div>
        </div>
      </div>
      <div class="section">
        <h1>Open Source Contributions</h1>
        <OpenSource></OpenSource>
      </div>

      <div class="section portfolio">
        <h1>Personal Projects</h1>
        <img class="fp-prev" src="./assets/arrow-left.svg" alt="left arrow">
        <img class="fp-next" src="./assets/arrow-right.svg" alt="right arrow">
        <h2 class="project-titles">
          <strong class="react-title active-slide-title">React.js</strong> /
          <strong class="static-title">Static Node & Express</strong> /
          <strong class="php-title">PHP</strong>
        </h2>
        <div class="slide react-slide" ref="react">
          <ReactExamples></ReactExamples>
        </div>
        <div class="slide static-slide" ref="static">
          <StaticNodeExamples></StaticNodeExamples>
        </div>
        <div class="slide php-slide" ref="php">
          <PHPExamples></PHPExamples>
        </div>
        <footer>Note: Webapps hosted on free cloud platforms such as Heroku may experience a lag on initial load, due to having to wake from sleep mode</footer>
      </div>

      <div class="section">
        <h1>Contact</h1>
        <Contact></Contact>
      </div>

    </full-page>
  </div>
</template>

<style lang="scss">
@import "./styles/imports/slide_mechanism.scss";
@import "./styles/imports/slide_arrows.scss";
@import "./styles/imports/scrollbar.scss";

.project-titles {
  font-size: 1.2rem;
  padding-top: 30px;
  text-align: left;
  max-width: 900px;
  margin: auto;
  text-align: center;

  strong {
    font-weight: normal;
  }
}

.active-slide-title {
  font-weight: bold!important;
}

.navbar-toggler {
    border: none;
    padding: 0;
    margin-top: 12px;
}

.section {
  position: relative;
  padding-top: 85px;
}
.inner-section h1 {
  text-align: center;
  font-size: 1.8rem;
}
.section h1 {
  text-align: center;
  font-size: 1.8rem;
}
footer {
  display: block;
  margin: auto;
  position: absolute;
  font-size: 0.8rem;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 700px) {
  .inner-section h1, .section h1 {
    font-size: 1.4rem;
  }
  .project-titles {
    padding-top: 0px;
    strong {
      font-size: 1rem;
      &::before {
        white-space: pre;
        content: "\A";
      }
    }
  }
}
</style>

<script>
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import About from './components/About'
import Timeline from './components/Timeline'
import OpenSource from './components/OpenSource'
import ReactExamples from './components/ReactExamples'
import StaticNodeExamples from './components/StaticNodeExamples'
import PHPExamples from './components/PHPExamples'
import Contact from './components/Contact'

function toggleActiveTitleClass (activeTitle, firstInactive, secondInactive) {
  document.getElementsByClassName(activeTitle)[0].classList.add('active-slide-title')
  document.getElementsByClassName(firstInactive)[0].classList.remove('active-slide-title')
  document.getElementsByClassName(secondInactive)[0].classList.remove('active-slide-title')
}

let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // console.log(mutation)
    let { classList } = mutation.target
    let { oldValue } = mutation
    if (classList.contains('active') && !oldValue.includes('active') && oldValue.includes('slide')) {
      if (oldValue.includes('react-slide')) toggleActiveTitleClass('react-title', 'static-title', 'php-title')
      if (oldValue.includes('static-slide')) toggleActiveTitleClass('static-title', 'react-title', 'php-title')
      if (oldValue.includes('php-slide')) toggleActiveTitleClass('php-title', 'static-title', 'react-title')
    }
  })
})

export default {
  name: 'app',
  components: {
    NavBar: NavBar,
    Welcome: Welcome,
    About: About,
    Timeline: Timeline,
    OpenSource: OpenSource,
    ReactExamples: ReactExamples,
    StaticNodeExamples: StaticNodeExamples,
    PHPExamples: PHPExamples,
    Contact: Contact
  },
  data () {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#navList',
        navigation: true,
        autoScrolling: true,
        slidesNavigation: true,
        anchors: ['welcome', 'about', 'opensource', 'portfolio', 'contact'],
        sectionsColor: ['#2E1114', '#e6d8e8', '#c7bbc9', '#e6d8e8', '#c7bbc9']
      },
      reactActive: true
    }
  },
  mounted () {
    observer.observe(document.querySelector('.portfolio'), {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
      attributeFilter: ['class']
    })
  },
  destroyed () {
    observer.disconnect()
  },
  methods: {
  }
}
</script>
