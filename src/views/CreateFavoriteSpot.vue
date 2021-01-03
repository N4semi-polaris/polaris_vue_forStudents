<template>
  <div class="CreateFavoriteSpot">
    <App_bar />
    <template>
      <v-container class="pa-2">
        <v-row align="center">
          <v-col align="center">
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="  Search"
              required
              single-line
              :rules="[(v) => !!v || '必ず入力してください！']"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              rounded
              class="text-center"
              color="#0461cd"
              dark
              @click="postFreeWord"
              >上記の名前で探す</v-btn
            >
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
      </v-container>
    </template>
    <template v-if="frag">
      <v-col>
        <v-list three-line>
          <v-list-item-group v-model="model">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="item.label"></v-list-item-title>
                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
                <v-list-item-subtitle
                  v-text="item.address"
                ></v-list-item-subtitle>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </template>
  </div>
</template>

<script>
import App_bar from "../components/App_bar";

export default {
  name: "CreateFavoriteSpot",
  components: {
    App_bar,
  },
  data: () => ({
    search: "",
    items: [],
    model: -1,
    URL: "",
    frag: false,
  }),
  watch: {
    model: function (newValue, oldValue) {
      console.log(
        "selectTimeが: [" + oldValue + "] から [" + newValue + "]に変更されたよ"
      );
      this.toCheckFavSpot();
    },
  },
  mounted() {
    /*
    console.log(" items[0]の型: " + typeof this.items[0]);
    console.log(" items: " + this.items);
    console.log(" itemsの型: " + typeof this.items);
    console.dir(this.items);
    */
  },
  methods: {
    postFreeWord() {
      const headers = { Authorization: "JWT " + this.$store.getters.getToken };
      const data = { freeword: this.search };
      console.log(
        "postFreeWordしたthis.searchの型: " +
          typeof this.search +
          ", 中身: " +
          this.search
      );
      this.$axios
        .post("/accounts/setting/favspot/search", data, {
          headers: headers,
        })
        .then((response) => {
          /*console.log("response.dataの型@GET: "+ typeof response.data);
            console.log("getしたresponse.dataの中身: ");
            console.dir(response.data);
            console.dir(response.data[0]);*/
          this.items = [];
          for (let i in response.data) {
            this.items[i] = response.data[i];
            //console.dir(this.items[i]);
          }
          this.frag = true;
        })
        .catch((error) => {
          console.log("エラーになっちゃった..@postFreeWord()");
          if (
            error.response.status == 401 //this.$store.commit("logout")
          );
        });
    },

    toCheckFavSpot: function () {
      this.$router
        .push({
          name: "CheckFavSpot",
          params: { selectedFavSpot: this.items[this.model] },
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
#spotlist {
  padding: 10px;
}
.FavoriteSpot {
  font-family: "M PLUS Rounded 1c";
}
</style>