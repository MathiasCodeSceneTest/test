"use strict";(globalThis.webpackChunkdesignsystem=globalThis.webpackChunkdesignsystem||[]).push([[1514],{11514:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_route:()=>Route,ion_route_redirect:()=>RouteRedirect,ion_router:()=>Router,ion_router_link:()=>RouterLink});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47854),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(93924),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22035),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13819);const Route=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionRouteDataChanged=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(newValue){this.ionRouteDataChanged.emit(newValue)}onComponentProps(newValue,oldValue){if(newValue===oldValue)return;const keys1=newValue?Object.keys(newValue):[],keys2=oldValue?Object.keys(oldValue):[];if(keys1.length===keys2.length){for(const key of keys1)if(newValue[key]!==oldValue[key])return void this.onUpdate(newValue)}else this.onUpdate(newValue)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},RouteRedirect=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionRouteRedirectChanged=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},generatePath=segments=>"/"+segments.filter((s=>s.length>0)).join("/"),parsePath=path=>{if(null==path)return[""];const segments=path.split("?")[0].split("/").map((s=>s.trim())).filter((s=>s.length>0));return 0===segments.length?[""]:segments},writeNavState=async(root,chain,direction,index,changed=!1,animation)=>{try{const outlet=searchNavNode(root);if(index>=chain.length||!outlet)return changed;await new Promise((resolve=>(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.c)(outlet,resolve)));const route=chain[index],result=await outlet.setRouteId(route.id,route.params,direction,animation);return result.changed&&(direction="root",changed=!0),changed=await writeNavState(result.element,chain,direction,index+1,changed,animation),result.markVisible&&await result.markVisible(),changed}catch(e){return console.error(e),!1}},QUERY=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=root=>{if(!root)return;if(root.matches(QUERY))return root;const outlet=root.querySelector(QUERY);return outlet||void 0},routeRedirect=(path,routes)=>routes.find((route=>((input,route)=>{const{from,to}=route;if(void 0===to)return!1;if(from.length>input.length)return!1;for(let i=0;i<from.length;i++){const expected=from[i];if("*"===expected)return!0;if(expected!==input[i])return!1}return from.length===input.length})(path,route))),matchesIDs=(ids,chain)=>{const len=Math.min(ids.length,chain.length);let i=0;for(;i<len&&ids[i].toLowerCase()===chain[i].id;i++);return i},matchesPath=(inputPath,chain)=>{const segments=new RouterSegments(inputPath);let allparams,matchesDefault=!1;for(let i=0;i<chain.length;i++){const path=chain[i].path;if(""===path[0])matchesDefault=!0;else{for(const segment of path){const data=segments.next();if(":"===segment[0]){if(""===data)return null;allparams=allparams||[];(allparams[i]||(allparams[i]={}))[segment.slice(1)]=data}else if(data!==segment)return null}matchesDefault=!1}}return!matchesDefault||matchesDefault===(""===segments.next())?allparams?chain.map(((route,i)=>({id:route.id,path:route.path,params:mergeParams(route.params,allparams[i]),beforeEnter:route.beforeEnter,beforeLeave:route.beforeLeave}))):chain:null},mergeParams=(a,b)=>a||b?Object.assign(Object.assign({},a),b):void 0,routerPathToChain=(path,chains)=>{let match=null,matches=0;for(const chain of chains){const matchedChain=matchesPath(path,chain);if(null!==matchedChain){const score=computePriority(matchedChain);score>matches&&(matches=score,match=matchedChain)}}return match},computePriority=chain=>{let score=1,level=1;for(const route of chain)for(const path of route.path)":"===path[0]?score+=Math.pow(1,level):""!==path&&(score+=Math.pow(2,level)),level++;return score};class RouterSegments{constructor(path){this.path=path.slice()}next(){return this.path.length>0?this.path.shift():""}}const readRedirects=root=>Array.from(root.children).filter((el=>"ION-ROUTE-REDIRECT"===el.tagName)).map((el=>{const to=readProp(el,"to");return{from:parsePath(readProp(el,"from")),to:null==to?void 0:parsePath(to)}})),readRoutes=root=>flattenRouterTree(readRouteNodes(root)),readRouteNodes=(root,node=root)=>Array.from(node.children).filter((el=>"ION-ROUTE"===el.tagName&&el.component)).map((el=>{const component=readProp(el,"component");if(null==component)throw new Error("component missing in ion-route");return{path:parsePath(readProp(el,"url")),id:component.toLowerCase(),params:el.componentProps,beforeLeave:el.beforeLeave,beforeEnter:el.beforeEnter,children:readRouteNodes(root,el)}})),readProp=(el,prop)=>prop in el?el[prop]:el.hasAttribute(prop)?el.getAttribute(prop):null,flattenRouterTree=nodes=>{const routes=[];for(const node of nodes)flattenNode([],routes,node);return routes},flattenNode=(chain,routes,node)=>{const s=chain.slice();if(s.push({id:node.id,path:node.path,params:node.params,beforeLeave:node.beforeLeave,beforeEnter:node.beforeEnter}),0!==node.children.length)for(const sub of node.children)flattenNode(s,routes,sub);else routes.push(s)},Router=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ionRouteWillChange=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){console.debug("[ion-router] router will load"),await(searchNavNode(document.body)?Promise.resolve():new Promise((resolve=>{window.addEventListener("ionNavWillLoad",resolve,{once:!0})}))),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.n)(this.onRoutesChanged.bind(this),100))}async onPopState(){const direction=this.historyDirection();let path=this.getPath();const canProceed=await this.runGuards(path);return!0!==canProceed?("object"==typeof canProceed&&(path=parsePath(canProceed.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",path,direction),this.writeNavStateRoot(path,direction))}onBackButton(ev){ev.detail.register(0,(processNextHandler=>{this.back(),processNextHandler()}))}async canTransition(){const canProceed=await this.runGuards();return!0===canProceed||"object"==typeof canProceed&&canProceed.redirect}async push(url,direction="forward",animation){url.startsWith(".")&&(url=new URL(url,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",url,direction);let path=parsePath(url),queryString=url.split("?")[1];const canProceed=await this.runGuards(path);if(!0!==canProceed){if("object"!=typeof canProceed)return!1;path=parsePath(canProceed.redirect),queryString=canProceed.redirect.split("?")[1]}return this.setPath(path,direction,queryString),this.writeNavStateRoot(path,direction,animation)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),(routes=>{console.group(`[ion-core] ROUTES[${routes.length}]`);for(const chain of routes){const path=[];chain.forEach((r=>path.push(...r.path)));const ids=chain.map((r=>r.id));console.debug(`%c ${generatePath(path)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${ids.join(", ")})`)}console.groupEnd()})(readRoutes(this.el)),(redirects=>{console.group(`[ion-core] REDIRECTS[${redirects.length}]`);for(const redirect of redirects)redirect.to&&console.debug("FROM: ",`$c ${generatePath(redirect.from)}`,"font-weight: bold"," TO: ",`$c ${generatePath(redirect.to)}`,"font-weight: bold");console.groupEnd()})(readRedirects(this.el))}async navChanged(direction){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids,outlet}=await(async root=>{const ids=[];let outlet,node=root;for(;outlet=searchNavNode(node),outlet;){const id=await outlet.getRouteId();if(!id)break;node=id.element,id.element=void 0,ids.push(id)}return{ids,outlet}})(window.document.body),chain=((ids,chains)=>{let match=null,maxMatches=0;const plainIDs=ids.map((i=>i.id));for(const chain of chains){const score=matchesIDs(plainIDs,chain);score>maxMatches&&(match=chain,maxMatches=score)}return match?match.map(((route,i)=>({id:route.id,path:route.path,params:mergeParams(route.params,ids[i]&&ids[i].params)}))):null})(ids,readRoutes(this.el));if(!chain)return console.warn("[ion-router] no matching URL for ",ids.map((i=>i.id))),!1;const path=(chain=>{const path=[];for(const route of chain)for(const segment of route.path)if(":"===segment[0]){const param=route.params&&route.params[segment.slice(1)];if(!param)return null;path.push(param)}else""!==segment&&path.push(segment);return path})(chain);return path?(console.debug("[ion-router] nav changed -> update URL",ids,path),this.setPath(path,direction),await this.safeWriteNavState(outlet,chain,"root",path,null,ids.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const path=this.getPath();path&&routeRedirect(path,readRedirects(this.el))&&this.writeNavStateRoot(path,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const win=window;null===win.history.state&&(this.state++,win.history.replaceState(this.state,win.document.title,win.document.location&&win.document.location.href));const state=win.history.state,lastState=this.lastState;return this.lastState=state,state>lastState||state>=lastState&&lastState>0?"forward":state<lastState?"back":"root"}async writeNavStateRoot(path,direction,animation){if(!path)return console.error("[ion-router] URL is not part of the routing set"),!1;const redirects=readRedirects(this.el),redirect=routeRedirect(path,redirects);let redirectFrom=null;redirect&&(this.setPath(redirect.to,direction),redirectFrom=redirect.from,path=redirect.to);const routes=readRoutes(this.el),chain=routerPathToChain(path,routes);return chain?this.safeWriteNavState(document.body,chain,direction,path,redirectFrom,0,animation):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(node,chain,direction,path,redirectFrom,index=0,animation){const unlock=await this.lock();let changed=!1;try{changed=await this.writeNavState(node,chain,direction,path,redirectFrom,index,animation)}catch(e){console.error(e)}return unlock(),changed}async lock(){const p=this.waitPromise;let resolve;return this.waitPromise=new Promise((r=>resolve=r)),void 0!==p&&await p,resolve}async runGuards(to=this.getPath(),from=parsePath(this.previousPath)){if(!to||!from)return!0;const routes=readRoutes(this.el),toChain=routerPathToChain(to,routes),fromChain=routerPathToChain(from,routes),beforeEnterHook=toChain&&toChain[toChain.length-1].beforeEnter,beforeLeaveHook=fromChain&&fromChain[fromChain.length-1].beforeLeave,canLeave=!beforeLeaveHook||await beforeLeaveHook();if(!1===canLeave||"object"==typeof canLeave)return canLeave;const canEnter=!beforeEnterHook||await beforeEnterHook();return!1!==canEnter&&"object"!=typeof canEnter||canEnter}async writeNavState(node,chain,direction,path,redirectFrom,index=0,animation){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const routeEvent=this.routeChangeEvent(path,redirectFrom);routeEvent&&this.ionRouteWillChange.emit(routeEvent);const changed=await writeNavState(node,chain,direction,index,!1,animation);return this.busy=!1,changed&&console.debug("[ion-router] route changed",path),routeEvent&&this.ionRouteDidChange.emit(routeEvent),changed}setPath(path,direction,queryString){this.state++,((history,root,useHash,path,direction,state,queryString)=>{let url=generatePath([...parsePath(root),...path]);useHash&&(url="#"+url),void 0!==queryString&&(url=url+"?"+queryString),"forward"===direction?history.pushState(state,"",url):history.replaceState(state,"",url)})(window.history,this.root,this.useHash,path,direction,this.state,queryString)}getPath(){return((loc,root,useHash)=>{let pathname=loc.pathname;if(useHash){const hash=loc.hash;pathname="#"===hash[0]?hash.slice(1):""}return((prefix,path)=>{if(prefix.length>path.length)return null;if(prefix.length<=1&&""===prefix[0])return path;for(let i=0;i<prefix.length;i++)if(prefix[i].length>0&&prefix[i]!==path[i])return null;return path.length===prefix.length?[""]:path.slice(prefix.length)})(parsePath(root),parsePath(pathname))})(window.location,this.root,this.useHash)}routeChangeEvent(path,redirectFromPath){const from=this.previousPath,to=generatePath(path);if(this.previousPath=to,to===from)return null;return{from,redirectedFrom:redirectFromPath?generatePath(redirectFromPath):null,to}}get el(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)}},RouterLink=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.routerDirection="forward",this.onClick=ev=>{(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__.o)(this.href,ev,this.routerDirection,this.routerAnimation)}}render(){const mode=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this),attrs={href:this.href,rel:this.rel,target:this.target};return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{onClick:this.onClick,class:(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__.c)(this.color,{[mode]:!0,"ion-activatable":!0})},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({},attrs),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}};RouterLink.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},13819:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);