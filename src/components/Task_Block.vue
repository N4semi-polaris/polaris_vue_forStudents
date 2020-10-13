<template>
    <div v-touch="{
        left: () => onSwipeDelete(),
        right: () => onSwipeBack(),
    }">
    <div id="task_block">
        <draggable :options="options">
            <v-card :color="selectColor()" class="mx-auto ma-2">
                <v-container class="pa-2">
                    <div v-show="isSwipe == true">
                    <v-row no-gutters align="center">
                        <v-col cols="2">
                            <div class="circle1"><!-- outer -->
                            <div class="circle2"><!-- inner -->
                            <v-icon :color="selectColor()" size="45">{{ selectIcon }}</v-icon></div></div>
                        </v-col><!-- 左端に表示するタスクアイコン -->
                        <v-col no-gutters>
                            <div class="task_name"><p>{{ task_name }}</p></div>
                        </v-col><!-- タスク名 -->

                        <v-col cols="3" no-gutters>
                            <v-row>
                                <div class="place_name"><p>{{ place_name }}</p></div>
                            </v-row><!-- 場所 -->
                            <v-row>
                                <div class="deadline"><p v-bind:style="{color: selectColor()}">{{ deadLine() }}まで</p></div>
                            </v-row><!-- 〆切日 -->
                        </v-col>
                    </v-row>
                    </div>
                    <div v-show="isSwipe == false" class="text-right">
                        <v-row no-gutters><v-col>
                            <v-btn
                                class="ma-2"
                                color="#ffffff"
                                outlined
                                v-on:click="toTaskEdit"
                            ><v-icon dark left>mdi-pencil</v-icon>
                            編集</v-btn>
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
        </draggable>
    </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import moment from 'moment';

export default {
    components: { draggable },
    props: ['task_name', 'place_name', 'task_type', 'deadline'],
    data: () => ({
        /* 入力データと比較するためのリスト */
        task_type_list: [ 'スーパー・コンビニ', 'ファッション', '本・文具', '映画館', '飲食店', 'その他' ],
        task_icon_list: [ 'mdi-shopping', 'mdi-store', 'mdi-book-open-blank-variant', 'mdi-movie-open', 'mdi-silverware-fork-knife', 'mdi-star' ],
        task_color_list: [ '#210e67', '#032b8d', '#033ba0', '#044eb7', '#0461cd', '#0575e6', '#ff6340' /*赤色*/, '#778899' /*灰色*/ ],

        options: { animation: 200 },
        today: moment().format("YYYY-MM-DD hh:mm"),
        isSwipe: false,
    }),
    mounted() {
        this.isSwipe = true;
    },
    computed: {
        selectIcon: function(){ /* アイコンを選ぶ */
            var key = 100;
            for (var i=0; i<this.task_type_list.length; i++) {
                if (this.task_type === this.task_type_list[i]) key = i;
            }
            return this.task_icon_list[key];
        },
    },
    methods :{
        compareDeadLine: function (){ //今日の日付と〆切日の差を計算する
            return moment(this.deadline).diff(moment(this.today), 'days');
        },
        selectColor: function(){ /* テーマカラーを選ぶ */
            var key = 100;
            for (var i=0; i<this.task_type_list.length; i++) {
                if (this.task_type === this.task_type_list[i]) key = i;
            }
            if (this.compareDeadLine() >= 0 && this.compareDeadLine() <= 3) {
                key = 6;
            } else if (this.compareDeadLine() < 0) {
                key = 7;
            }
            return this.task_color_list[key];
        },
        deadLine: function(){ /* 〆切日を「X-Y」→「X/Y」に加工する */
            var answer;
            if (this.compareDeadLine() == 1) {
                answer = "明日";
            } else if (this.compareDeadLine() == 0) {
                answer = "今日";
            } else {
                answer = moment(this.deadline).format('M/D');
            }
            return answer;
        },
        onSwipeDelete: function(){ /* 左にスワイプしたら削除 */
            this.isSwipe = false;
        },
        onSwipeBack: function(){ /* 右にスワイプしたら元に戻る */
            this.isSwipe = true;
        },
        toTaskEdit: function () {
            this.$router.push({ name: "TaskEdit" });
        },
    }
}
</script>

<style>
.circle1 {
    height: 50px; /* heightを小さくするとブロックの縦幅も小さくなった！ */
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.circle2 {
   width: 45px;
   height: 45px;
   background: #ffffff;
   border-radius: 50px;
}
.task_name { /* 親要素 */
    position: relative;
    /*height: 50px;*/
}
.task_name p {
    /*line-height: 60px;*/
    margin-left: 5px;
    color: #ffffff;
    font-size:15pt;
    font-weight: bold;
}
.place_name {
    color: #ffffff;
    font-size: 12pt;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-weight: bold;
}
.deadline {
    width: 80px;
    height: 22px;
    background: #ffffff;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-weight: bold;
}
.v-application p {
    margin-bottom: 0px;
}
#task_block {
    font-family: 'M PLUS Rounded 1c';
}
</style>
