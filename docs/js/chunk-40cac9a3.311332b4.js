(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40cac9a3"],{"0660":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ListDetails2"},[i("App_bar"),i("div",{staticClass:"detail_card"},[i("v-container",[i("v-btn",{staticClass:"text-center",attrs:{rounded:"",color:"#0461cd",dark:""},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",{attrs:{left:"",size:"30"}},[t._v("mdi-keyboard-return")]),t._v("戻る")],1)],1),i("v-card",{staticClass:"mx-2 mt-2",attrs:{color:"#ffffff"}},[i("v-card-title",[i("v-icon",{attrs:{left:"",large:"",color:"#033ba0"}},[t._v("mdi-map-marker")]),i("span",{staticClass:"placeName"},[t._v(t._s(t.selectedResult.name))]),i("v-spacer"),i("v-card-subtitle",{staticClass:"ml-7"},[t._v(t._s(t.selectedResult.genre))]),i("v-card-subtitle",{staticClass:"ml-7"},[t._v("最寄駅："+t._s(t.selectedResult.station))]),i("v-card-subtitle",{staticClass:"ml-7"},[t._v("最大滞在可能時間："+t._s(this.selectedResult.mins)+"分("+t._s(t.maxStayingTimeHours)+"時間"+t._s(t.maxStayingTimeMins)+"分)")]),i("v-row",[i("v-col",{attrs:{align:"center"}},[i("v-text-field",{attrs:{label:"滞在希望時間",suffix:"分",rules:[t.rules.required,t.rules.limit_time],outlined:""},model:{value:t.stayingTimeMins,callback:function(e){t.stayingTimeMins=e},expression:"stayingTimeMins"}})],1)],1)],1),i("v-card-actions",[i("v-btn",{staticClass:"mb-3",attrs:{rounded:"",depressed:"",disabled:"",block:""},on:{click:t.postSelectedSpot}},[t._v("ココにする "),i("v-icon",{attrs:{right:"",size:"30"}},[t._v("mdi-gesture-tap")])],1)],1)],1)],1)],1)},o=[],n=(i("b0c0"),i("53ca")),r=i("6129"),l={name:"ListDetails2",components:{App_bar:r["a"]},data:function(){return{selectedResult:[],type:0,startTime:"",maxStayingTimeHours:0,maxStayingTimeMins:0,stayingTimeHours:0,stayingTimeMins:0,stayingTime:0,rules:{}}},mounted:function(){var t=this;this.selectedResult=this.$store.getters.getSelectedResult,console.log(" selectedResultの型: "+Object(n["a"])(this.selectedResult)),console.log(" selectedResult.sections: "),console.dir(this.selectedResult.sections),this.stayingTime=this.selectedResult.mins,this.calcMaxStayingTime(),this.rules={required:function(t){return!!t||"必ず入力してください"},limit_time:function(e){return e<=t.selectedResult.mins||t.selectedResult.mins+"分以内にしてください"}}},methods:{calcMaxStayingTime:function(){this.maxStayingTimeHours=Math.floor(this.selectedResult.mins/60),this.maxStayingTimeMins=this.selectedResult.mins-60*this.maxStayingTimeHours,this.stayingTimeMins=this.selectedResult.mins},calcPostTime:function(){for(var t in this.selectedResult.sections)"yorimichi"==this.selectedResult.sections[t]["type"]&&(this.startTime=this.selectedResult.sections[t]["start"]["time"],console.log("startTime@ListDetails2.vue: "+this.startTime))},postSelectedSpot:function(){var t=this,e={Authorization:"JWT "+this.$store.getters.getToken};this.calcPostTime();var i={start:this.startTime,mins:this.stayingTimeMins,location:this.selectedResult.name,lat:this.selectedResult.lat,lon:this.selectedResult.lon,genre:this.selectedResult.genre};this.$axios.post("//nakano2021seminar.pythonanywhere.com/calendar/blocks/yorimichi",i,{headers:e}).then((function(){t.$store.commit("setListResult",[]),t.$store.commit("setSelectedResult",[],0),t.$router.push({name:"Home"})})).catch((function(t){console.log("エラーになっちゃった..@ListDetails2_PostSelectedSpot"),t.response.status}))}}},a=l,c=(i("e670"),i("2877")),h=i("6544"),d=i.n(h),u=i("8336"),p=i("b0af"),m=i("99d9"),f=i("62ad"),v=i("a523"),g=i("132d"),b=i("0fd9"),S=i("2fa4"),T=i("8654"),y=Object(c["a"])(a,s,o,!1,null,"6ce41a24",null);e["default"]=y.exports;d()(y,{VBtn:u["a"],VCard:p["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardTitle:m["d"],VCol:f["a"],VContainer:v["a"],VIcon:g["a"],VRow:b["a"],VSpacer:S["a"],VTextField:T["a"]})},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var s=i("71d9"),o=i("80d2"),n=Object(o["h"])("v-toolbar__title"),r=Object(o["h"])("v-toolbar__items");s["a"]},"5e23":function(t,e,i){},6129:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app_bar"}},[i("v-app-bar",{attrs:{color:"#210e67",dark:"",dense:"",elevation:"5",app:""},scopedSlots:t._u([{key:"img",fn:function(e){var s=e.props;return[i("v-img",t._b({attrs:{gradient:"to right, rgba(33,14, 103,7), rgba(5,117,230,7)"}},"v-img",s,!1))]}}])},[i("v-toolbar-title",[t._v("Polaris")]),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"#ffc900"},on:{click:t.reload}},[i("v-icon",[t._v("mdi-calendar-sync")])],1),i("v-btn",{attrs:{icon:"",color:"#ffc900"},on:{click:t.toMyPage}},[i("v-icon",[t._v("mdi-account-circle")])],1),i("v-btn",{attrs:{icon:"",color:"#ffc900"},on:{click:t.toHome}},[i("v-icon",[t._v("mdi-home")])],1),i("v-btn",{attrs:{icon:"",color:"#ffc900"},on:{click:t.logout}},[i("v-icon",[t._v("mdi-logout")])],1)],1)],1)},o=[],n={methods:{toMyPage:function(){this.$router.push({name:"MyPage"})},toHome:function(){this.$router.push({name:"Home"})},logout:function(){this.$store.commit("logout"),this.$router.push({name:"Login",params:{redirect:this.$router.path}})},reload:function(){this.$router.go({path:this.$router.currentRoute.path,force:!0})}}},r=n,l=i("2877"),a=i("6544"),c=i.n(a),h=(i("a9e3"),i("b680"),i("c7cd"),i("5530")),d=(i("8b0d"),i("71d9")),u=i("53ca");function p(t,e){var i=e.modifiers||{},s=i.self,o=void 0!==s&&s,n=e.value,r="object"===Object(u["a"])(n)&&n.options||{passive:!0},l="function"===typeof n||"handleEvent"in n?n:n.handler,a=o?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",l,r),t._onScroll={handler:l,options:r,target:o?void 0:a})}function m(t){if(t._onScroll){var e=t._onScroll,i=e.handler,s=e.options,o=e.target,n=void 0===o?t:o;n.removeEventListener("scroll",i,s),delete t._onScroll}}var f={inserted:p,unbind:m},v=f,g=i("fe6c"),b=i("58df");function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(b["a"])(Object(g["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var T=i("d9bd"),y=i("2b0e"),O=y["a"].extend({name:"scrollable",directives:{Scroll:f},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(T["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),x=i("d10f"),_=i("f2e7"),R=i("80d2"),$=Object(b["a"])(d["a"],O,x["a"],_["a"],S("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),C=$.extend({name:"v-app-bar",directives:{Scroll:v},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return O.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(h["a"])(Object(h["a"])({},d["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return d["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,s=i-e,o=s/this.computedScrollThreshold,n=this.currentScroll*o;return Math.max(e,i-n)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=d["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:d["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return d["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(h["a"])(Object(h["a"])({},d["a"].options.computed.styles.call(this)),{},{fontSize:Object(R["f"])(this.computedFontSize,"rem"),marginTop:Object(R["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(R["f"])(this.computedTransform),")"),left:Object(R["f"])(this.computedLeft),right:Object(R["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=d["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=d["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),j=i("8336"),k=i("132d"),H=i("adda"),B=i("2fa4"),w=i("2a7f"),M=Object(l["a"])(r,s,o,!1,null,null,null);e["a"]=M.exports;c()(M,{VAppBar:C,VBtn:j["a"],VIcon:k["a"],VImg:H["a"],VSpacer:B["a"],VToolbarTitle:w["a"]})},"71d9":function(t,e,i){"use strict";i("0481"),i("4160"),i("4069"),i("a9e3");var s=i("3835"),o=i("5530"),n=(i("5e23"),i("8dd9")),r=i("adda"),l=i("80d2"),a=i("d9bd");e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(o["a"])(Object(o["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(o["a"])(Object(o["a"])({},this.measurableStyles),{},{height:Object(l["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(s["a"])(e,2),o=i[0],n=i[1];t.$attrs.hasOwnProperty(o)&&Object(a["a"])(o,n,t)}))},methods:{genBackground:function(){var t={height:Object(l["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(l["f"])(this.computedContentHeight)}},Object(l["o"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(l["f"])(this.extensionHeight)}},Object(l["o"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8b0d":function(t,e,i){},e670:function(t,e,i){"use strict";var s=i("ee5f"),o=i.n(s);o.a},ee5f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-40cac9a3.311332b4.js.map