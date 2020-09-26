import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
import DatetimePicker from 'vuetify-datetime-picker' //New add
import 'vuetify-datetime-picker/src/stylus/main.styl' //New add

Vue.use(Vuetify);
Vue.use(DatetimePicker); //New add

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
})