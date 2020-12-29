<template>
  <v-app>
    <div class="InitialSetting">
      <App_var />
      <h1></h1>
      <v-container>
        <v-form>
          <v-row>
            <v-col align="center">
              <v-subheader>好きなスポット</v-subheader>
              <v-spacer></v-spacer>
              <v-btn color="#0461cd" dark @click.stop="openGdialog">
                飲食店を選ぶ
              </v-btn>
              <selectSpotGourmet ref="GourmetDialog" />
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-spacer></v-spacer>
              <v-btn color="#0461cd" dark @click.stop="openOdialog">
                飲食店以外を選ぶ
              </v-btn>
              <selectSpotOther ref="OtherDialog" />
              <v-spacer></v-spacer>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row>
            <v-col align="center">
              <v-select
                v-model="selectTime"
                :items="items_Time"
                item-text="time"
                item-value="id"
                :rules="[(v) => !!v || 'Item is required']"
                label="何分前に到着したいか"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-text-field
                v-model="address"
                label="住所"
                hint="例：東京都小平市津田町2-1-1"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-select
                v-model="selectWalkSpeed"
                :items="items_WalkSpeed"
                item-text="speed"
                item-value="id"
                :rules="[(v) => !!v || 'Item is required']"
                label="歩く速度"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>
        </v-form>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import App_var from "../components/App_bar";
import selectSpotGourmet from "../components/dialog/SelectSpots_Gourmet.vue";
import selectSpotOther from "../components/dialog/SelectSpots_Other.vue";

export default {
  name: "InitialSetting",
  components: {
    App_var,
    selectSpotGourmet,
    selectSpotOther,
  },
  data: () => ({
    selectTime: [],
    items_Time: [
      { id: "1", time: "5分前" },
      { id: "2", time: "10分前" },
      { id: "3", time: "15分前" },
      { id: "4", time: "30分前" },
      { id: "4", time: "1時間前" },
      ],
    selectWalkSpeed: [],
    items_WalkSpeed: [ 
      { id: "1", speed: "急いで" },
      { id: "2", speed: "少し急いで" },
      { id: "3", speed: "少しゆっくり" },
      { id: "4", speed: "ゆっくり" },
      ], 
      //name: "typeOfWalkSpeed",
    address: "",
  }),
  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();
      if (!search) return this.items;
      return this.items.filter((item) => {
        const text = item.text.toLowerCase();
        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];
      for (const selection of this.selected) {
        selections.push(selection);
      }
      return selections;
    },
  },
  watch: {
    selectWalkSpeed: {
      handler: function (newValue, oldValue) {
        console.log( "selectWalkSpeedが: [" + oldValue + "] から [" + newValue + "]に変更されたよ");
        this.postWalkSpeedData();
      },
      deep: true,
    },
    selectTime: function (newValue, oldValue) {
      console.log("selectTimeが: [" + oldValue + "] から [" + newValue + "]に変更されたよ");
      this.postTimeData();
    },
    address: function (newValue, oldValue) {
      console.log("addressが: [" + oldValue + "] から [" + newValue + "]に変更されたよ");
      this.postAddressData();
    },   
  },
  mounted() {
    this.getWalkSpeedData();
    this.getTimeData(); 
    this.getAddressData();
  },
  methods: {
    openGdialog() {
      this.$refs.GourmetDialog.GdialogOpen();
    },
    openOdialog() {
      this.$refs.OtherDialog.OdialogOpen();
    },
    
    getWalkSpeedData() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      this.$axios
        .get("/accounts/setting/transportation", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          /*console.log("response.dataの型@GET: "+ typeof response.data);
          console.log("getしたresponse.dataの中身: ");
          console.dir(response.data);*/
          const result = response.data.map(dict => dict.typeOfWalkSpeed);
          //console.log("resultの型@GET: "+ typeof result + ", 中身:"+result);
          this.selectWalkSpeed = String(result);     
          //console.log("get後のthis.selectWalkSpeedの型＠GET: "+ typeof this.selectWalkSpeed + ", 中身:"+this.selectWalkSpeed);
        })
        .catch((error) => {
          console.log("歩行速度のgetでエラーになっちゃった..: ");
         // console.log("error.response.data.typeOfWalkSpeed: " + error.response.data.typeOfWalkSpeed);
          if (error.response.status == 401) //this.$store.commit("logout")
          ;
        });
    },
    postWalkSpeedData() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      const data = { "typeOfWalkSpeed": this.selectWalkSpeed };
      console.log(
        "postWalkSpeedDataしたthis.selectWalkSpeedの型: " + typeof this.selectWalkSpeed + ", 中身: " + this.selectWalkSpeed);
      this.$axios
        .post("/accounts/setting/transportation", data, {
          headers: headers,
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@postWalkSpeedData");
          if (error.response.status == 401) //this.$store.commit("logout")
          ;
        });
    },



    getTimeData() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      this.$axios
        .get("/accounts/setting/arrivaltime", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          //console.log("response.dataの型@GET: "+ typeof response.data);
          //console.log("getしたresponse.dataの中身: ");
          //console.dir(response.data);
          //console.log(response.data.arrivaltimeSetting);
          //console.log("response.data.arrivaltimeSettingの型@GET: "+ typeof response.data.arrivaltimeSetting + ", 中身:"+response.data.arrivaltimeSetting);
          const result = String(response.data.arrivaltimeSetting);
          this.selectTime = result; 
        })
        .catch((error) => {
          console.log("エラーになっちゃった..:＠getTimeData ");
          if (error.response.status == 401) //this.$store.commit("logout")
          ;
        });
    },
    postTimeData() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      const postData = Number(this.selectTime);
      const data = { "choice": postData};
      console.log(
        "postTimeDataしたthis.selectWalkSpeedの型: " + typeof this.selectTime + ", 中身: "+ this.selectTime);
      this.$axios
        .post("/accounts/setting/arrivaltime", data, {
          headers: headers,
        })
        .catch((error) => {
          console.log("エラーになっちゃった..:＠postTimeData");
          if (error.response.status == 401) //this.$store.commit("logout")
          ;
        });
    },
    
    
    
    getAddressData() {
      const headers = { 
        "Content-Type": "application/json",
        "Authorization": "JWT " + this.$store.getters.getToken, };
      this.$axios
        .get("/accounts/setting/address", {
          //要編集
          data: {},
          headers: headers,
        })
        .then((response) => {
          console.log("response.dataの型@GET: "+ typeof response.data);
          console.log("getしたresponse.dataの中身: ");
          console.log(response.data);
          console.log("response.data.addressの型@GET: "+ typeof response.data.address + ", 中身:" + response.data.address);
          const result = String(response.data["address"]);
          this.address = result;
        })
        .catch((error) => {
          console.log(error,"エラーになっちゃった..:＠getAddressData");
          //if (error.response.status == 401) //this.$store.commit("logout")
        });
    },
    postAddressData() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      const data = {"address": this.address };
      console.log("postAddressDataしたthis.addressの型: " + typeof this.address + ", 中身: "+ this.address);
      this.$axios
        .post("/accounts/setting/address", data, {
          headers: headers,
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@postAddressData");
          if (error.response.status == 401) //this.$store.commit("logout")
          ;
        });
    },  
  },
};
</script>

<style scoped>
.InitialSetting {
  font-family: "M PLUS Rounded 1c";
}
</style>