<template>
    <div class="FavoriteSpot">
        <App_var />
        <div id="spotlist">
            <Spot_Block v-for="spot in spots" :key="spot.id"
                :name=spot.name :address=spot.address
            />
        </div>
        <div id="addArea">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark fab bottom left color="#ffc900" v-bind="attrs" v-on="on">
                        <!-- お気に入りの場所追加ポップアップへ -->
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">スポット追加</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="名前*" required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="住所"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import App_var from "../components/App_bar";
import Spot_Block from "../components/Spot_Block";
export default {
    components: {
        App_var,
        Spot_Block,
    },
    data: ()=>({
        dialog: false,
        spots:[{
            id:1,
            name:"津田塾大学",
            address:"東京都小平市津田町2-1",
            },{
            id:2,
            name:"マツモトキヨシ",
            address:"",
            },{
            id:3,
            name:"銀座コージーコーナーグランデュオ立川店",
            address:"東京都立川市042-540-5403",
            },{
            id:4,
            },
        ]
    }),
}
</script>

<style scoped>
#spotlist{
    padding: 10px;
}
</style>