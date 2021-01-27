<template>
  <div class="SettingHomeTime">
    <App_bar />

    <v-container>
      <v-row>
        <v-col cols="3" align="left">
          <v-btn
            rounded
            class="text-center"
            color="#0461cd"
            dark
            @click="$router.go(-1)"
            ><v-icon left size="30">mdi-keyboard-return</v-icon>戻る</v-btn
          >
        </v-col>
      </v-row>
      <v-form ref="zaitakusetting_form">
        <!-- 終了時刻 -->
        <v-row align="center">
          <v-col>
            <v-dialog
              ref="dialog2"
              v-model="modal2"
              :return-value.sync="time2"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time2"
                  label="出宅時刻"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="time2_rules"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal2" v-model="time2" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false">戻る</v-btn>
                <v-btn text color="primary" @click="$refs.dialog2.save(time2)"
                  >決定</v-btn
                >
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>

        <!-- 開始時刻 -->
        <v-row align="center">
          <v-col>
            <v-dialog
              ref="dialog1"
              v-model="modal1"
              :return-value.sync="time1"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time1"
                  label="帰宅時刻"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="time1_rules"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal1" v-model="time1" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal1 = false">戻る</v-btn>
                <v-btn text color="primary" @click="$refs.dialog1.save(time1)"
                  >決定</v-btn
                >
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-btn
            color="#032b8d"
            class="ma-2 white--text"
            fab
            v-on:click="submit"
            ><v-icon large>mdi-download-multiple</v-icon
            ><!-- 保存ボタン -->
          </v-btn>
          <v-btn
            color="#0575e6"
            class="ma-2 white--text"
            fab
            v-on:click="delete_setting"
            :disabled="isdisabled_delbutton"
            ><v-icon large>mdi-trash-can-outline</v-icon
            ><!-- 消去ボタン -->
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import App_bar from "../components/App_bar";
import moment from "moment";

export default {
  name: "SettingHomeTime",
  components: {
    App_bar,
  },
  mounted() {
    this.$axios
      .get("/accounts/setting/zaitaku", {
        data: {},
        headers: { "Authorization": "JWT " + this.$store.getters.getToken },
      })
      .then((response) => {
        if (response.data["start"] == null) {
          this.time1 = "19:00";
        } else {
          this.time1 = moment(response.data["start"], "HH:mm:ss").format("HH:mm");
        }
        if (response.data["end"] == null) {
          this.time2 = "9:00";
        } else {
          this.time2 = moment(response.data["end"], "HH:mm:ss").format("HH:mm");
        }
      });
  },
  computed: {
    isdisabled_delbutton: function () {
      return this.time1 == "00:00" && this.time2 == "00:00" ? true : false;
    },
  },
  data() {
    return {
      time1: null,
      time2: null,
      modal1: false,
      modal2: false,
      time1_rules: [(v) => !!v || "必ず入力してください！"],
      time2_rules: [(v) => !!v || "必ず入力してください！"],
    };
  },
  methods: {
    submit: function () {
      if (!this.$refs.zaitakusetting_form.validate()) {
        return;
      }
      const data = { start: this.time1, end: this.time2 };
      this.$axios
        .post("/accounts/setting/zaitaku", data, {
          headers: { "Authorization": "JWT " + this.$store.getters.getToken },
        })
        .then((response) => {
          this.time1 = moment(response.data["start"], "HH:mm:ss").format(
            "HH:mm"
          );
          this.time2 = moment(response.data["end"], "HH:mm:ss").format("HH:mm");
        });
    },
    delete_setting: function () {
      const data = { start: "00:00", end: "00:00" };
      this.$axios
        .post("/accounts/setting/zaitaku", data, {
          headers: { "Authorization": "JWT " + this.$store.getters.getToken },
        })
        .then((response) => {
          this.time1 = moment(response.data["start"], "HH:mm:ss").format(
            "HH:mm"
          );
          this.time2 = moment(response.data["end"], "HH:mm:ss").format("HH:mm");
        });
    },
  },
};
</script>

<style>
.SettingHomeTime {
  font-family: "M PLUS Rounded 1c";
}
</style>