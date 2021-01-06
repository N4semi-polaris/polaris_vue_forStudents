<template>
  <div class="TaskEdit">
    <App_bar />
    <v-form ref="taskedit_form">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="taskname"
              :rules="tasknameRules"
              :counter="15"
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
              v-model="tasktype"
              label="タスクタイプ"
              prepend-icon="mdi-tag"
              required
              :rules="tasktypeRules"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="location"
              label="施設/店舗名"
              prepend-icon="mdi-storefront-outline"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-spacer />
        <v-row>
          <v-col cols="12">
            <v-expansion-panels accordion flat>
                <v-expansion-panel>
                  <v-expansion-panel-header>メモ</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-textarea v-model="description"/>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col cols="2">
            <v-icon size="26">mdi-calendar-clock</v-icon>
            <!-- 開始時間と終了時間に入力があったら色を変える、みたいなのやりたい -->
          </v-col>
          <v-col cols="10">
            <v-row><v-col>
          <v-datetime-picker
            label="開始日時"
            v-model="startline"
          ></v-datetime-picker>
            </v-col></v-row>
            <v-row><v-col>
            <v-datetime-picker
            label="締切日時"
            v-model="deadline"
          ></v-datetime-picker>
            </v-col></v-row>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row><v-col>
          <div class="timerequired-form">
          <v-text-field
              v-model.number="timerequired"
              type="number"
              label="所要時間"
              prepend-icon="mdi-clock-time-five-outline"
              suffix="分"
              required
              :rules="timerequiredRules"
              ></v-text-field></div>
        </v-col></v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col cols="2">
            <v-btn icon><v-icon size="26">mdi-storefront</v-icon></v-btn>
          </v-col>
          <v-col cols="10">
            <v-expansion-panels accordion flat>
              <v-expansion-panel>
                <v-expansion-panel-header>定休日</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row align-content="start">
                    <v-checkbox class="nx-2" label="月" v-model="noBusinessDates[1]"/>
                    <v-checkbox class="nx-2" label="火" v-model="noBusinessDates[2]"/>
                    <v-checkbox class="nx-2" label="水" v-model="noBusinessDates[3]"/>
                    <v-checkbox class="nx-2" label="木" v-model="noBusinessDates[4]"/>
                    <v-checkbox class="nx-2" label="金" v-model="noBusinessDates[5]"/>
                    <v-checkbox class="nx-2" label="土" v-model="noBusinessDates[6]"/>
                    <v-checkbox class="nx-2" label="日" v-model="noBusinessDates[0]"/>
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
            v-on:click="submit"
          ><v-icon large>mdi-download-multiple</v-icon><!-- 保存ボタン -->
          </v-btn>
          <v-btn
            color="#0575e6"
            class="ma-2 white--text"
            fab
            v-on:click="clickedtrash"
            v-show="isvisible_dustbutton"
          ><v-icon large>mdi-trash-can-outline</v-icon><!-- 消去ボタン -->
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
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
  mounted(){
    if("uuid" in this.$route.params){
      this.isvisible_dustbutton = true;
      const headers = {
        "Content-Type": "application/json",
        "Authorization": "JWT " + this.$store.getters.getToken,
      };
      var url = "/calendar/blocks/tasks/"+this.$route.params.uuid
      this.$axios.get(url,{
        data: {},
        headers: headers,
      }).then((response) => {
        this.taskname = response.data["name"]
        this.tasktype = this.task_type[response.data["tasktype"]-1]
        this.location = "location" in response.data? response.data["location"]:""
        this.description = "description" in response.data? response.data["description"]:""
        this.startline = moment(response.data["startline"]).format('yyyy-MM-DD HH:mm')
        this.deadline = "deadline" in response.data? moment(response.data["deadline"]).format('yyyy-MM-DD HH:mm'):""
        const reqtimes_list = response.data["requiredTimes"].split(":")
        this.timerequired = parseInt(reqtimes_list[0])*60 + parseInt(reqtimes_list[1])
        this.noBusinessDates = response.data["excludedDates"].split('').map(i => i=="1"? true:false)
      }).catch((error) => {
        if (error.response.status == 401) this.$store.commit("logout");
      });
    }
  },
  data: () => ({
    taskname: '',
    task_type: [ '飲食店', '買い物', 'レジャー・エンタメ施設', 'その他' ],
    tasktype: '',
    location: '',
    description: '',
    startline: moment(new Date).format('yyyy-MM-DD HH:mm'), //今日の日付を分単位まで取得
    deadline: '',
    timerequired: '',//所要時間
    noBusinessDates: [false, false, false, false, false, false, false],//日月火水木金土

    isvisible_dustbutton:false,
    tasknameRules: [
      v => !!v || '必ず入力してください！',
      v => v.length <= 15 || '15文字以内で入力してください',
    ],
    tasktypeRules: [
      v => !!v || '必ず選んで下さい！',
    ],
    locationRules: [
      v => !!v || '必ず入力してください！',
    ],
    timerequiredRules: [
      v => !!v || '必ず入力してください！',
    ],
  }),
  methods: {
    toHome: function () {
      this.$router.push({ name: "Home" });
    },
    submit: function(){
      if (!this.$refs.taskedit_form.validate()) {
        return;
      }
      //timeduration用の変換**********************************
      let reqtimes_list=[0,0,0]//hh:mm:ss
      reqtimes_list[0] = Math.floor(this.timerequired/60)
      reqtimes_list[1] = this.timerequired-(reqtimes_list[0]*60)
      reqtimes_list = reqtimes_list.map(i => ("00"+i.toString()).slice(-2))
      //******************************************************

      const body = {
        "name":this.taskname,
        "location":this.location,
        "tasktype":this.task_type.indexOf(this.tasktype)+1,
        "hours":reqtimes_list[0],
        "mins":reqtimes_list[1],
        "excludedDates":this.noBusinessDates.map(i => i==true? "1":"0").join(""),}
      if (this.description != "")body.description = this.description
      if (this.startline != "")body.startline = moment(this.startline, 'yyyy-MM-DD HH:mm').toISOString()
      if (this.deadline != "")body.deadline = moment(this.deadline, 'yyyy-MM-DD HH:mm').toISOString()

      const headers = {
        "Content-Type": "application/json",
        "Authorization": "JWT " + this.$store.getters.getToken,};

      //以下axios*************************************************
      if("uuid" in this.$route.params){
        this.$axios.patch("/calendar/blocks/tasks/"+this.$route.params.uuid,body,{
          headers: headers,
        }).then(() => {
          this.$router.push({name: "Home"});
        })
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
      }else{
        this.$axios.post("/calendar/blocks/tasks",body,{
          headers: headers,
        }).then(() => {
          this.$router.push({name: "Home"});
        })
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
      }
    },
    clickedtrash: function(){
      if("uuid" in this.$route.params){
        this.$axios.delete("/calendar/blocks/tasks/"+this.$route.params.uuid,{
          headers: {
            "Content-Type": "application/json",
            "Authorization": "JWT " + this.$store.getters.getToken,
        },}).then(()=>{
          this.$router.push({name: "Home"});
        }).catch((error) => {
          if(error.response.status==401)this.$store.commit("logout");
        })
      }
    },
  }
}
</script>

<style scoped>
.count-form {
  width: 100px;
}
.timerequired-form {
  width: 200px;
}
.TaskEdit {
  font-family: 'M PLUS Rounded 1c';
}
</style>