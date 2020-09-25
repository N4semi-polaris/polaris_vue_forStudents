<template>
  <div class="MyPage">
    <App_var />
    <h1>This is a MyPage page</h1>
    <v-container class="grey lighten-5">
      <v-card class="mx-auto" min-width="300" height="100">
        <v-card-actions class="justify-center">
          <v-btn rounded class="text-center" color="primary" dark>
            基本設定を編集する
            <v-icon dark right>fas fa-edit</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <br />

      <v-card class="mx-auto" min-width="300">
        <v-list shaped>
          <v-list-item-group v-model="model" multiple>
            <template v-for="(item, i) in items">
              <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

              <v-list-item
                v-else
                :key="`item-${i}`"
                :value="item"
                active-class="deep-purple--text text--accent-4"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-checkbox :input-value="active" color="deep-purple accent-4"></v-checkbox>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
      <br />
      <v-card class="mx-auto" min-width="300" height="100">
        <v-card-actions>
          <v-btn rounded class="mx-auto text-center" color="primary" dark>
            よく行く場所を編集する
            <v-icon dark right>fas fa-edit</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <br />
      <v-card class="mx-auto" min-width="300" height="100">
        <v-card-actions>
          <v-switch v-model="disabled" class="ma-2" label="通知を許可"></v-switch>
        </v-card-actions>
      </v-card>
      <br />
      <v-card class="mx-auto" min-width="300" height="100">
        <v-card-actions>
          <v-switch v-model="disabled" class="ma-2" label="位置情報共有を許可"></v-switch>
        </v-card-actions>
      </v-card>
    </v-container>
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
  }),
};
</script>
