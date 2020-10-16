<template>
    <div id="SpotBlock">
    <div v-touch="{
        left: () => onSwipeDelete(),
        right: () => onSwipeBack(),
    }">
        <v-card :color="color" height="auto" class="mx-auto ma-2">
            <v-container class="pa-1">
                <div v-show="isSwipe == true">
                <v-row class="ma-1">
                    <v-col cols="8" class="align-self-center pa-1">
                        <p style="color:white;">{{ name }}</p>
                    </v-col>
                    <v-col cols="4" class="align-self-center pa-1">
                        <p style="color:white;">{{ address }}</p>
                    </v-col>
                </v-row>
                </div>
                <div v-show="isSwipe == false" class="text-right">
                    <v-row no-gutters><v-col>
                            <v-btn
                                class="ma-2"
                                color="#ffffff"
                                outlined
                            ><v-icon>mdi-trash-can-outline</v-icon>
                            削除</v-btn>
                        </v-col></v-row>
                </div>
            </v-container>
        </v-card>
    </div>
    </div>
</template>
<script>
export default {
    props:['name','address'],
    data:()=>({
        color: "#210e67",
        isSwipe: false,
    }),
    mounted() {
        this.isSwipe = true;
    },
    methods:{
        onSwipeDelete: function(){
            this.isSwipe = false;
        },
        onSwipeBack: function(){
            this.isSwipe = true;
        }
    }
}
</script>

<style scoped>
.v-application p {
    margin-bottom: 0px;
    font-size: 12px;
}
</style>