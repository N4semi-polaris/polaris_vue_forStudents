<template>
  <v-container
    v-bind:style="{ height: hight_ofPalette + 'vh' }"
    no-gutters
    pa-0
    id="task_palette"
  >
    <div
      v-touch="{
        up: () => onSwipeUp(),
        down: () => onSwipeDown(),
      }"
    >
      <v-row id="palette_head">
        <v-col class="text-center pa-0">
          <v-btn v-if="isSwiped" v-on:click="onSwipeDown" icon color="grey">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          <v-btn v-else v-on:click="onSwipeUp" icon color="grey">
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row id="palette_under_head">
        <v-col class="pa-2">
          <v-btn v-on:click="toTaskEdit" text absolute left>
            <!-- タスクブロック追加ページへ -->
            <v-icon color="#ffc900" left>mdi-plus-circle</v-icon
            >新規寄り道予定作成
          </v-btn>
          <v-btn icon v-on:click="toTaskLog" text absolute right>
            <!-- タスクログページへ -->
            <v-icon>mdi-notebook</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col
        id="palette_body"
        class="pa-6 overflow-y-auto"
        v-bind:style="{ 'max-height': hight_ofScrollArea + 'px' }"
      >
        <!-- タスクブロック -->
        <Task_Block
          v-for="task in tasks"
          :key="'taskpalette'+task.id"
          :task_name="task.task_name"
          :place_name="task.place_name"
          :task_type="task.task_type"
          :deadline="task.deadline"
        />
        <div class="space" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Task_Block from "../components/Task_Block.vue";

export default {
  name: "Task_Palette",
  data: () => ({
    hight_ofPalette: 30, //vh
    hight_ofScrollArea: 0, //px ただの初期値、すぐ上書きするので意味はない
    isSwiped: false,
    tasks: [
      {
        id: 1,
        task_name: "本屋うろうろ",
        place_name: "有隣堂",
        task_type: "本・文具",
        deadline: "2020-10-13 13:00",
      },
      {
        id: 2,
        task_name: "新幹線の切符買う",
        place_name: "みどりの窓口",
        task_type: "その他",
        deadline: "2020-10-14 15:00",
      },
    ],
  }),
  components: {
    Task_Block,
  },
  methods: {
    onSwipeUp: function () {
      this.hight_ofPalette = 50;
      this.isSwiped = true;
      this.$nextTick(() => {
        this.$emit("change-palettesize");
        this.setHeight_ofScrollArea();
      });
    },
    onSwipeDown: function () {
      this.hight_ofPalette = 30;
      this.isSwiped = false;
      this.$nextTick(() => {
        this.$emit("change-palettesize");
        this.setHeight_ofScrollArea();
      });
    },
    toTaskEdit: function () {
      this.$router.push({ name: "TaskEdit" });
    },
    toTaskLog: function () {
      this.$router.push({ name: "TaskLog" });
    },
    setHeight_ofScrollArea: function () {
      var h_ofPalette = document.getElementById("task_palette").clientHeight;
      var h_ofPaletteHeader = document.getElementById("palette_head")
        .clientHeight;
      this.hight_ofScrollArea = h_ofPalette - h_ofPaletteHeader;
    },
  },
  mounted: function () {
    this.setHeight_ofScrollArea();
  },
};
</script>

<style scoped>
#task_palette {
  bottom: 0px;
  position: fixed;
  background-color: #fafafa;
  max-width: initial;
}
.space {
  margin-bottom: 30px;
}
</style>