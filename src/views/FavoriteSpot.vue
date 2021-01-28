<template>
  <div class="FavoriteSpot">
    <App_var />
    <div id="spotlist">
      <v-row>
        <v-col  cols="3" align="left">
          <v-btn
            rounded
            class="text-center"
            color="#0461cd"
            dark
            @click="$router.go(-1)"
            ><v-icon left size="30">mdi-keyboard-return</v-icon>戻る</v-btn>
        </v-col>
        <v-col  cols="9" align="right">
          <v-btn dark color="#ffc900" @click="update" class="font-weight-bold">
            <v-icon>mdi-cached</v-icon>更新する</v-btn>
        </v-col>
      </v-row>
      <template v-if="frag">
        <Spot_Block
          v-for="spot in spots"
          :key="spot.uuid"
          :name="spot.name"
          :address="spot.address"
          :uuid="spot.uuid"
        />
      </template>
      <v-btn dark fab bottom left color="#ffc900" @click="toCreateFavSpot">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import App_var from "../components/App_bar";
import Spot_Block from "../components/Spot_Block";
export default {
  components: {
    App_var,
    Spot_Block,
  },
  data: () => ({
    spots: [],
    spotnameRules: [(v) => !!v || "必ず入力してください！"],
    frag: false,
  }),
  created(){
    //console.log("createdが動いたよ〜()");
    this.getFavSpots();
  },
  mounted() {
    //this.getFavSpots();
  },
  methods: {
    toCreateFavSpot() {
      //console.log("this.spotValueの中身："+this.spot[this.spotValue]);
      this.$router.push({ name: "CreateFavoriteSpot" });
    },

    getFavSpots() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      this.$axios
        .get("//nakano2021seminar.pythonanywhere.com/accounts/setting/favspot", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          /*console.log("response.dataの型@GET: " + typeof response.data);
          console.log("getしたresponse.dataの中身: ");
          console.dir(response.data);*/
          for (let i in response.data) {
            this.spots[i] = response.data[i];
            //console.dir(this.spots[i]);
          }
          this.frag = true;
        })
        .catch((error) => {
          console.log("エラーになっちゃった..:＠mounted");
          if (
            error.response.status == 401 //this.$store.commit("logout")
          );
        });
    },
    update() {
      this.$router.go({ path: this.$router.currentRoute.path, force: true });
      /*
      this.frag = true;
      this.$nextTick(function () {
        this.frag = false;       
      });
      */
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
