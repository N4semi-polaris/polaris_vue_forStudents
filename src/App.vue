<template>
  <v-app>
    <v-main>
      <Loading
        v-if="isLoading"
        @complete-loading = "changeIsLoading"
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
    isLoading: true,
  }),
  methods: {
    changeIsLoading: function(){
      this.isLoading = !this.isLoading;
    }
  },
  components: {
    Loading,
  },
};
</script>