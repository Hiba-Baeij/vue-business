import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/assets/scss/variables.scss"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@mdi/font/css/materialdesignicons.css'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { faAngleRight  } from '@fortawesome/free-brands-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//library.add(faAngleRight)
Vue.config.productionTip = false
//Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
