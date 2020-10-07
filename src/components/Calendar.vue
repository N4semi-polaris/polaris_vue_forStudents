<template>
  <div id="calendar">
    <v-sheet tile height="50" color="#ffffff" align-center id="areaOfYM">
      <v-container>
        <v-toolbar-title
          ><span style="color: #210e67">{{ title }}</span></v-toolbar-title
        >
      </v-container>
    </v-sheet>
    <v-row no-gutters>
      <v-col>
        <v-sheet v-bind:height="calendar_height">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :events="events"
            :event-color="getEventColor"
            color="primary"
            type="week"
            v-on:click:event="showWindow"
          >
            <template #day-body="{ date, week }">
              <div
                class="v-current-time"
                :class="{ first: date === week[0].date }"
                :style="{ top: nowY }"
              ></div>
            </template>
          </v-calendar>
          <!-- -------以下New------- -->
          <!-- 寄り道提案ポップアップ -->
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :close-on-click="false"
            :activator="selectedElement"
            offset-x
            ><div v-show="scheduleDialog_p >= 0 && scheduleDialog_p <= 2">
              <v-card color="white" flat width="400px">
                <!-- 1ページ目 -->
                <div v-show="scheduleDialog_p == 0">
                  <v-card-title class="justify-center"
                    >空き時間、どうする？</v-card-title
                  >
                  <v-card-text
                    ><v-container>
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
                      </v-radio-group> </v-container
                  ></v-card-text>
                </div>
                <!-- 2ページ目 -->
                <div v-show="scheduleDialog_p == 1">
                  <v-card-title class="justify-center"
                    ><v-btn icon @click="backTo_nextScheduleDialog"
                      ><v-icon>mdi-arrow-left-bold-circle</v-icon></v-btn
                    >詳細条件</v-card-title
                  >
                  <v-card-text>
                    <v-col cols="12">
                      <v-checkbox
                        class="nx-2"
                        label="スーパー・コンビニ"
                        color="#210e67"
                      ></v-checkbox>
                      <v-checkbox
                        class="nx-2"
                        label="ファッション"
                        color="#032b8d"
                      ></v-checkbox>
                      <v-checkbox
                        class="nx-2"
                        label="本・文具"
                        color="#033ba0"
                      ></v-checkbox>
                      <v-checkbox
                        class="nx-2"
                        label="映画館"
                        color="#044eb7"
                      ></v-checkbox>
                      <v-checkbox
                        class="nx-2"
                        label="飲食店"
                        color="#0461cd"
                      ></v-checkbox>
                    </v-col>
                  </v-card-text>
                </div>
                <!-- 3ページ目 -->
                <div v-show="scheduleDialog_p == 2">
                  <v-card-title class="justify-center"
                    ><v-btn icon @click="backTo_nextScheduleDialog"
                      ><v-icon>mdi-arrow-left-bold-circle</v-icon></v-btn
                    >詳細条件</v-card-title
                  >
                  <v-card-text
                    ><v-row align="center">
                      <v-col cols="12">
                        <v-checkbox
                          v-model="enabled1"
                          hide-details
                          class="shrink mr-2 mt-0"
                        ></v-checkbox>
                        <v-text-field
                          :disabled="!enabled1"
                          label="交通費（円単位）"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-checkbox
                          v-model="enabled2"
                          hide-details
                          class="shrink mr-2 mt-0"
                        ></v-checkbox>
                        <v-text-field
                          :disabled="!enabled2"
                          label="移動時間（分単位）"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-checkbox
                          v-model="enabled3"
                          hide-details
                          class="shrink mr-2 mt-0"
                        ></v-checkbox>
                        <v-text-field
                          :disabled="!enabled3"
                          label="帰宅時刻（〇〇:〇〇）"
                        ></v-text-field>
                      </v-col> </v-row
                  ></v-card-text>
                </div>
                <p align="center">{{ scheduleDialog_p + 1 }}/3</p>
                <!-- 以下全ページ共通コンポーネント -->
                <v-card-actions>
                  <v-btn
                    text
                    color="#0461cd"
                    @click="selectedOpen = false"
                    absolute
                    bottom
                    left
                  >
                    <v-icon left>mdi-close-thick</v-icon>キャンセル</v-btn
                  >
                  <v-btn
                    class="white--text"
                    color="#0461cd"
                    @click="turnTo_nextScheduleDialog"
                    absolute
                    bottom
                    right
                    >次へ
                    <v-icon right>mdi-arrow-right-bold-circle</v-icon></v-btn
                  >
                </v-card-actions>
              </v-card>
            </div>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import moment from "moment";

export default {
  data: () => ({
    today: moment().format("yyyy-MM-DD hh:mm a"),
    ready: false,
    events: [
      {
        name: "Free", //nameは空欄でも大丈夫そう
        start: moment("2020-10-04 10:10").toDate(), //UIデザインを忠実に再現するなら
        end: moment("2020-10-04 12:20").toDate(), //時刻は非表示にしたいけどできるのかしら..
        color: "#ffc900",
        timed: true, //終日ならfalse
      },
      {
        name: "Free",
        start: moment("2020-10-04 15:00").toDate(),
        end: moment("2020-10-04 16:00").toDate(),
        color: "#ffc900",
        timed: true,
      },
    ],
    scheduleDialog_p: 0,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    radioGroup: 1,
    enabled1: false,
    enabled2: false,
    enabled3: false,
  }),
  mounted() {
    //this.$refs.calendar.scrollToTime('18:00');
    this.ready = true;
    this.scrollToTime();
    this.updateTime();
  },
  computed: {
    title() {
      return moment(this.today).format("yyyy年 M月");
    },
    cal() {
      return this.ready ? this.$refs.calendar : null;
    },
    nowY() { //0:00が0pxとして、hour分48px・minute分0.8px足した
      var m_today = moment(this.today);
      var hour;
      if (m_today.format('a') == 'AM') { //午前だったら
        hour = Number(m_today.format('h'));
      } else { //午後だったら
        hour = Number(m_today.format('h')) + 12;
      }
      console.log(hour);
      var minute = Number(m_today.format('m'));
      var answer = 0 + 48 * hour + 0.8 * minute;
      return this.cal ? answer + "px" : "-10px";
    },
  },
  methods: {
    getEventColor(event) {
      return event.color;
    },
    showWindow({ nativeEvent, event }) {
      this.scheduleDialog_p = 0;
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    turnTo_nextScheduleDialog() {
      this.scheduleDialog_p += 1;
      this.scheduleDialog_p %= 3;
    },
    backTo_nextScheduleDialog() {
      if (this.scheduleDialog_p > 0) this.scheduleDialog_p -= 1;
    },
    getCurrentTime() {
      return this.cal ? this.cal.times.now.hour * 60 + this.cal.times.now.minute : 0;
    },
    scrollToTime() {
      const time = this.getCurrentTime();
      const first = Math.max(0, time - (time % 30) - 30);

      this.cal.scrollToTime(first);
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000);
    },
  },
  props: ["calendar_height"],
};
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
<style lang="scss">
.v-current-time {
  height: 2px;
  background-color: #000000;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: "";
    position: absolute;
    background-color: #000000;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
</style>