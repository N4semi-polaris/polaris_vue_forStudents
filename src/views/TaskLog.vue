<template>
  <div class="TaskLog">
    <App_var />
    <h1></h1>
    <v-container>
      <v-divider></v-divider>

      <Task_Block
        v-for="task in tasks"
        v-on:click.native="todetailpage(task.uuid);"
        :key="task.uuid"
        :task_name="task.task_name"
        :place_name="task.place_name"
        :task_type="task.task_type"
        :deadline="task.deadline"
      />

      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
import App_var from "../components/App_bar";
import Task_Block from "../components/Task_Block.vue";
import moment from 'moment';

export default {
  name: "TaskLog",
  components: {
    App_var,
    Task_Block,
  },
  mounted(){
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "JWT " + this.$store.getters.getToken,
    };
    this.$axios.get("//nakano2021seminar.pythonanywhere.com/calendar/blocks/tasks",{
      data: {},
      headers: headers,
    }).then((response) => {
      for(let i of response.data){
        this.tasks.push({
          uuid: i.bk.uuid,
          task_name: i["name"],
          place_name: i["location"],
          task_type: this.task_type[i.tasktype-1],
          deadline: i["deadline"]!=null? moment(i["deadline"]).format('yyyy-MM-DD HH:mm'):null
        })
      }
      console.dir(this.tasks)
    })
  },
  data: () => ({
    tasks:[],
    task_type: [ '飲食店', '買い物', 'レジャー・エンタメ施設', 'その他' ],
    /*tasks: [
      {
        id: 1,
        task_name: "本屋うろうろ",
        place_name: "有隣堂",
        task_type: "レジャー・エンタメ施設",
        deadline: "2020-11-30",
      },
      {
        id: 2,
        task_name: "新幹線の切符買う",
        place_name: "みどりの窓口",
        task_type: "その他",
        deadline: "2020-10-20",
      },
      {
        id: 3,
        task_name: "ゼミの宿題",
        place_name: "学校",
        task_type: "その他",
        deadline: "2020-12-20",
      },
      {
        id: 4,
        task_name: "限定フラペチーノを飲む",
        place_name: "スタバ",
        task_type: "飲食店",
        deadline: "2020-10-15",
      },
      {
        id: 5,
        task_name: "クレープ粉を買う",
        place_name: "成城石井",
        task_type: "買い物",
        deadline: "2020-9-24",
      },
      {
        id: 6,
        task_name: "2分の1の魔法を観る",
        place_name: "シネマシティ",
        task_type: "レジャー・エンタメ施設",
        deadline: "2020-12-24",
      },
      {
        id: 7,
        task_name: "クレヨンしんちゃんを観る",
        place_name: "シネマシティ",
        task_type: "レジャー・エンタメ施設",
        deadline: "2020-11-20",
      },
      {
        id: 8,
        task_name: "ワンピースを買う",
        place_name: "GU",
        task_type: "買い物",
        deadline: "",
      },
    ],*/
  }),
  methods: {
    todetailpage: function(uuid){
      this.$router.push({name:"TaskEdit_edit", params:{uuid} })
    },
  },
};
</script>

<style scoped>
.TaskLog {
  font-family: 'M PLUS Rounded 1c';
}
</style>