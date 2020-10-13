<template>
    <div class="ListDetails">
        <App_bar />

        <div class="detail_card">
            <v-card
                class="mx-2 mt-2"
                color="#ffffff"
            >

                <v-card-title>
                    <v-icon left large color="#033ba0">mdi-map-marker</v-icon>
                    <span class="placeName">{{ place_name }}</span>
                    <div v-show="useBus == true">
                        <v-icon color="#033ba0" dense class="ml-1">mdi-bus</v-icon>
                    </div>
                    <div v-show="useTrain == true">
                        <v-icon color="#033ba0" dense class="ml-1">mdi-train</v-icon>
                    </div>
                    <div v-show="useFoot == true">
                        <v-icon color="#033ba0" dense class="ml-1">mdi-walk</v-icon>
                    </div>

                    <v-spacer></v-spacer>

                    <v-btn
                        v-if="rainAvoid == false"
                        color="#ffffff"
                        fab
                        v-on:click="displayRainAvoid()"
                    ><v-icon large color="#0461cd">mdi-umbrella-outline</v-icon></v-btn>
                    <v-btn
                        v-else
                        dark
                        fab
                        color="#0461cd"
                        v-on:click="displayRainAvoid()"
                    ><v-icon large>mdi-umbrella</v-icon></v-btn>
                </v-card-title>

                <v-card-subtitle class="ml-10">
                    {{ start_time }}
                    <v-icon color="#0575e6" dense>mdi-arrow-right-bold</v-icon>
                    {{ end_time }}
                    <span class="ml-1">（{{ trans_time }}）</span><br>
                    {{ trans_costs }}円
                    <span class="ml-3">{{ nearest_station }}／{{ nearest_route }}</span>
                </v-card-subtitle>

                <v-card-actions>
                    <v-container fluid>
                        <v-row justify="center">
                            <v-col align="center">
                                <v-btn
                                    class="mx-auto"
                                    rounded
                                    color="#0575e6"
                                    dark
                                    block
                                >ココにする
                                <v-icon right size="30">mdi-gesture-tap</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-btn
                                    rounded
                                    color="#210e67"
                                    outlined
                                    small
                                    absolute
                                    bottom
                                    left
                                >1つ遅らせる</v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn
                                    rounded
                                    color="#033ba0"
                                    outlined
                                    small
                                    absolute
                                    bottom
                                    right
                                >1つ早める</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
import App_bar from '../components/App_bar';

export default {
    name: "ListDetails",
    components: {
        App_bar,
    },
    data:() => ({
        place_name: '津田塾大学',
        useFoot: true,
        useBus: false,
        useTrain: true,
        start_time: '20:26',
        end_time: '22:28',
        trans_time: '2時間2分',
        trans_costs: '649',
        nearest_station: '新小平駅',
        nearest_route: 'JR武蔵野線',
        isRainy: true,
        rainAvoid: true,
    }),
    mounted() {
        this.rainAvoid = false;
    },
    methods: {
        displayRainAvoid() {
            this.rainAvoid = !this.rainAvoid;
        },
    },
}
</script>

<style scoped>
.placeName {
    font-weight: bold;
}
</style>