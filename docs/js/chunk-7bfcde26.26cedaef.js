(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bfcde26"],{"349d":function(t,e,a){},"4f6b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"CheckFavSpot"},[a("App_bar"),[a("v-container",{},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{align:"center"}},[a("v-card",[a("v-container",{staticClass:"pa-2"},[a("v-toolbar",{attrs:{dark:"",dense:"",flat:"",color:"#778899"}},[a("v-row",{attrs:{justify:"center"}},[a("v-card-title",[t._v(" 選択された候補 ")])],1)],1),a("v-card-text",[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(t.selectedFavSpot.name)+" ")])],1),a("v-divider"),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(t.selectedFavSpot.address)+" ")])],1)],1)],1)],1),a("v-spacer"),a("v-spacer"),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"text-center",attrs:{rounded:"",color:"#0461cd",dark:""},on:{click:function(e){return t.$router.go(-1)}}},[t._v("戻る")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"text-center",attrs:{rounded:"",color:"#0461cd",dark:""},on:{click:t.postSelectedSpot}},[t._v("登録する")])],1)],1)],1)],1),a("v-spacer")],1)]],2)},s=[],c=(a("b0c0"),a("53ca")),r=a("6129"),n={name:"CheckFavSpot",components:{App_bar:r["a"]},props:{selectedFavSpot:{}},mounted:function(){console.log(" selectedFavSpotの型: "+Object(c["a"])(this.selectedFavSpot)),console.log(" selectedFavSpot: "+this.selectedFavSpot),console.dir(this.selectedFavSpot)},data:function(){return{}},methods:{postSelectedSpot:function(){var t=this,e={Authorization:"JWT "+this.$store.getters.getToken},a={name:this.selectedFavSpot.name,address:this.selectedFavSpot.address,lat:parseFloat(this.selectedFavSpot.lat),lon:parseFloat(this.selectedFavSpot.lon),code:this.selectedFavSpot.code};this.$axios.post("/accounts/setting/favspot",a,{headers:e}).then((function(){t.$router.push({name:"FavoriteSpot"})})).catch((function(t){console.log("エラーになっちゃった..@postSelectedSpot"),t.response.status}))}}},l=n,d=(a("d134"),a("2877")),i=a("6544"),v=a.n(i),p=a("8336"),u=a("b0af"),S=a("99d9"),h=a("62ad"),f=a("a523"),F=a("ce7e"),b=a("0fd9"),g=a("2fa4"),w=a("71d9"),k=Object(d["a"])(l,o,s,!1,null,"432d9037",null);e["default"]=k.exports;v()(k,{VBtn:p["a"],VCard:u["a"],VCardText:S["c"],VCardTitle:S["d"],VCol:h["a"],VContainer:f["a"],VDivider:F["a"],VRow:b["a"],VSpacer:g["a"],VToolbar:w["a"]})},d134:function(t,e,a){"use strict";var o=a("349d"),s=a.n(o);s.a}}]);
//# sourceMappingURL=chunk-7bfcde26.26cedaef.js.map