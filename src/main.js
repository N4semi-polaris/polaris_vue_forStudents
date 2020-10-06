import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'

var VueTouch = require('vue-touch') //New add 10/5
Vue.use(VueTouch,{name: 'v-touch'}) //New add 10/5

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')