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

              <v-select
                v-model="selected"
                :items="items_Spot"
                item-text="category"
                item-value="name"
                label="スポット選択"
              >
              </v-select>
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
    selectSpot: [],
    items_Spot: [
      { category: "Cafe", name: "飲食がメインのカフェ・喫茶店" },
      { category: "Cafe", name: "軽食(パンケーキ、個人経営ファストフード等)" },
      {
        category: "Cafe",
        name: "その他のカフェ(動物カフェ、コンセプトカフェ等)",
      },

      { category: "Shopping", name: "ドラッグストア" },
      { category: "Shopping", name: "家電" },
      { category: "Shopping", name: "携帯電話販売店" },
      { category: "Shopping", name: "デパート、百貨店" },
      { category: "Shopping", name: "ショッピングセンター" },
      { category: "Shopping", name: "アウトレットショップ" },
      { category: "Shopping", name: "ホームセンター" },
      { category: "Shopping", name: "商店街" },
      { category: "Shopping", name: "コンビニ、スーパー" },
      { category: "Shopping", name: "リサイクル、ディスカウントショップ" },
      { category: "Shopping", name: "家具屋" },
      { category: "Shopping", name: "日用雑貨、インテリア用品" },
      { category: "Shopping", name: "文房具、事務用品" },
      { category: "Shopping", name: "フラワーショップ" },
      { category: "Shopping", name: "100円ショップ" },
      { category: "Shopping", name: "作業服屋" },
      { category: "Shopping", name: "CD、DVD、ビデオ屋" },
      { category: "Shopping", name: "書店" },
      { category: "Shopping", name: "玩具屋" },
      { category: "Shopping", name: "煙草屋" },
      {
        category: "Shopping",
        name: "アパレルショップ、アクセサリーショップ、時計屋",
      },
      { category: "Shopping", name: "食品専門店" },
      { category: "Shopping", name: "スポーツショップ" },

      { category: "Entertainment", name: "スポーツ施設" },
      { category: "Entertainment", name: "麻雀" },
      { category: "Entertainment", name: "ゲームセンター" },
      { category: "Entertainment", name: "パチンコ、パチスロ" },
      { category: "Entertainment", name: "ボウリング場" },
      { category: "Entertainment", name: "ビリヤード" },
      { category: "Entertainment", name: "遊園地、テーマパーク" },
      { category: "Entertainment", name: "動物園" },
      { category: "Entertainment", name: "水族館" },
      { category: "Entertainment", name: "植物園" },
      { category: "Entertainment", name: "海水浴場、遊泳場" },
      { category: "Entertainment", name: "キャンプ場" },
      { category: "Entertainment", name: "アウトドア施設" },
      { category: "Entertainment", name: "ボート、ヨット" },
      { category: "Entertainment", name: "釣り堀、釣り船" },
      { category: "Entertainment", name: "プール" },
      { category: "Entertainment", name: "観光農園" },
      { category: "Entertainment", name: "映画館" },
      { category: "Entertainment", name: "美術館" },
      { category: "Entertainment", name: "画廊" },
      { category: "Entertainment", name: "博物館、科学館" },
      { category: "Entertainment", name: "コンサートホール" },
      { category: "Entertainment", name: "ライブハウス" },
      { category: "Entertainment", name: "公園" },
      { category: "Entertainment", name: "道の駅" },
      { category: "Entertainment", name: "パーキングエリア" },
      { category: "Entertainment", name: "ドライブイン" },

      { category: "Living", name: "マッサージ、整体、治療院" },
      { category: "Living", name: "ベビー用品、子供服" },
      { category: "Living", name: "郵便、郵便局" },
      { category: "Living", name: "宅配便" },
      { category: "Living", name: "コインランドリー" },
      { category: "Living", name: "レンタルCD、DVD、ビデオ" },
      { category: "Living", name: "レンタルサイクル" },
      { category: "Living", name: "ガソリンスタンド" },
      { category: "Living", name: "靴修理" },
      { category: "Living", name: "クリーニング" },
      { category: "Living", name: "質屋" },
      { category: "Living", name: "洗車場" },
      { category: "Living", name: "銀行" },
      { category: "Living", name: "ペットショップ、動物病院" },
      { category: "Living", name: "銭湯" },
      { category: "Living", name: "スーパー銭湯" },
      { category: "Living", name: "健康ランド" },
      { category: "Living", name: "温泉浴場" },
      { category: "Living", name: "岩盤浴" },
      { category: "Living", name: "サウナ" },
      { category: "Living", name: "官公庁" },
      { category: "Living", name: "美容院、サロン" },
      { category: "Living", name: "寺院、神社、教会" },
    ],
  }),

  mounted() {},
  methods: {
    /*showSelectedSpotItem: function () {
      return items_Spot[this.selectedSpot];
    },*/

    /*postSettingData() {
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
    },*/
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
  },
};
</script>

<style scoped>
.InitialSetting {
  font-family: "M PLUS Rounded 1c";
}
</style>