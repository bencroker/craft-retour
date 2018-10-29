/*!
 * @project        Retour
 * @name           confetti-legacy.451c8e540a9d4daf6578.js
 * @author         Andrew Welch
 * @build          Mon, Oct 29, 2018 9:50 PM ET
 * @release        221b1a4fc4bf8f8662c99926c81ef29ca7f17b5a [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4,7,17],{0:function(t,i,e){"use strict";function n(t,i,e,n,s,a,r,o){var h,c="function"==typeof t?t.options:t;if(i&&(c.render=i,c.staticRenderFns=e,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),r?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=h):s&&(h=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),h)if(c.functional){c._injectStyles=h;var l=c.render;c.render=function(t,i){return h.call(i),l(t,i)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,h):[h]}return{exports:t,options:c}}e.d(i,"a",function(){return n})},14:function(t,i,e){t.exports=function(t){function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(1);e.d(i,"Confetti",function(){return n.a}),i.default={install:function(t,i){this.installed||(this.installed=!0,t.prototype.$confetti=new n.a(i))}}},function(t,i,e){"use strict";var n=e(2),s=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),a=function(){function t(){(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.initialize(),this.onResizeCallback=this.updateDimensions.bind(this)}return s(t,[{key:"initialize",value:function(){this.canvas=null,this.ctx=null,this.W=0,this.H=0,this.particles={},this.droppedCount=0,this.particlesPerFrame=1.5,this.wind=0,this.windSpeed=1,this.windSpeedMax=1,this.windChange=.01,this.windPosCoef=.002,this.maxParticlesPerFrame=2,this.animationId=null}},{key:"createParticles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.particles=new n.a({ctx:this.ctx,W:this.W,H:this.H,wind:this.wind,windPosCoef:this.windPosCoef,windSpeedMax:this.windSpeedMax,count:0,shape:t.shape||"circle",colors:{opts:t.colors||["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"],idx:0,step:10,get color(){return this.opts[(this.idx++/this.step|0)%this.opts.length]}}})}},{key:"createContext",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.style.display="block",this.canvas.style.position="fixed",this.canvas.style.pointerEvents="none",this.canvas.style.top=0,this.canvas.style.width="100vw",this.canvas.style.height="100vh",this.canvas.id="confetti-canvas",document.querySelector("body").appendChild(this.canvas)}},{key:"start",value:function(t){this.ctx||this.createContext(),this.animationId&&cancelAnimationFrame(this.animationId),this.createParticles(t),this.updateDimensions(),this.particlesPerFrame=this.maxParticlesPerFrame,this.animationId=requestAnimationFrame(this.mainLoop.bind(this)),window.addEventListener("resize",this.onResizeCallback)}},{key:"stop",value:function(){this.particlesPerFrame=0,window.removeEventListener("resize",this.onResizeCallback)}},{key:"remove",value:function(){this.stop(),this.animationId&&cancelAnimationFrame(this.animationId),this.canvas&&document.body.removeChild(this.canvas),this.initialize()}},{key:"updateDimensions",value:function(){this.W===window.innerWidth&&this.H===window.innerHeight||(this.W=this.particles.opts.W=this.canvas.width=window.innerWidth,this.H=this.particles.opts.H=this.canvas.height=window.innerHeight)}},{key:"mainLoop",value:function(t){for(this.updateDimensions(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.W,this.H),this.windSpeed=Math.sin(t/8e3)*this.windSpeedMax,this.wind=this.particles.opts.wind+=this.windChange;this.droppedCount<this.particlesPerFrame;)this.droppedCount+=1,this.particles.add();this.droppedCount-=this.particlesPerFrame,this.particles.update(),this.particles.draw(),this.particles.items.length&&(this.animationId=requestAnimationFrame(this.mainLoop.bind(this)))}}]),t}();i.a=a},function(t,i,e){"use strict";var n=e(3),s=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),a=function(){function t(i){(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.items=[],this.pool=[],this.opts=i}return s(t,[{key:"update",value:function(){for(var t=0;t<this.items.length;t++)!0===this.items[t].update()&&this.pool.push(this.items.splice(t--,1)[0])}},{key:"draw",value:function(){for(var t=0;t<this.items.length;t++)this.items[t].draw()}},{key:"add",value:function(){this.pool.length>0?this.items.push(this.pool.pop().setup(this.opts)):this.items.push((new n.a).setup(this.opts))}}]),t}();i.a=a},function(t,i,e){"use strict";var n=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),s=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"setup",value:function(t){var i=t.ctx,e=t.W,n=t.H,s=t.colors,a=t.wind,r=t.windPosCoef,o=t.windSpeedMax,h=t.count,c=t.shape;return this.ctx=i,this.W=e,this.H=n,this.wind=a,this.shape=c,this.windPosCoef=r,this.windSpeedMax=o,this.x=this.rand(-35,e+35),this.y=this.rand(-30,-35),this.d=this.rand(150)+10,this.r=this.rand(10,30),this.color=s.color,this.tilt=this.randI(10),this.tiltAngleIncremental=(this.rand(.08)+.04)*(this.rand()<.5?-1:1),this.tiltAngle=0,this.angle=this.rand(2*Math.PI),this.count=h++,this}},{key:"randI",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+(t=0);return Math.random()*(i-t)+t|0}},{key:"rand",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+(t=0);return Math.random()*(i-t)+t}},{key:"update",value:function(){return this.tiltAngle+=this.tiltAngleIncremental*(.2*Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)+1),this.y+=(Math.cos(this.angle+this.d)+3+this.r/2)/2,this.x+=Math.sin(this.angle),this.x+=Math.cos(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.y+=Math.sin(this.wind+(this.d+this.x+this.y)*this.windPosCoef)*this.windSpeedMax,this.tilt=15*Math.sin(this.tiltAngle-this.count/3),this.y>this.H}},{key:"drawCircle",value:function(){this.ctx.arc(0,0,this.r/2,0,2*Math.PI,!1),this.ctx.fill()}},{key:"drawRect",value:function(){this.ctx.fillRect(0,0,this.r,this.r/2)}},{key:"drawHeart",value:function(){var t=this,i=function(i,e,n,s,a,r){t.ctx.bezierCurveTo(i/t.r*2,e/t.r*2,n/t.r*2,s/t.r*2,a/t.r*2,r/t.r*2)};this.ctx.moveTo(37.5/this.r,20/this.r),i(75,37,70,25,50,25),i(20,25,20,62.5,20,62.5),i(20,80,40,102,75,120),i(110,102,130,80,130,62.5),i(130,62.5,130,25,100,25),i(85,25,75,37,75,40),this.ctx.fill()}},{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.setTransform(Math.cos(this.tiltAngle),Math.sin(this.tiltAngle),0,1,this.x,this.y),"circle"===this.shape?this.drawCircle():"rect"===this.shape?this.drawRect():"heart"===this.shape&&this.drawHeart()}}]),t}();i.a=s}])}}]);
//# sourceMappingURL=confetti-legacy.451c8e540a9d4daf6578.js.map