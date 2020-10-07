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
    mounted:{
        //ログインする必要がないとき、ログインをスキップさせる
        //tokenがローカルストレージにあって、Emailを取得するAPIを正しくcallできたとき
        //tokenがローカルストレージにあったが、Emailを取得するAPIを期限切れで利用できなかったとき
            //tokenをrefreshしたら復活した場合
    },
    methods:{
        handleClickLogin() {//既にログイン済みならsuccess
            this.$gAuth.getAuthCode().then((authCode) => {
                //on success
                console.log("authCode", authCode);
                this.isLogin = this.$gAuth.isAuthorized
                //this.$sotre.commit('setUserInfo', googleUser.getAuthResponse())
                //カレンダーAPIを呼ぶ
                //this.$emit('complete-loading') //カレンダーを読み込み終わったら、カレンダーを表示
            }).catch((error) => {
                //on fail do something
                console.log("you have not logined: "+error)
            });
        },
        async handleClickSignIn(){
            try {
                const googleUser = await this.$gAuth.signIn()
                if(!googleUser)return null
                this.isLogin = this.$gAuth.isAuthorized
                console.log(googleUser)
                //this.$sotre.commit('setUserInfo', googleUser.getAuthResponse())
                //カレンダーAPIを呼ぶ
                //this.$emit('complete-loading') //カレンダーを読み込み終わったら、カレンダーを表示
            } catch(error){
                console.error("[error]サインインに失敗: "+error)
                return null
            }
        },
        requestAndSave_token: function(code){
            /* eslint-disable */ // eslint-disable-lineこれで一行無視
            
            if(code==null || code=="code" || code==""){
                console.log("[error] your method param (code) is an illegal value.")
                return;
            }
            const url_format =({code, client_id, client_secret, redirect_uri}) => `https://oauth2.googleapis.com/token?code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=authorization_code`;
            var url = url_format({
                code: code,
                client_id: "72932482906-k3puh7jplg07nq3o5ekliff0n0epenkb.apps.googleusercontent.com",
                client_secret :"fODbxel84LlkMWbjPw8CBOaL",
                redirect_uri :"http://localhost:8080/",
                });

            this.$axios.post(url).then((response) => {
                console.log("post success. status is: ${status}");
                //tokenを保存する。以下が取得されるはず。
                //data["access_token"],data["expires_in"],data["scope"],data["token_type"],["id_token"]
                this.$emit('complete-loading');
            },(error) => {
                console.log("post failed")
            });
            /* eslint-enable */
        },
        
        call_Calendar: function(){

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