<template>
    <div id="app_bar">
        <v-app-bar
            color="#210e67"
            dark
            dense
            elevation="5"
            app
        >

        <template v-slot:img="{ props }">
            <v-img
            v-bind="props"
            gradient="to right, rgba(33,14, 103,7), rgba(5,117,230,7)"
            ></v-img>
        </template>

        <v-toolbar-title>Polaris</v-toolbar-title>
        <!-- ロゴも含めてツールバーの左端はPolarisのアイコンを挿入 -->

        <v-spacer></v-spacer>

        <v-btn icon color="#ffc900">
            <v-icon>mdi-calendar-sync</v-icon> <!-- Googleカレンダーと同期 -->
        </v-btn>

        <v-btn icon v-on:click="toMyPage" color="#ffc900">
            <v-icon>mdi-account-circle</v-icon> <!-- MyPage -->
        </v-btn>

        <v-btn icon v-on:click="toHome" color="#ffc900">
            <v-icon>mdi-home</v-icon> <!-- Home -->
        </v-btn>
        <v-btn icon v-on:click="logout" color="#ffc900">
            <v-icon>mdi-logout</v-icon> <!-- Home -->
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
        logout:function(){
            this.$store.commit("logout");
            this.$router.push({name :"Login", params: { redirect: this.$router.path }});
        }
    }
}
</script>