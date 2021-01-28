<template>
<div class="yorimichi_dialog">
    <v-container>
        <div v-show="dialogP>=0">
            <v-card-title>
                <v-row justify="space-between" no-gutters>
                    <v-col cols="11">
                        <h4><v-icon size="33px" left color="#ffc900">mdi-calendar-check</v-icon>{{ selectedEvent.name }}</h4>
                    </v-col>
                    <v-col cols="1" >
                        <v-btn color="#0461cd" icon @click="change_ScheduleDialog(1)">
                            <v-icon medium>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <div>
                    <p>開始時刻：  {{ selectedEvent.start|processDatetime }}</p>
                    <p>終了時刻：  {{ selectedEvent.end|processDatetime }}</p>
                    <p>場所：     {{ selectedEvent.location }}</p>
                    <p>住所：     {{ selectedEvent.address }}</p>
                </div>
                <!-- 削除 -->
                <div v-show="dialogP==1">
                    <v-divider/>
                    <v-container>
                        <v-row>
                            <v-col>削除します</v-col>
                        </v-row>
                        <v-row justify="space-around">
                            <v-col cols="6">
                                <v-btn @click="submit_delete">はい</v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn @click="change_ScheduleDialog(0)">いいえ</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <!-- 削除終わり -->
            </v-card-text>
        </div>
    </v-container>
</div>
</template>

<script>
import moment from "moment";
export default {
    props: ['selectedEvent', 'dialogP'],
    filters: {
        processDatetime: function(datetime){
            if(!datetime)return ""
            return moment(datetime).format("YYYY年MM月DD日 HH:mm")
        }
    },
    data:() => ({
    }),
    methods: {
        turnTo_nextScheduleDialog() {
            this.$emit('changeP', this.dialogP+1)
        },
        backTo_nextScheduleDialog() {
            if (this.dialogP > 0) this.$emit('changeP', this.dialogP-1);
        },
        change_ScheduleDialog(i){
            this.$emit('changeP',i)
        },
        submit_delete(){
            this.$axios.delete('//nakano2021seminar.pythonanywhere.com/calendar/blocks/yorimichi/'+this.selectedEvent.bk_id,{
                data:{},
                headers:{"Authorization": "JWT " + this.$store.getters.getToken}
            }).then(()=>{
                this.$emit("delEvent");
                this.$emit("closeDialog");
                this.$router.go({ path: this.$router.currentRoute.path, force: true });
            }).catch((error)=>{
                console.log(error)
            })
        },
    },
}
</script>

<style>
.yorimichi_dialog {
    font-family: 'M PLUS Rounded 1c';
}
</style>