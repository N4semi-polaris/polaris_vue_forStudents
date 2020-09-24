<template>
    <v-container
        v-touch="{
            up: ()=>onSwipeUp(),
            down: ()=>onSwipeDown(),
        }"
        v-bind:style="{ height: hight_ofPalette+'vh' }"
        no-gutters pa-0
        id = "task_palette"
        >
            <v-row id="palette_head">
                <v-col class="text-center pa-0">
                    <v-btn v-if="isSwiped" v-on:click="onSwipeDown" icon color="grey">
                        <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                    <v-btn v-else v-on:click="onSwipeUp" icon color="grey">
                        <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="pa-0">
                    <v-btn v-on:click="toTaskEdit" style="padding-left:30px;" text>
                        <!-- タスクブロック追加ページへ -->
                        <v-icon color="#ffc900" left>mdi-plus-circle</v-icon>新規寄り道予定作成
                    </v-btn>
                </v-col>
                <v-col class="text-right pa-0" >
                    <v-btn icon v-on:click="toTaskEdit">
                        <!-- タスクログページへ -->
                        <v-icon style="padding-right:50px">mdi-notebook</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        <v-row>
            <v-col id="palette_body">
                <Task_Block />
            <!-- ここにタスクブロック -->
            </v-col>
        </v-row>
        </v-container>
</template>
<script>
import Task_Block from '../components/Task_Block.vue'

export default {
    name: 'Task_Palette',
    data: () => ({
        hight_ofPalette: 30,
        isSwiped: false,
    }),
    components: {
        Task_Block,
    },
    methods:{
        onSwipeUp:function(){
            this.hight_ofPalette = 50;
            this.isSwiped = true;
            this.$nextTick(()=>{
                this.$emit('change-palettesize');
            });
        },
        onSwipeDown:function(){
            this.hight_ofPalette = 30;
            this.isSwiped = false;
            this.$nextTick(()=>{
                this.$emit('change-palettesize');
            });
        },
        toTaskEdit:function(){
            this.$router.push({ name:'TaskEdit' });
        },
        toTaskLog:function(){
            this.$router.push({ name:'TaskLog' });
        }
    },
}
</script>

<style scoped>
#task_palette{
    bottom: 0px;
    position: fixed;
    background-color: #fafafa;
    max-width: initial;
}
</style>