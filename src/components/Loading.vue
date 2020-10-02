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
                    <v-img v-if="!isLogin" :src="GoogleLogin" width="200px" />
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