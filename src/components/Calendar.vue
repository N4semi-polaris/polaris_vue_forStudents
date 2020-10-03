<template>
    <div id="calendar">
      <v-sheet tile height="50" color="#ffffff" align-center id="areaOfYM">
        <v-container>
        <v-toolbar-title><span style="color:#210e67">{{ title }}</span></v-toolbar-title>
        </v-container>
      </v-sheet>
        <v-row no-gutters>
            <v-col>
                <v-sheet v-bind:height="calendar_height">
                    <v-calendar
                    ref="calendar"
                    :now="value"
                    :value="value"
                    :events="events"
                    :event-color="getEventColor"
                    color="primary"
                    type="week"
                    @click:event="showWindow"
                    @change="events"
                ></v-calendar>
                <!-- 以下New -->
                <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-overflow
                  justify="center"
                ><v-card color="white" flat>
                  <v-card-title>空き時間、どうする？</v-card-title>
                  <v-card-text>
                    <!-- ラジオボタン -->
                    <v-radio-group v-model="radioGroup" column>
                      <v-radio
                        label="寄り道予定から探す"
                        value="yorimichi"
                        color="#0461cd"
                      ></v-radio>
                      <v-radio
                        label="おまかせ"
                        value="omakase"
                        color="#0461cd"
                      ></v-radio>
                      <v-radio
                        label="移動時間にあてる"
                        value="transist"
                        color="#0461cd"
                      ></v-radio>
                    </v-radio-group>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="#0461cd" @click="selectedOpen = false">
                      <v-icon left>mdi-close-thick</v-icon>キャンセル</v-btn>
                      <v-btn class="white--text" color="#0461cd">次へ
                        <v-icon right>mdi-arrow-right-bold-circle</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
                </v-menu>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import moment from 'moment';


  export default {
      data: () => ({
        events: [
          {
            name: 'Free', //nameは空欄でも大丈夫そう
            start: moment('2020-10-03 10:10:00').toDate(), //UIデザインを忠実に再現するなら
            end: moment('2020-10-03 12:20:00').toDate(), //時刻は非表示にしたいけどできるのかしら..
            color: "#ffc900",
            timed: true //終日ならfalse
          },
          {
            name: 'Free',
            start: moment('2020-10-03 15:00:00').toDate(),
            end: moment('2020-10-03 16:00:00').toDate(),
            color: "#ffc900",
            timed: true
          }
        ],
        value: moment().format('yyyy-MM-DD'),
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        radioGroup: 1,
      }),
      mounted () {
        this.$refs.calendar.scrollToTime('08:00')
      },
      computed: {
        title() {
          return moment(this.value).format('yyyy年 M月');
        }
      },
      methods: {
        getEventColor(event){
          return event.color;
        },
        showWindow({ nativeEvent, event }){
          const open = () => {
            this.selectedEvent = event
            this.selectedElement = nativeEvent.target
            setTimeout(() => {
              this.selectedOpen = true
            }, 10)
          }
          if(this.selectedOpen) {
            this.selectedOpen = false
            setTimeout(open, 10)
          } else {
            open()
          }
          nativeEvent.stopPropagation()
        },
      },
      props: ['calendar_height'],
  }
</script>


<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}
.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>