/*!
 * @project        Retour
 * @name           vuetable-pagination-info.566031559748b6747e7b.js
 * @author         Andrew Welch
 * @build          Sat, Oct 13, 2018 12:51 PM ET
 * @release        9cbe8fa0990db4019b623a34030e40f1cf796113 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{78:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};n._withStripped=!0;var i={props:{css:{type:Object,default:()=>({infoClass:"left floated left py-5 text-grey-dark"})},infoTemplate:{type:String,default:()=>"Displaying {from} to {to} of {total} items"},noDataTemplate:{type:String,default:()=>"No relevant data"}},data:function(){return{tablePagination:null}},computed:{paginationInfo(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData(t){this.tablePagination=t},resetData(){this.tablePagination=null}}},o=e(14),l=Object(o.a)(i,void 0,void 0,!1,null,null,null);l.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue";var s={mixins:[l.exports]},r=Object(o.a)(s,n,[],!1,null,null,null);r.options.__file="src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue";a.default=r.exports}}]);
//# sourceMappingURL=vuetable-pagination-info.566031559748b6747e7b.js.map