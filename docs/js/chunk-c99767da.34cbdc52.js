(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c99767da"],{"1ebf":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"BfMyPage"},[i("App_var"),i("v-form",[i("v-container",[i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-btn",{staticClass:"text-center",attrs:{rounded:"",color:"#0461cd",dark:""},on:{click:t.toInitialSettingPage}},[t._v("基本設定を編集する")])],1)],1),i("v-divider"),i("v-row",[i("v-col",[i("v-list",{staticClass:"mx-auto",attrs:{shaped:""}},[i("v-list-item-group",{attrs:{multiple:""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[t._l(t.items,(function(e,n){return[e?i("v-list-item",{key:"item-"+n,attrs:{value:e,color:"#0461cd","active-class":""},on:{click:function(i){return t.postTransportation(e)}},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.active;return[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.displyname)}})],1),i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":a,color:"#044eb7"},model:{value:e.check,callback:function(i){t.$set(e,"check",i)},expression:"item.check"}})],1)]}}],null,!0)}):i("v-divider",{key:"divider-"+n})]}))],2)],1)],1)],1),i("v-divider"),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-btn",{staticClass:"mx-auto text-center",attrs:{rounded:"",color:"#0461cd",dark:""},on:{click:t.toFavoriteSpotPage}},[t._v("お気に入りスポットを編集する")])],1)],1),i("v-divider"),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-btn",{staticClass:"mx-auto text-center",attrs:{rounded:"",color:"#0461cd",dark:""},on:{click:t.toSettingHomeTime}},[t._v("在宅時間を設定する")])],1)],1),i("v-divider"),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-switch",{staticClass:"ma-2",attrs:{label:"通知を許可",color:"#0461cd"},model:{value:t.disabled1,callback:function(e){t.disabled1=e},expression:"disabled1"}})],1)],1),i("v-divider"),i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{align:"center"}},[i("v-switch",{staticClass:"ma-2",attrs:{label:"位置情報共有を許可",color:"#0461cd"},model:{value:t.disabled2,callback:function(e){t.disabled2=e},expression:"disabled2"}})],1)],1)],1)],1)],1)},a=[],s=(i("b0c0"),i("d3b7"),i("25f0"),i("ade3")),o=i("b85c"),r=i("6129"),c={name:"BfMyPage",components:{App_var:r["a"]},data:function(){return{items:[{displyname:"新幹線",name:"isShin",check:!1},{displyname:"有料特急",name:"isExTrain",check:!1},{displyname:"空路",name:"isAirPlane",check:!1},{displyname:"高速バス",name:"isHighwayBus",check:!1},{displyname:"路線/連絡バス",name:"isBus",check:!1}],model:[],disabled1:!1,disabled2:!1}},mounted:function(){var t=this;console.log("MyPageのmountedが実行されたよ");var e={"Content-Type":"application/json",Authorization:"JWT "+this.$store.getters.getToken};this.$axios.get("/accounts/setting/transportation",{headers:e,data:{}}).then((function(e){var i,n=Object(o["a"])(t.items);try{for(n.s();!(i=n.n()).done;){var a=i.value;a.check=e.data[0][a.name]}}catch(s){n.e(s)}finally{n.f()}}),(function(e){401==e.response.status&&t.$store.commit("logout")}))},methods:{toFavoriteSpotPage:function(){this.$router.push({name:"FavoriteSpot"})},toInitialSettingPage:function(){this.$router.push({name:"InitialSetting"})},toSettingHomeTime:function(){this.$router.push({name:"SettingHomeTime"})},postTransportation:function(t){var e=this,i={Authorization:"JWT "+this.$store.getters.getToken},n=Object(s["a"])({},t["name"].toString(),t["check"]);this.$axios.post("/accounts/setting/transportation",n,{headers:i}).then((function(t){401==t.response.status&&e.$store.commit("logout")}))}}},l=c,u=(i("a9bf"),i("2877")),h=i("6544"),d=i.n(h),p=i("8336"),v=i("ac7c"),f=i("62ad"),m=i("a523"),g=i("ce7e"),b=i("4bd4"),k=i("8860"),w=i("da13"),C=i("1800"),y=i("5d23"),V=i("1baa"),S=i("0fd9"),x=i("b73d"),$=Object(u["a"])(l,n,a,!1,null,"1036d032",null);e["default"]=$.exports;d()($,{VBtn:p["a"],VCheckbox:v["a"],VCol:f["a"],VContainer:m["a"],VDivider:g["a"],VForm:b["a"],VList:k["a"],VListItem:w["a"],VListItemAction:C["a"],VListItemContent:y["a"],VListItemGroup:V["a"],VListItemTitle:y["c"],VRow:S["a"],VSwitch:x["a"]})},3074:function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var n=i("5530"),a=i("58df"),s=i("7e2b"),o=i("3206");e["a"]=Object(a["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,e,i){"use strict";var n=i("5607"),a=i("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"6ca7":function(t,e,i){},8547:function(t,e,i){"use strict";var n=i("2b0e"),a=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["i"]}}})},"9d01":function(t,e,i){},a9bf:function(t,e,i){"use strict";var n=i("3074"),a=i.n(n);a.a},ac7c:function(t,e,i){"use strict";i("d3b7"),i("25f0");var n=i("5530"),a=(i("6ca7"),i("ec29"),i("9d26")),s=i("c37a"),o=i("fe09");e["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},b73d:function(t,e,i){"use strict";i("0481"),i("4069");var n=i("5530"),a=(i("ec29"),i("9d01"),i("fe09")),s=i("c37a"),o=i("c3f0"),r=i("0789"),c=i("490a"),l=i("80d2");e["a"]=a["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(c["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===l["s"].left&&this.isActive||t.keyCode===l["s"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));i("4de4"),i("45fc"),i("d3b7"),i("25f0");var n=i("c37a"),a=i("5311"),s=i("8547"),o=i("58df");function r(t){t.preventDefault()}e["a"]=Object(o["a"])(n["a"],a["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-c99767da.34cbdc52.js.map