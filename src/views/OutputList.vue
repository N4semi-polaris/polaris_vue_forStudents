<template>
    <div class="OutputList">
        <App_bar />

        <v-toolbar flat>
            <v-toolbar-title class="marginBarLR">
                検索結果<span class="ml-3">全{{ hit_num }}件</span>
            </v-toolbar-title>
        </v-toolbar>

        <v-sheet color="#f5f5f5" height="15px"></v-sheet>

        <v-list shaped>
        <template v-for="(result, index) in results">
            <v-list-item :key="'outputlist'+result.id" @click="toListDetails(result)">
                <v-list-item-content>
                    <v-row no-gutters align="center">
                        <v-col cols="1">
                            <span class="marginIdLR"> <!-- リスト番号 -->
                                <v-list-item-title>{{ result.id }}</v-list-item-title>
                            </span>
                        </v-col>
                        <v-col cols="8" class="ml-4">
                            <v-list-item-title v-text="result.name"></v-list-item-title>
                            <v-list-item-subtitle
                                class="text--primary"
                            >{{ makeStartTime(result.start_time) }} <!-- 出発時間 -->
                            <v-icon color="#0575e6" dense>mdi-arrow-right-bold</v-icon>
                            {{ makeEndTime(result.end_time) }} <!-- 到着時間 -->
                            <span class="ml-1">{{ getTransTime(result.start_time, result.end_time) }}</span>
                            </v-list-item-subtitle> <!-- 移動時間 -->
                        </v-col>
                        <v-col class="ml-2">
                            <div v-show="taskOption(result.task_option)">
                                <v-icon color="#ffc900" dense>mdi-tag</v-icon>
                            </div>
                        </v-col>
                    </v-row>
                </v-list-item-content>
            </v-list-item>
            <!--
            <v-divider
                v-if="index < results.length"
                :key="index"
            ></v-divider>-->
            <v-sheet
                v-if="index < results.length"
                :key="index"
                color="#f5f5f5"
                height="10px"
            ></v-sheet>

        </template>
    </v-list>
    </div>
</template>

<script>
import App_bar from '../components/App_bar';
import moment from 'moment';

export default {
    name: "OutputList",
    components: {
        App_bar,
    },
    data: () => ({
        type_dict: [
            {id:1, name:"寄り道予定から探す", url:"tasks"},
            {id:2, name:"時間内に行ける飲食店以外の施設を探す", url:""},
            {id:3, name:"時間内に行ける飲食店を探す", url:""}],
        hit_num: 0,
        results: [
            /*
            {
                id: 1,
                place_name: '津田塾大学',
                start_time: '2020-10-11 20:26 pm',
                end_time: '2020-10-11 22:28 pm',
                trans_costs: '649',
                task_option: 0,
            },
            {
                id: 2,
                place_name: '一橋大学',
                start_time: '2020-10-11 20:51 pm',
                end_time: '2020-10-11 22:09 pm',
                trans_costs: '739',
                task_option: 0,
            },
            {
                id: 3,
                place_name: '有隣堂',
                start_time: '2020-10-11 20:32 pm',
                end_time: '2020-10-11 20:54 pm',
                trans_costs: '230',
                task_option: 0,
            },*/
        ],
        isShowDetails: false,
    }),
    mounted() {
        if (this.type_dict[this.$route.query.type-1].url!=""){
            var url = "/recommend/"+this.type_dict[this.$route.query.type-1].url+"/"+this.$route.query.bk
            this.$axios.get(url,{
                data:{},
                headers:{"Authorization": "JWT " + this.$store.getters.getToken}
            }).then((response)=>{
                this.hit_num = response.data['hit_num']
                this.results = this.results.concat(response.data['now'])
                this.results = this.results.concat(response.data['des'])
                console.log(this.results)
                var i = 1
                this.results.map(result => result['id']=i++)
            })
        }
    },
    computed: {
        getListLength: function() {
            var count = 0;
            var list = this.results;
            for (var i = 0; i < list.length; i++) {
                count++;
            }
            return count;
        },
    },
    methods: {
        makeStartTime: function(start_time) { /* 出発時間を返す */
            return this.adjustAMPM(moment(start_time, 'YYYY-MM-DD hh:mm a'));
        },
        makeEndTime: function(end_time) { /* 到着時間を返す */
            return this.adjustAMPM(moment(end_time, 'YYYY-MM-DD hh:mm a'));
        },
        adjustAMPM: function(time) { /* 出発・到着時間のAM/PMを調整する */
            var hour;
            if (time.format('a') == 'am') {
                if (time.format('h') == '12') hour = 0
                else hour = Number(time.format('h'));
            } else {
                if (time.format('h') == '12') hour = 12
                else hour = Number(time.format('h')) + 12;
            }
            return hour + ':' + time.format('mm');
        },
        getTransTime: function(start_time, end_time) { /* 移動時間を計算する */
            var start = moment(start_time, 'YYYY-MM-DD hh:mm a');
            var end = moment(end_time, 'YYYY-MM-DD hh:mm a');
            var minute = end.diff(start, 'minutes');
            var hour = end.diff(start, 'hours');
            var transtime;
            if (hour == 0) transtime = '（' + minute + '分）';
            else transtime = '（' + hour + '時間' + (minute - 60 * hour) + '分）';
            return transtime;
        },
        taskOption: function(option) { /* タスクラベルをつけるかどうか */
            return option ? true : false;
        },
        toListDetails: function(result) {
            this.$router.push({ 
                name: "ListDetails", 
                query: {
                    place_name: result.place_name,
                    start_time: result.start_time,
                    end_time: result.end_time,
                    trans_costs: result.trans_costs,
                    task_option: result.task_option 
                    }
            });
            this.isShowDetails = true;
        },
    },
}
</script>

<style scoped>
.marginBarLR {
    text-align: center;
}
.marginIdLR {
    text-align: center;
    font-weight: bold;
}
.OutputList {
    font-family: 'M PLUS Rounded 1c';
}
</style>