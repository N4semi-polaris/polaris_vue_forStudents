<template>
  <div class="OutputList">
    <App_bar />

    <v-toolbar flat>
      <v-toolbar-title class="marginBarLR">
        検索結果<span class="ml-3">全{{ results.length }}件</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-sheet color="#f5f5f5" height="15px"></v-sheet>
    <template v-if="noResults"><v-col align="center">該当なし</v-col></template>
    <template v-if="isShow">
      <v-list shaped>
        <v-col style="color:red">※GoogleAPIsの課金対策のため、デモデータになります。保存もできません。</v-col>
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
                   <v-list-item-title v-text="result.taskname"></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="result.genre"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-text="result.station"
                  ></v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </template>
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
    hit_num: 0,
    results: [],
    model: -1,
    isShow: false,
    noResults: false,
    URL: "/recommend/",
  }),
  mounted() {
    console.log(
      "this.$store.getters.getlistResult: " + this.$store.getters.getlistResult
    );
    console.dir(this.$store.getters.getIsResult);
    console.log(
      "this.$store.getters.getlistResult.length: " +
        this.$store.getters.getlistResult.length
    );
    if (this.$store.getters.getlistResult.length == 0 ) {
      if (this.$route.query.type == 1) {
        this.URL = this.URL + "tasks/" + this.$route.query.bk;
        const data = [
            {
        "name": "セブンイレブン　国立谷保駅北口店",
        "lat": "35.681551388889",
        "lon": "139.446960277778",
        "genre": "コンビニ",
        "taskid": "8c698286-94bc-4dba-bf66-1f81f65fc5f2",
        "taskname": "通販のコンビニ支払い",
        "tasktime": 10.0,
        "route": [
                    {
                        "1": {
                            "name": "鷹の台",
                            "line": "西武国分寺線",
                            "time": 11.0,
                            "distance": 0.8,
                            "clock": "2021-02-02T15:21:00+09:00",
                            "type": "walk"
                        },
                        "2": {
                            "now": {
                                "name": "鷹の台",
                                "line": "西武国分寺線・国分寺行",
                                "start": "2021-02-02T15:23:00+09:00"
                            },
                            "des": {
                                "name": "谷保",
                                "line": "ＪＲ南武線・川崎行",
                                "end": "2021-02-02T15:50:00+09:00"
                            },
                            "time": 27
                        },
                        "3": {
                            "name": "谷保",
                            "line": "JR在来線",
                            "exit": "北口",
                            "time": 0.0,
                            "distance": "41",
                            "clock": "2021-02-02T15:50:00+09:00",
                            "type": "walk"
                        },
                        "4": {
                            "distance": 0.5,
                            "time": 6.0,
                            "type": "walk"
                        }
                    }
                ],
                "station": "谷保",
                "side": "des"
            },
            {
                "name": "ローソン　谷保駅北口店",
                "lat": "35.682423611111",
                "lon": "139.446613055556",
                "genre": "コンビニ",
                "taskid": "8c698286-94bc-4dba-bf66-1f81f65fc5f2",
                "taskname": "通販のコンビニ支払い",
                "tasktime": 10.0,
                "route": [
                    {
                        "1": {
                            "name": "鷹の台",
                            "line": "西武国分寺線",
                            "time": 11.0,
                            "distance": 0.8,
                            "clock": "2021-02-02T15:21:00+09:00",
                            "type": "walk"
                        },
                        "2": {
                            "now": {
                                "name": "鷹の台",
                                "line": "西武国分寺線・国分寺行",
                                "start": "2021-02-02T15:23:00+09:00"
                            },
                            "des": {
                                "name": "谷保",
                                "line": "ＪＲ南武線・川崎行",
                                "end": "2021-02-02T15:50:00+09:00"
                            },
                            "time": 27
                        },
                        "3": {
                            "name": "谷保",
                            "line": "JR在来線",
                            "exit": "北口",
                            "time": 1.0,
                            "distance": "149",
                            "clock": "2021-02-02T15:51:00+09:00",
                            "type": "walk"
                        },
                        "4": {
                            "distance": 0.4,
                            "time": 6.0,
                            "type": "walk"
                        }
                    }
                ],
                "station": "谷保",
                "side": "des"
            },
            {
                "name": "サンドラッグ富士見台店",
                "lat": "35.683440277778",
                "lon": "139.448296111111",
                "genre": "ドラッグストア",
                "taskid": "7a06159a-d8fe-4605-8a95-98343215f798",
                "taskname": "洗顔料とリップクリーム買う",
                "tasktime": 10.0,
                "route": [
                    {
                        "1": {
                            "name": "鷹の台",
                            "line": "西武国分寺線",
                            "time": 11.0,
                            "distance": 0.8,
                            "clock": "2021-02-02T15:21:00+09:00",
                            "type": "walk"
                        },
                        "2": {
                            "now": {
                                "name": "鷹の台",
                                "line": "西武国分寺線・国分寺行",
                                "start": "2021-02-02T15:23:00+09:00"
                            },
                            "des": {
                                "name": "谷保",
                                "line": "ＪＲ南武線・川崎行",
                                "end": "2021-02-02T15:50:00+09:00"
                            },
                            "time": 27
                        },
                        "3": {
                            "name": "谷保",
                            "line": "JR在来線",
                            "exit": "北口",
                            "time": 3.0,
                            "distance": "291",
                            "clock": "2021-02-02T15:53:00+09:00",
                            "type": "walk"
                        },
                        "4": {
                            "distance": 0.1,
                            "time": 2.0,
                            "type": "walk"
                        }
                    }
                ],
                "station": "谷保",
                "side": "des"
            },
            {
                "name": "キョーワ薬局",
                "lat": "35.682120833333",
                "lon": "139.446465833333",
                "genre": "ドラッグストア、市販薬（その他）",
                "taskid": "7a06159a-d8fe-4605-8a95-98343215f798",
                "taskname": "洗顔料とリップクリーム買う",
                "tasktime": 10.0,
                "route": [
                    {
                        "1": {
                            "name": "鷹の台",
                            "line": "西武国分寺線",
                            "time": 11.0,
                            "distance": 0.8,
                            "clock": "2021-02-02T15:21:00+09:00",
                            "type": "walk"
                        },
                        "2": {
                            "now": {
                                "name": "鷹の台",
                                "line": "西武国分寺線・国分寺行",
                                "start": "2021-02-02T15:23:00+09:00"
                            },
                            "des": {
                                "name": "谷保",
                                "line": "ＪＲ南武線・川崎行",
                                "end": "2021-02-02T15:50:00+09:00"
                            },
                            "time": 27
                        },
                        "3": {
                            "name": "谷保",
                            "line": "JR在来線",
                            "exit": "北口",
                            "time": 1.0,
                            "distance": "123",
                            "clock": "2021-02-02T15:51:00+09:00",
                            "type": "walk"
                        },
                        "4": {
                            "distance": 0.5,
                            "time": 6.0,
                            "type": "walk"
                        }
                    }
                ],
                "station": "谷保",
                "side": "des"
            }
        ]
        this.results = data
        this.$store.commit("setListResult", data);
      } else if (this.$route.query.type == 2) {
        this.URL = this.URL + "spots/" + this.$route.query.bk;
        const data = [
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "マイシティ側地上3"
                        },
                        "end": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "WIRED CHAYA ルミネエスト店",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "contents": {
                            "mins": 2.0,
                            "name": "徒歩",
                            "distance": 0.1
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "WIRED CHAYA ルミネエスト店",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "end": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "WIRED CHAYA ルミネエスト店",
                            "time": "2021-02-03T18:29:00+09:00"
                        },
                        "contents": {
                            "mins": 216.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "WIRED CHAYA ルミネエスト店",
                            "time": "2021-02-03T18:29:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "マイシティ側地上3"
                        },
                        "contents": {
                            "mins": 1.0,
                            "name": "徒歩",
                            "distance": 0.001
                        },
                        "type": "walk"
                    }
                ],
                "genre": "飲食がメインのカフェ・喫茶店",
                "name": "WIRED CHAYA ルミネエスト店",
                "lat": "35.69132350",
                "lon": "139.70114378",
                "mins": 216.0,
                "start": "2021-02-03T14:53:00+09:00",
                "end": "2021-02-03T18:29:00+09:00",
                "station": "新宿"
            },
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "マイシティ側地上3"
                        },
                        "end": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "PARK BAZAAR",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "contents": {
                            "mins": 2.0,
                            "name": "徒歩",
                            "distance": 0.1
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "PARK BAZAAR",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "end": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "PARK BAZAAR",
                            "time": "2021-02-03T18:29:00+09:00"
                        },
                        "contents": {
                            "mins": 216.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.69132350",
                            "lon": "139.70114378",
                            "name": "PARK BAZAAR",
                            "time": "2021-02-03T18:29:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "マイシティ側地上3"
                        },
                        "contents": {
                            "mins": 1.0,
                            "name": "徒歩",
                            "distance": 0.001
                        },
                        "type": "walk"
                    }
                ],
                "genre": "飲食がメインのカフェ・喫茶店",
                "name": "PARK BAZAAR",
                "lat": "35.69132350",
                "lon": "139.70114378",
                "mins": 216.0,
                "start": "2021-02-03T14:53:00+09:00",
                "end": "2021-02-03T18:29:00+09:00",
                "station": "新宿"
            },
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "A7"
                        },
                        "end": {
                            "lat": "35.691859444444",
                            "lon": "139.702035277778",
                            "name": "株式会社タカノフルーツパーラー　本店お客様相談室",
                            "time": "2021-02-03T14:54:00+09:00"
                        },
                        "contents": {
                            "mins": 3.0,
                            "name": "徒歩",
                            "distance": 0.2
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.691859444444",
                            "lon": "139.702035277778",
                            "name": "株式会社タカノフルーツパーラー　本店お客様相談室",
                            "time": "2021-02-03T14:54:00+09:00"
                        },
                        "end": {
                            "lat": "35.691859444444",
                            "lon": "139.702035277778",
                            "name": "株式会社タカノフルーツパーラー　本店お客様相談室",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "contents": {
                            "mins": 213.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.691859444444",
                            "lon": "139.702035277778",
                            "name": "株式会社タカノフルーツパーラー　本店お客様相談室",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "A7"
                        },
                        "contents": {
                            "mins": 3.0,
                            "name": "徒歩",
                            "distance": 0.2
                        },
                        "type": "walk"
                    }
                ],
                "genre": "飲食がメインのカフェ・喫茶店",
                "name": "株式会社タカノフルーツパーラー　本店お客様相談室",
                "lat": "35.691859444444",
                "lon": "139.702035277778",
                "mins": 213.0,
                "start": "2021-02-03T14:54:00+09:00",
                "end": "2021-02-03T18:27:00+09:00",
                "station": "新宿"
            },
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "B12(北側)"
                        },
                        "end": {
                            "lat": "35.69306496",
                            "lon": "139.70080763",
                            "name": "喫茶マイアミ 新宿",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "contents": {
                            "mins": 2.0,
                            "name": "徒歩",
                            "distance": 0.1
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.69306496",
                            "lon": "139.70080763",
                            "name": "喫茶マイアミ 新宿",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "end": {
                            "lat": "35.69306496",
                            "lon": "139.70080763",
                            "name": "喫茶マイアミ 新宿",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "contents": {
                            "mins": 214.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.69306496",
                            "lon": "139.70080763",
                            "name": "喫茶マイアミ 新宿",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "B12(北側)"
                        },
                        "contents": {
                            "mins": 3.0,
                            "name": "徒歩",
                            "distance": 0.2
                        },
                        "type": "walk"
                    }
                ],
                "genre": "飲食がメインのカフェ・喫茶店",
                "name": "喫茶マイアミ 新宿",
                "lat": "35.69306496",
                "lon": "139.70080763",
                "mins": 214.0,
                "start": "2021-02-03T14:53:00+09:00",
                "end": "2021-02-03T18:27:00+09:00",
                "station": "新宿"
            },
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "B13"
                        },
                        "end": {
                            "lat": "35.693017777778",
                            "lon": "139.700641111111",
                            "name": "ＮＯＲＴＨ・ＶＩＬＬＡＧＥ　新宿１号店",
                            "time": "2021-02-03T14:52:00+09:00"
                        },
                        "contents": {
                            "mins": 1.0,
                            "name": "徒歩",
                            "distance": 0.1
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.693017777778",
                            "lon": "139.700641111111",
                            "name": "ＮＯＲＴＨ・ＶＩＬＬＡＧＥ　新宿１号店",
                            "time": "2021-02-03T14:52:00+09:00"
                        },
                        "end": {
                            "lat": "35.693017777778",
                            "lon": "139.700641111111",
                            "name": "ＮＯＲＴＨ・ＶＩＬＬＡＧＥ　新宿１号店",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "contents": {
                            "mins": 215.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.693017777778",
                            "lon": "139.700641111111",
                            "name": "ＮＯＲＴＨ・ＶＩＬＬＡＧＥ　新宿１号店",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "B13"
                        },
                        "contents": {
                            "mins": 3.0,
                            "name": "徒歩",
                            "distance": 0.2
                        },
                        "type": "walk"
                    }
                ],
                "genre": "飲食がメインのカフェ・喫茶店",
                "name": "ＮＯＲＴＨ・ＶＩＬＬＡＧＥ　新宿１号店",
                "lat": "35.693017777778",
                "lon": "139.700641111111",
                "mins": 215.0,
                "start": "2021-02-03T14:52:00+09:00",
                "end": "2021-02-03T18:27:00+09:00",
                "station": "新宿"
            },
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "B12(北側)"
                        },
                        "end": {
                            "lat": "35.693340000000",
                            "lon": "139.701438055556",
                            "name": "株式会社カワノ・クォーク　東口店",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "contents": {
                            "mins": 2.0,
                            "name": "徒歩",
                            "distance": 0.1
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.693340000000",
                            "lon": "139.701438055556",
                            "name": "株式会社カワノ・クォーク　東口店",
                            "time": "2021-02-03T14:53:00+09:00"
                        },
                        "end": {
                            "lat": "35.693340000000",
                            "lon": "139.701438055556",
                            "name": "株式会社カワノ・クォーク　東口店",
                            "time": "2021-02-03T18:26:00+09:00"
                        },
                        "contents": {
                            "mins": 213.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.693340000000",
                            "lon": "139.701438055556",
                            "name": "株式会社カワノ・クォーク　東口店",
                            "time": "2021-02-03T18:26:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "B12(北側)"
                        },
                        "contents": {
                            "mins": 4.0,
                            "name": "徒歩",
                            "distance": 0.3
                        },
                        "type": "walk"
                    }
                ],
                "genre": "日用雑貨、インテリア用品",
                "name": "株式会社カワノ・クォーク　東口店",
                "lat": "35.693340000000",
                "lon": "139.701438055556",
                "mins": 213.0,
                "start": "2021-02-03T14:53:00+09:00",
                "end": "2021-02-03T18:26:00+09:00",
                "station": "新宿"
            },
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "B13"
                        },
                        "end": {
                            "lat": "35.692826111111",
                            "lon": "139.701140833333",
                            "name": "チケット大黒屋　ブランド館新宿歌舞伎町前店",
                            "time": "2021-02-03T14:52:00+09:00"
                        },
                        "contents": {
                            "mins": 1.0,
                            "name": "徒歩",
                            "distance": 0.072
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.692826111111",
                            "lon": "139.701140833333",
                            "name": "チケット大黒屋　ブランド館新宿歌舞伎町前店",
                            "time": "2021-02-03T14:52:00+09:00"
                        },
                        "end": {
                            "lat": "35.692826111111",
                            "lon": "139.701140833333",
                            "name": "チケット大黒屋　ブランド館新宿歌舞伎町前店",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "contents": {
                            "mins": 215.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.692826111111",
                            "lon": "139.701140833333",
                            "name": "チケット大黒屋　ブランド館新宿歌舞伎町前店",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "B13"
                        },
                        "contents": {
                            "mins": 3.0,
                            "name": "徒歩",
                            "distance": 0.2
                        },
                        "type": "walk"
                    }
                ],
                "genre": "日用雑貨、インテリア用品",
                "name": "チケット大黒屋　ブランド館新宿歌舞伎町前店",
                "lat": "35.692826111111",
                "lon": "139.701140833333",
                "mins": 215.0,
                "start": "2021-02-03T14:52:00+09:00",
                "end": "2021-02-03T18:27:00+09:00",
                "station": "新宿"
            },
            {
                "sections": [
                    {
                        "start": {
                            "lat": 35.72186677,
                            "lon": 139.46597652,
                            "name": "東京都小平市津田町2丁目1-1",
                            "time": "2021-02-03T14:00:00+09:00"
                        },
                        "end": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:11:00+09:00"
                        },
                        "contents": {
                            "mins": 11.0,
                            "name": "徒歩",
                            "distance": 0.23
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": 35.723097,
                            "lon": 139.461155,
                            "name": "鷹の台",
                            "time": "2021-02-03T14:13:00+09:00"
                        },
                        "end": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00"
                        },
                        "contents": {
                            "mins": 0,
                            "name": "公共交通",
                            "distance": null
                        },
                        "type": "train"
                    },
                    {
                        "start": {
                            "lat": 35.69235,
                            "lon": 139.700711,
                            "name": "新宿",
                            "time": "2021-02-03T14:51:00+09:00",
                            "exit": "B9"
                        },
                        "end": {
                            "lat": "35.692131666667",
                            "lon": "139.702476944444",
                            "name": "ＫＥＹＵＣＡ　新宿東口店",
                            "time": "2021-02-03T14:55:00+09:00"
                        },
                        "contents": {
                            "mins": 4.0,
                            "name": "徒歩",
                            "distance": 0.2
                        },
                        "type": "walk"
                    },
                    {
                        "start": {
                            "lat": "35.692131666667",
                            "lon": "139.702476944444",
                            "name": "ＫＥＹＵＣＡ　新宿東口店",
                            "time": "2021-02-03T14:55:00+09:00"
                        },
                        "end": {
                            "lat": "35.692131666667",
                            "lon": "139.702476944444",
                            "name": "ＫＥＹＵＣＡ　新宿東口店",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "contents": {
                            "mins": 212.0,
                            "name": "寄り道",
                            "distance": 0
                        },
                        "type": "yorimichi"
                    },
                    {
                        "start": {
                            "lat": "35.692131666667",
                            "lon": "139.702476944444",
                            "name": "ＫＥＹＵＣＡ　新宿東口店",
                            "time": "2021-02-03T18:27:00+09:00"
                        },
                        "end": {
                            "lat": 35.6913235,
                            "lon": 139.70114378,
                            "name": "東京都新宿区新宿3丁目38-1",
                            "time": "2021-02-03T18:30:00+09:00",
                            "exit": "B9"
                        },
                        "contents": {
                            "mins": 3.0,
                            "name": "徒歩",
                            "distance": 0.2
                        },
                        "type": "walk"
                    }
                ],
                "genre": "日用雑貨、インテリア用品",
                "name": "ＫＥＹＵＣＡ　新宿東口店",
                "lat": "35.692131666667",
                "lon": "139.702476944444",
                "mins": 212.0,
                "start": "2021-02-03T14:55:00+09:00",
                "end": "2021-02-03T18:27:00+09:00",
                "station": "新宿"
            }
        ]
        this.results = data
        this.$store.commit("setListResult", data);
      } else if (this.$route.query.type == 3) {
        this.URL = this.URL + "restaurants/" + this.$route.query.bk;
        const data = [
            {
                "name": "鷹の屋",
                "lat": "35.721692",
                "lon": "139.460468",
                "genre": "そば",
                "eat_time": 60,
                "route": [
                    {
                        "1": {
                            "distance": 0.8,
                            "time": 11.0,
                            "type": "walk",
                            "clock": "2021-02-03T14:21:00+09:00"
                        },
                        "2": {
                            "name": "鷹の台",
                            "line": "西武国分寺線",
                            "exit": "",
                            "time": 3.0,
                            "clock": "2021-02-03T15:24:00+09:00",
                            "type": "walk"
                        },
                        "3": {
                            "now": {
                                "name": "鷹の台",
                                "line": "西武国分寺線・国分寺行",
                                "start": "2021-02-03T15:43:00+09:00",
                                "type": "train"
                            },
                            "des": {
                                "name": "新宿",
                                "line": "ＪＲ中央線中央特快・東京行",
                                "end": "2021-02-03T16:15:00+09:00",
                                "type": "train"
                            },
                            "time": 32
                        },
                        "4": {
                            "name": "新宿",
                            "line": "東京メトロ丸ノ内線",
                            "time": 2.0,
                            "distance": 0.1,
                            "type": "walk"
                        }
                    }
                ],
                "station": "鷹の台",
                "side": "now"
            },
            {
                "name": "Ochobohan ルミネエスト新宿店",
                "lat": "35.691294",
                "lon": "139.701094",
                "genre": "箱すしと茶そば",
                "eat_time": 60,
                "route": [
                    {
                        "1": {
                            "name": "鷹の台",
                            "line": "西武国分寺線",
                            "time": 11.0,
                            "distance": 0.8,
                            "clock": "2021-02-03T14:21:00+09:00",
                            "type": "walk"
                        },
                        "2": {
                            "now": {
                                "name": "鷹の台",
                                "line": "西武国分寺線・国分寺行",
                                "start": "2021-02-03T14:23:00+09:00",
                                "type": "train"
                            },
                            "des": {
                                "name": "新宿",
                                "line": "ＪＲ中央線中央特快・東京行",
                                "end": "2021-02-03T15:00:00+09:00",
                                "type": "train"
                            },
                            "time": 37
                        },
                        "3": {
                            "name": "新宿",
                            "line": "ＪＲ",
                            "exit": "",
                            "time": 1.0,
                            "clock": "2021-02-03T15:01:00+09:00",
                            "type": "walk"
                        },
                        "4": {
                            "distance": 0.001,
                            "time": 1.0,
                            "type": "walk"
                        }
                    }
                ],
                "station": "新宿",
                "side": "des"
            },
            {
                "name": "フランソワ ルミネエスト新宿店",
                "lat": "35.691194",
                "lon": "139.701102",
                "genre": "喫茶・カフェ",
                "eat_time": 60,
                "route": [
                    {
                        "1": {
                            "name": "鷹の台",
                            "line": "西武国分寺線",
                            "time": 11.0,
                            "distance": 0.8,
                            "clock": "2021-02-03T14:21:00+09:00",
                            "type": "walk"
                        },
                        "2": {
                            "now": {
                                "name": "鷹の台",
                                "line": "西武国分寺線・国分寺行",
                                "start": "2021-02-03T14:23:00+09:00",
                                "type": "train"
                            },
                            "des": {
                                "name": "新宿",
                                "line": "ＪＲ中央線中央特快・東京行",
                                "end": "2021-02-03T15:00:00+09:00",
                                "type": "train"
                            },
                            "time": 37
                        },
                        "3": {
                            "name": "新宿",
                            "line": "ＪＲ",
                            "exit": "東口",
                            "time": 1.0,
                            "clock": "2021-02-03T15:01:00+09:00",
                            "type": "walk"
                        },
                        "4": {
                            "distance": 0.001,
                            "time": 1.0,
                            "type": "walk"
                        }
                    }
                ],
                "station": "新宿",
                "side": "des"
            }
        ]
        this.results = data
        this.$store.commit("setListResult", data);
      }
      this.isShow = true;
      //this.getData(this.URL);
    } else if(this.$store.getters.getlistResult.status=="該当なし"){
      this.noResults = true;
    }else{
      this.results = this.$store.getters.getlistResult;
      /*
      console.log("this.results: ");
      console.dir(this.results);
      for (let i in this.results) {
        console.dir(this.results[i]);
        console.log("this.results" + i + ".sections: ");
        console.dir(this.results[i].sections);
      }*/
      this.isShow = true;
    }
  },

  methods: {
    /////////////////////////以下メソッド平山記述////////////////
    /*決め打ち版にするため、削除
    getData(url) {
      const headers = { Authorization: "JWT " + this.$store.getters.getToken };
      console.log(
        "this.$route.query.bkの型@GET: " + typeof this.$route.query.bk
      );
      console.log("URL: " + url);
      console.log("URLの型: " + typeof url);
      console.log("headers:" + headers);
      this.$axios
        .get(url, {
          data: {},
          headers: headers,
        })
        .then((response) => {
          this.$store.commit("setListResult", response.data);
          for (let i in response.data) {
            this.results[i] = response.data[i];
            console.dir(this.results[i]);
          }
          if (response.data.length == 0 ||response.data.status=="該当なし") {
            this.noResults = true;
          }else{this.isShow = true;} 
        })
        .catch((error) => {
          console.log("エラーになっちゃった..:＠getData");
          if (
            error.response.status == 401 //this.$store.commit("logout")
          );
        });
    },*/
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