<template>
  <v-app>
    <div class="InitialSetting">
      <App_var />
      <h1></h1>
      <v-container>
        <v-form>
          <v-row>
            <v-col align="center">
              <v-subheader>好きなスポット</v-subheader>
              <v-checkbox v-model="spot_1" label="博物館・美術館"></v-checkbox>
              <v-checkbox v-model="spot_2" label="商業施設"></v-checkbox>
              <v-checkbox v-model="spot_3" label="レジャー施設"></v-checkbox>
              <v-checkbox v-model="spot_4" label="神社・寺院"></v-checkbox>
              <v-checkbox v-model="spot_5" label="カフェ"></v-checkbox>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row>
            <v-col align="center">
              <v-select
                v-model="selectTime"
                :items="items_Time"
                :rules="[(v) => !!v || 'Item is required']"
                label="何分前に到着したいか"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-text-field v-model="adress" label="住所"></v-text-field>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-select
                v-model="selectWalkSpeed"
                :items="items_WalkSpeed"
                :rules="[(v) => !!v || 'Item is required']"
                label="歩く速度"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-btn rounded class="text-center" color="#0461cd" dark
                >保存</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import App_var from "../components/App_bar";

export default {
  name: "InitialSetting",
  components: {
    App_var,
  },

  data: () => ({
    selectTime: [],
    selectWalkSpeed: [],
    items_Time: ["5分前", "10分前", "15分前", "30分前", "1時間前"],
    items_WalkSpeed: ["ゆっくり", "少しゆっくり", "ゆっくり急いで", "急いで"],
    adress: "",
    spot_1: false,
    spot_2: false,
    spot_3: false,
    spot_4: false,
    spot_5: false,
  }),
};
</script>

<style scoped>
.InitialSetting {
  font-family: "M PLUS Rounded 1c";
}
</style>