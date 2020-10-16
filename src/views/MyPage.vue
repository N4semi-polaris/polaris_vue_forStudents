<template>
  <div class="MyPage">
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
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox
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
              >よく行く場所を編集する</v-btn
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
  name: "MyPage",
  components: {
    App_var,
  },
  data: () => ({
    items: ["新幹線", "有料特急", "空路", "高速バス", "路線/連絡バス"],
    model: [],
    disabled1: false,
    disabled2: false,
  }),
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
  },
};
</script>

<style scoped>
.MyPage {
  font-family: 'M PLUS Rounded 1c';
}
</style>