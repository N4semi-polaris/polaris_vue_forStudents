(function(e){function n(n){for(var a,o,r=n[0],i=n[1],s=n[2],l=0,d=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,o=1;o<t.length;o++){var r=t[o];0!==c[r]&&(a=!1)}a&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},o={app:0},c={app:0},u=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0386e6a0":"453921c2","chunk-19611498":"74af83c6","chunk-8035655a":"cdeb10f3","chunk-2b4f6bda":"ba48db09","chunk-4a9c6626":"30dae130","chunk-67c982bf":"a72bf057","chunk-73df9d78":"e312905a","chunk-29757899":"ac15b0d2","chunk-c75a48b2":"aec2f637","chunk-d2c192f0":"7a0a93dc","chunk-d09b00ce":"312b9601","chunk-c99767da":"34cbdc52","chunk-5dda76d8":"875946d2","chunk-7bfcde26":"26cedaef","chunk-73e0e7a6":"3ae94cdb","chunk-11276ccc":"72bafd97","chunk-3ea5cd98":"92d7ff57","chunk-8b054514":"db63dfdc","chunk-aa5e1f52":"6dbc36c1"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0386e6a0":1,"chunk-19611498":1,"chunk-8035655a":1,"chunk-2b4f6bda":1,"chunk-4a9c6626":1,"chunk-67c982bf":1,"chunk-73df9d78":1,"chunk-29757899":1,"chunk-d2c192f0":1,"chunk-d09b00ce":1,"chunk-c99767da":1,"chunk-5dda76d8":1,"chunk-7bfcde26":1,"chunk-73e0e7a6":1,"chunk-11276ccc":1,"chunk-3ea5cd98":1,"chunk-8b054514":1,"chunk-aa5e1f52":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0386e6a0":"a2ab201f","chunk-19611498":"cce48b1d","chunk-8035655a":"fd9572e1","chunk-2b4f6bda":"269d5dad","chunk-4a9c6626":"1f88feb1","chunk-67c982bf":"fed7b703","chunk-73df9d78":"9107f4ae","chunk-29757899":"d683c85a","chunk-c75a48b2":"31d6cfe0","chunk-d2c192f0":"b8fd9b4d","chunk-d09b00ce":"dd9229ef","chunk-c99767da":"ec2efa49","chunk-5dda76d8":"90156b3d","chunk-7bfcde26":"41363261","chunk-73e0e7a6":"893e97ab","chunk-11276ccc":"d8b8a194","chunk-3ea5cd98":"0981e9da","chunk-8b054514":"4dc74681","chunk-aa5e1f52":"3f6b1d59"}[e]+".css",c=i.p+a,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var s=u[r],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return n()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){s=d[r],l=s.getAttribute("data-href");if(l===a||l===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[e],h.parentNode.removeChild(h),t(u)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var u=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,t[1](d)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/polaris_vue_app/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0405":function(e,n,t){},2018:function(e,n,t){},2873:function(e,n,t){e.exports=t.p+"img/Polaris.6fac9271.png"},"53a2":function(e,n,t){"use strict";var a=t("0405"),o=t.n(a);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-main",[e.isLoading?t("Loading",{on:{"swich-isloading":e.switchIsLoading}}):t("router-view")],1)],1)},c=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"fullview d-flex",attrs:{id:"Loading"}},[t("v-container",{staticClass:"align-self-center",attrs:{"no-gutters":""}},[t("v-row",{staticClass:"justify-center",attrs:{"no-gutters":""}},[t("v-col",{staticClass:"flex-grow-0"},[t("v-img",{attrs:{src:e.PolarisLogo,width:"250px"}})],1)],1),t("v-row",{staticClass:"pa-3"},[t("v-col")],1),t("v-row",{staticClass:"justify-center",attrs:{"no-gutters":""}},[t("v-col",{staticClass:"flex-grow-0"},[e.isLoading?t("v-progress-circular",{attrs:{indeterminate:"",color:"grey",size:50}}):e._e()],1)],1)],1)],1)},r=[],i=t("2873"),s=t.n(i),l={name:"loading",components:{},data:function(){return{PolarisLogo:s.a,isLoading:!0}},mounted:function(){},methods:{}},d=l,h=(t("53a2"),t("2877")),f=t("6544"),p=t.n(f),k=t("62ad"),m=t("a523"),g=t("adda"),b=t("490a"),v=t("0fd9"),w=Object(h["a"])(d,u,r,!1,null,null,null),y=w.exports;p()(w,{VCol:k["a"],VContainer:m["a"],VImg:g["a"],VProgressCircular:b["a"],VRow:v["a"]});var L={name:"App",data:function(){return{isLoading:!1}},mounted:function(){var e=this.$router.path;"/login"===e&&(this.isLoading=!1)},methods:{switchIsLoading:function(){this.isLoading=!this.isLoading}},components:{Loading:y}},A=L,T=t("7496"),P=t("f6c4"),C=Object(h["a"])(A,o,c,!1,null,null,null),E=C.exports;p()(C,{VApp:T["a"],VMain:P["a"]});t("45fc"),t("d3b7");var S=t("8c4f"),x=(t("3ca3"),t("ddb0"),t("2b3d"),t("96cf"),t("1da1")),_=t("2f62"),j=t("bc3a"),q=t.n(j),O=t("0e44");a["a"].use(_["a"]);var R=new _["a"].Store({plugins:[Object(O["a"])({key:"YorimichiApp",paths:["userEmail","userAuthCode","authToken","isLogin","listResult","selectedResult"],storage:window.sessionStorage})],state:{userEmail:"",userAuthCode:"",authToken:"",isLogin:!1,listResult:{},selectedResult:{}},mutations:{setUserData:function(e,n){e.userEmail=n.email,e.userAuthCode=n.authCode},setAuthToken:function(e,n){e.authToken=n},setIsLogin:function(e,n){e.isLogin=n},logout:function(e){e.userEmail="",e.userAuthCode="",e.authToken="",e.isLogin=!1},setListResult:function(e,n){e.listResult=n},setSelectedResult:function(e,n){e.selectedResult=n}},getters:{getUserEmail:function(e){return e.userEmail},getUserAuthCode:function(e){return e.userAuthCode},getToken:function(e){return e.authToken},getIsLogin:function(e){return e.isLogin},getlistResult:function(e){return e.listResult},getSelectedResult:function(e){return e.selectedResult}},actions:{obtainToken:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function n(){var t,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.getters.getUserEmail,a=e.getters.getUserAuthCode,(t.length<=0||a.length<=0)&&F.push({name:"Login"}),o=new URLSearchParams,o.append("email",t),o.append("password",a),n.next=8,q.a.post("/accounts/api-auth/obtain/",o).then((function(n){e.commit("setAuthToken",n.data.token),console.log("obtainTokenでtokenの取得に成功:"+e.getters.getToken),e.commit("setIsLogin",!0),console.log("obtainTokenでログイン状態の取得に成功: "+e.getters.getIsLogin)})).catch((function(e){console.log("tokenの取得に失敗: "+e)}));case 8:case"end":return n.stop()}}),n)})))()},checkTokenExpiration:function(){var e=this;console.log("checkTokenExpirationが実行されたよ！");var n=new URLSearchParams;n.append("token",this.getters.getToken),q.a.post("/accounts/api-auth/verify/",n).then((function(e){200==e.status&&console.log("tokenは有効だと判断されたよ！")})).catch((function(n){console.log("checkTokenExpiration()のerrorに入ったよ！"),400==n.response.status?console.log("tokenは有効期限切れ以外のエラーだと判断されたよ！"):401==n.response.status&&(console.log("tokenは有効期限切れだと判断されたよ！"),e.$store.commit("logout"))}))}},modules:{}});a["a"].use(S["a"]);var I=[{path:"/",name:"Home",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-c75a48b2"),t.e("chunk-73e0e7a6"),t.e("chunk-11276ccc")]).then(t.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return t.e("chunk-8b054514").then(t.bind(null,"a55b"))}},{path:"/mypage",name:"MyPage",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-19611498"),t.e("chunk-d2c192f0"),t.e("chunk-5dda76d8")]).then(t.bind(null,"73e8"))},meta:{requiresAuth:!0}},{path:"/bfmypage",name:"BfMyPage",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-19611498"),t.e("chunk-c99767da")]).then(t.bind(null,"1ebf"))},meta:{requiresAuth:!0}},{path:"/taskedit",name:"TaskEdit",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-19611498"),t.e("chunk-c75a48b2"),t.e("chunk-d2c192f0"),t.e("chunk-d09b00ce")]).then(t.bind(null,"b39a"))},meta:{requiresAuth:!0}},{path:"/taskedit/:uuid",name:"TaskEdit_edit",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-19611498"),t.e("chunk-c75a48b2"),t.e("chunk-d2c192f0"),t.e("chunk-d09b00ce")]).then(t.bind(null,"b39a"))},meta:{requiresAuth:!0}},{path:"/tasklog",name:"TaskLog",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-c75a48b2"),t.e("chunk-73e0e7a6"),t.e("chunk-3ea5cd98")]).then(t.bind(null,"fd75"))},meta:{requiresAuth:!0}},{path:"/favoritespot",name:"FavoriteSpot",component:function(){return t.e("chunk-67c982bf").then(t.bind(null,"9cd1"))},meta:{requiresAuth:!0}},{path:"/outputlist",name:"OutputList",component:function(){return Promise.all([t.e("chunk-19611498"),t.e("chunk-8035655a")]).then(t.bind(null,"669d"))},meta:{requiresAuth:!0}},{path:"/listdetails1",name:"ListDetails1",component:function(){return t.e("chunk-0386e6a0").then(t.bind(null,"9daf"))},meta:{requiresAuth:!0}},{path:"/listdetails2",name:"ListDetails2",component:function(){return t.e("chunk-4a9c6626").then(t.bind(null,"0660"))},meta:{requiresAuth:!0}},{path:"/listdetails3",name:"ListDetails3",component:function(){return t.e("chunk-2b4f6bda").then(t.bind(null,"ff9f"))},meta:{requiresAuth:!0}},{path:"/hometime",name:"SettingHomeTime",component:function(){return Promise.all([t.e("chunk-c75a48b2"),t.e("chunk-aa5e1f52")]).then(t.bind(null,"b970"))},meta:{requiresAuth:!0}},{path:"/createfavoritespot",name:"CreateFavoriteSpot",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-19611498"),t.e("chunk-29757899")]).then(t.bind(null,"df97"))},meta:{requiresAuth:!0}},{path:"/checkfavspot:selectedFavSpot",name:"CheckFavSpot",component:function(){return Promise.all([t.e("chunk-73df9d78"),t.e("chunk-7bfcde26")]).then(t.bind(null,"4f6b"))},props:function(e){return{selectedFavSpot:Object(e.params.selectedFavSpot)}},meta:{requiresAuth:!0}}],U=new S["a"]({mode:"history",base:"/polaris_vue_app/",routes:I});U.beforeEach((function(e,n,t){R.dispatch("checkTokenExpiration"),e.matched.some((function(e){return e.meta.requiresAuth}))&&!R.state.isLogin&&"/login"!==e.path?t({path:"/login",query:{redirect:e.fullPath}}):t()}));var F=U,M=t("f309"),V=(t("5363"),t("ad24"));t("87df");a["a"].use(M["a"]),a["a"].use(V["a"]);var D=new M["a"]({icons:{iconfont:"mdi"}}),$=t("c9bf");t("2018");a["a"].prototype.$axios=q.a,a["a"].config.productionTip=!1,a["a"].use($["a"],{clientId:"72932482906-k3puh7jplg07nq3o5ekliff0n0epenkb.apps.googleusercontent.com",scope:"email openid https://www.googleapis.com/auth/calendar",accessType:"offline",prompt:"consent",fetch_basic_profile:!0}),new a["a"]({router:F,vuetify:D,store:R,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.9de01188.js.map