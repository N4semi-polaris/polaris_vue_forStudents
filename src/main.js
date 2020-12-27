import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios' //追記
import GAuth from 'vue-google-oauth2' //追記
import './assets/sass/style.scss'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(GAuth,{
  clientId: '72932482906-k3puh7jplg07nq3o5ekliff0n0epenkb.apps.googleusercontent.com',
  scope: 'email openid https://www.googleapis.com/auth/calendar',
  accessType: 'offline',
  prompt: 'consent',
  fetch_basic_profile: true,
})


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
