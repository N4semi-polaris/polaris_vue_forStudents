<template>
    <div id="Loading" class="fullview d-flex">
        <v-container class="align-self-center" no-gutters>
            <v-row class="justify-center" no-gutters>
                <v-col class="flex-grow-0">
                    <v-img :src="PolarisLogo" width="250px"/>
                </v-col>
            </v-row>
            <v-row class="pa-3"><v-col/></v-row>
            <v-row class="justify-center" no-gutters>
                <v-col class="flex-grow-0">
                    <v-img v-if="!isLogin" :src="GoogleLogin" width="200px" @click.prevent="handleClickSignIn"/>
                    <v-progress-circular v-else indeterminate color="grey" :size="50" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import PolarisLogo from "@/assets/Polaris.png"
import GoogleLogin from "@/assets/btn_google_signin_light.png"
export default {
    name: 'loading',
    components: {
    },
    data:()=>({
        PolarisLogo: PolarisLogo,
        GoogleLogin: GoogleLogin,
        isLogin: false,
    }),
    mounted: function (){
        //ログインする必要がないとき、ログインをスキップさせる
        //tokenがローカルストレージにあって、Emailを取得するAPIを正しくcallできたとき
        //tokenがローカルストレージにあったが、Emailを取得するAPIを期限切れで利用できなかったとき
            //tokenをrefreshしたら復活した場合
    },
    methods:{
        /*
        handleClickLogin() {//既にログイン済みならsuccess
            this.$gAuth.getAuthCode().then((authCode) => {
                //on success
                //console.log("authCode", authCode);
                //this.isLogin = this.$gAuth.isAuthorized
                //this.$sotre.commit('setUserInfo', googleUser.getAuthResponse())
                //カレンダーAPIを呼んで、取得したデータをpropsでApp.vueへ
                //this.$emit('complete-loading') //カレンダーを読み込み終わったら、カレンダーを表示
            }).catch((error) => {
                console.log("notLogin: "+error)
            });
        },*/
        async handleClickSignIn(){
            try {
                const authCode = await this.$gAuth.getAuthCode()
                console.log(authCode)
                if(!authCode)return null
                this.isLogin = this.$gAuth.isAuthorized
                var url = "http://localhost:8000/accounts/google/login/"
                this.$axios.get(url, {params:{code:authCode}}).then(response => {
                    console.log(response)
                },(error) => {
                    console.log(error)
                });
                //console.log(googleUser)
                //this.$sotre.commit('setUserInfo', googleUser.getAuthResponse())
                //カレンダーAPIを呼んで、取得したデータをpropsでApp.vueへ
                //this.$emit('complete-loading') //カレンダーを読み込み終わったら、カレンダーを表示
            } catch(error){
                console.error("[error]サインインに失敗: "+error)
                return null
            }
        },
        call_Calendar: function(){
            var params = {
                "token": "",
            }
            var url = "/accounts/google/calendar/"
            this.$axios.post(url, params).then(response => {
                console.log(response)
            },(error) => {
                console.log(error)
            });
        },
        call_refreshToken: function(){

        },
    }
}
</script>

<style>
.fullview {
  width: 100vw;
  height: 100vh;
  background: #fefefe;
  position: fixed;
  top: 0;
  left: 0;
}
</style>