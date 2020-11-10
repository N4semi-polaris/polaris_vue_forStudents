import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
import router from "@/router/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'YorimichiApp',
    paths: ['userEmail',"userAuthCode","authToken"],
    storage: window.sessionStorage
  })],
  state: {
    userEmail: "",
    userAuthCode: "",
    authToken: "",
  },
  mutations: {
    setUserData(state, payload) {
      console.log("setUserDataが実行されたよ！");
      state.userEmail = payload.email
      state.userAuthCode = payload.authCode
      console.log("payload.emailに代入されたよ！" + payload.email);
      console.log("payload.authCodeに代入されたよ！"+payload.authCode);
    },
    logout(state){//googleのtokenが死んだ時にemailやcodeやauthTokenを削除する
      state.userEmail = "";
      state.userAuthCode = "";
      state.authToken = "";
    }
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
    getToken(state){
      return state.authToken;
    },
  },
    actions: {
      obtainToken(){
        var email = this.getters.getUserEmail;
        var code = this.getters.getUserAuthCode;
        if(email.length < 0 && code.length < 0)this.$router.push({ name:'Login' });
        let data = new URLSearchParams();
        data.append('email', email);
        data.append('password', code);
        axios.post("http://localhost:8000/accounts/api-auth/obtain/", data).then(
          (response)=>{
            this.state.authToken = response.data.token;
            return true;
          },
          (error) => {
            console.log("tokenの取得に失敗_401ならgoogleの期限切れを疑え: " +error);
            if(error.response.status == 401)this.$store.commit("logout");
            if(router.path != '/login' || router.path != '/'){
              router.push({ path:'/login' },()=>{},()=>{});
            }
          }
        );
        return false;
      },
  },
    modules: {
  }
})
