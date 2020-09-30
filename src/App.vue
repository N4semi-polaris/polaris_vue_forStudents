<template>
  <v-app>
    <v-main>
      <Loading v-if="isLoading" />
      <router-view v-if="!isLoading" />
    </v-main>
  </v-app>
</template>


<script>
import Loading from './components/Loading'

export default {
  name: "App",
  data: ()=>({
    isLoading: true,
  }),
  mounted(){
    setTimeout(()=>{
      this.isLoading=false;
    },3000);
  },
  components: {
    Loading,
  },
};
</script>