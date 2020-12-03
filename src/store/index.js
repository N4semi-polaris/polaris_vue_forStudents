import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
import router from "@/router/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'YorimichiApp',
    paths: ['userEmail',"userAuthCode","authToken","isLogin"],
    storage: window.sessionStorage
  })],
  state: {
    userEmail: "",
    userAuthCode: "",
    authToken: "",
    isLogin: false,
  },
  mutations: {
    setUserData(state, payload) {
      //console.log("setUserDataが実行されたよ！");
      state.userEmail = payload.email
      state.userAuthCode = payload.authCode
    },
    setAuthToken(state,token) {
      state.authToken = token;
    },
    setIsLogin(state,isLogin) {
      state.isLogin = isLogin;
    },
    logout(state){//googleのtokenが死んだ時にemailやcodeやauthTokenを削除する
      state.userEmail = "";
      state.userAuthCode = "";
      state.authToken = "";
      state.isLogin = false;
    }
  },
  getters: {
    getUserEmail(state) {
      //console.log("getUserEmailが実行されたよ！");
      return state.userEmail;
    },
    getUserAuthCode(state) {
      //console.log("getUserAuthCodeが実行されたよ！");
      return state.userAuthCode;
    },
    getToken(state) {
      //console.log("getTokenが実行されたよ！");
      return state.authToken;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
  },
    actions: {
       async obtainToken() {//jwt(drf)のtokenを取得&googleのトークン切れ確認     
        //console.log("obtainToken()@store が実行されたよ！");
        var email = this.getters.getUserEmail;
        var code = this.getters.getUserAuthCode;
        if(email.length <= 0 || code.length <= 0) router.push({ name:'Login'});
        let data = new URLSearchParams();
        data.append('email', email);
        data.append('password', code);
        await axios.post("/accounts/api-auth/obtain/", data)
          .then(response => {
            this.commit('setAuthToken', response.data.token);
            console.log("obtainTokenでtokenの取得に成功:" + this.getters.getToken);
            this.commit("setIsLogin", true);
            console.log("obtainTokenでログイン状態の取得に成功: " + this.getters.getIsLogin);
          })
          .catch(error => {
            //console.log("tokenの取得に失敗_401ならgoogleの期限切れを疑え: " + error);
            console.log("tokenの取得に失敗: " +error);
            /*if(error.response.status == 401)this.$store.commit("logout");
            if(router.path !== '/login'){
              router.push({ path:'/login' });
            }*/
          });
      },

      checkTokenExpiration() {//12_3追記(headers を指定しなければ無事に200が返ってくるようになった)
        console.log("checkTokenExpirationが実行されたよ！");
        //const headers = {"content-type": "application/json"};
        let data = new URLSearchParams();
        data.append("token", this.getters.getToken);
        //let data = { "token": this.getters.getToken };
        axios.post("/accounts/api-auth/verify/", data)
          //.post("/accounts/api-auth/verify/", data,{ headers: {"content-type": "application/json"}})
          .then(response => {
            if (response.status == 200) { console.log("tokenは有効だと判断されたよ！"); }
          })
          .catch(error => {
            console.log("checkTokenExpiration()のerrorに入ったよ！");
            if (error.response.status == 400) { console.log("tokenは有効期限切れ以外のエラーだと判断されたよ！"); }
            else if (error.response.status == 401) {
              console.log("tokenは有効期限切れだと判断されたよ！");
              this.$store.commit("logout");
            }
          });
    },
  },
    modules: {
  }
})
