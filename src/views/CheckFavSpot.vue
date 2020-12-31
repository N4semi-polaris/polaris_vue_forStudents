<template>
  <div class="CheckFavSpot">
    <App_bar />
    <template>
      <v-container class="pa-2">
        <v-row align="center">
          <v-col align="center">
            <h2>未完成のCheckFavSpotページだよ！</h2>

            <v-card>
              <v-card-text>
                <v-container class="pa-2">
                  <v-row align="center">
                    <v-col cols="12">
                      <v-card-title> 選択された候補 </v-card-title>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="12">
                      {{ selectedFavSpot.name }}
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row align="center">
                    <v-col cols="12">
                      {{ selectedFavSpot.address }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-row align="center">
              <v-col cols="6">
                <v-btn
                  rounded
                  class="text-center"
                  color="#0461cd"
                  dark
                  @click="$router.go(-1)"
                  >戻る</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn
                  rounded
                  class="text-center"
                  color="#0461cd"
                  dark
                  @click="postSelectedSpot"
                  >登録する</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </template>
  </div>
</template>

<script>
import App_bar from "../components/App_bar";

export default {
  name: "CheckFavSpot",
  components: {
    App_bar,
  },
  props: {
    selectedFavSpot: {},
  },
  mounted() {
    console.log(" selectedFavSpotの型: " + typeof this.selectedFavSpot);
    console.log(" selectedFavSpot: " + this.selectedFavSpot);
    console.dir(this.selectedFavSpot);
  },
  data: () => ({
   
  }),
  methods: {
    postSelectedSpot() {
        const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      const data = {
          "name":this.selectedFavSpot.name,
          "address":this.selectedFavSpot.address,
          "lat":parseFloat(this.selectedFavSpot.lat),
          "lon":parseFloat(this.selectedFavSpot.lon),
          };
      this.$axios
        .post("/accounts/setting/favspot", data, {
          headers: headers,
        })
        .then(() => {
             this.$router.push({ name:'FavoriteSpot' });
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@postSelectedSpot");
          if (error.response.status == 401) //this.$store.commit("logout")
          ;
        });
    }, 
  },
};
</script>

<style scoped>
#spotlist {
  padding: 10px;
}
.FavoriteSpot {
  font-family: "M PLUS Rounded 1c";
}
</style>