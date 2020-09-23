<template>
  <div class="Home">
    <App_bar />
    <v-main>
      <Calendar
        :calendar_height = "calendarHeight"
      />
    </v-main>
    <Task_Palette
      @change-palettesize = "setCalendarHeight"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '../components/Calendar';
import App_bar from '../components/App_bar';
import Task_Palette from '../components/Task_Palette';


export default {
  name: 'Home',
  components: {
    Calendar,
    App_bar,
    Task_Palette,
  },
  data:() => ({
    calendarHeight : 0,
  }),
  methods: {
    setCalendarHeight:function(){
      var windowHeight = window.innerHeight;
      var YMareaHeigth = document.getElementById("areaOfYM").clientHeight;
      var paletteHeight = document.getElementById("task_palette").clientHeight;
      var appbarHeight = document.getElementById("app_bar").clientHeight;
      this.calendarHeight = windowHeight - (YMareaHeigth + paletteHeight + appbarHeight);
      console.log(this.calendarHeight)
    },
  },
  mounted:function() {
    window.addEventListener('resize', this.setCalendarHeight)
    this.setCalendarHeight()
  },
  deforeDestroy:function(){
    window.removeEventListener('resize',this.setCalendarHeight)
  },
  computed: {
  }
}
</script>
