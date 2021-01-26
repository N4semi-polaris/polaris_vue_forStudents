
<template>
  <v-dialog v-model="dialog_Open" persistent width="600px">
    <div class="deleteFavSpot_dialog">
    <v-card>
          <p class="text-center pa-5"><font size="4">本当に削除してもよろしいですか？</font></p>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="deleteFavSpot"
          >はい</v-btn
        >
        <v-btn color="blue darken-1" text @click="dialog_Open = false"
          >いいえ</v-btn
        >
      </v-card-actions>
    </v-card>
    </div>
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
      const URL ="/accounts/setting/favspot/"+this.uuid;
      console.log(
        "deleteFavSpotしたthis.uuidの型: " +
          typeof this.uuid +
          ", 中身: " +
          this.uuid
      );
      this.$axios
        .delete(URL, {
          headers: headers,
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@deleteFavSpot()");
          if (
            error.response.status == 401 //this.$store.commit("logout")
          );
        });
         this.dialog_Open = false;
         this.$router.go({ path: this.$router.currentRoute.path, force: true });//あまりよくないかも(親コンポーネントのページを強制リロード)
    }, 
  },
};
</script>

<style>
.deleteFavSpot_dialog {
  font-family: 'M PLUS Rounded 1c';
}
.title {
  
}
</style>