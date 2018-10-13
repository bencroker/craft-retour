/*!
 * @project        Retour
 * @name           redirects-table.84fe1a6c5157b0c5bcf3.js
 * @author         Andrew Welch
 * @build          Sat, Oct 13, 2018 4:30 AM ET
 * @release        e73ea4c476deaafe210a51ecd267f53584746b88 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{14:function(e,t,a){"use strict";function n(e,t,a,n,r,i,s,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}a.d(t,"a",function(){return n})},7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),e._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),e._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":e.onChangePage}})],1),e._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":"/retour/tables/redirects","per-page":20,fields:e.fields,css:e.css,"sort-order":e.sortOrder,"append-params":e.moreParams},on:{"vuetable:pagination-data":e.onPaginationData}}),e._v(" "),a("div",{staticClass:"vuetable-pagination clearafter border-solid"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),e._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)};n._withStripped=!0;var r=a(0),i=[{name:"__component:legacy-url",sortField:"redirectSrcUrl",title:"Legacy URL Pattern",titleClass:"center",dataClass:"center"},{name:"redirectDestUrl",sortField:"redirectDestUrl",title:"Redirect To",titleClass:"center",dataClass:"center",callback:"urlFormatter"},{name:"redirectMatchType",sortField:"redirectMatchType",title:"Match Type",titleClass:"text-left",dataClass:"text-left",callback:"matchFormatter"},{name:"redirectHttpCode",sortField:"redirectHttpCode",title:"Status",titleClass:"text-left",dataClass:"text-left"},{name:"hitCount",sortField:"hitCount",title:"Hits",titleClass:"text-right",dataClass:"text-right"},{name:"hitLastTime",sortField:"hitLastTime",title:"Last Hit",titleClass:"center",dataClass:"center"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteRedirectFormatter"}],s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("a",{staticClass:"go",attrs:{href:this.rowData.editLink,title:this.rowData.redirectSrcUrl}},[this._v(this._s(this.rowData.redirectSrcUrl))])])};s._withStripped=!0;var o={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}}},l=a(14),c=Object(l.a)(o,s,[],!1,null,null,null);c.options.__file="src/assetbundles/retour/src/vue/LegacyUrl.vue";var d=c.exports;r.default.component("legacy-url",d);var u={components:{vuetable:()=>a.e(16).then(a.bind(null,89)),"vuetable-pagination":()=>a.e(13).then(a.bind(null,88)),"vuetable-pagination-info":()=>a.e(14).then(a.bind(null,87)),"vuetable-filter-bar":()=>a.e(15).then(a.bind(null,90))},props:{},data:function(){return{moreParams:{},css:{tableClass:"data fullwidth retour-redirects",ascendingIcon:"menubtn retour-menubtn-asc",descendingIcon:"menubtn retour-menubtn-desc"},sortOrder:[{field:"hitCount",sortField:"hitCount",direction:"desc"}],fields:i}},mounted(){this.$events.$on("filter-set",e=>this.onFilterSet(e)),this.$events.$on("filter-reset",e=>this.onFilterReset())},methods:{onFilterSet(e){this.moreParams={filter:e},console.log("onFilterSet"),this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.moreParams={},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData(e){this.$refs.paginationTop.setPaginationData(e),this.$refs.paginationInfoTop.setPaginationData(e),this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage(e){this.$refs.vuetable.changePage(e)},matchFormatter(e){let t="Pluing Match";switch(e){case"exactmatch":t="Exact Match";break;case"regexmatch":t="RegEx Match"}return t},urlFormatter:e=>""===e?"":`\n            <a class="go" href="${e}" title="${e}" target="_blank" rel="noopener">${e}</a>\n            `,deleteRedirectFormatter:e=>""===e?"":`\n            <a class="delete icon" href="${e}" title="Delete"></a>\n            `}},p=Object(l.a)(u,n,[],!1,null,null,null);p.options.__file="src/assetbundles/retour/src/vue/RedirectsTable.vue";t.default=p.exports}}]);
//# sourceMappingURL=redirects-table.84fe1a6c5157b0c5bcf3.js.map