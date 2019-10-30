import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faArrowRight,faSun, faMoon, faPaperPlane, faSortDown, faCheckCircle, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faInstagram, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import VTooltip from 'v-tooltip'

library.add(faGithub, faInstagram,faLinkedin,faBars,faArrowRight,faSun, faMoon,faPaperPlane,faSortDown, faCheckCircle,faEnvelopeOpen)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VTooltip)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
