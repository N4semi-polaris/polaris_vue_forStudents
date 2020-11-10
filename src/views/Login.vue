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
    components: {
    },
    mounted: function(){
      if (this.$store.getters.getUserEmail != null){
        const isSuccess = this.$store.dispatch("obtainToken");
        if(isSuccess){
          this.$router.push({ name:'Home' })
          }
      }
    },
    data: () => ({
        PolarisLogo: PolarisLogo,
        GoogleLogin: GoogleLogin,
    }),
    methods: {
        async handleClickSignIn() {
            try {
                const authCode = await this.$gAuth.getAuthCode();
                if (authCode  === null) return;
                let data = new URLSearchParams();
                data.append('code', authCode);
                this.$axios.post("/accounts/google/signup/", data).then(
                    (response) => {
                        response.data.authCode = authCode;
                        console.log(response.data);
                        this.$store.commit("setUserData", response.data);
                        console.log("保存した内容：" + this.$store.getters.getUserEmail);
                        console.log("保存した内容：" + this.$store.getters.getUserAuthCode);
                    },
                    (error) => {
                        console.error("[error, axios]サインインに失敗: " +error);
                    }
                );
                this.$store.dispatch("obtainToken");
                console.log(this.$router.query.redirect);
                this.$router.push(this.$route.query.redirect);
            } catch (error) {
                console.error("[error]サインインに失敗: " + error);
            }
        },
    },
};
</script>

<style scoped>
.TaskLog {
  font-family: 'M PLUS Rounded 1c';
}
</style>