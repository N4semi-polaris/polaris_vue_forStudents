<!-- まだどこにも反映してないけど一応書いておきました by小松 -->
<template>
    <div v-show="tutorialDialog_p >= 0 && tutorialDialog_p <= 4">
        <v-card color="white" flat width="400px">
            <div v-show="tutorialDialog_p==0"><!-- 1枚目 -->
                <v-card-title class="justify-center">はじめまして</v-card-title>
                <v-card-text><v-container>
                    <v-row><v-col cols="12">
                        <p>寄り道予定サポートアプリ</p><br>
                        <p>「Poralis」をダウンロードいただき、</p><br>
                        <p>ありがとうございます！</p><br>
                        <v-spacer></v-spacer>
                        <p>初期設定として、</p><br>
                        <p>４つの質問にお答え下さい。</p>
                    </v-col></v-row>
                </v-container></v-card-text>
            </div>
            <div v-show="tutorialDialog_p==1"><!-- 2枚目 -->
            <v-card-title class="justify-center">歩く速度は？</v-card-title>
            <v-card-text><v-container>
                <v-radio-group v-model="radioGroup" column>
                    <v-radio label="やや速い" value="fast_walking"></v-radio>
                    <v-radio label="普通" value="normal_walking"></v-radio>
                    <v-radio label="やや遅い" value="slow_walking"></v-radio>
                </v-radio-group>
            </v-container></v-card-text>
            </div>
            <div v-show="tutorialDialog_p==2"><!-- 3枚目 -->
            <v-card-title class="justify-center">好きなスポットは？</v-card-title>
            <v-card-text><v-container>
                <v-checkbox class="nx-2" label="博物館・美術館"></v-checkbox>
                <v-checkbox class="nx-2" label="商業施設"></v-checkbox>
                <v-checkbox class="nx-2" label="レジャー施設"></v-checkbox>
                <v-checkbox class="nx-2" label="神社・寺院"></v-checkbox>
                <v-checkbox class="nx-2" label="カフェ"></v-checkbox>
            </v-container></v-card-text>
            </div>
            <div v-show="tutorialDialog_p==3"><!-- 4枚目 -->
            <v-card-title class="justify-center">予定時刻の何分前に<br>到着していたい？</v-card-title>
            <v-card-text><v-container><v-row><v-col>
                <v-text-field outlined v-model="tochakuTime" suffix="分前"></v-text-field>
            </v-col></v-row></v-container></v-card-text>
            </div>
            <div v-show="tutorialDialog_p==4"><!-- 5枚目 -->
            <v-card-title class="justify-center">自宅の住所を<br>入力してね</v-card-title>
            <v-card-text><v-container><v-row><v-col>
                <v-text-field hint="都道府県から" persistent-hint outlined prepend-inner-icon="mdi-map-marker"></v-text-field>
            </v-col></v-row></v-container></v-card-text>
            </div>
            <!-- 以下全ページ共通コンポーネント -->
            <p align="center">{{ tutorialDialog_p + 1 }}/5</p>
            <v-card-actions>
                <v-btn class="white--text" absolute bottom center color="#0461cd" @click="turnTo_nextTutorialDialog">次へ
                    <v-icon right>mdi-arrow-right-bold-circle</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        tutorialDialog_p: 0,
        radioGroup: 1,
        tochakuTime:10,
    }),
    methods: {
        turnTo_nextTutorialDialog () {
            this.tutorialDialog_p += 1;
            if (this.tutorialDialog_p == 3) this.tutorialDialog_p = 0;
        }
    }
}
</script>