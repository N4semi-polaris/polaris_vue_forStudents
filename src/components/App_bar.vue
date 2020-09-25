<template>
    <div id="app_bar">
        <v-app-bar
            color="#210e67"
            dark
            dense
        >

        <template v-slot:img="{ props }">
            <v-img
            v-bind="props"
            gradient="to right, rgba(33,14,103,7), rgba(5,117,230,7)"
            ></v-img>
        </template>

        <v-btn icon color="#ffc900">
            <v-icon>mdi-reply</v-icon> <!-- 戻る -->
        </v-btn>

        <v-toolbar-title>Polaris</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon v-on:click="toMyPage" color="#ffc900">
            <v-icon>mdi-account-circle</v-icon> <!-- MyPage -->
        </v-btn>

        <v-btn icon v-on:click="toHome" color="#ffc900">
            <v-icon>mdi-home</v-icon> <!-- Home -->
        </v-btn>
        </v-app-bar>
    </div>
</template>

<script>

export default {
    methods:{
        toMyPage:function(){
            this.$router.push({ name:'MyPage' });
        },
        toHome:function(){
            this.$router.push({ name:'Home' });
        },
    }
}
</script>