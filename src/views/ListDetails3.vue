<template>
  <div class="ListDetails3">
    <!--飲食店推薦-->
    <App_bar />

    <div class="detail_card">
      <v-container>
        <v-btn
          rounded
          class="text-center"
          color="#0461cd"
          dark
          @click="$router.go(-1)"
          ><v-icon left size="30">mdi-keyboard-return</v-icon>戻る</v-btn
        >
      </v-container>
      <v-card class="mx-2 mt-2" color="#ffffff">
        <v-card-title>
          <v-icon left large color="#033ba0">mdi-map-marker</v-icon>
          <span class="placeName">{{ selectedResult.name }}</span>
          <v-card-subtitle class="ml-7">{{
            selectedResult.genre
          }}</v-card-subtitle>
          <v-card-subtitle class="ml-7"
            >最寄駅：{{ selectedResult.station }}</v-card-subtitle
          >
          <!--<div v-show="useBus == true">
            <v-icon color="#033ba0" dense class="ml-1">mdi-bus</v-icon>
          </div>
          <div v-show="useTrain == true">
            <v-icon color="#033ba0" dense class="ml-1">mdi-train</v-icon>
          </div>
          <div v-show="useFoot == true">
            <v-icon color="#033ba0" dense class="ml-1">mdi-walk</v-icon>
          </div>-->

          <v-spacer></v-spacer>
          <!--
          <v-btn
            v-if="rainAvoid == false"
            color="#ffffff"
            fab
            v-on:click="displayRainAvoid()"
            ><v-icon large color="#0461cd">mdi-umbrella-outline</v-icon></v-btn
          >
          <v-btn v-else dark fab color="#0461cd" v-on:click="displayRainAvoid()"
            ><v-icon large>mdi-umbrella</v-icon></v-btn
          >-->
        </v-card-title>
        <v-col align="center">
          <v-text-field
            v-model="eatTime"
            suffix="分"
            hint="60分以下で入力してください。"
            :rules="[rules.required,rules.limit_time]"
            outlined
          ></v-text-field>
        </v-col>
        <!--
        <v-card-subtitle class="ml-10">
          {{ makeStartTime(start_time) }}
          <v-icon color="#0575e6" dense>mdi-arrow-right-bold</v-icon>
          {{ makeEndTime(end_time) }}
          <span class="ml-1">{{ getTransTime(start_time, end_time) }}</span
          ><br />
          {{ trans_costs }}円
          <span class="ml-3">{{ nearest_station }}／{{ nearest_route }}</span>
        </v-card-subtitle>-->
        <!--
        <v-row>
          <v-col>
            <v-list three-line>
              <v-list-item-group>
                <v-list-item
                  v-for="(item, i) in selectedResult.route[0]"
                  :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="i + 1"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="'start.name：' + item.start.name"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="'start.time：' + item.start.time"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="'end.name：' + item.end.name"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="'end.time：' + item.end.time"
                    ></v-list-item-subtitle>
                    <v-list-item-subtitle
                      v-text="'type：' + item.type"
                    ></v-list-item-subtitle>
                    <v-divider></v-divider>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
        -->
        <v-card-actions>
                <v-btn
                  class="mb-3"
                  rounded
                  depressed
                  disabled
                  block
                  @click="postSelectedSpot"
                  >ココにする
                  <v-icon right size="30">mdi-gesture-tap</v-icon>
                </v-btn>
            <!-- <v-row>
              <v-col cols="6">
                <v-btn
                  rounded
                  color="#210e67"
                  outlined
                  small
                  absolute
                  bottom
                  left
                  >1つ遅らせる</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn
                  rounded
                  color="#033ba0"
                  outlined
                  small
                  absolute
                  bottom
                  right
                  >1つ早める</v-btn
                >
              </v-col>
            </v-row>-->

        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import App_bar from "../components/App_bar";
//import moment from "moment";

