!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],o=!0,c=!1,i=void 0;try{for(var r,a=n[Symbol.iterator]();!(o=(r=a.next()).done)&&(e.push(r.value),!t||e.length!==t);o=!0);}catch(u){c=!0,i=u}finally{try{o||null==a.return||a.return()}finally{if(c)throw i}}return e}(n,t)||e(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,t){if(n){if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RB7b:function(e,o,r){"use strict";r.r(o),r.d(o,"ComponentStatusModule",function(){return Gn});var a=r("tyNb"),u=r("ofXK"),s=r("TEn/"),l=r("pW9a"),m=r("tk/3"),b=r("2Vo4"),f=r("EY2u"),g=r("LRne"),d=r("cp0P"),p=r("lJxs"),h=r("SxV6"),v=r("FQpF"),y=r("bOdf"),C=r("IAdc"),O=r("JIr8"),P=r("dh+V"),T=function(n){return n.underConsideration="Under consideration",n.notCurrentlyPlanned="Not currently planned",n.planned="Planned",n.inProgress="In progress",n.ready="Ready",n}({}),I=function(n){return n.underConsideration="Under consideration",n.notCurrentlyPlanned="Not currently planned",n.planned="Planned",n.inProgress="In development",n.ready="Ready",n}({}),k=function(n){return n[n.Ready=0]="Ready",n[n["In development"]=1]="In development",n[n.Planned=2]="Planned",n[n["Under consideration"]=3]="Under consideration",n[n["Not currently planned"]=4]="Not currently planned",n}({}),S=r("fXoL"),M=r("I/3d"),_=r("gwvk"),F=r("yM7s"),x=r("/D4z");function B(n,t){if(1&n&&(S.Tb(0,"p"),S.Hc(1," Current milestone: "),S.Tb(2,"a",1),S.Hc(3),S.Sb(),S.Sb()),2&n){var e=t.ngIf;S.Bb(2),S.mc("href",e.html_url,S.Cc),S.Bb(1),S.Ic(e.title)}}function w(n,t){1&n&&(S.Tb(0,"div",19),S.Ob(1,"ion-icon",20),S.Hc(2," Couldn't fetch component status from GitHub. The status shown below might not be up-to-date.\n"),S.Sb())}function E(n,t){1&n&&S.Pb(0)}function G(n,t){1&n&&S.Pb(0)}var H=function(n){return{$implicit:n,cssClass:"subcomponent"}};function j(n,t){if(1&n&&(S.Rb(0),S.Fc(1,G,1,0,"ng-container",23),S.Qb()),2&n){var e=t.$implicit;S.fc(3);var o=S.vc(49);S.Bb(1),S.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",S.qc(2,H,e))}}var U=function(n){return{$implicit:n,cssClass:"component"}};function $(n,t){if(1&n&&(S.Rb(0),S.Tb(1,"tbody"),S.Fc(2,E,1,0,"ng-container",23),S.Fc(3,j,2,4,"ng-container",22),S.Sb(),S.Qb()),2&n){var e=t.$implicit;S.fc(2);var o=S.vc(49);S.Bb(2),S.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",S.qc(3,U,e)),S.Bb(1),S.mc("ngForOf",e.children)}}function A(n,t){if(1&n&&(S.Tb(0,"table",21),S.Tb(1,"thead"),S.Tb(2,"tr"),S.Tb(3,"th"),S.Hc(4,"Component"),S.Sb(),S.Tb(5,"th"),S.Hc(6,"UX"),S.Sb(),S.Tb(7,"th"),S.Hc(8,"Code"),S.Sb(),S.Sb(),S.Sb(),S.Fc(9,$,4,5,"ng-container",22),S.gc(10,"async"),S.Sb()),2&n){var e=S.fc();S.Bb(9),S.mc("ngForOf",S.hc(10,1,e.items$))}}function L(n,t){if(1&n){var e=S.Ub();S.Tb(0,"ion-icon",26),S.bc("click",function(){return S.yc(e),S.fc(),S.vc(1).classList.toggle("expanded")}),S.Sb()}if(2&n){S.fc();var o=S.vc(1);S.mc("name",o.classList.contains("expanded")?"folder-open":"folder")}}function z(n,t){1&n&&S.Pb(0)}function N(n,t){1&n&&S.Pb(0)}function q(n,t){1&n&&S.Pb(0)}function R(n,t){1&n&&S.Pb(0)}var J=function(n){return{$implicit:n}},Q=function(n,t){return{$implicit:n,cssClass:t}};function V(n,t){if(1&n&&(S.Tb(0,"tr",null,24),S.Tb(2,"td"),S.Fc(3,L,1,1,"ion-icon",25),S.Fc(4,z,1,0,"ng-container",23),S.Sb(),S.Tb(5,"td"),S.Fc(6,N,1,0,"ng-container",23),S.Sb(),S.Tb(7,"td"),S.Fc(8,q,1,0,"ng-container",23),S.Sb(),S.Sb(),S.Fc(9,R,1,0,"ng-container",23)),2&n){var e=t.$implicit,o=t.cssClass,c=S.fc(),i=S.vc(53),r=S.vc(57),a=S.vc(55),u=S.vc(51);S.Db(o),S.Fb("someday-maybe",c.isUnderConsiderationOrNotPlanned(e))("has-enhancements",e.code.enhancements),S.Bb(2),S.Db(o),S.Bb(1),S.mc("ngIf",(null==e.children?null:e.children.length)>0),S.Bb(1),S.mc("ngTemplateOutlet",i)("ngTemplateOutletContext",S.qc(17,J,e)),S.Bb(2),S.mc("ngTemplateOutlet",r)("ngTemplateOutletContext",S.qc(19,J,e.ux)),S.Bb(2),S.mc("ngTemplateOutlet",a)("ngTemplateOutletContext",S.qc(21,J,e.code)),S.Bb(1),S.mc("ngTemplateOutlet",u)("ngTemplateOutletContext",S.rc(23,Q,e,o))}}function D(n,t){1&n&&S.Pb(0)}function K(n,t){1&n&&S.Pb(0)}function X(n,t){if(1&n&&(S.Tb(0,"tr"),S.Tb(1,"td"),S.Tb(2,"kirby-badge",28),S.Hc(3,"vNext"),S.Sb(),S.Hc(4),S.Sb(),S.Tb(5,"td"),S.Fc(6,D,1,0,"ng-container",23),S.Sb(),S.Tb(7,"td"),S.Fc(8,K,1,0,"ng-container",23),S.Sb(),S.Sb()),2&n){var e=t.$implicit,o=S.fc().cssClass,c=S.fc(),i=S.vc(57),r=S.vc(55);S.Eb("enhancement enhancement-",o,""),S.Fb("someday-maybe",c.isUnderConsiderationOrNotPlanned(e)),S.Bb(4),S.Jc(" ",e.title," "),S.Bb(2),S.mc("ngTemplateOutlet",i)("ngTemplateOutletContext",S.qc(10,J,e.ux)),S.Bb(2),S.mc("ngTemplateOutlet",r)("ngTemplateOutletContext",S.qc(12,J,e.code))}}function W(n,t){1&n&&S.Fc(0,X,9,14,"tr",27),2&n&&S.mc("ngForOf",t.$implicit.code.enhancements)}function Y(n,t){1&n&&S.Pb(0)}function Z(n,t){if(1&n&&(S.Tb(0,"a",30),S.Hc(1),S.Fc(2,Y,1,0,"ng-container",23),S.Sb()),2&n){var e=S.fc().$implicit;S.fc();var o=S.vc(59);S.oc("routerLink","../../",null==e.code?null:e.code.cookbookUrl,""),S.Bb(1),S.Jc(" ",e.title," "),S.Bb(1),S.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",S.qc(4,J,null==e.code?null:e.code.version))}}function nn(n,t){if(1&n&&(S.Rb(0),S.Ob(1,"span",31),S.Qb()),2&n){var e=S.fc().$implicit;S.Bb(1),S.mc("innerHTML",e.title,S.zc)}}function tn(n,t){if(1&n&&(S.Fc(0,Z,3,6,"a",29),S.Fc(1,nn,2,1,"ng-container",2)),2&n){var e=t.$implicit;S.mc("ngIf",null==e.code?null:e.code.cookbookUrl),S.Bb(1),S.mc("ngIf",!(null!=e.code&&e.code.cookbookUrl))}}function en(n,t){1&n&&S.Pb(0)}function on(n,t){1&n&&S.Ob(0,"ion-icon",34)}function cn(n,t){if(1&n&&(S.Tb(0,"a",1),S.Hc(1),S.Fc(2,on,1,0,"ion-icon",33),S.Sb()),2&n){var e=S.fc().$implicit,o=S.fc();S.mc("href",o.getGithubIssueUrl(e.githubIssueNo),S.Cc),S.Bb(1),S.Jc(" ",null==e?null:e.status," "),S.Bb(1),S.mc("ngIf",null==e?null:e.githubIssueNo)}}function rn(n,t){if(1&n&&(S.Tb(0,"span"),S.Hc(1),S.Sb()),2&n){var e=S.fc().$implicit;S.Bb(1),S.Jc(" ",null==e?null:e.status," ")}}function an(n,t){1&n&&S.Pb(0)}function un(n,t){if(1&n&&(S.Fc(0,en,1,0,"ng-container",23),S.Fc(1,cn,3,3,"a",32),S.Fc(2,rn,2,1,"span",2),S.Fc(3,an,1,0,"ng-container",23)),2&n){var e=t.$implicit;S.fc();var o=S.vc(63),c=S.vc(59);S.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",S.qc(6,J,null==e?null:e.status)),S.Bb(1),S.mc("ngIf",null==e?null:e.githubIssueNo),S.Bb(1),S.mc("ngIf",!(null!=e&&e.githubIssueNo)),S.Bb(1),S.mc("ngTemplateOutlet",c)("ngTemplateOutletContext",S.qc(8,J,null==e?null:e.version))}}function sn(n,t){1&n&&S.Pb(0)}function ln(n,t){1&n&&S.Ob(0,"ion-icon",34)}function mn(n,t){if(1&n&&(S.Tb(0,"a",1),S.Hc(1),S.Fc(2,ln,1,0,"ion-icon",33),S.Sb()),2&n){var e=S.fc().$implicit;S.mc("href",null==e?null:e.wireFrameUrl,S.Cc),S.Bb(1),S.Jc(" ",null==e?null:e.status," "),S.Bb(1),S.mc("ngIf",null==e?null:e.wireFrameUrl)}}function bn(n,t){if(1&n&&(S.Rb(0),S.Hc(1),S.Qb()),2&n){var e=S.fc().$implicit;S.Bb(1),S.Jc(" ",null==e?null:e.status," ")}}function fn(n,t){1&n&&S.Pb(0)}function gn(n,t){if(1&n&&(S.Fc(0,sn,1,0,"ng-container",23),S.Fc(1,mn,3,3,"a",32),S.Fc(2,bn,2,1,"ng-container",2),S.Fc(3,fn,1,0,"ng-container",23)),2&n){var e=t.$implicit;S.fc();var o=S.vc(61),c=S.vc(59);S.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",S.qc(6,J,null==e?null:e.status)),S.Bb(1),S.mc("ngIf",null==e?null:e.wireFrameUrl),S.Bb(1),S.mc("ngIf",!(null!=e&&e.wireFrameUrl)),S.Bb(1),S.mc("ngTemplateOutlet",c)("ngTemplateOutletContext",S.qc(8,J,null==e?null:e.version))}}function dn(n,t){if(1&n&&(S.Rb(0),S.Tb(1,"kirby-badge",35),S.Hc(2),S.gc(3,"number"),S.Sb(),S.Qb()),2&n){var e=S.fc().$implicit;S.Bb(2),S.Ic(S.ic(3,1,e,"1.1-2"))}}function pn(n,t){1&n&&S.Fc(0,dn,4,4,"ng-container",2),2&n&&S.mc("ngIf",t.$implicit)}function hn(n,t){1&n&&S.Ob(0,"ion-icon",41)}function vn(n,t){1&n&&S.Ob(0,"ion-icon",42)}function yn(n,t){1&n&&S.Ob(0,"ion-icon",43)}function Cn(n,t){1&n&&S.Ob(0,"ion-icon",44)}function On(n,t){1&n&&S.Ob(0,"ion-icon",45)}function Pn(n,t){if(1&n&&(S.Fc(0,hn,1,0,"ion-icon",36),S.Fc(1,vn,1,0,"ion-icon",37),S.Fc(2,yn,1,0,"ion-icon",38),S.Fc(3,Cn,1,0,"ion-icon",39),S.Fc(4,On,1,0,"ion-icon",40)),2&n){var e=t.$implicit,o=S.fc();S.mc("ngIf",e===o.uxStatusEnum.underConsideration),S.Bb(1),S.mc("ngIf",e===o.uxStatusEnum.planned),S.Bb(1),S.mc("ngIf",e===o.uxStatusEnum.inProgress),S.Bb(1),S.mc("ngIf",e===o.uxStatusEnum.ready),S.Bb(1),S.mc("ngIf",e===o.uxStatusEnum.notCurrentlyPlanned)}}function Tn(n,t){1&n&&S.Ob(0,"ion-icon",41)}function In(n,t){1&n&&S.Ob(0,"ion-icon",42)}function kn(n,t){1&n&&S.Ob(0,"ion-icon",43)}function Sn(n,t){1&n&&S.Ob(0,"ion-icon",44)}function Mn(n,t){1&n&&S.Ob(0,"ion-icon",45)}function _n(n,t){if(1&n&&(S.Fc(0,Tn,1,0,"ion-icon",36),S.Fc(1,In,1,0,"ion-icon",37),S.Fc(2,kn,1,0,"ion-icon",38),S.Fc(3,Sn,1,0,"ion-icon",39),S.Fc(4,Mn,1,0,"ion-icon",40)),2&n){var e=t.$implicit,o=S.fc();S.mc("ngIf",e===o.codeStatusEnum.underConsideration),S.Bb(1),S.mc("ngIf",e===o.codeStatusEnum.planned),S.Bb(1),S.mc("ngIf",e===o.codeStatusEnum.inProgress),S.Bb(1),S.mc("ngIf",e===o.codeStatusEnum.ready),S.Bb(1),S.mc("ngIf",e===o.codeStatusEnum.notCurrentlyPlanned)}}function Fn(n,t){1&n&&S.Ob(0,"kirby-spinner")}var xn,Bn,wn=function(n,t){return[n,t]},En=((Bn=function(){function e(n,t){c(this,e),this.http=n,this.db=t,this.isLoading=!0,this.gitHubError=!1,this.sortedItems=[],this.searchTerm$=new b.a(""),this.uxStatusEnum=T,this.codeStatusEnum=I,this.excludedStatuses=[],this.newIssueUrl=P.a.githubBaseUrl+"/issues/new/choose",this.milestone$=this.loadCurrentMilestone()}var o,r,a;return o=e,(r=[{key:"ngOnInit",value:function(){var n=this;this.items$=this.searchTerm$.pipe(Object(p.a)(function(t){return n.filterItems(n.sortedItems,t,n.excludedStatuses)})),this.connectFirebase()}},{key:"connectFirebase",value:function(){var n=this,t=this.db.collection("componentStatusV2").valueChanges();this.firebaseSubscription=t.subscribe(function(t){n.isLoading=!0,n.items=t[0].items,n.ghostItems=t[0].ghostItems,n.initializeGithubStatus()})}},{key:"ngOnDestroy",value:function(){this.firebaseSubscription.unsubscribe()}},{key:"toggleExcluded",value:function(n){this.excludedStatuses=n.detail.checked?n.detail.value:[],this.searchTerm$.next(this.searchTerm$.value)}},{key:"loadCurrentMilestone",value:function(){var n={headers:new m.c({Authorization:"token "+P.a.oauth.githubToken1+P.a.oauth.githubToken2})};return this.http.get(P.a.githubApi+"/repos/kirbydesign/designsystem/milestones?sort=due_on",n).pipe(Object(p.a)(function(n){return n[0]}))}},{key:"initializeGithubStatus",value:function(){var n=this;Promise.all([this.loadGithubComponentRequests(),this.loadGithubComponentEnhancementRequests()]).then(function(t){n.setCurrentGithubStatus().then(function(t){n.sortedItems=n.sortItems(n.items),n.isLoading=!1})})}},{key:"loadGithubComponentRequests",value:function(){var n=this;return new Promise(function(t){n.getStatusItemsFromGithubIssues().pipe(Object(h.a)()).subscribe(function(e){n.items=n.items.concat(e),t()})})}},{key:"loadGithubComponentEnhancementRequests",value:function(){var n=this;return new Promise(function(t){n.getEnhancementItemsFromGithubIssues().pipe(Object(h.a)()).subscribe(function(e){var o=n.flattenItems(n.items);e.forEach(function(n){o.filter(function(t){return t.code&&t.title===n.parentTitle}).forEach(function(t){t.code.enhancements?t.code.enhancements.push(n):t.code.enhancements=[n]})}),t()})})}},{key:"getStatusItemsFromGithubIssues",value:function(){var n=this,t=this.flattenItems(this.items);return this.getGithubIssues("component").pipe(Object(p.a)(function(e){return e.filter(function(n){return!function(n){return!!t.find(function(t){return t.code.githubIssueNo===n.number})}(n)}).filter(function(t){return n.hasComponentTitleLabel(t)}).map(function(t){return n.mapGithubIssueToStatusItem(t)})}))}},{key:"getEnhancementItemsFromGithubIssues",value:function(){var n=this;return this.getGithubIssues("enhancement").pipe(Object(p.a)(function(t){return t.filter(function(t){return n.hasComponentTitleLabel(t)}).map(function(t){return n.mapGithubIssueToStatusItem(t)})}))}},{key:"mapGithubIssueToStatusItem",value:function(n){var t=this.getZeplinUrl(n),e=this.getSketchUrl(n),o=t?T.ready:T.underConsideration,c=this.getComponentTitle(n),i=n.title.replace("[Enhancement] ",""),r=n.labels.find(function(n){return n.name.indexOf("enhancement")>-1});return{title:r?i:c,parentTitle:r?c:null,priority:0,ux:{status:o,wireFrameUrl:t||e},code:{status:I.underConsideration,githubIssueNo:n.number}}}},{key:"getComponentTitle",value:function(n){return this.getComponentTitleLabel(n).name.split("component:")[1]}},{key:"hasComponentTitleLabel",value:function(n){return!!this.getComponentTitleLabel(n)}},{key:"getComponentTitleLabel",value:function(n){return n.labels.find(function(n){return n.name.indexOf("component:")>-1})}},{key:"getZeplinUrl",value:function(n){var t=n.body.match(/(https:\/\/(app\.zeplin|zpl)\.io\/)((project\/[a-z,0-9]{24}\/screen\/[a-z,0-9]{24})|(\b(?!project)[a-z,0-9]{7}\b)|(styleguide\/[a-z,0-9]{24}\/components\?(seid|cseid)\=[a-z,0-9]{24}))/i);return t?t[0]:null}},{key:"getSketchUrl",value:function(n){var t=n.body.match(/https:\/\/sketch\.cloud\/s\/[a-z,0-9]{5}\/[a-z,0-9]{7}(\/play)?/i);return t?t[0]:null}},{key:"isUnderConsiderationOrNotPlanned",value:function(n){return!(n.ux.status!==T.underConsideration&&n.ux.status!==T.notCurrentlyPlanned||n.code.status!==I.underConsideration&&n.code.status!==I.notCurrentlyPlanned)}},{key:"getGithubIssueUrl",value:function(n){return P.a.githubBaseUrl+"/issues/"+n}},{key:"sortItems",value:function(n){var t=this;return n.sort(function(n,e){var o=t.sortByStatus(n,e);return 0===o&&(n.code.status==I.ready&&e.code.status==I.ready||(o=t.sortByPriority(n,e)),0===o&&(o=t.sortByComponentName(n,e))),o})}},{key:"sortByStatus",value:function(n,t){return k[n.code.status]-k[t.code.status]}},{key:"sortByPriority",value:function(n,t){return 0===n.priority?t.priority:0===t.priority?-n.priority:n.priority-t.priority}},{key:"sortByComponentName",value:function(n,t){return n.title.localeCompare(t.title)}},{key:"filterItems",value:function(n,t,e){var o=this,c=new RegExp(t,"i");return n.filter(function(n){return o.isIncluded(n,e)&&o.matchItem(n,c)}).concat(this.getGhostItems(t))}},{key:"isIncluded",value:function(n,t){return!this.isExcluded(n,t)||this.hasIncludedEnhancement(n,t)}},{key:"isExcluded",value:function(n,t){return t.includes(n.code.status)}},{key:"hasIncludedEnhancement",value:function(n,t){var e=this;return n.code.enhancements&&n.code.enhancements.find(function(n){return!e.isExcluded(n,t)})}},{key:"matchItem",value:function(n,t){return t.test(n.title)||this.matchAliases(n.aliases,t)||this.matchChildComponents(n.children,t)}},{key:"matchAliases",value:function(n,t){return!!Array.isArray(n)&&n.some(function(n){return t.test(n)})}},{key:"matchChildComponents",value:function(n,t){var e=this;return!!Array.isArray(n)&&n.filter(function(n){return e.matchItem(n,t)}).length>0}},{key:"getGhostItems",value:function(n){var t=this.ghostItems.find(function(t){return t.name.toLowerCase()===n.toLowerCase()});return t?[{title:t.tagline,priority:0,ux:{version:999,status:T.ready,wireFrameUrl:t.url||null},code:{version:999,status:I.ready}}]:[]}},{key:"getGithubIssues",value:function(n){var t=this;return this.getPageOfIssues(P.a.githubApi+"/repos/kirbydesign/designsystem/issues?labels=".concat(n,"&per_page=100")).pipe(Object(v.a)(function(n){var e=n.nextPageUrl;return e?t.getPageOfIssues(e):f.a}),Object(y.a)(function(n){return n.issues}),Object(C.a)())}},{key:"setCurrentGithubStatus",value:function(){var n=this;return new Promise(function(t){n.getGithubProjectStatus().pipe(Object(h.a)()).subscribe(function(e){var o=n.flattenItems(n.items);e.forEach(function(n){o.filter(function(t){return t.code.githubIssueNo===n.number}).forEach(function(t){return t.code.status=n.status})}),t()})})}},{key:"flattenItems",value:function(n){var e=this;return n.map(function(n){return[n].concat(t(n.children?e.flattenItems(n.children):[]),t(n.code&&n.code.enhancements?n.code.enhancements:[]))}).reduce(function(n,t){return n.concat(t)},[])}},{key:"getGithubProjectCards",value:function(n,t){var e=this,o={headers:new m.c({Authorization:"token "+P.a.oauth.githubToken1+P.a.oauth.githubToken2,Accept:"application/vnd.github.inertia-preview+json"})};return this.http.get(P.a.githubApi+"/projects/columns/"+n+"/cards",o).pipe(Object(O.a)(function(n){return e.gitHubError=!0,e.isLoading=!1,Object(g.a)([])}),Object(p.a)(function(n){return e.mapGithubCardsToIssues(t,n)}))}},{key:"mapGithubCardsToIssues",value:function(n,t){return t.map(function(t){var e=0,o=t.content_url.match(/issues\/(\d+)$/);return 2===o.length&&(e=+o[1]),{number:e,status:n}})}},{key:"getGithubProjectStatus",value:function(){return Object(d.a)(this.getGithubProjectCards(4590936,I.planned),this.getGithubProjectCards(4590937,I.inProgress),this.getGithubProjectCards(5890332,I.inProgress),this.getGithubProjectCards(4590938,I.ready)).pipe(Object(p.a)(function(e){var o=n(e,3),c=o[0],i=o[1],r=o[2];return[].concat(t(c),t(i),t(r))}))}},{key:"getPageOfIssues",value:function(n){var t=this,e={headers:new m.c({Authorization:"token "+P.a.oauth.githubToken1+P.a.oauth.githubToken2}),observe:"response"};return this.http.get(n,e).pipe(Object(p.a)(function(n){return{issues:n.body,nextPageUrl:t.getNextPageUrl(n)}}))}},{key:"getNextPageUrl",value:function(t){var e,o=t.headers.get("Link");if(o){var c=o.match(/<([^>]+)>;\s*rel="next"/);c&&(e=n(c,2)[1])}return e}}])&&i(o.prototype,r),a&&i(o,a),e}()).\u0275fac=function(n){return new(n||Bn)(S.Nb(m.a),S.Nb(M.a))},Bn.\u0275cmp=S.Hb({type:Bn,selectors:[["cookbook-component-status"]],decls:66,vars:11,consts:[[1,"hero"],[3,"href"],[4,"ngIf"],["href","https://github.com/kirbydesign/designsystem/projects/1"],[1,"search"],["autofocus","","type","text",3,"keyup"],["class","github-error",4,"ngIf"],[1,"filter"],[3,"value","ionChange"],["class","component-status",4,"ngIf","ngIfElse"],["itemTemplate",""],["enhancementTemplate",""],["componentTemplate",""],["codeTemplate",""],["uxTemplate",""],["versionTemplate",""],["uxStatusTemplate",""],["codeStatusTemplate",""],["loading",""],[1,"github-error"],["name","alert","color","danger"],[1,"component-status"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["componentrow",""],["color","medium",3,"name","click",4,"ngIf"],["color","medium",3,"name","click"],[3,"class","someday-maybe",4,"ngFor","ngForOf"],["themeColor","warning",1,"vnext"],[3,"routerLink",4,"ngIf"],[3,"routerLink"],[3,"innerHTML"],[3,"href",4,"ngIf"],["name","open",4,"ngIf"],["name","open"],[1,"version"],["color","medium","name","heart-empty",4,"ngIf"],["color","success","name","heart-empty",4,"ngIf"],["color","success","name","heart-half",4,"ngIf"],["name","heart","color","success",4,"ngIf"],["color","medium","name","heart-dislike",4,"ngIf"],["color","medium","name","heart-empty"],["color","success","name","heart-empty"],["color","success","name","heart-half"],["name","heart","color","success"],["color","medium","name","heart-dislike"]],template:function(n,t){if(1&n&&(S.Tb(0,"div",0),S.Tb(1,"h1"),S.Hc(2,"Component Status"),S.Sb(),S.Sb(),S.Tb(3,"p"),S.Hc(4," The latest component updates and changes. If you have a suggestion for a new component not listed here, an enhancement to an existing component or you found a bug, "),S.Tb(5,"a",1),S.Hc(6,"create an issue on GitHub"),S.Sb(),S.Sb(),S.Fc(7,B,4,2,"p",2),S.gc(8,"async"),S.Tb(9,"p"),S.Hc(10," You can follow working progress "),S.Tb(11,"a",3),S.Hc(12,"here - Kirby kan-ban board"),S.Sb(),S.Sb(),S.Tb(13,"h2"),S.Hc(14,"Versioning of components"),S.Sb(),S.Tb(15,"table"),S.Tb(16,"tr"),S.Tb(17,"td"),S.Hc(18,"v1.0"),S.Sb(),S.Tb(19,"td"),S.Hc(20,"Production ready"),S.Sb(),S.Sb(),S.Tb(21,"tr"),S.Tb(22,"td"),S.Hc(23,"v0.9"),S.Sb(),S.Tb(24,"td"),S.Hc(25,"Almost ready"),S.Sb(),S.Sb(),S.Tb(26,"tr"),S.Tb(27,"td"),S.Hc(28,"v0.5"),S.Sb(),S.Tb(29,"td"),S.Hc(30,"Halfway ready for production"),S.Sb(),S.Sb(),S.Tb(31,"tr"),S.Tb(32,"td"),S.Hc(33,"v0.1"),S.Sb(),S.Tb(34,"td"),S.Hc(35,"Walking Skeleton"),S.Sb(),S.Sb(),S.Sb(),S.Ob(36,"br"),S.Ob(37,"br"),S.Tb(38,"div",4),S.Hc(39," Search Component(s): "),S.Tb(40,"input",5),S.bc("keyup",function(n){return t.searchTerm$.next(n.target.value)}),S.Sb(),S.Sb(),S.Fc(41,w,3,0,"div",6),S.Tb(42,"div",7),S.Tb(43,"ion-item"),S.Tb(44,"ion-label"),S.Hc(45,"Only show components in progress:"),S.Sb(),S.Tb(46,"ion-toggle",8),S.bc("ionChange",function(n){return t.toggleExcluded(n)}),S.Sb(),S.Sb(),S.Sb(),S.Fc(47,A,11,3,"table",9),S.Fc(48,V,10,26,"ng-template",null,10,S.Gc),S.Fc(50,W,1,1,"ng-template",null,11,S.Gc),S.Fc(52,tn,2,2,"ng-template",null,12,S.Gc),S.Fc(54,un,4,10,"ng-template",null,13,S.Gc),S.Fc(56,gn,4,10,"ng-template",null,14,S.Gc),S.Fc(58,pn,1,1,"ng-template",null,15,S.Gc),S.Fc(60,Pn,5,5,"ng-template",null,16,S.Gc),S.Fc(62,_n,5,5,"ng-template",null,17,S.Gc),S.Fc(64,Fn,1,0,"ng-template",null,18,S.Gc)),2&n){var e=S.vc(65);S.Bb(5),S.mc("href",t.newIssueUrl,S.Cc),S.Bb(2),S.mc("ngIf",S.hc(8,6,t.milestone$)),S.Bb(34),S.mc("ngIf",t.gitHubError),S.Bb(5),S.mc("value",S.rc(8,wn,t.codeStatusEnum.ready,t.codeStatusEnum.notCurrentlyPlanned)),S.Bb(1),S.mc("ngIf",!t.isLoading)("ngIfElse",e)}},directives:[u.r,s.q,s.w,s.O,s.b,s.p,u.q,u.s,_.a,F.a,a.j,s.U,x.a],pipes:[u.b,u.g],styles:['[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.search[_ngcontent-%COMP%]{margin-bottom:1rem}.github-error[_ngcontent-%COMP%]{font-style:italic}.github-error[_ngcontent-%COMP%]   ion-icon[name=alert][_ngcontent-%COMP%]{font-size:24px;vertical-align:text-bottom}.component-status[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;border-spacing:0;margin-left:1rem}.component-status[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{text-align:left}.component-status[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:400;line-height:1.6;text-transform:uppercase;letter-spacing:.1rem;padding:1rem;font-size:1.3rem}.component-status[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{padding-left:0}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%]{vertical-align:middle}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{cursor:pointer;display:block;position:absolute;margin-left:-2rem;font-size:24px}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%] ~ .enhancement-subcomponent[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%] ~ .subcomponent[_ngcontent-%COMP%]{display:none}.component-status[_ngcontent-%COMP%]   tr.component.expanded[_ngcontent-%COMP%] ~ .enhancement-subcomponent[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.component.expanded[_ngcontent-%COMP%] ~ .subcomponent[_ngcontent-%COMP%]{display:table-row}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%]{border-top:.1rem solid var(--kirby-medium)}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]{vertical-align:middle;border-top:.1rem dashed var(--kirby-medium);color:var(--kirby-dark-tint);font-size:14px}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:1rem}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--kirby-dark-tint)}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   .vnext[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]   .vnext[_ngcontent-%COMP%]{font-style:normal}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.component-status[_ngcontent-%COMP%]   tr.enhancement-subcomponent[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:2rem}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   ion-icon[name=add-circle][_ngcontent-%COMP%]{font-size:16px;vertical-align:sub}.component-status[_ngcontent-%COMP%]   tr.someday-maybe[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.someday-maybe[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--kirby-dark-tint);font-style:italic}.component-status[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem}.component-status[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0}.component-status[_ngcontent-%COMP%]   td.component[_ngcontent-%COMP%]{font-weight:700}.component-status[_ngcontent-%COMP%]   a[href^="https://"][_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{vertical-align:sub;font-size:18px}.component-status[_ngcontent-%COMP%]   a[href^="https://"][_ngcontent-%COMP%]   ion-icon[name=open][_ngcontent-%COMP%]{color:var(--kirby-dark-tint)}.component-status[_ngcontent-%COMP%]   kirby-badge[_ngcontent-%COMP%]{vertical-align:sub}.component-status[_ngcontent-%COMP%]   kirby-badge.version[_ngcontent-%COMP%]{margin-left:.5rem;--ion-color-base:var(--kirby-semi-dark);--ion-color-contrast:var(--kirby-white)}']}),Bn),Gn=((xn=function n(){c(this,n)}).\u0275fac=function(n){return new(n||xn)},xn.\u0275mod=S.Lb({type:xn}),xn.\u0275inj=S.Kb({imports:[[u.c,a.k.forChild([{path:"",component:En}]),s.Q,l.j]]}),xn)}}])}();