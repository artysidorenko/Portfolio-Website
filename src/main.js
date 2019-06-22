import Vue from 'vue'

// Optional. When using scrollOverflow:true
import 'fullpage.js/vendors/scrolloverflow'

// Optional. When using fullpage extensions
// import './fullpage.scrollHorizontally.min'

import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

library.add(faFacebookSquare, faLinkedin, faGithubSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(VueFullPage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
