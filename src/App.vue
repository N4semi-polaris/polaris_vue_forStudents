<template>
  <v-app>
    <v-main>
      <Loading
        v-if="isLoading"
        @swich-isloading = "switchIsLoading"
      />
      <router-view v-else />
    </v-main>
  </v-app>
</template>


<script>
import Loading from './components/Loading'

export default {
  name: "App",
  data: ()=>({
    isLoading: false,
  }),
  mounted:function() {
    var path = this.$router.path;
    if(path === "/login")this.isLoading = false;
  },
  methods: {
    switchIsLoading: function(){
      this.isLoading = !this.isLoading;
    }
  },
  components: {
    Loading,
  },
};
</script>