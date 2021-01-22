<template>
  <div class="BfMyPage">
    <App_var />
    <v-form>
      <v-container>
        <v-row align="center">
          <v-col align="center">
            <v-btn
              v-on:click="toInitialSettingPage"
              rounded
              class="text-center"
              color="#0461cd"
              dark
              >基本設定を編集する</v-btn
            >
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row>
          <v-col>
            <v-list shaped class="mx-auto">
              <v-list-item-group v-model="model" multiple>
                <template v-for="(item, i) in items">
                  <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

                  <v-list-item
                    v-else
                    :key="`item-${i}`"
                    :value="item"
                    color="#0461cd"
                    active-class=""
                    v-on:click="postTransportation(item)"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.displyname"
                        ></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox
                          v-model="item.check"
                          :input-value="active"
                          color="#044eb7"
                        ></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col align="center">
            <v-btn
              v-on:click="toFavoriteSpotPage"
              rounded
              class="mx-auto text-center"
              color="#0461cd"
              dark
              >お気に入りスポットを編集する</v-btn
            >
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col align="center">
            <v-btn
              v-on:click="toSettingHomeTime"
              rounded
              class="mx-auto text-center"
              color="#0461cd"
              dark
              >在宅時間を設定する</v-btn
            >
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col align="center">
            <v-switch
              v-model="disabled1"
              class="ma-2"
              label="通知を許可"
              color="#0461cd"
            ></v-switch>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row align="center">
          <v-col align="center">
            <v-switch
              v-model="disabled2"
              class="ma-2"
              label="位置情報共有を許可"
              color="#0461cd"
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import App_var from "../components/App_bar";

export default {
  name: "BfMyPage",
  components: {
    App_var,
  },
  data: () => ({
    items: [
      { displyname: "新幹線", name: "isShin", check: false },
      { displyname: "有料特急", name: "isExTrain", check: false },
      { displyname: "空路", name: "isAirPlane", check: false },
      { displyname: "高速バス", name: "isHighwayBus", check: false },
      { displyname: "路線/連絡バス", name: "isBus", check: false },
    ],
    model: [],
    disabled1: false,
    disabled2: false,
  }),
  mounted() {
    console.log("MyPageのmountedが実行されたよ");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT " + this.$store.getters.getToken,
    };
    this.$axios
      .get("/accounts/setting/transportation", {
        headers: headers,
        data: {},
      })
      .then(
        (response) => {
          for (var i of this.items) i.check = response.data[0][i.name];
        },
        (error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        }
      );
  },
  methods: {
    toFavoriteSpotPage: function () {
      this.$router.push({ name: "FavoriteSpot" });
    },
    toInitialSettingPage: function () {
      this.$router.push({ name: "InitialSetting" });
    },
    toSettingHomeTime: function () {
      this.$router.push({ name: "SettingHomeTime" });
    },
    postTransportation: function (item) {
      const headers = { Authorization: "JWT " + this.$store.getters.getToken };
      var data = { [item["name"].toString()]: item["check"] };
      this.$axios
        .post("/accounts/setting/transportation", data, {
          headers: headers,
        })
        .then((error) => {
          if (error.response.status == 401) this.$store.commit("logout");
        });
    },
  },
};
</script>

<style scoped>
.BfMyPage {
  font-family: "M PLUS Rounded 1c";
}
</style>