export default {
  name: "ListDetails3",
  components: {
    App_bar,
  },
  data: () => ({
     /*
    useFoot: true,
    useBus: false,
    useTrain: true, 
    place_name: "",
    start_time: "",
    end_time: "",
    trans_costs: "",
    trans_time: "2時間2分",
    nearest_station: "新小平駅",
    nearest_route: "JR武蔵野線",
    isRainy: true,
    rainAvoid: true,
    */
    //model: -1,
    selectedResult: [],
    type: 0,
    startTime: "",
    eatTime: "",
    rules: {},
  }),
  mounted() {
    /*
    this.rainAvoid = false;
    this.place_name = this.$route.query.place_name;
    this.start_time = this.$route.query.start_time;
    this.end_time = this.$route.query.end_time;
    this.trans_costs = this.$route.query.trans_costs;
    */
    this.selectedResult = this.$store.getters.getSelectedResult;
    console.log(" 選択されたスポット(selectedResult): ");
    console.dir(this.selectedResult);
    console.log(" selectedResult.route[0]: ");
    console.dir(this.selectedResult.route[0]);
    console.log(" selectedResult.route[0]['1']: ");
    console.dir(this.selectedResult.route[0]["1"]);
    this.calcEatTime();
    this.rules= {
      required: value => !!value || "必ず入力してください",
      limit_time: value => value <=  this.selectedResult.eat_time || this.selectedResult.eat_time + "分以内にしてください",
      }
  },
  methods: {
    /* makeStartTime: function (start_time) {
      //出発時間を返す
      return this.adjustAMPM(moment(start_time, "YYYY-MM-DD hh:mm a"));
    },
    makeEndTime: function (end_time) {
      //到着時間を返す
      return this.adjustAMPM(moment(end_time, "YYYY-MM-DD hh:mm a"));
    },
    adjustAMPM: function (time) {
      //出発・到着時間のAM/PMを調整する
      var hour;
      if (time.format("a") == "am") {
        if (time.format("h") == "12") hour = 0;
        else hour = Number(time.format("h"));
      } else {
        if (time.format("h") == "12") hour = 12;
        else hour = Number(time.format("h")) + 12;
      }
      return hour + ":" + time.format("mm");
    },
    getTransTime: function (start_time, end_time) {
      //移動時間を計算する
      var start = moment(start_time, "YYYY-MM-DD hh:mm a");
      var end = moment(end_time, "YYYY-MM-DD hh:mm a");
      var minute = end.diff(start, "minutes");
      var hour = end.diff(start, "hours");
      var transtime;
      if (hour == 0) transtime = "（" + minute + "分）";
      else transtime = "（" + hour + "時間" + (minute - 60 * hour) + "分）";
      return transtime;
    },
    displayRainAvoid() {
      this.rainAvoid = !this.rainAvoid;
    },*/
    ////////////平山記述メソッド//////////
    calcEatTime() {
      this.eatTime = this.selectedResult.eat_time;
    },
    calcPostTime() {
      if (this.selectedResult.side == "now") {
        this.startTime = this.selectedResult.route[0]["1"].clock;
      } else {
        this.startTime = this.selectedResult.route[0]["3"].clock;
      }
    },

    postSelectedSpot() {
      const headers = { Authorization: "JWT " + this.$store.getters.getToken };
      this.calcPostTime();
      const data = {
        start: this.startTime,
        mins: this.eatTime,
        location: this.selectedResult.name,
        lat: this.selectedResult.lat,
        lon: this.selectedResult.lon,
        genre: this.selectedResult.genre,
      };
      this.$axios
        .post("/calendar/blocks/yorimichi", data, {
          headers: headers,
        })
        .then(() => {
          this.$store.commit("setListResult", []);
          this.$store.commit("setSelectedResult", [], 0);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@ListDetails3_PostSelectedSpot");
          if (
            error.response.status == 401 //this.$store.commit("logout")
          );
        });
    },
    //////////
  },
};
</script>

<style scoped>
.placeName {
  font-weight: bold;
}
.ListDetails {
  font-family: "M PLUS Rounded 1c";
}
</style>