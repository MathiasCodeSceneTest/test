"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[4330],{4330:(tt,C,d)=>{d.r(C),d.d(C,{ion_route:()=>I,ion_route_redirect:()=>j,ion_router:()=>q,ion_router_link:()=>O});var h=d(49671),l=d(55225),v=d(56536),U=d(89821),P=d(95951);const I=class{constructor(t){(0,l.r)(this,t),this.ionRouteDataChanged=(0,l.e)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length){for(const o of n)if(t[o]!==e[o])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},j=class{constructor(t){(0,l.r)(this,t),this.ionRouteRedirectChanged=(0,l.e)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},m="root",E="forward",g=t=>"/"+t.filter(n=>n.length>0).join("/"),f=t=>{if(null==t)return[""];const n=t.split("?")[0].split("/").map(r=>r.trim()).filter(r=>r.length>0);return 0===n.length?[""]:n},k=function(){var t=(0,h.Z)(function*(e,n,r,o,s=!1,i){try{const a=_(e);if(o>=n.length||!a)return s;yield new Promise(p=>(0,v.c)(a,p));const c=n[o],u=yield a.setRouteId(c.id,c.params,r,i);return u.changed&&(r=m,s=!0),s=yield k(u.element,n,r,o+1,s,i),u.markVisible&&(yield u.markVisible()),s}catch(a){return console.error(a),!1}});return function(n,r,o,s){return t.apply(this,arguments)}}(),$=function(){var t=(0,h.Z)(function*(e){const n=[];let r,o=e;for(;r=_(o),r;){const s=yield r.getRouteId();if(!s)break;o=s.element,s.element=void 0,n.push(s)}return{ids:n,outlet:r}});return function(n){return t.apply(this,arguments)}}(),D=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",_=t=>{if(t)return t.matches(D)?t:t.querySelector(D)||void 0},N=(t,e)=>e.find(n=>((t,e)=>{const{from:n,to:r}=e;if(void 0===r||n.length>t.length)return!1;for(let o=0;o<n.length;o++){const s=n[o];if("*"===s)return!0;if(s!==t[o])return!1}return n.length===t.length})(t,n)),F=(t,e)=>{const n=Math.min(t.length,e.length);let r=0;for(;r<n&&t[r].toLowerCase()===e[r].id;r++);return r},Q=(t,e)=>{const n=new J(t);let o,r=!1;for(let i=0;i<e.length;i++){const a=e[i].path;if(""===a[0])r=!0;else{for(const c of a){const u=n.next();if(":"===c[0]){if(""===u)return null;o=o||[],(o[i]||(o[i]={}))[c.slice(1)]=u}else if(u!==c)return null}r=!1}}return r&&r!==(""===n.next())?null:o?e.map((i,a)=>({id:i.id,path:i.path,params:L(i.params,o[a]),beforeEnter:i.beforeEnter,beforeLeave:i.beforeLeave})):e},L=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,y=(t,e)=>{let n=null,r=0;for(const o of e){const s=Q(t,o);if(null!==s){const i=Y(s);i>r&&(r=i,n=s)}}return n},Y=t=>{let e=1,n=1;for(const r of t)for(const o of r.path)":"===o[0]?e+=Math.pow(1,n):""!==o&&(e+=Math.pow(2,n)),n++;return e};class J{constructor(e){this.path=e.slice()}next(){return this.path.length>0?this.path.shift():""}}const w=t=>Array.from(t.children).filter(e=>"ION-ROUTE-REDIRECT"===e.tagName).map(e=>{const n=R(e,"to");return{from:f(R(e,"from")),to:null==n?void 0:f(n)}}),b=t=>X(S(t)),S=(t,e=t)=>Array.from(e.children).filter(n=>"ION-ROUTE"===n.tagName&&n.component).map(n=>{const r=R(n,"component");if(null==r)throw new Error("component missing in ion-route");return{path:f(R(n,"url")),id:r.toLowerCase(),params:n.componentProps,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter,children:S(t,n)}}),R=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,X=t=>{const e=[];for(const n of t)T([],e,n);return e},T=(t,e,n)=>{const r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(const o of n.children)T(r,e,o);else e.push(r)},q=class{constructor(t){(0,l.r)(this,t),this.ionRouteWillChange=(0,l.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,l.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}componentWillLoad(){var t=this;return(0,h.Z)(function*(){console.debug("[ion-router] router will load"),yield _(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})}),console.debug("[ion-router] found nav"),yield t.onRoutesChanged()})()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,v.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,v.n)(this.onRoutesChanged.bind(this),100))}onPopState(){var t=this;return(0,h.Z)(function*(){const e=t.historyDirection();let n=t.getPath();const r=yield t.runGuards(n);return!0!==r?("object"==typeof r&&(n=f(r.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",n,e),t.writeNavStateRoot(n,e))})()}onBackButton(t){t.detail.register(0,e=>{this.back(),e()})}canTransition(){var t=this;return(0,h.Z)(function*(){const e=yield t.runGuards();return!0===e||"object"==typeof e&&e.redirect})()}push(t,e="forward",n){var r=this;return(0,h.Z)(function*(){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);let o=f(t),s=t.split("?")[1];const i=yield r.runGuards(o);if(!0!==i){if("object"!=typeof i)return!1;o=f(i.redirect),s=i.redirect.split("?")[1]}return r.setPath(o,e,s),r.writeNavStateRoot(o,e,n)})()}back(){return window.history.back(),Promise.resolve(this.waitPromise)}printDebug(){var t=this;return(0,h.Z)(function*(){console.debug("CURRENT PATH",t.getPath()),console.debug("PREVIOUS PATH",t.previousPath),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const n=[];e.forEach(o=>n.push(...o.path));const r=e.map(o=>o.id);console.debug(`%c ${g(n)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${r.join(", ")})`)}console.groupEnd()})(b(t.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${g(e.from)}`,"font-weight: bold"," TO: ",`$c ${g(e.to)}`,"font-weight: bold");console.groupEnd()})(w(t.el))})()}navChanged(t){var e=this;return(0,h.Z)(function*(){if(e.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:n,outlet:r}=yield $(window.document.body),s=((t,e)=>{let n=null,r=0;const o=t.map(s=>s.id);for(const s of e){const i=F(o,s);i>r&&(n=s,r=i)}return n?n.map((s,i)=>({id:s.id,path:s.path,params:L(s.params,t[i]&&t[i].params)})):null})(n,b(e.el));if(!s)return console.warn("[ion-router] no matching URL for ",n.map(a=>a.id)),!1;const i=(t=>{const e=[];for(const n of t)for(const r of n.path)if(":"===r[0]){const o=n.params&&n.params[r.slice(1)];if(!o)return null;e.push(o)}else""!==r&&e.push(r);return e})(s);return i?(console.debug("[ion-router] nav changed -> update URL",n,i),e.setPath(i,t),yield e.safeWriteNavState(r,s,m,i,null,n.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)})()}onRedirectChanged(){const t=this.getPath();t&&N(t,w(this.el))&&this.writeNavStateRoot(t,m)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),m)}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,n=this.lastState;return this.lastState=e,e>n||e>=n&&n>0?E:e<n?"back":m}writeNavStateRoot(t,e,n){var r=this;return(0,h.Z)(function*(){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=w(r.el),s=N(t,o);let i=null;s&&(r.setPath(s.to,e),i=s.from,t=s.to);const a=b(r.el),c=y(t,a);return c?r.safeWriteNavState(document.body,c,e,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)})()}safeWriteNavState(t,e,n,r,o,s=0,i){var a=this;return(0,h.Z)(function*(){const c=yield a.lock();let u=!1;try{u=yield a.writeNavState(t,e,n,r,o,s,i)}catch(p){console.error(p)}return c(),u})()}lock(){var t=this;return(0,h.Z)(function*(){const e=t.waitPromise;let n;return t.waitPromise=new Promise(r=>n=r),void 0!==e&&(yield e),n})()}runGuards(t=this.getPath(),e=f(this.previousPath)){var n=this;return(0,h.Z)(function*(){if(!t||!e)return!0;const r=b(n.el),o=y(t,r),s=y(e,r),i=o&&o[o.length-1].beforeEnter,a=s&&s[s.length-1].beforeLeave,c=!a||(yield a());if(!1===c||"object"==typeof c)return c;const u=!i||(yield i());return!1!==u&&"object"!=typeof u||u})()}writeNavState(t,e,n,r,o,s=0,i){var a=this;return(0,h.Z)(function*(){if(a.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;a.busy=!0;const c=a.routeChangeEvent(r,o);c&&a.ionRouteWillChange.emit(c);const u=yield k(t,e,n,s,!1,i);return a.busy=!1,u&&console.debug("[ion-router] route changed",r),c&&a.ionRouteDidChange.emit(c),u})()}setPath(t,e,n){this.state++,((t,e,n,r,o,s,i)=>{let a=g([...f(this.root),...r]);n&&(a="#"+a),void 0!==i&&(a=a+"?"+i),o===E?t.pushState(s,"",a):t.replaceState(s,"",a)})(window.history,0,this.useHash,t,e,this.state,n)}getPath(){return((t,e,n)=>{let r=t.pathname;if(this.useHash){const i=t.hash;r="#"===i[0]?i.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(f(e),f(r))})(window.location,this.root)}routeChangeEvent(t,e){const n=this.previousPath,r=g(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?g(e):null,to:r}}get el(){return(0,l.i)(this)}},O=class{constructor(t){(0,l.r)(this,t),this.routerDirection="forward",this.onClick=e=>{(0,P.o)(this.href,e,this.routerDirection,this.routerAnimation)}}render(){const t=(0,U.b)(this),e={href:this.href,rel:this.rel,target:this.target};return(0,l.h)(l.H,{onClick:this.onClick,class:(0,P.c)(this.color,{[t]:!0,"ion-activatable":!0})},(0,l.h)("a",Object.assign({},e),(0,l.h)("slot",null)))}};O.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);