<template>
    <div class="SettingHomeTime">
        <App_bar />

        <v-container>
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
                    <template v-slot:activator="{  on, attrs }">
                        <v-text-field
                            v-model="time1"
                            label="開始時刻"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="modal1"
                        v-model="time1"
                        full-width
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="modal1 = false"
                    >戻る</v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog1.save(time1)"
                    >決定</v-btn>
                    </v-time-picker>
                    </v-dialog>
                </v-col>
            </v-row>

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
                    <template v-slot:activator="{  on, attrs }">
                        <v-text-field
                            v-model="time2"
                            label="終了時刻"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="modal2"
                        v-model="time2"
                        full-width
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="modal2 = false"
                    >戻る</v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog2.save(time2)"
                    >決定</v-btn>
                    </v-time-picker>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import App_bar from "../components/App_bar";

export default {
    name: 'SettingHomeTime',
    components: {
        App_bar,
    },
    data () {
        return {
            time1: null,
            time2: null,
            modal1: false,
            modal2: false,
        }
    },
    methods: {
        /*
        postHomeTimeData() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      const data = { genres: this.time1 + this.time2 }; //要編集
      console.log("postHomeTimeDataした中身: 開始時刻→" + this.time1+", 終了時刻→"+this.time2);
      this.$axios
        .post("/accounts/setting/transportation/", data, {
          headers: headers,
        })
        .catch((error) => {
          console.log("エラーになっちゃった..: ");
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },
    getHomeTimeData() {
      const headers = { "Authorization": "JWT" + this.$store.getters.getToken };
      this.$axios
        .get("/accounts/setting/transportation/", {
          data: {},
          headers: headers,
        })
        .then((response) => {
          this.time1 = response.data[0][this.items_WalkSpeed.name]; 
          this.time2 = response.data[0][this.items_WalkSpeed.name];
        .catch((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },
    */
    },
}
</script>