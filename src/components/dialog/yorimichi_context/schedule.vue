<template>
    <v-container>
        <div v-show="dialog_p>=0">
            <!-- 1ページ目 -->
            <div v-show="dialog_p%3 == 0">
                <v-card-title><h4>{{ selectedEvent.name }}</h4></v-card-title>
                <v-card-text>
                    <div>
                        <p>開始時刻：  {{ selectedEvent.start|processDatetime }}</p>
                        <p>終了時刻：  {{ selectedEvent.end|processDatetime }}</p>
                        <p>場所：     {{ selectedEvent.location }}</p>
                        <p>メモ：     {{ selectedEvent.description }}</p>
                    </div>
                </v-card-text>
            </div>
            <!-- 1ページ終了 -->
        </div>
    </v-container>
</template>

<script>
import moment from "moment";
export default {
    props: ['selectedEvent'],
    filters: {
        processDatetime: function(datetime){
            if(!datetime)return ""
            return moment(datetime).format("YYYY年MM月DD日 HH:mm")
        }
    },
    data:() => ({
        dialog_p: 0,
        max_index: 1,
    }),
    methods: {
    },
}
</script>

<style>
</style>