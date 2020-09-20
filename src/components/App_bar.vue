<template>
    <div>
        <v-app-bar
            color = "#210e67"
            dense
            dark
        >
        <v-btn icon>
            <v-icon>mdi-heart</v-icon> <!-- 戻る -->
        </v-btn>

        <v-toolbar-title>Polaris</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon v-on:click="toMyPage">
            <v-icon>mdi-heart</v-icon> <!-- MyPage -->
        </v-btn>

        <v-btn icon v-on:click="toHome">
            <v-icon>mdi-magnify</v-icon> <!-- Home -->
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