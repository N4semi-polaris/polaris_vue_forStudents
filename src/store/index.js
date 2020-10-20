import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
        key: 'YorimichiApp',
        paths: ['userEmail',"userAuthCode"],
        storage: window.sessionStorage
    })],
  state: {
    userEmail: "",
    userAuthCode: "",
  },
  mutations: {
    setUserData(state,payload) {
      state.userEmail = payload.userEmail
      state.userAuthCode = payload.userAuthCode
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
