<template>
    <v-dialog
        v-model="selectedOpen"
        :close-on-content-click="false"
        :close-on-click="false"
        :activator="selectedElement"
        offset-x
        width="400px"
        >
        <v-card color="white" flat width="400px">
            <aki 
                :selected-event=selectedEvent :dialog-p=scheduleDialog_p
                @changeP="setDialogP" @setEvent="callParents_setEvent" @pushEvent="callParents_pushEvent"
                @delEvent="callParents_delEvent" @closeDialog="selectedOpen = false"
                v-if="selectedEvent.bk_type==1"/>
            <zaitaku 
                :selected-event=selectedEvent :dialog-p=scheduleDialog_p 
                @changeP="setDialogP" @setEvent="callParents_setEvent" @pushEvent="callParents_pushEvent"
                @delEvent="callParents_delEvent" @closeDialog="selectedOpen = false"
                v-else-if="selectedEvent.bk_type==2"/>
            <schedule 
                :selected-event=selectedEvent 
                v-else-if="selectedEvent.bk_type==4"/>
            <v-card-actions>
                <v-btn
                text
                color="#0461cd"
                @click="selectedOpen = false">
                <v-icon left>mdi-close-thick</v-icon>キャンセル</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import aki from '@/components/dialog/yorimichi_context/aki'
import zaitaku from '@/components/dialog/yorimichi_context/zaitaku'
import schedule from '@/components/dialog/yorimichi_context/schedule'
export default {
  components: { aki, zaitaku, schedule },
    data:() => ({
        selectedOpen: false,
        scheduleDialog_p: 0,
        selectedEvent: {},
        selectedElement: null,
    }),
    methods: {
        showWindow({ nativeEvent, event }) {
            const open = () => {
                this.scheduleDialog_p = 0;
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
        setDialogP: function(page){
            this.scheduleDialog_p = page;
        },
        callParents_setEvent: function(data){
            if ("bk_type" in data)this.selectedEvent.bk_type = data.bk_type
            if ("start" in data)this.selectedEvent.start = data.start
            if ("end" in data)this.selectedEvent.end = data.end
            if ("color" in data)this.selectedEvent.color = data.color
            this.$emit("setEvent",this.selectedEvent)
        },
        callParents_delEvent: function(){
            this.$emit("delEvent", this.selectedEvent)
        },
        callParents_pushEvent: function(Event){
            console.log("callParents_pushEvent,yorimichi"+Event)
            this.$emit("pushEvent", Event)
        }
    },
}
</script>

<style>
</style>