<template>
    <div id="SpotBlock">
        <v-card :color="color" height="auto" class="mx-auto ma-2">
            <v-container class="pa-1">
                <v-row class="ma-1">
                    <v-col cols="8" class="align-self-center pa-1">
                        <p style="color:white;">{{ name }}</p>
                    </v-col>
                    <v-col cols="4" class="align-self-center pa-1">
                        <p style="color:white;">{{ address }}</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>
<script>
export default {
    props:['name','address'],
    data:()=>({
        color: "#210e67",
    }),
    methods:{
    }
}
</script>

<style scoped>
.v-application p {
    margin-bottom: 0px;
    font-size: 12px;
}
</style>