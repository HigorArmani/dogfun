import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/routes.js'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  vuetify,
})
