<template>
  <div id="Loading" class="fullview d-flex">
    <v-container class="align-self-center" no-gutters>
      <v-row class="justify-center" no-gutters>
        <v-col class="flex-grow-0">
          <v-img :src="PolarisLogo" width="250px" />
        </v-col>
      </v-row>
      <v-row class="pa-3"><v-col /></v-row>
      <v-row class="justify-center" no-gutters>
        <v-col class="flex-grow-0">
          <v-img
            :src="GoogleLogin"
            width="200px"
            @click.prevent="handleClickSignIn"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PolarisLogo from "@/assets/Polaris.png";
import GoogleLogin from "@/assets/btn_google_signin_light.png";
//import axios from "axios";
export default {
  name: "Login",
  components: {},
  mounted: function () {
    console.log("Login.vueのmountedが実行されたよ！");
    if (this.$store.getters.getUserEmail !== "") {
      //store内のemailが入ってたら
      var isSuccess = this.$store.dispatch("obtainToken"); //googleのトークン切れを確認
      if (isSuccess) {
        //トークン切れてないなら
        this.$router.push({ name: "Home" }); //そのままHOMEへ
      }
    }
  },

  data: () => ({
    PolarisLogo: PolarisLogo,
    GoogleLogin: GoogleLogin,
  }),
  methods: {
    async handleClickSignIn() {
      //codeとemailを再度取得保存・googleのトークンとcodeをdrfに保存・drfのトークンを取得したのち保存
      try {
        console.log("handleClickSignIn()が実行されたよ！");
        const authCode = await this.$gAuth.getAuthCode();
        if (authCode === null) return;
        let data = new URLSearchParams();
        data.append("code", authCode);
        this.$axios.post("/accounts/google/signup/", data).then(
          (response) => {
            response.data.authCode = authCode;
            console.log(response.data);
            this.$store.commit("setUserData", response.data); //codeとemailをvuexに保存

            console.log("handleClickSignIn()内のbtainTokenが実行されたよ！:1");
            const isSuccess = this.$store.dispatch("obtainToken");
            console.log("handleClickSignIn()内のbtainTokenが実行されたよ！:2");

            if (isSuccess) {
              console.log("handleClickSignIn内のif文が実行されたよ！");
              this.$router.push({ name: "Home" }); //そのままHOMEへ
              console.log("handleClickSignInでHomeにrouter.pushされたよ！");
            }
            /*if ("redirect" in this.$router.query) {
              console.log("redirectのifが実行");
              this.$router.push(this.$router.query.redirect);
            } else {
              console.log("redirectのelseが実行");
              this.$router.push({ name: "Home" });
            }*/
          },
          (error) => {
            console.error("[error, axios]サインインに失敗: " + error);
            return null;
          }
        );
      } catch (error) {
        console.error("[error]サインインに失敗: " + error);
      }
    },
  },
};
</script>

<style scoped>
.TaskLog {
  font-family: "M PLUS Rounded 1c";
}
</style>