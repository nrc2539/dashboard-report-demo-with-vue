(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],p=0,u=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"63c246ac"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"feed073f"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===a||p===o))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],p=l.getAttribute("data-href");if(p===a||p===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],h.parentNode.removeChild(h),r(s)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=s);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(t);var u=new Error;l=function(e){p.onerror=p.onload=null,clearTimeout(h);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,r[1](u)}o[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dashboard-report-demo-with-vue/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=p;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0a93":function(t,e,r){},"1f75":function(t,e,r){"use strict";r("0a93")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Navbar"),r("v-main",[r("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("Dashboard&Report Demo")])],1),r("v-navigation-drawer",{attrs:{absolute:"","hide-overlay":"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[r("v-list-item",{on:{click:function(e){return t.pushPage("/","Dashboard")}}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-monitor-dashboard")])],1),r("v-list-item-title",[t._v("Dashboard")])],1),r("v-list-item",{on:{click:function(e){return t.pushPage("/report","Report")}}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-file-chart")])],1),r("v-list-item-title",[t._v("Report")])],1)],1)],1)],1)],1)},i=[],c=(r("b0c0"),{data:function(){return{drawer:!1}},methods:{pushPage:function(t,e){this.$route.name!=e?this.$router.push(t):console.log("already in this page")}}}),l=c,p=r("2877"),u=r("6544"),h=r.n(u),d=r("40dc"),f=r("5bc1"),v=r("132d"),m=r("8860"),g=r("da13"),_=r("1baa"),b=r("34c3"),x=r("5d23"),y=r("f774"),w=r("2a7f"),C=Object(p["a"])(l,s,i,!1,null,null,null),M=C.exports;h()(C,{VAppBar:d["a"],VAppBarNavIcon:f["a"],VIcon:v["a"],VList:m["a"],VListItem:g["a"],VListItemGroup:_["a"],VListItemIcon:b["a"],VListItemTitle:x["b"],VNavigationDrawer:y["a"],VToolbarTitle:w["a"]});var k={name:"App",components:{Navbar:M},data:function(){return{}}},O=k,D=r("7496"),E=r("f6c4"),P=Object(p["a"])(O,n,o,!1,null,null,null),S=P.exports;h()(P,{VApp:D["a"],VMain:E["a"]});var V=r("9483");Object(V["a"])("".concat("/dashboard-report-demo-with-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var j=r("8c4f"),$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{"grid-list-xs":""}},[r("h1",[t._v("Dashboard")]),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12",lg:"6"}},[r("div",{staticClass:"mx-3"},[r("MonthExpenses")],1)]),r("v-col",{attrs:{cols:"12",md:"12",lg:"6"}},[r("div",{staticClass:"mx-3"},[r("YearExpenses")],1)])],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"mx-3"},[r("DepartmentExpenses")],1)])],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12",lg:"6"}},[r("div",{staticClass:"mx-3"},[r("QtyProduct")],1)]),r("v-col",{attrs:{cols:"12",md:"12",lg:"6"}},[r("div",{staticClass:"mx-3"},[r("ExpensesProduct")],1)])],1)],1)],1)},A=[],T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{height:"100%",width:"100%"}},[r("v-row",[r("v-col",[r("p",{staticClass:"title text-center pt-1"},[t._v("Year Expenses")]),r("apexchart",{attrs:{type:"line",width:"100%",height:"290",options:t.chartOptions,series:t.series}})],1)],1)],1)],1)},B=[],N={created:function(){this.mockUpData()},data:function(){return{series_data:[],month_names:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},computed:{chartOptions:function(){var t=this;return{chart:{id:"year_expenses",events:{markerClick:function(e,r,a){t.show_report(a.dataPointIndex)}},toolbar:{show:!1}},yaxis:{title:{text:"Expenses (Million)",style:{fontSize:"18px"}}},markers:{size:6}}},series:function(){var t=[{name:"expense (million)",data:this.series_data}];return t}},methods:{show_report:function(t){console.log("Year expenses chart message : "+t),this.$store.commit("changeGraph","year_expenses"),this.$router.push("/report").catch((function(t){console.log(t.message)}))},mockUpData:function(){this.series_data=[];for(var t=0;t<12;t++)this.series_data.push({x:this.month_names[t],y:Math.floor(100*Math.random())+25})}}},L=N,I=r("b0af"),z=r("62ad"),U=r("0fd9"),J=Object(p["a"])(L,T,B,!1,null,null,null),R=J.exports;h()(J,{VCard:I["a"],VCol:z["a"],VRow:U["a"]});var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{height:"100%",width:"100%"}},[r("v-row",{staticClass:"expand-graph-card"},[r("v-col",{attrs:{cols:"12",md:"6",lg:"6"}},[r("p",{staticClass:"title text-center pt-1"},[t._v("Expense This Month")]),r("apexchart",{attrs:{type:"donut",width:"100%",height:"329",options:t.chartOptions1,series:t.series}})],1),r("v-col",{attrs:{cols:"12",md:"6",lg:"6"}},[r("p",{staticClass:"title text-center pt-1"},[t._v("Credit Balance")]),r("apexchart",{attrs:{type:"donut",width:"100%",height:"329",options:t.chartOptions2,series:t.series2}})],1)],1)],1)],1)},G=[],Q={data:function(){return{series:[60,91],series2:[80,44]}},computed:{chartOptions1:function(){return{legend:{show:!0,position:"bottom"},labels:["Spending","Balance"],plotOptions:{pie:{expandOnClick:!1,donut:{size:"65%"}}},responsive:[{breakpoint:600,options:{legend:{show:!1}}}]}},chartOptions2:function(){return{legend:{show:!0,position:"bottom"},labels:["Credit Spending","Credit Balance"],plotOptions:{pie:{expandOnClick:!1,donut:{size:"65%"}}},responsive:[{breakpoint:600,options:{legend:{show:!1}}}]}}},methods:{show_msg:function(t){alert("Month expenses chart message : "+t)}}},F=Q,H=(r("1f75"),Object(p["a"])(F,q,G,!1,null,"46b1ecad",null)),Y=H.exports;h()(H,{VCard:I["a"],VCol:z["a"],VRow:U["a"]});var K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{height:"100%",width:"100%"}},[r("p",{staticClass:"title text-center pt-3"},[t._v("Department Expenses")]),r("apexchart",{attrs:{type:"bar",width:"100%",height:"320",options:t.chartOptions,series:t.series}})],1)],1)},W=[],X={created:function(){this.mockUpData()},data:function(){return{series_data:[]}},computed:{chartOptions:function(){var t=this;return{chart:{id:"department_expenses",events:{dataPointSelection:function(){t.show_report()}},toolbar:{show:!1}},legend:{show:!0,position:"right"},plotOptions:{bar:{horizontal:!1,dataLabels:{position:"bottom"}}},yaxis:{title:{text:"Expenses (Million)",style:{fontSize:"18px"}}},responsive:[{breakpoint:1264,options:{plotOptions:{bar:{horizontal:!1}}}}]}},series:function(){var t=[{name:"expenses (Million)",data:this.series_data}];return t}},methods:{show_report:function(){this.$store.commit("changeGraph","department_expenses"),this.$router.push("/report").catch((function(t){console.log(t.message)}))},mockUpData:function(){this.series_data=[];for(var t=0;t<10;t++)this.series_data.push({x:"Department "+(t+1),y:Math.floor(100*Math.random())+25});this.series_data=this.series_data.sort((function(t,e){return e.y-t.y}))}}},Z=X,tt=Object(p["a"])(Z,K,W,!1,null,null,null),et=tt.exports;h()(tt,{VCard:I["a"]});var rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{height:"100%",width:"100%"}},[r("p",{staticClass:"title text-center pt-3"},[t._v("Product Quantity")]),r("apexchart",{attrs:{type:"bar",width:"100%",options:t.chartOptions,series:t.series}})],1)],1)},at=[],nt={created:function(){this.mockUpData()},data:function(){return{series_data:[],item_list:["Paper","Pen","Hard Disk","CD","Ink","Chair","Table","Snack","Box","Bottle"]}},computed:{chartOptions:function(){var t=this;return{chart:{id:"qty_product",events:{dataPointSelection:function(){t.show_report()}},toolbar:{show:!1}},yaxis:{title:{text:"Quantity",style:{fontSize:"18px"}}}}},series:function(){var t=[{name:"Quantity",data:this.series_data}];return t}},methods:{show_report:function(){this.$store.commit("changeGraph","quantity"),this.$router.push("/report").catch((function(t){console.log(t.message)}))},mockUpData:function(){this.series_data=[];for(var t=0;t<10;t++)this.series_data.push({x:this.item_list[t],y:Math.floor(100*Math.random())+25});this.series_data=this.series_data.sort((function(t,e){return e.y-t.y}))}}},ot=nt,st=Object(p["a"])(ot,rt,at,!1,null,null,null),it=st.exports;h()(st,{VCard:I["a"]});var ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{height:"100%",width:"100%"}},[r("p",{staticClass:"title text-center pt-3"},[t._v("Product Expenses")]),r("apexchart",{attrs:{type:"bar",width:"100%",options:t.chartOptions,series:t.series}})],1)],1)},lt=[],pt={created:function(){this.mockUpData()},data:function(){return{series_data:[],item_list:["Car","Server","Computer","Router","Phone","Scanner","Table","Monitor","Storage","Cable"]}},computed:{chartOptions:function(){var t=this;return{chart:{id:"expenses_product",events:{dataPointSelection:function(){t.show_report()}},toolbar:{show:!1}},yaxis:{title:{text:"Expenses (Million)",style:{fontSize:"18px"}}}}},series:function(){var t=[{name:"expenses (Million)",data:this.series_data}];return t}},methods:{show_report:function(){this.$store.commit("changeGraph","product_expenses"),this.$router.push("/report").catch((function(t){console.log(t.message)}))},mockUpData:function(){this.series_data=[];for(var t=0;t<10;t++)this.series_data.push({x:this.item_list[t],y:Math.floor(100*Math.random())+25});this.series_data=this.series_data.sort((function(t,e){return e.y-t.y}))}}},ut=pt,ht=Object(p["a"])(ut,ct,lt,!1,null,null,null),dt=ht.exports;h()(ht,{VCard:I["a"]});var ft={components:{YearExpenses:R,MonthExpenses:Y,DepartmentExpenses:et,QtyProduct:it,ExpensesProduct:dt},created:function(){console.log("Dashboard created")},data:function(){return{}},methods:{}},vt=ft,mt=r("a523"),gt=Object(p["a"])(vt,$,A,!1,null,null,null),_t=gt.exports;h()(gt,{VCol:z["a"],VContainer:mt["a"],VRow:U["a"]}),a["a"].use(j["a"]);var bt=[{path:"/",name:"Dashboard",component:_t},{path:"/report",name:"Report",component:function(){return r.e("about").then(r.bind(null,"762c"))}}],xt=new j["a"]({mode:"history",base:"/dashboard-report-demo-with-vue/",routes:bt}),yt=xt,wt=r("2f62");a["a"].use(wt["a"]);var Ct=new wt["a"].Store({state:{report_graph_period:"year",selected_graph:"year_expenses",report_graph_data:[]},mutations:{changeGraph:function(t,e){console.log("store new graph ----\x3e",e),t.selected_graph=e},changePeriod:function(t,e){t.report_graph_period=e;var r=[];if("year_expenses"==t.selected_graph){if("year"==e)for(var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=0;n<a.length;n++)r.push({x:a[n],y:Math.floor(1e3*Math.random()+1)});else if("halfyear"==e)for(var o=0;o<2;o++)r.push({x:"H".concat(o+1),y:Math.floor(1e3*Math.random()+1)});else if("quarter"==e)for(var s=0;s<4;s++)r.push({x:"Q".concat(s+1),y:Math.floor(1e3*Math.random()+1)});else if("last7days"==e)for(var i=0;i<7;i++){var c=new Date;c.setDate(c.getDate()-(6-i)),r.push({x:c.toLocaleDateString("TH-th"),y:Math.floor(300*Math.random()+1)})}t.report_graph_data=r}else if("department_expenses"==t.selected_graph){for(var l=0;l<10;l++)r.push({x:"Department".concat(l+1),y:Math.floor(500*Math.random()+1)});t.report_graph_data=r}else if("quantity"==t.selected_graph){for(var p=["Paper","Pen","Hard Disk","CD","Ink","Chair","Table","Snack","Box","Bottle"],u=0;u<p.length;u++)r.push({x:p[u],y:Math.floor(250*Math.random()+1)});t.report_graph_data=r}else if("product_expenses"==t.selected_graph){for(var h=["Coffee","Milk","Keyboard","Mouse","Sugar","Cup","Bettery","Plastic","Pencil","Scissors"],d=0;d<h.length;d++)r.push({x:h[d],y:Math.floor(10*Math.random()+1)});t.report_graph_data=r}}},actions:{},modules:{}}),Mt=r("f309");a["a"].use(Mt["a"]);var kt=new Mt["a"]({}),Ot=r("1321"),Dt=r.n(Ot),Et=(r("c695"),r("a388")),Pt=r.n(Et);r("778e");a["a"].use(Pt.a),a["a"].use(Dt.a),a["a"].component("apexchart",Dt.a),a["a"].config.productionTip=!1,new a["a"]({router:yt,store:Ct,vuetify:kt,render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.46e6959d.js.map