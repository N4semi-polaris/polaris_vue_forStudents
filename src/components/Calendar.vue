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
                    :now="value"
                    :value="value"
                    :events="events"
                    color="primary"
                    type="week"
                >
                </v-calendar>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>


<script>
import moment from 'moment';


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