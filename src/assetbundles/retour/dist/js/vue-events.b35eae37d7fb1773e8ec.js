/*!
 * @project        Retour
 * @name           vue-events.b35eae37d7fb1773e8ec.js
 * @author         Andrew Welch
 * @build          Sat, Oct 13, 2018 12:51 PM ET
 * @release        9cbe8fa0990db4019b623a34030e40f1cf796113 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],[,function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};function i(o){if(!i.installed){var n=new o({methods:{emit:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.$emit.apply(this,[o].concat(t))},fire:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.emit.apply(this,[o].concat(t))},on:function(o,n){this.$on(o,n)},listen:function(o,n){this.on(o,n)},once:function(o,n){this.$once(o,n)},off:function(o,n){this.$off(o,n)},remove:function(o,n){this.off(o,n)}}});Object.defineProperty(o.prototype,"$events",{get:function(){return n}}),o.mixin({beforeCreate:function(){if("object"===e(this.$options.events)){var o={};for(var t in this.$options.events)o[t]=this.$options.events[t].bind(this);this.$once("hook:beforeMount",function(){for(var t in o)n.$on(t,o[t])}),this.$once("hook:beforeDestroy",function(){for(var t in o)n.$off(t,o[t]);o=null})}}})}}"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),n.default=i}]]);
//# sourceMappingURL=vue-events.b35eae37d7fb1773e8ec.js.map