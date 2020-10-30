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
    authToken: localStorage.getItem('token'),
  },
  
  mutations: {
    setUserData(state, payload) {
      console.log("setUserDataが実行されたよ！");
      state.userEmail = payload.email
      state.userAuthCode = payload.authCode
      console.log("payload.emailに代入されたよ！" + payload.email);
      console.log("payload.authCodeに代入されたよ！"+payload.authCode);
    },
    
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('token', newToken);
      state.authToken = newToken;
    },
  },
  getters: {
    getUserEmail(state) {
      console.log("getUserEmailが実行されたよ！");
      return state.userEmail;
    },
    getUserAuthCode(state) {
      console.log("getUserAuthCodeが実行されたよ！");
      return state.userAuthCode;
    },
    
  },
    actions: {
  },
    modules: {
  }
})
