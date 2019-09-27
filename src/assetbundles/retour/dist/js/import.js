/*!
 * @project        Retour
 * @name           import.js
 * @author         Andrew Welch
 * @build          Fri, Sep 27, 2019 1:09 PM ET
 * @release        9102e0cc4abddbf01f6916429b7a56f15587e4c4 [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var a,o,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(c&&c(e);f.length;)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={2:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([81,0]),r()}({81:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r.n(a),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex overflow-hidden w-full flex-no-wrap items-start",staticStyle:{"max-width":"600px"}},[r("div",{staticClass:"flex-grow"},[r("div",[r("h2",[t._v("CSV File Fields")]),t._v(" "),r("draggable",{staticClass:"retour-import-dragArea",attrs:{list:t.dataArray,options:t.options},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}}},[t._l(t.dataArray,function(e,a){return r("div",{key:e.id,staticClass:"retour-import-list-group-item whitespace-no-wrap clearafter",class:{"retour-empty-item":""===e.name}},[r("a",{staticClass:"move icon mr-2"}),t._v(" "),r("span",{staticClass:"truncate inline-block leading-tight align-bottom",staticStyle:{width:"80%"}},[t._v(t._s(e.name))]),t._v(" "),""!==e.name?r("div",{staticClass:"float-right"},[r("a",{staticClass:"delete icon",on:{click:function(e){return t.remove(a)}}})]):t._e()])}),t._v(" "),t._l(t.extraData,function(e){return r("div",{staticClass:"retour-import-field-group-item clearafter retour-empty-item"},[t._v("\n                     \n                ")])})],2),t._v(" "),t._l(t.dataArray,function(t,e){return r("input",{attrs:{name:"columns["+e+"]",type:"hidden"},domProps:{value:t.name}})})],2)]),t._v(" "),r("div",{staticClass:"flex-shrink"},[r("div",[r("h2",[t._v(" ")]),t._v(" "),r("div",t._l(t.fieldsArray,function(e,a){return r("div",{staticClass:"retour-import-arrow-item clearafter"},[t._v("\n                    →\n                ")])}),0)])]),t._v(" "),r("div",{staticClass:"flex-grow"},[r("div",[r("h2",[t._v("Retour Redirect Fields")]),t._v(" "),r("div",[t._l(t.fieldsArray,function(e,a){return r("div",{staticClass:"retour-import-field-group-item clearafter"},[t._v("\n                    "+t._s(e)+"\n                ")])}),t._v(" "),t._l(t.extraFields,function(e){return r("div",{staticClass:"retour-import-field-group-item clearafter retour-empty-item"},[t._v("\n                     \n                ")])})],2)])])])};i._withStripped=!0;var o=r(34),s={components:{draggable:r.n(o).a},computed:{extraFields:function(){var t=this.dataArray.length-this.fieldsArray.length;return t>=0?t:0},extraData:function(){var t=this.fieldsArray.length-this.dataArray.length;return t>=0?t:0}},props:{data:Array},methods:{remove:function(t){this.dataArray[t].name=""}},created:function(){for(var t=this.dataArray.length;this.extraData;)this.dataArray.push({id:t,name:""}),t++},data:function(){return{dataArray:this.data,options:{group:"fields"},fieldsArray:["Legacy URL Pattern","Redirect To","Match Type","HTTP Status","Site ID"]}}},l=r(0),u=Object(l.a)(s,i,[],!1,null,null,null);u.options.__file="src/assetbundles/retour/src/vue/ImportDraggable.vue";var c=u.exports;new n.a({el:"#cp-nav-content",components:{"import-draggable":c},data:{},methods:{},mounted:function(){}})}});
//# sourceMappingURL=import.js.map