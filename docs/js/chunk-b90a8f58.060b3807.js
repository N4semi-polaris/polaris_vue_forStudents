(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b90a8f58"],{be3c:function(a,e,t){"use strict";var n=t("eab2"),s=t.n(n);s.a},eab2:function(a,e,t){},fd75:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"TaskLog"},[t("App_var"),t("h1"),t("v-container",[t("v-divider"),a._l(a.tasks,(function(e){return t("Task_Block",{key:e.uuid,attrs:{task_name:e.task_name,place_name:e.place_name,task_type:e.task_type,deadline:e.deadline},nativeOn:{click:function(t){return a.todetailpage(e.uuid)}}})})),t("v-divider")],2)],1)},s=[],i=(t("b0c0"),t("b85c")),o=t("6129"),c=t("2f8b"),r=t("c1df"),d=t.n(r),u={name:"TaskLog",components:{App_var:o["a"],Task_Block:c["a"]},mounted:function(){var a=this,e={"Content-Type":"application/json",Authorization:"JWT "+this.$store.getters.getToken};this.$axios.get("//nakano2021seminar.pythonanywhere.com/calendar/blocks/tasks",{data:{},headers:e}).then((function(e){var t,n=Object(i["a"])(e.data);try{for(n.s();!(t=n.n()).done;){var s=t.value;a.tasks.push({uuid:s.bk.uuid,task_name:s["name"],place_name:s["location"],task_type:a.task_type[s.tasktype-1],deadline:null!=s["deadline"]?d()(s["deadline"]).format("yyyy-MM-DD HH:mm"):null})}}catch(o){n.e(o)}finally{n.f()}console.dir(a.tasks)}))},data:function(){return{tasks:[],task_type:["飲食店","買い物","レジャー・エンタメ施設","その他"]}},methods:{todetailpage:function(a){this.$router.push({name:"TaskEdit_edit",params:{uuid:a}})}}},l=u,k=(t("be3c"),t("2877")),p=t("6544"),f=t.n(p),m=t("a523"),_=t("ce7e"),h=Object(k["a"])(l,n,s,!1,null,"5c00158c",null);e["default"]=h.exports;f()(h,{VContainer:m["a"],VDivider:_["a"]})}}]);
//# sourceMappingURL=chunk-b90a8f58.060b3807.js.map