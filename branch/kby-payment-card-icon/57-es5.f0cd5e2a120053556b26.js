!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{TpdJ:function(t,r,i){"use strict";i.r(r),i.d(r,"ion_tab",function(){return c}),i.d(r,"ion_tabs",function(){return u});var a=i("20ZU"),o=i("wEJo"),s=i("acej");i("1vRN");var c=function(){function t(n){e(this,t),Object(o.o)(this,n),this.loaded=!1,this.active=!1}return n(t,[{key:"componentWillLoad",value:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.active,!t.t0){t.next=4;break}return t.next=4,e.setActive();case 4:case"end":return t.stop()}},t)}))()}},{key:"setActive",value:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.prepareLazyLoaded();case 2:e.active=!0;case 3:case"end":return t.stop()}},t)}))()}},{key:"changeActive",value:function(e){e&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(s.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var e=this.tab,t=this.active,n=this.component;return Object(o.j)(o.c,{role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":"tab-button-".concat(e),class:{"ion-page":void 0===n,"tab-hidden":!t}},Object(o.j)("slot",null))}},{key:"el",get:function(){return Object(o.k)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),t}();c.style=":host(.tab-hidden){display:none !important}";var u=function(){function t(n){var r=this;e(this,t),Object(o.o)(this,n),this.ionNavWillLoad=Object(o.g)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(o.g)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(o.g)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(e){var t=e.detail,n=t.href,i=t.tab;if(r.useRouter&&void 0!==n){var a=document.querySelector("ion-router");a&&a.push(n)}else r.select(i)}}return n(t,[{key:"componentWillLoad",value:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.useRouter||(e.useRouter=!!document.querySelector("ion-router")&&!e.el.closest("[no-router]")),e.useRouter){t.next=6;break}if(n=e.tabs,t.t0=n.length>0,!t.t0){t.next=6;break}return t.next=6,e.select(n[0]);case 6:e.ionNavWillLoad.emit();case 7:case"end":return t.stop()}},t)}))()}},{key:"componentWillRender",value:function(){var e=this.el.querySelector("ion-tab-bar");e&&(e.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}},{key:"select",value:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=l(t.tabs,e),n.t0=!!t.shouldSwitch(r),!n.t0){n.next=9;break}return n.next=5,t.setActive(r);case 5:return n.next=7,t.notifyRouter();case 7:t.tabSwitch(),n.t0=!0;case 9:return n.abrupt("return",n.t0);case 10:case"end":return n.stop()}},n)}))()}},{key:"getTab",value:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",l(t.tabs,e));case 1:case"end":return n.stop()}},n)}))()}},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=l(t.tabs,e),!t.shouldSwitch(r)){n.next=7;break}return n.next=4,t.setActive(r);case 4:n.t0={changed:!0,element:t.selectedTab,markVisible:function(){return t.tabSwitch()}},n.next=8;break;case 7:n.t0={changed:!1,element:t.selectedTab};case 8:return n.abrupt("return",n.t0);case 9:case"end":return n.stop()}},n)}))()}},{key:"getRouteId",value:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.selectedTab&&e.selectedTab.tab,t.abrupt("return",void 0!==n?{id:n,element:e.selectedTab}:void 0);case 2:case"end":return t.stop()}},t)}))()}},{key:"setActive",value:function(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(e){return void 0!==e&&e!==this.selectedTab&&!this.transitioning}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"render",value:function(){return Object(o.j)(o.c,{onIonTabButtonClick:this.onTabClicked},Object(o.j)("slot",{name:"top"}),Object(o.j)("div",{class:"tabs-inner"},Object(o.j)("slot",null)),Object(o.j)("slot",{name:"bottom"}))}},{key:"el",get:function(){return Object(o.k)(this)}}]),t}(),l=function(e,t){var n="string"==typeof t?e.find(function(e){return e.tab===t}):t;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};u.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}])}();