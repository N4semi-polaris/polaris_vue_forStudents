
<template>
  <v-dialog v-model="dialog_Gourmet_Open" width="600px">
    <template>
      <v-btn color="primary"> 飲食店を選ぶ </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2 class="title mb-2">3つ選択してください</h2>
      </v-card-title>
      <v-card-text>
        <v-chip-group
          v-model="selectSpot_Gourmet"
          active-class="primary--text"
          column
          multiple
          max="3"
        >
          <v-chip filter v-for="tag in items_Spot_Gourmet" :key="tag" small>
            {{ tag }}
          </v-chip>
        </v-chip-group></v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="dialog_Gourmet_Open = false">
          閉じる
        </v-btn>
        <v-btn color="green darken-1" text @click="dialog_Gourmet_Open = false">
          保存
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog_Gourmet_Open: false,
    selectSpot_Gourmet: [],
    items_Spot_Gourmet: [
      "居酒屋",
      "ラーメン屋",
      "蕎麦屋",
      "サンドイッチ、パン屋",
      "中華料理屋",
      "スイーツ",
      "寿司屋",
      "回転寿司",
      "とんかつ屋",
      "洋食屋",
      "タイ料理",
      "焼肉",
      "焼き鳥",
      "イタリアン",
      "ハンバーガーショップ",
      "パスタ",
      "天ぷら",
      "カレーライス",
      "定食屋",
      "韓国料理屋",
      "うどん",
      "鉄板焼き",
      "オムライス",
      "おにぎり",
      "うなぎ",
      "しゃぶしゃぶ",
      "お茶漬け",
      "スープ専門店",
      "スペイン料理",
      "お好み焼き",
      "もんじゃ焼き",
      "ステーキ",
      "串カツ、串揚げ",
      "もつ焼き",
      "和菓子",
    ],
  }),
  methods: {
    GdialogOpen() {
      this.dialog_Gourmet_Open = true;
    },
  },
};
</script>

<style>
</style>