var g=Object.defineProperty,b=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var c=(e,a,t)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&c(e,t,a[t]);if(o)for(var t of o(a))$.call(a,t)&&c(e,t,a[t]);return e},u=(e,a)=>b(e,_(a));import{V as C,n as i,A as y,a as I,b as S,s as F,p as h,_ as T}from"./vendor.8a4eaaf9.js";import{V as P,a as w,b as k}from"./VuetableFilterBar.0f759aad.js";var D=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main")},U=[];Vue.use(C);const H={mounted:function(){this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout(()=>{this.$confetti.stop()},5e3)},methods:{}},f={};var V=i(H,D,U,!1,R,null,null,null);function R(e){for(let a in f)this[a]=f[a]}var N=function(){return V.exports}(),L=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:e.chartOptions,series:e.series}})},A=[];const O=e=>e.map(function(a){return Math.max.apply(null,a)}),B=e=>({baseURL:e,headers:{"X-Requested-With":"XMLHttpRequest"}}),M=(e,a,t,r)=>{e.get(a,{params:t}).then(n=>{r&&r(n.data)}).catch(n=>{console.error(n)})},j={components:{apexcharts:y},props:{title:String,subTitle:String,range:String,siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},methods:{getSeriesData:async function(){const e=I.create(B(this.apiUrl));await M(e,"",{range:this.range,siteId:this.siteId},a=>{if(Object.assign({},this.chartOptions),a[0]!==void 0){const t=Math.round(O([a[0].data])[0]+1.5);this.chartOptions=u(d({},this.chartOptions),{yaxis:{min:0,max:t,labels:{show:!1,minHeight:"20px"}},xaxis:{categories:a[0].labels,type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},labels:a[0].labels}),this.series=a}})}},created(){this.getSeriesData()},mounted(){this.refreshIntervalSecs&&setInterval(()=>{this.getSeriesData()},this.refreshIntervalSecs*1e3)},data:function(){return{chartOptions:{chart:{id:"vuechart-dashboard",type:"area",height:160,sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},yaxis:{min:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}]}}},p={};var E=i(j,L,A,!1,z,null,null,null);function z(e){for(let a in p)this[a]=p[a]}var q=function(){return E.exports}(),X=[{name:"__checkbox",titleClass:"center aligned",dataClass:"center aligned"},{name:"__component:file-not-found-url",sortField:"redirectSrcUrl",title:"404 File Not Found URL",titleClass:"center",dataClass:"center"},{name:"referrerUrl",sortField:"referrerUrl",title:"Last Referrer URL",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"remoteIp",sortField:"remoteIp",title:"Remote IP",titleClass:"center",dataClass:"center",callback:"ipFormatter"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"handledByRetour",sortField:"handledByRetour",title:"Handled",titleClass:"text-center",dataClass:"text-center",callback:"boolFormatter"},{name:"addLink",sortField:"addLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"addUrlFormatter"}],K=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a",{staticClass:"go",attrs:{href:e.linkHref,title:e.linkTitle}},[e._v(e._s(e.rowData.redirectSrcUrl))])])},G=[];const W={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{linkHref:function(){let e=this.rowData.redirectSrcUrl;return e===""?"":(!new RegExp("^(?:[a-z]+:)?//","i").test(e)&&!e.includes("$")&&(e=Craft.getSiteUrl(Craft.trim(e,"/"))),e)},linkTitle:function(){let e="";return e+="User Agent: "+this.rowData.userAgent+`

`,e+="Message: "+this.rowData.exceptionMessage+`

`,e+="File Path: "+this.rowData.exceptionFilePath+`

