<template>
    <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :close-on-click="false"
        :activator="selectedElement"
        offset-x
        >
        <div v-show="scheduleDialog_p >= 0 && scheduleDialog_p <= 2">
            <v-card color="white" flat width="400px">
            <!-- 1ページ目 -->
            <div v-show="scheduleDialog_p == 0">
                <v-card-title class="justify-center"
                >空き時間、どうする？</v-card-title
                >
                <v-card-text
                ><v-container>
                    <v-radio-group v-model="radioGroup" column>
                    <v-radio
                        label="寄り道予定から探す"
                        value="yorimichi"
                        color="#0461cd"
                    ></v-radio>
                    <v-radio
                        label="おまかせ"
                        value="omakase"
                        color="#0461cd"
                    ></v-radio>
                    <v-radio
                        label="移動時間にあてる"
                        value="transist"
                        color="#0461cd"
                    ></v-radio>
                    </v-radio-group> </v-container
                ></v-card-text>
            </div>
            <!-- 2ページ目 -->
            <div v-show="scheduleDialog_p == 1">
                <v-card-title class="justify-center"
                ><v-btn icon @click="backTo_nextScheduleDialog"
                    ><v-icon>mdi-arrow-left-bold-circle</v-icon></v-btn
                >詳細条件</v-card-title
                >
                <v-card-text>
                <v-col cols="12">
                    <v-checkbox
                    class="nx-2"
                    label="スーパー・コンビニ"
                    color="#210e67"
                    ></v-checkbox>
                    <v-checkbox
                    class="nx-2"
                    label="ファッション"
                    color="#032b8d"
                    ></v-checkbox>
                    <v-checkbox
                    class="nx-2"
                    label="本・文具"
                    color="#033ba0"
                    ></v-checkbox>
                    <v-checkbox
                    class="nx-2"
                    label="映画館"
                    color="#044eb7"
                    ></v-checkbox>
                    <v-checkbox
                    class="nx-2"
                    label="飲食店"
                    color="#0461cd"
                    ></v-checkbox>
                </v-col>
                </v-card-text>
            </div>
            <!-- 3ページ目 -->
            <div v-show="scheduleDialog_p == 2">
                <v-card-title class="justify-center"
                ><v-btn icon @click="backTo_nextScheduleDialog"
                    ><v-icon>mdi-arrow-left-bold-circle</v-icon></v-btn
                >詳細条件</v-card-title
                >
                <v-card-text
                ><v-row align="center">
                    <v-col cols="12">
                    <v-checkbox
                        v-model="enabled1"
                        hide-details
                        class="shrink mr-2 mt-0"
                    ></v-checkbox>
                    <v-text-field
                        :disabled="!enabled1"
                        label="交通費（円単位）"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                    <v-checkbox
                        v-model="enabled2"
                        hide-details
                        class="shrink mr-2 mt-0"
                    ></v-checkbox>
                    <v-text-field
                        :disabled="!enabled2"
                        label="移動時間（分単位）"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                    <v-checkbox
                        v-model="enabled3"
                        hide-details
                        class="shrink mr-2 mt-0"
                    ></v-checkbox>
                    <v-text-field
                        :disabled="!enabled3"
                        label="帰宅時刻（〇〇:〇〇）"
                    ></v-text-field>
                    </v-col> </v-row
                ></v-card-text>
            </div>
            <p align="center">{{ scheduleDialog_p + 1 }}/3</p>
            <!-- 以下全ページ共通コンポーネント -->
            <v-card-actions>
                <v-btn
                text
                color="#0461cd"
                @click="selectedOpen = false"
                absolute
                bottom
                left
                >
                <v-icon left>mdi-close-thick</v-icon>キャンセル</v-btn
                >
                <v-btn
                class="white--text"
                color="#0461cd"
                @click="turnTo_nextScheduleDialog"
                absolute
                bottom
                right
                >次へ
                <v-icon right>mdi-arrow-right-bold-circle</v-icon></v-btn
                >
            </v-card-actions>
            </v-card>
        </div>
        </v-menu>
</template>

<script>
export default {
    data:() => ({
        selectedOpen: false,
        scheduleDialog_p: 0,
        selectedEvent: {},
        selectedElement: null,
        enabled1: false,
        enabled2: false,
        enabled3: false,
        radioGroup: 1,
    }),
    methods: {
        turnTo_nextScheduleDialog() {
        this.scheduleDialog_p += 1;
            if (this.scheduleDialog_p == 3) this.toOutputList();
        },
        backTo_nextScheduleDialog() {
            if (this.scheduleDialog_p > 0) this.scheduleDialog_p -= 1;
        },
        toOutputList: function () {
            this.$router.push({ name: "OutputList" });
        },
        showWindow({ nativeEvent, event }) {
            this.scheduleDialog_p = 0;
            const open = () => {
                this.selectedEvent = event;
                this.selectedElement = nativeEvent.target;
                setTimeout(() => {
                this.selectedOpen = true;
                }, 10);
            };
            if (this.selectedOpen) {
                this.selectedOpen = false;
                setTimeout(open, 10);
            } else {
                open();
            }
            nativeEvent.stopPropagation();
        },
    },
}
</script>

<style>
</style>