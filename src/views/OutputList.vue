<template>
  <div class="OutputList">
    <App_bar />

    <v-toolbar flat>
      <v-toolbar-title class="marginBarLR">
        検索結果<span class="ml-3">全{{ results.length }}件</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-sheet color="#f5f5f5" height="15px"></v-sheet>
    <template v-if="isShow">
      <v-list shaped>
        <template v-for="(result, index) in results">
          <v-list-item :key="result.index" @click="toListDetails(result)">
            <v-list-item-content>
              <v-row no-gutters align="center">
                <v-col cols="1">
                  <span class="marginIdLR">
                    <!-- リスト番号 -->
                    <v-list-item-title>{{ index + 1 }}</v-list-item-title>
                  </span>
                </v-col>
                <v-col cols="8" class="ml-4">
                  <v-list-item-title v-text="result.name"></v-list-item-title>
                  <v-list-item-subtitle v-text="result.genre">
                  </v-list-item-subtitle>

                  <!--  <v-list-item-subtitle class="text--primary"
                  >{{ makeStartTime(result.start_time) }}
                  <v-icon color="#0575e6" dense>mdi-arrow-right-bold</v-icon>
                  {{ makeEndTime(result.end_time) }}
                  <span class="ml-1">{{
                    getTransTime(result.start_time, result.end_time)
                  }}</span>
                </v-list-item-subtitle>          
                -->
                </v-col>
                <!--<v-col class="ml-2">
                <div v-show="taskOption(result.task_option)">
                  <v-icon color="#ffc900" dense>mdi-tag</v-icon>
                </div>
              </v-col>-->
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <!--
            <v-divider
                v-if="index < results.length"
                :key="index"
            ></v-divider>
        <v-sheet
          v-if="index < results.length"
          :key="index"
          color="#f5f5f5"
          height="10px"
        ></v-sheet>-->
        </template>
      </v-list>
    </template>
    <v-btn color="#0461cd" dark @click.stop="inStore">
      (仮)結果をローカルストレージに保存
    </v-btn>
    <v-btn color="#0461cd" dark @click.stop="offStore">
      (仮)結果をローカルストレージから削除
    </v-btn>
  </div>
</template>

<script>
import App_bar from "../components/App_bar";
//import moment from "moment";

export default {
  name: "OutputList",
  components: {
    App_bar,
  },
  data: () => ({
    /*type_dict: [
      { id: 1, name: "寄り道予定から探す", url: "tasks" },
      { id: 2, name: "時間内に行ける飲食店以外の施設を探す", url: "" },
      { id: 3, name: "時間内に行ける飲食店を探す", url: "" },
    ],*/
    hit_num: 0,
    results: [],
    model: -1,
    //isShowDetails: false,
    isShow: false,
    URL: "/recommend/",
  }),
  mounted() {
    /*
    if (this.type_dict[this.$route.query.type - 1].url != "") {
      var url =
        "/recommend/" +
        this.type_dict[this.$route.query.type - 1].url +
        "/" +
        this.$route.query.bk;
      this.$axios
        .get(url, {
          data: {},
          headers: { Authorization: "JWT " + this.$store.getters.getToken },
        })
        .then((response) => {
          this.hit_num = response.data["hit_num"];
          this.results = this.results.concat(response.data["now"]);
          this.results = this.results.concat(response.data["des"]);
          console.log(this.results);
          var i = 1;
          this.results.map((result) => (result["id"] = i++));
        });    
    }*/
    //console.log("this.$route.query.type: "+this.$route.query.type);
    console.log(
      "this.$store.getters.getlistResult: " + this.$store.getters.getlistResult
    );
    console.dir(this.$store.getters.getIsResult);
    console.log(
      "this.$store.getters.getlistResult.length: " +
        this.$store.getters.getlistResult.length
    );
    if (this.$store.getters.getlistResult.length == 0) {
      if (this.$route.query.type == 1) {
        this.URL = this.URL + "tasks/" + this.$route.query.bk;
      } else if (this.$route.query.type == 2) {
        this.URL = this.URL + "spots/" + this.$route.query.bk;
      } else if (this.$route.query.type == 3) {
        this.URL = this.URL + "restaurants/" + this.$route.query.bk;
      }
      //this.getData(this.URL);
    } else {
      this.results = this.$store.getters.getlistResult;
      console.log("this.results: ");
      console.dir(this.results);
      for (let i in this.results) {
        console.dir(this.results[i]);
        console.log("this.results" + i + ".sections: ");
        console.dir(this.results[i].sections);
      }
      this.isShow = true;
    }
  },
  /*computed: {
    getListLength: function () {
      var count = 0;
      var list = this.results;
      for (var i = 0; i < list.length; i++) {
        count++;
      }
      return count;
    },
  },*/
  methods: {
    /*
    makeStartTime: function (start_time) {
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
    taskOption: function (option) {
      //タスクラベルをつけるかどうか
      return option ? true : false;
    },
    toListDetails: function (result) {
      this.$router.push({
        name: "ListDetails",
        query: {
          place_name: result.place_name,
          start_time: result.start_time,
          end_time: result.end_time,
          trans_costs: result.trans_costs,
          task_option: result.task_option,
        },
      });
      this.isShowDetails = true;
    },*/
    /////////////////////////以下メソッド平山記述////////////////
    getData(url) {
      const headers = { Authorization: "JWT " + this.$store.getters.getToken };
      console.log(
        "this.$route.query.bkの型@GET: " + typeof this.$route.query.bk
      );
      console.log("URL: " + url);
      console.log("URLの型: " + typeof url);
      this.$axios
        .get(url, {
          data: {},
          headers: headers,
        })
        .then((response) => {
          /*console.log("response.dataの型@GET: " + typeof response.data);
          console.log("getしたresponse.dataの中身: ");
          console.dir(response.data);*/
          this.$store.commit("setListResult", response.data);
          for (let i in response.data) {
            this.results[i] = response.data[i];
            console.dir(this.results[i]);
          }
          this.isShow = true;
        })
        .catch((error) => {
          console.log("エラーになっちゃった..:＠getData");
          if (
            error.response.status == 401 //this.$store.commit("logout")
          );
        });
    },
    toListDetails: function (result) {
      this.$store.commit("setSelectedResult", result, this.$route.query.type);
      if (this.$route.query.type == 1) {
        this.$router.push({ name: "ListDetails1" });
      } else if (this.$route.query.type == 2) {
        this.$router.push({ name: "ListDetails2" });
      } else if (this.$route.query.type == 3) {
        this.$router.push({ name: "ListDetails3" });
      }
    },
    inStore() {
      this.$store.commit("setListResult", this.results);
      console.log("isStore後");
    },
    offStore() {
      const empty = [];
      this.$store.commit("setListResult", empty);
    },
  },
};
</script>

<style scoped>
.marginBarLR {
  text-align: center;
}
.marginIdLR {
  text-align: center;
  font-weight: bold;
}
.OutputList {
  font-family: "M PLUS Rounded 1c";
}
</style>