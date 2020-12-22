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
              <v-spacer></v-spacer>
              <v-btn color="#0461cd" dark @click.stop="openGdialog">
                飲食店を選ぶ
              </v-btn>
              <selectSpotGourmet ref="GourmetDialog" />
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-spacer></v-spacer>
              <v-btn color="#0461cd" dark @click.stop="openOdialog">
                飲食店以外を選ぶ
              </v-btn>
              <selectSpotOther ref="OtherDialog" />
              <v-spacer></v-spacer>
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
              <v-text-field
                v-model="adress"
                label="住所"
                hint="例：東京都小平市津田町2-1-1"
              ></v-text-field>
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

          <!--<v-row align="center">
            <v-col align="center">
              <v-btn rounded class="text-center" color="#0461cd" dark
                >保存</v-btn
              >
            </v-col>
          </v-row>-->
        </v-form>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import App_var from "../components/App_bar";
import selectSpotGourmet from "../components/dialog/SelectSpots_Gourmet.vue";
import selectSpotOther from "../components/dialog/SelectSpots_Other.vue";

export default {
  name: "InitialSetting",
  components: {
    App_var,
    selectSpotGourmet,
    selectSpotOther,
  },
  data: () => ({
    selectTime: [],
    //selectWalkSpeed: [],
    items_Time: ["5分前", "10分前", "15分前", "30分前", "1時間前"],
    items_WalkSpeed: {
      choices: {
        1: "急いで",
        2: "少し急いで",
        3: "少しゆっくり",
        4: "ゆっくり",
      },
      name: "typeOfWalkSpeed",
      selected: 2,
    },
    adress: "",
  }),
  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();
      if (!search) return this.items;
      return this.items.filter((item) => {
        const text = item.text.toLowerCase();
        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];
      for (const selection of this.selected) {
        selections.push(selection);
      }
      return selections;
    },
  },
  watch: {},
  mounted() {},
  methods: {
    openGdialog() {
      this.$refs.GourmetDialog.GdialogOpen();
    },
    openOdialog() {
      this.$refs.OtherDialog.OdialogOpen();
    },

    /*postSettingData() {
      //作っている最中
      const headers = { Authorization: "JWT" + this.$store.getters.getToken };
      this.$axios
        .post("/accounts/setting/transportation/", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          this.items_WalkSpeed.selected =
            response.data[0][this.items_WalkSpeed.name];
        })
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },*/
    getSettingData() {
      const headers = { Authorization: "JWT" + this.$store.getters.getToken };
      this.$axios
        .get("/accounts/setting/transportation/", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          this.items_WalkSpeed.selected =
            response.data[0][this.items_WalkSpeed.name];
        })
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },
  },
};
</script>

<style scoped>
.InitialSetting {
  font-family: "M PLUS Rounded 1c";
}
</style>