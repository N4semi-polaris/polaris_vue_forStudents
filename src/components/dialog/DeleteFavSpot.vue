
<template>
  <v-dialog v-model="dialog_Open" persistent width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">本当に削除してもよろしいですか？</span>
      </v-card-title>
      <v-card-text> </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog_Open = false"
          >キャンセル</v-btn
        >
        <v-btn color="blue darken-1" text @click="deleteFavSpot"
          >削除する</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog_Open: false,
  }),

  mounted() {},
  methods: {
    openDialog() {
      this.dialog_Open = true;
    },
    deleteFavSpot(){
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      const data = { "typeOfWalkSpeed": this.selectWalkSpeed };
      console.log(
        "postWalkSpeedDataしたthis.selectWalkSpeedの型: " + typeof this.selectWalkSpeed + ", 中身: " + this.selectWalkSpeed);
      this.$axios
        .post("/accounts/setting/favspot", data, {
          headers: headers,
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@deleteFavSpot()a");
          if (error.response.status == 401) //this.$store.commit("logout")
          ;
        });
    },
  },
};
</script>

<style>
</style>