`,e+="Line No.: "+this.rowData.exceptionFileLine,e}}},v={};var J=i(W,K,G,!1,Q,null,null,null);function Q(e){for(let a in v)this[a]=v[a]}var Y=function(){return J.exports}(),Z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"py-4"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.numSelected!==0,expression:"numSelected !== 0"}]},[t("form",{attrs:{method:"post","accept-charset":"UTF-8"}},[t("input",{attrs:{type:"hidden",name:e.csrfTokenName},domProps:{value:e.csrfTokenValue}}),e._l(e.selectedIds,function(r){return t("input",{attrs:{type:"hidden",name:"statisticIds[]"},domProps:{value:r}})}),t("label",{staticClass:"text-gray-600"},[e._v(e._s(e.numSelected)+" statistic"),e.numSelected!==1?t("span",[e._v("s")]):e._e(),e._v(":")]),e._m(0)],2)]),t("vuetable-filter-bar",{directives:[{name:"show",rawName:"v-show",value:e.numSelected===0,expression:"numSelected === 0"}],attrs:{"initial-filter-text":e.filterText}}),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfoTop"}),t("div",{staticClass:"floated left pl-3 pt-3 text-gray-600"},[t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.retourHandled,expression:"retourHandled"}],staticClass:"fieldtoggle",attrs:{"data-target-prefix":"retour-handled-",name:"retourHandled"},on:{change:function(r){var n=Array.prototype.filter.call(r.target.options,function(s){return s.selected}).map(function(s){var l="_value"in s?s._value:s.value;return l});e.retourHandled=r.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"all",selected:""}},[e._v("All")]),t("option",{attrs:{value:"handled"}},[e._v("Handled")]),t("option",{attrs:{value:"nothandled"}},[e._v("Not Handled")])])])]),t("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":e.onChangePage}}),t("div",{staticClass:"floated left vuetable-pagination-info py-3"},[t("div",{staticClass:"inline pl-3 text-gray-600"},[e._v("Per-page:")]),t("div",{staticClass:"inline pl-3 text-gray-600"},[t("div",{staticClass:"select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.perPage,expression:"perPage"}],staticClass:"fieldtoggle",attrs:{"data-target-prefix":"per-page-",name:"perPage"},on:{change:function(r){var n=Array.prototype.filter.call(r.target.options,function(s){return s.selected}).map(function(s){var l="_value"in s?s._value:s.value;return l});e.perPage=r.target.multiple?n:n[0]}}},[t("option",{attrs:{value:"20",selected:""}},[e._v("20")]),t("option",{attrs:{value:"50"}},[e._v("50")]),t("option",{attrs:{value:"100"}},[e._v("100")]),t("option",{attrs:{value:"500"}},[e._v("500")])])])])])],1),t("vuetable",{ref:"vuetable",attrs:{"api-url":e.apiUrl,"per-page":e.perPage,fields:e.fields,css:e.css,"sort-order":e.sortOrder,"append-params":e.moreParams},on:{"vuetable:pagination-data":e.onPaginationData}}),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfo"}),t("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)},ee=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"btngroup inline"},[t("div",{staticClass:"btn menubtn",attrs:{"data-icon":"settings"}}),t("div",{staticClass:"menu",attrs:{"data-align":"right"}},[t("ul",[t("li",[t("a",{staticClass:"formsubmit",attrs:{"data-action":"retour/statistics/delete-statistics"}},[e._v("Delete")])])])])])}];Vue.component("file-not-found-url",Y);const te={components:{vuetable:S,"vuetable-pagination":P,"vuetable-pagination-info":w,"vuetable-filter-bar":k},mixins:[F],props:{siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:3},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth retour-dashboard",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:X,numSelected:0,perPage:20,selectedIds:[],retourHandled:"all",filterText:""}},computed:{csrfTokenName:function(){return window.Craft.csrfTokenName},csrfTokenValue:function(){return window.Craft.csrfTokenValue}},watch:{retourHandled:function(e){this.moreParams={siteId:this.siteId},this.moreParams={siteId:this.siteId,filter:this.filterText,handled:this.retourHandled},this.$events.fire("refresh-table",this.$refs.vuetable)},perPage:function(e){this.$events.fire("refresh-table",this.$refs.vuetable)}},mounted(){this.$events.$on("filter-set",e=>this.onFilterSet(e)),this.$events.$on("filter-reset",e=>this.onFilterReset()),this.$refs.vuetable.$on("vuetable:checkbox-toggled",(e,a)=>this.onCheckboxToggled(e,a)),this.$refs.vuetable.$on("vuetable:checkbox-toggled-all",e=>this.onCheckboxToggled(e,null)),this.refreshIntervalSecs&&setInterval(()=>{typeof this.$refs.pagination!="undefined"&&this.$refs.pagination.isOnFirstPage&&typeof this.$refs.vuetable!="undefined"&&this.$refs.vuetable.refresh()},this.refreshIntervalSecs*1e3)},methods:{getSaveStateConfig(){return{cacheKey:"retour-dashboard-state-"+Craft.username+Craft.siteId,ignoreProperties:["numSelected","selectedIds"]}},onFilterSet(e){this.filterText=e,this.moreParams={siteId:this.siteId,filter:this.filterText,handled:this.retourHandled},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.moreParams={siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData(e){this.$refs.paginationTop.setPaginationData(e),this.$refs.paginationInfoTop.setPaginationData(e),this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage(e){this.$refs.vuetable.changePage(e)},onCheckboxToggled(e,a){this.numSelected=0,this.selectedIds=[],this.$refs.vuetable!==void 0&&this.$refs.vuetable.selectedTo!==void 0&&(this.numSelected=this.$refs.vuetable.selectedTo.length,this.selectedIds=this.$refs.vuetable.selectedTo)},urlFormatter(e){return e===""?"":(e=h.sanitize(e),`
                <a class="go" href="${e}" title="${e}" target="_blank" rel="noopener">${e}</a>
                `)},ipFormatter(e){return e===""?"":(e=h.sanitize(e),`
                <a class="go" href="https://whatismyipaddress.com/ip/${e}" title="Lookup ${e}" target="_blank" rel="noopener">${e}</a>
                `)},boolFormatter(e){return e==1?`
                <span style="color: green;">&#x2714;</span>
                `:`
                <span style="color: red;">&#x2716;</span>
                `},addUrlFormatter(e){return e===""?"":`
                <a class="add icon" href="${e}" title="Add"></a>
                `}}},m={};var ae=i(te,Z,ee,!1,se,null,null,null);function se(e){for(let a in m)this[a]=m[a]}var re=function(){return ae.exports}();Vue.use(T);new Vue({el:"#cp-nav-content",components:{confetti:N,"dashboard-chart":q,"dashboard-table":re},data:{},methods:{onTableRefresh(e){Vue.nextTick(()=>e.refresh())}},mounted(){this.$events.$on("refresh-table",e=>this.onTableRefresh(e))}});
//# sourceMappingURL=dashboard.7e316779.js.map
