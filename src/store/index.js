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
    token: "",
    refreshToken:"",
  },
  
  mutations: {
    setUserData(state, payload) {
      state.userEmail = payload.userEmail
      state.userAuthCode = payload.userAuthCode
      state.token = payload.token
      state.refreshToken = payload.refreshToken
    },
  },
  getters: {
    getUserEmail() {
      return state.userEmail;
    },
    getUserAuthCode() {
      return state.userAuthCode;
    },
    gettoken() {
      return state.token;
    },
    getRefreshToken() {
      return state.refreshToken;
    },
  },
    actions: {
  },
    modules: {
  }
})
