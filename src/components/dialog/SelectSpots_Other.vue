
<template>
  <v-dialog v-model="dialog_Other_Open" persistent width="600px">
    <v-card>
      <v-card-text>
        <h2 class="title mb-2">3つ選択してください</h2>
        <v-chip-group
          v-model="selectSpot_Other"
          active-class="primary--text"
          column
          multiple
          max="7"
        >
          <v-chip filter v-for="tag in items_Spot_Other" :key="tag" small>
            {{ tag }}
          </v-chip>
        </v-chip-group></v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog_Other_Open = false">
          閉じる
        </v-btn>
        <v-btn color="green darken-1" text @click="dialog_Other_Open = false"
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
    selectSpot_Other: [],
    items_Spot_Other: [
      "飲食がメインのカフェ・喫茶店",
      "軽食(パンケーキ、個人経営ファストフード等)",
      "その他のカフェ(動物カフェ、コンセプトカフェ等)",
      "ドラッグストア",
      "家電",
      "携帯電話販売店",
      "デパート、百貨店",
      "ショッピングセンター",
      "アウトレットショップ",
      "ホームセンター",
      "商店街",
      "コンビニ、スーパー",
      "リサイクル、ディスカウントショップ",
      "家具屋",
      "日用雑貨、インテリア用品",
      "文房具、事務用品",
      "フラワーショップ",
      "100円ショップ",
      "作業服屋",
      "CD、DVD、ビデオ屋",
      "書店",
      "玩具屋",
      "煙草屋",
      "アパレルショップ、アクセサリーショップ、時計屋",
      "食品専門店",
      "スポーツショップ",
      "スポーツ施設",
      "麻雀",
      "ゲームセンター",
      "パチンコ、パチスロ",
      "ボウリング場",
      "ビリヤード",
      "遊園地、テーマパーク",
      "動物園",
      "水族館",
      "植物園",
      "海水浴場、遊泳場",
      "キャンプ場",
      "アウトドア施設",
      "ボート、ヨット",
      "釣り堀、釣り船",
      "プール",
      "観光農園",
      "映画館",
      "美術館",
      "画廊",
      "博物館、科学館",
      "コンサートホール",
      "ライブハウス",
      "公園",
      "道の駅",
      "パーキングエリア",
      "ドライブイン",
      "マッサージ、整体、治療院",
      "ベビー用品、子供服",
      "郵便、郵便局",
      "宅配便",
      "コインランドリー",
      "レンタルCD、DVD、ビデオ",
      "レンタルサイクル",
      "ガソリンスタンド",
      "靴修理",
      "クリーニング",
      "質屋",
      "洗車場",
      "銀行",
      "ペットショップ、動物病院",
      "銭湯",
      "スーパー銭湯",
      "健康ランド",
      "温泉浴場",
      "岩盤浴",
      "サウナ",
      "官公庁",
      "美容院、サロン",
      "寺院、神社、教会",
    ],
  }),
  methods: {
    OdialogOpen() {
      this.dialog_Other_Open = true;
    },
  },
};
</script>

<style>
</style>