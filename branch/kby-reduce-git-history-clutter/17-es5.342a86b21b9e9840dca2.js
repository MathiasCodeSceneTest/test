!function(){function i(i,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{NnGZ:function(t,r,n){"use strict";n.r(r),n.d(r,"kirby_badge",function(){return e});var o=n("U2RL"),e=function(){function t(i){!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Object(o.e)(this,i),this.size="md"}var r,n,e;return r=t,(n=[{key:"cssClass",get:function(){var i,t,r=this;return t={},(i=[r.size,r.themeColor],void 0!==i?(Array.isArray(i)?i:i.split(" ")).filter(function(i){return null!=i}).map(function(i){return i.trim()}).filter(function(i){return""!==i}):[]).forEach(function(i){return t[i]=!0}),t}},{key:"badgeContent",get:function(){return"sm"===this.size?Object(o.c)("span",null):this.text?Object(o.c)("span",null,this.text):Object(o.c)("slot",null)}},{key:"render",value:function(){return Object(o.c)(o.a,{class:this.cssClass},Object(o.c)("ion-badge",null,this.badgeContent))}}])&&i(r.prototype,n),e&&i(r,e),t}();e.style=":host{position:var(--kirby-badge-position, relative);left:var(--kirby-badge-left, auto);right:var(--kirby-badge-right, auto);top:var(--kirby-badge-top, auto);z-index:var(--kirby-badge-z-index, auto);font-size:10px;line-height:1}:host ion-badge{--background:var(--kirby-white);--color:var(--kirby-white-contrast);--ion-color-base:var(--kirby-badge-background-color);--ion-color-contrast:var(--kirby-badge-color);box-sizing:border-box;border-radius:8px;font-size:inherit;position:relative;box-shadow:var(--kirby-badge-elevation, none)}:host ::slotted(kirby-icon){--kirby-icon-font-size:16px;position:absolute;top:0;left:0}:host(.sm) ion-badge{padding:initial;min-height:initial;min-width:initial;height:8px;width:8px}:host(.md) ion-badge{--padding-top:3px;--padding-end:5px;--padding-bottom:3px;--padding-start:5px;min-width:16px;min-height:16px}:host(.success) ion-badge{--background:var(--kirby-success);--color:var(--kirby-badge-color, var(--kirby-success-contrast))}:host(.warning) ion-badge{--background:var(--kirby-warning);--color:var(--kirby-badge-color, var(--kirby-warning-contrast))}:host(.danger) ion-badge{--background:var(--kirby-danger);--color:var(--kirby-badge-color, var(--kirby-text-color-white))}"}}])}();