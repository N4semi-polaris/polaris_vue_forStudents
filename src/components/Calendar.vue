<template>
    <div>
      <v-sheet tile height="50" color="grey lighten-3" class="d-flex align-center">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-sheet>
        <v-row>
            <v-col>
                <v-sheet height="300">
                    <v-calendar
                    ref="calendar"
                    :now="getToday"
                    :value="getToday"
                    :events="events"
                    color="primary"
                    type="week"
                >
                  <template #day-body="{ date, week }">
                    <div
                      class="v-current-time"
                      :class="{ first: date === week[0].date }"
                      :style="{ top: nowY }"
                    ></div>
                  </template>
                </v-calendar>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div id=pallet>
            </div>
          </v-col>
        </v-row>
    </div>
</template>


<script>
import moment from 'moment';

var now, year, month, months, date, dates, today;

  export default {
      data: () => ({
        //today: '2019-01-08',
        events: [
          //予定入力
        ],
        value: moment().format('yyyy-MM-DD'),
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
        getToday() {
          now = new Date();
          year = now.getFullYear();
          month = now.getMonth();
          months = month < 10 ? '0' + month : month;
          date = now.getDate();
          dates = date < 10 ? '0' + date : date;
          today = year + '-' + months + '-' + dates;
          return today;
        },
      }
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