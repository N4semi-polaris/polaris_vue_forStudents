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
    //いらないかも
    console.log("Login.vueのmountedが実行されたよ！");
    if (this.$store.getters.getUserEmail !== "") {
      //store内のemailが入ってたら
      const isSuccess = this.$store.dispatch("checkTokenExpiration"); //googleのトークン切れを確認
      console.log("mountedのcheckTokenExpirationの戻り値：" + isSuccess);
      if (isSuccess) {
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
      //codeとemailを取得保存&googleのトークンとcodeをdrfに保存&drfのトークンを取得したのち保存
      try {
        //console.log("handleClickSignIn()が実行されたよ！");
        const authCode = await this.$gAuth.getAuthCode();
        if (authCode === null) return;
        let data = new URLSearchParams();
        data.append("code", authCode);
        this.$axios.post("//nakano2021seminar.pythonanywhere.com/accounts/google/signup/", data).then(
          (response) => {
            response.data.authCode = authCode;
            //console.log(response.data);
            this.$store.commit("setUserData", response.data); //codeとemailを取得→vuexに保存
            this.enterPage();
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

    async enterPage() {
      console.log("enterPage()内のobtainTokenが実行される前だよ！");
      await this.$store.dispatch("obtainToken"); //codeとemailを使用してtokenを取得→vuexに保存
      console.log("enterPage()内のbtainoTokenが実行された後だよ！");
      if (this.$store.getters.getIsLogin) {
        this.$router.push({ name: "Home" });
        //console.log("enterPage()でHomeにrouter.pushされたよ！");
      } else {
        console.log("enterPage()内のelse文を実行してるよ！");
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