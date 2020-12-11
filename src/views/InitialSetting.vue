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
              <v-checkbox v-model="spot_1" label="博物館・美術館"></v-checkbox>
              <v-checkbox v-model="spot_2" label="商業施設"></v-checkbox>
              <v-checkbox v-model="spot_3" label="レジャー施設"></v-checkbox>
              <v-checkbox v-model="spot_4" label="神社・寺院"></v-checkbox>
              <v-checkbox v-model="spot_5" label="カフェ"></v-checkbox>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row>
            <v-col align="center">
              <v-select
                v-model="selectTime"
                :items="items_Time"
                :rules="[(v) => !!v || 'Item is required']"
                label="何分前に到着したいか"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-text-field v-model="adress" label="住所"></v-text-field>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-select
                v-model="items_WalkSpeed.choices[items_WalkSpeed.selected]"
                :items="Object.values(items_WalkSpeed.choices)"
                :rules="[(v) => !!v || 'Item is required']"
                label="歩く速度"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-btn rounded class="text-center" color="#0461cd" dark
                >保存</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import App_var from "../components/App_bar";

export default {
  name: "InitialSetting",
  components: {
    App_var,
  },
  data: () => ({
    selectTime: [],
    //selectWalkSpeed: [],
    items_Time: ["5分前", "10分前", "15分前", "30分前", "1時間前"],
    items_WalkSpeed: {
      choices: {
        1: "急いで",
        2: "少し急いで",
        3: "少しゆっくり",
        4: "ゆっくり",
      },
      name: "typeOfWalkSpeed",
      selected: 2,
    },
    adress: "",
    selectedSpotKey: "",
    selectedSpotItem: "",
    items_spot: {
      Cafe: [
        { name: "飲食がメインのカフェ・喫茶店" },
        { name: "軽食(パンケーキ、個人経営ファストフード等)" },
        { name: "その他のカフェ(動物カフェ、コンセプトカフェ等)" },
      ],
      Shopping: [
        { name: "ドラッグストア" },
        { name: "家電" },
        { name: "携帯電話販売店" },
        { name: "デパート、百貨店" },
        { name: "ショッピングセンター" },
        { name: "アウトレットショップ" },
        { name: "ホームセンター" },
        { name: "商店街" },
        { name: "コンビニ、スーパー" },
        { name: "リサイクル、ディスカウントショップ" },
        { name: "家具屋" },
        { name: "日用雑貨、インテリア用品" },
        { name: "文房具、事務用品" },
        { name: "フラワーショップ" },
        { name: "100円ショップ" },
        { name: "作業服屋" },
        { name: "CD、DVD、ビデオ屋" },
        { name: "書店" },
        { name: "玩具屋" },
        { name: "煙草屋" },
        { name: "アパレルショップ、アクセサリーショップ、時計屋" },
        { name: "食品専門店" },
        { name: "スポーツショップ" },
      ],
      Entertainment: [
        { name: "スポーツ施設" },
        { name: "麻雀" },
        { name: "ゲームセンター" },
        { name: "パチンコ、パチスロ" },
        { name: "ボウリング場" },
        { name: "ビリヤード" },
        { name: "遊園地、テーマパーク" },
        { name: "動物園" },
        { name: "水族館" },
        { name: "植物園" },
        { name: "海水浴場、遊泳場" },
        { name: "キャンプ場" },
        { name: "アウトドア施設" },
        { name: "ボート、ヨット" },
        { name: "釣り堀、釣り船" },
        { name: "プール" },
        { name: "観光農園" },
        { name: "映画館" },
        { name: "美術館" },
        { name: "画廊" },
        { name: "博物館、科学館" },
        { name: "コンサートホール" },
        { name: "ライブハウス" },
        { name: "公園" },
        { name: "道の駅" },
        { name: "パーキングエリア" },
        { name: "ドライブイン" },
      ],
      Living: [
        { name: "マッサージ、整体、治療院" },
        { name: "ベビー用品、子供服" },
        { name: "郵便、郵便局" },
        { name: "宅配便" },
        { name: "コインランドリー" },
        { name: "レンタルCD、DVD、ビデオ" },
        { name: "レンタルサイクル" },
        { name: "ガソリンスタンド" },
        { name: "靴修理" },
        { name: "クリーニング" },
        { name: "質屋" },
        { name: "洗車場" },
        { name: "銀行" },
        { name: "ペットショップ、動物病院" },
        { name: "銭湯" },
        { name: "スーパー銭湯" },
        { name: "健康ランド" },
        { name: "温泉浴場" },
        { name: "岩盤浴" },
        { name: "サウナ" },
        { name: "官公庁" },
        { name: "美容院、サロン" },
        { name: "寺院、神社、教会" },
      ],
    },
  }),

  mounted() {},
  methods: {
    postSettingData() {
      //作っている最中
      const headers = { Authorization: "JWT" + this.$store.getters.getToken };
      this.$axios
        .post("/accounts/setting/transportation/", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          this.items_WalkSpeed.selected =
            response.data[0][this.items_WalkSpeed.name];
        })
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },
    getSettingData() {
      const headers = { Authorization: "JWT" + this.$store.getters.getToken };
      this.$axios
        .get("/accounts/setting/transportation/", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          this.items_WalkSpeed.selected =
            response.data[0][this.items_WalkSpeed.name];
        })
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },
    selectedSpot: function () {
      this.selectedSpotItem = this.items_spot[this.selectedSpotKey];
    },
  },
};
</script>

<style scoped>
.InitialSetting {
  font-family: "M PLUS Rounded 1c";
}
</style>