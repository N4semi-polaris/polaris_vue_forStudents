
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
    uuid: "",
  }),

  mounted() {},
  methods: {
    openDialog(gotUuid) {
      this.dialog_Open = true;
      this.uuid = gotUuid;
      console.log("this.uuid : " + this.uuid);
    },
    deleteFavSpot() {
      const headers = { "Authorization": "JWT " + this.$store.getters.getToken };
      const data = { "uuid": this.uuid };
      console.log(
        "deleteFavSpotしたthis.uuidの型: " +
          typeof this.uuid +
          ", 中身: " +
          this.uuid
      );
      this.$axios
        .delete("/accounts/setting/favspot", data, {
          headers: headers,
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@deleteFavSpot()");
          if (
            error.response.status == 401 //this.$store.commit("logout")
          );
        });
    },
  },
};
</script>

<style>
</style>