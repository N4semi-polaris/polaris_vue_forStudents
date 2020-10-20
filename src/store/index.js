import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail: "",
    userAuthCode: "",
  },
  mutations: {
    getUserData(state,payload) {
      state.userEmail = payload.userEmail
      state.userAuthCode = payload.userAuthCode
    },
  },
  actions: {
  },
  modules: {
  }
})
