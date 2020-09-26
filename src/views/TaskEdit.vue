<template>
  <div class="TaskEdit">
    <App_bar />
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="taskname"
              :rules="nameRules"
              :counter="10"
              label="タスク名"
              prepend-icon="mdi-calendar-check"
              required
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-select
              :items="task_type"
              label="タスクタイプ"
              prepend-icon="mdi-tag"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="tasktype"
              label="施設/店舗名"
              prepend-icon="mdi-storefront-outline"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col cols="2">
            <v-btn icon><v-icon size="26">mdi-calendar-clock</v-icon></v-btn>
            <!-- 開始時間と終了時間に入力があったら色を変える、みたいなのやりたい -->
          </v-col>
          <v-col cols="10">
            <v-row><v-col>
          <v-datetime-picker
            label="開始時間"
            v-model="datetime"
          ></v-datetime-picker>
            </v-col></v-row>
            <v-row><v-col>
            <v-datetime-picker
            label="終了時間"
            v-model="tasktime"
          ></v-datetime-picker>
            </v-col></v-row>
            <v-row><v-col>
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>固定曜日で繰り返す</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row justify="space-around">
                      <v-checkbox class="nx-2" label="月"></v-checkbox>
                      <v-checkbox class="nx-2" label="火"></v-checkbox>
                      <v-checkbox class="nx-2" label="水"></v-checkbox>
                      <v-checkbox class="nx-2" label="木"></v-checkbox>
                      <v-checkbox class="nx-2" label="金"></v-checkbox>
                      <v-checkbox class="nx-2" label="土"></v-checkbox>
                      <v-checkbox class="nx-2" label="日"></v-checkbox>
                      </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>回数指定で繰り返す</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="count-form">
                      <v-text-field outlined full-width></v-text-field></div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col></v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row><v-col>
          <div class="timerequired-form">
          <v-text-field
              v-model="timerequired"
              label="所要時間（分単位）"
              prepend-icon="mdi-clock-time-five-outline"
              required
              ></v-text-field></div>
        </v-col></v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col cols="2">
            <v-btn icon><v-icon size="26">mdi-storefront</v-icon></v-btn>
          </v-col>
          <v-col cols="10">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>定休日</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row justify="space-around">
                      <v-checkbox class="nx-2" label="月"></v-checkbox>
                      <v-checkbox class="nx-2" label="火"></v-checkbox>
                      <v-checkbox class="nx-2" label="水"></v-checkbox>
                      <v-checkbox class="nx-2" label="木"></v-checkbox>
                      <v-checkbox class="nx-2" label="金"></v-checkbox>
                      <v-checkbox class="nx-2" label="土"></v-checkbox>
                      <v-checkbox class="nx-2" label="日"></v-checkbox>
                      </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-row justify="center">
          <v-btn
            color="#032b8d"
            class="ma-2 white--text"
            fab
          ><v-icon large>mdi-download-multiple</v-icon><!-- 保存ボタン -->
          </v-btn>
          <v-btn
            color="#0575e6"
            class="ma-2 white--text"
            fab
          ><v-icon large>mdi-trash-can-outline</v-icon><!-- 消去ボタン -->
          </v-btn>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import App_bar from "../components/App_bar";
import moment from 'moment';

export default {
  name: 'TaskEdit',
  components: {
    App_bar,
  },
  data: () => ({
    taskname: '',
    tasktype: '',
    tasktime: '',
    timerequired: '',
    nameRules: [
      v => !!v || '必ず入力してください！',
      v => v.length <= 15 || '15文字以内で入力してください',
    ],
    task_type: [ 'スーパー・コンビニ', 'ファッション', '本・文具', '映画館', '飲食店', 'その他' ],
    datetime: moment(new Date).format('yyyy-MM-DD HH:mm'),
    //今日の日付を分単位まで取得
  }),
}
</script>

<style scoped>
.count-form {
  width: 100px;
}
.timerequired-form {
  width: 200px;
}
</style>