import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'YorimichiApp',
    paths: ['loginState'],
    storage: window.sessionStorage
  })],

  state: {
    loginState: {
      userEmail: string,
      userAuthCode: string,
    },
},
  mutations: {
  setUserData(state, payload) {
    state.loginState.userEmail = payload.userEmail
    state.loginState.userAuthCode = payload.userAuthCode
  },
},
  getters: {
  getUserEmail() {
    return state.userEmail;
  },
  getUserAuthCode() {
    return state.userAuthCode;
  },
},
  actions: {
},
  modules: {
}
})
