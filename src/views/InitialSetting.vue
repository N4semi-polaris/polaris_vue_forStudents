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
                v-model="items_WalkSpeed.choices[items_WalkSpeed.selected]"
                :items="Object.values(items_WalkSpeed.choices)"
                :rules="[(v) => !!v || 'Item is required']"
                label="歩く速度"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row align="center">
            <v-col align="center">
              <v-btn rounded class="text-center" color="#0461cd" dark
                >保存</v-btn>
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
    //selectWalkSpeed: [],
    items_Time: ["5分前", "10分前", "15分前", "30分前", "1時間前"],
    items_WalkSpeed: {
      choices:{1:"急いで", 2:"少し急いで", 3:"少しゆっくり", 4:"ゆっくり"},
      name:"typeOfWalkSpeed", selected:2},
    adress: "",
    spots:[{code:222,name:"",selected:false}],//こんな感じのやつを想定
    spot_1: false,
    spot_2: false,
    spot_3: false,
    spot_4: false,
    spot_5: false,
  }),
  mounted (){
    const headers = { "Authorization": "JWT " + this.$store.getters.getToken,}
    this.$axios.get("/accounts/setting/transportation/",{
      data:{}, headers: headers,
    }).then(
      (response)=>{
        this.items_WalkSpeed.selected = response.data[0][this.items_WalkSpeed.name]
      },
      (error)=>{
        if(error.response.status == 401)this.$store.commit("logout");
      })
  },
};
</script>

<style scoped>
.InitialSetting {
  font-family: "M PLUS Rounded 1c";
}
</style>