
<template>
  <v-dialog v-model="dialog_Other_Open" persistent width="600px">
    <v-card>
      <v-card-text>
        <h2 class="title mb-2">7つ選択してください</h2>
        <v-chip-group
          v-model="items_Spot_Other.choices"
          :items="Object.values(items_Spot_Other.choices)"
          active-class="primary--text"
          column
          multiple
          max="7"
        >
          <v-chip
            filter
            v-for="tag in items_Spot_Other.choices"
            :key="tag"
            small
          >
            {{ tag }}
          </v-chip>
        </v-chip-group></v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="#0461cd" text @click="dialog_Other_Open = false">
          閉じる
        </v-btn>
        <v-btn color="#0461cd" text @click="dialog_Other_Open = false"
          ><!--axiosメソッドを発火-->
          保存
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog_Other_Open: false,
    //selectSpot_Other: [],
    items_Spot_Other: {
      choices: {
        1: "飲食がメインのカフェ・喫茶店",
        2: "軽食(パンケーキ、個人経営ファストフード等)",
        3: "その他のカフェ(動物カフェ、コンセプトカフェ等)",
        4: "ドラッグストア",
        5: "家電",
        6: "携帯電話販売店",
        7: "デパート、百貨店",
        8: "ショッピングセンター",
        9: "アウトレットショップ",
        10: "ホームセンター",
        11: "商店街",
        12: "コンビニ、スーパー",
        13: "リサイクル、ディスカウントショップ",
        14: "家具屋",
        15: "日用雑貨、インテリア用品",
        16: "文房具、事務用品",
        17: "フラワーショップ",
        18: "100円ショップ",
        19: "作業服屋",
        20: "CD、DVD、ビデオ屋",
        21: "書店",
        22: "玩具屋",
        23: "煙草屋",
        24: "アパレルショップ、アクセサリーショップ、時計屋",
        25: "食品専門店",
        26: "スポーツショップ",
        27: "スポーツ施設",
        28: "麻雀",
        29: "ゲームセンター",
        30: "パチンコ、パチスロ",
        31: "ボウリング場",
        32: "ビリヤード",
        33: "遊園地、テーマパーク",
        34: "動物園",
        35: "水族館",
        36: "植物園",
        37: "海水浴場、遊泳場",
        38: "キャンプ場",
        39: "アウトドア施設",
        40: "ボート、ヨット",
        41: "釣り堀、釣り船",
        42: "プール",
        43: "観光農園",
        44: "映画館",
        45: "美術館",
        46: "画廊",
        47: "博物館、科学館",
        48: "コンサートホール",
        49: "ライブハウス",
        50: "公園",
        51: "道の駅",
        52: "パーキングエリア",
        53: "ドライブイン",
        54: "マッサージ、整体、治療院",
        55: "ベビー用品、子供服",
        56: "郵便、郵便局",
        57: "宅配便",
        58: "コインランドリー",
        59: "レンタルCD、DVD、ビデオ",
        60: "レンタルサイクル",
        61: "ガソリンスタンド",
        62: "靴修理",
        63: "クリーニング",
        64: "質屋",
        65: "洗車場",
        66: "銀行",
        67: "ペットショップ、動物病院",
        68: "銭湯",
        69: "スーパー銭湯",
        70: "健康ランド",
        71: "温泉浴場",
        72: "岩盤浴",
        73: "サウナ",
        74: "官公庁",
        75: "美容院、サロン",
        76: "寺院、神社、教会",
      },
      name: "typeOfSpotGourmet",
      selected: [],
    },
  }),
  methods: {
    OdialogOpen() {
      this.dialog_Other_Open = true;
    },
    getData() {
      const headers = { Authorization: "JWT" + this.$store.getters.getToken };
      this.$axios
        .get("/accounts/setting/transportation/", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          this.items_Spot_Other.selected =
            response.data[0][this.items_Spot_Other.name];
        })
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },
  },
};
</script>

<style>
</style>