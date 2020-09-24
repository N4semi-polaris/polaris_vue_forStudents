<template>
    <div>
        <v-card color="selectColor" height="45">
            <!-- ブロックの色とMAX_Height -->
            <v-container>
                <v-row justify="space-around">
                    <v-col>
                        <v-card-title>
                            <v-icon large left color="#ffffff">{{ selectIcon }}</v-icon>
                            <span style="color:#ffffff">{{ task_name }}</span>
                        </v-card-title>
                    </v-col>
                    <v-col class="px-0">
                        <div class="place">
                        <v-row>
                            <v-card-text color="#ffffff">{{ place_name }}</v-card-text>
                        </v-row>
                        </div>
                        <div class="deadline">
                        <v-row>
                            <v-card-text color="selectColor">{{ deadLine }}まで</v-card-text>
                        </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        task_name: '本屋うろうろ',
        place_name: '有隣堂',
        task_type: '本・文具',
        deadline: '2020-09-30',

        task_type_list: [ 'スーパー・コンビニ', 'ファッション', '本・文具', '映画館', '飲食店', 'その他' ],
        task_icon_list: [ 'mdi-shopping_cart', 'mdi-store', 'mdi-menu_book', 'mdi-local_movies', 'mdi-restaurant', 'mdi-star' ],
        task_color_list: [ "#210e67", "#032b8d", "#033ba0", "#044eb7", "#0461cd", "#0575e6" ],
    }),
    computed: {
        selectColor: function(){
            var key = 100;
            for (var i=0; i<this.task_type_list.length; i++) {
                if (this.task_type === this.task_type_list[i]) key = i;
            }
            return this.task_color_list[key];
        },
        selectIcon: function(){
            var key = 100;
            for (var i=0; i<this.task_type_list.length; i++) {
                if (this.task_type === this.task_type_list[i]) key = i;
            }
            return this.task_icon_list[key];
        },
        deadLine: function(){
            let spilit = this.deadline.spilit('-');
            let spilit_month;
            if (spilit[1].charAt(0) == '0') spilit_month = spilit[1].slice(1);
            else spilit_month = spilit[1];
            return spilit_month + '/' + spilit[2];
        },
    },
}
</script>

<style>
#deadline {
    background-color: white;
}
</style>
