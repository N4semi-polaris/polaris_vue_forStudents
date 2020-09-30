<template>
    <div id="Loading">
        <v-row class="justify-center align-center fullview" no-gutters>
            <v-col class="flex-grow-0">
                <v-img :src="PolarisLogo" width="250px"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import PolarisLogo from "@/assets/Polaris.png"
export default {
  name: 'loading',
  components: {
  },
  data:()=>({
      PolarisLogo: PolarisLogo,
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