(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RB7b:function(t,n,e){"use strict";e.r(n),e.d(n,"ComponentStatusModule",function(){return _t});var o=e("tyNb"),c=e("ofXK"),i=e("TEn/"),s=e("pW9a"),r=e("tk/3"),a=e("2Vo4"),u=e("EY2u"),l=e("LRne"),m=e("cp0P"),b=e("lJxs"),g=e("SxV6"),d=e("FQpF"),p=e("bOdf"),h=e("IAdc"),f=e("JIr8"),C=e("dh+V"),O=function(t){return t.underConsideration="Under consideration",t.notCurrentlyPlanned="Not currently planned",t.planned="Planned",t.inProgress="In progress",t.ready="Ready",t}({}),P=function(t){return t.underConsideration="Under consideration",t.notCurrentlyPlanned="Not currently planned",t.planned="Planned",t.inProgress="In development",t.ready="Ready",t}({}),T=function(t){return t[t.Ready=0]="Ready",t[t["In development"]=1]="In development",t[t.Planned=2]="Planned",t[t["Under consideration"]=3]="Under consideration",t[t["Not currently planned"]=4]="Not currently planned",t}({}),y=e("fXoL"),I=e("I/3d"),M=e("QOLq"),S=e("/D4z");function _(t,n){if(1&t&&(y.Tb(0,"p"),y.Hc(1," Current milestone: "),y.Tb(2,"a",1),y.Hc(3),y.Sb(),y.Sb()),2&t){const t=n.ngIf;y.Bb(2),y.mc("href",t.html_url,y.Cc),y.Bb(1),y.Ic(t.title)}}function F(t,n){1&t&&(y.Tb(0,"div",19),y.Ob(1,"ion-icon",20),y.Hc(2," Couldn't fetch component status from GitHub. The status shown below might not be up-to-date.\n"),y.Sb())}function v(t,n){1&t&&y.Pb(0)}function x(t,n){1&t&&y.Pb(0)}const k=function(t){return{$implicit:t,cssClass:"subcomponent"}};function B(t,n){if(1&t&&(y.Rb(0),y.Fc(1,x,1,0,"ng-container",23),y.Qb()),2&t){const t=n.$implicit;y.fc(3);const e=y.vc(49);y.Bb(1),y.mc("ngTemplateOutlet",e)("ngTemplateOutletContext",y.qc(2,k,t))}}const w=function(t){return{$implicit:t,cssClass:"component"}};function G(t,n){if(1&t&&(y.Rb(0),y.Tb(1,"tbody"),y.Fc(2,v,1,0,"ng-container",23),y.Fc(3,B,2,4,"ng-container",22),y.Sb(),y.Qb()),2&t){const t=n.$implicit;y.fc(2);const e=y.vc(49);y.Bb(2),y.mc("ngTemplateOutlet",e)("ngTemplateOutletContext",y.qc(3,w,t)),y.Bb(1),y.mc("ngForOf",t.children)}}function E(t,n){if(1&t&&(y.Tb(0,"table",21),y.Tb(1,"thead"),y.Tb(2,"tr"),y.Tb(3,"th"),y.Hc(4,"Component"),y.Sb(),y.Tb(5,"th"),y.Hc(6,"UX"),y.Sb(),y.Tb(7,"th"),y.Hc(8,"Code"),y.Sb(),y.Sb(),y.Sb(),y.Fc(9,G,4,5,"ng-container",22),y.gc(10,"async"),y.Sb()),2&t){const t=y.fc();y.Bb(9),y.mc("ngForOf",y.hc(10,1,t.items$))}}function H(t,n){if(1&t){const t=y.Ub();y.Tb(0,"ion-icon",26),y.bc("click",function(){return y.yc(t),y.fc(),y.vc(1).classList.toggle("expanded")}),y.Sb()}if(2&t){y.fc();const t=y.vc(1);y.mc("name",t.classList.contains("expanded")?"folder-open":"folder")}}function $(t,n){1&t&&y.Pb(0)}function U(t,n){1&t&&y.Pb(0)}function j(t,n){1&t&&y.Pb(0)}function L(t,n){1&t&&y.Pb(0)}const N=function(t){return{$implicit:t}},z=function(t,n){return{$implicit:t,cssClass:n}};function q(t,n){if(1&t&&(y.Tb(0,"tr",null,24),y.Tb(2,"td"),y.Fc(3,H,1,1,"ion-icon",25),y.Fc(4,$,1,0,"ng-container",23),y.Sb(),y.Tb(5,"td"),y.Fc(6,U,1,0,"ng-container",23),y.Sb(),y.Tb(7,"td"),y.Fc(8,j,1,0,"ng-container",23),y.Sb(),y.Sb(),y.Fc(9,L,1,0,"ng-container",23)),2&t){const t=n.$implicit,e=n.cssClass,o=y.fc(),c=y.vc(53),i=y.vc(57),s=y.vc(55),r=y.vc(51);y.Db(e),y.Fb("someday-maybe",o.isUnderConsiderationOrNotPlanned(t))("has-enhancements",t.code.enhancements),y.Bb(2),y.Db(e),y.Bb(1),y.mc("ngIf",(null==t.children?null:t.children.length)>0),y.Bb(1),y.mc("ngTemplateOutlet",c)("ngTemplateOutletContext",y.qc(17,N,t)),y.Bb(2),y.mc("ngTemplateOutlet",i)("ngTemplateOutletContext",y.qc(19,N,t.ux)),y.Bb(2),y.mc("ngTemplateOutlet",s)("ngTemplateOutletContext",y.qc(21,N,t.code)),y.Bb(1),y.mc("ngTemplateOutlet",r)("ngTemplateOutletContext",y.rc(23,z,t,e))}}function R(t,n){1&t&&y.Pb(0)}function A(t,n){1&t&&y.Pb(0)}function J(t,n){if(1&t&&(y.Tb(0,"tr"),y.Tb(1,"td"),y.Tb(2,"kirby-badge",28),y.Hc(3,"vNext"),y.Sb(),y.Hc(4),y.Sb(),y.Tb(5,"td"),y.Fc(6,R,1,0,"ng-container",23),y.Sb(),y.Tb(7,"td"),y.Fc(8,A,1,0,"ng-container",23),y.Sb(),y.Sb()),2&t){const t=n.$implicit,e=y.fc().cssClass,o=y.fc(),c=y.vc(57),i=y.vc(55);y.Eb("enhancement enhancement-",e,""),y.Fb("someday-maybe",o.isUnderConsiderationOrNotPlanned(t)),y.Bb(4),y.Jc(" ",t.title," "),y.Bb(2),y.mc("ngTemplateOutlet",c)("ngTemplateOutletContext",y.qc(10,N,t.ux)),y.Bb(2),y.mc("ngTemplateOutlet",i)("ngTemplateOutletContext",y.qc(12,N,t.code))}}function Q(t,n){1&t&&y.Fc(0,J,9,14,"tr",27),2&t&&y.mc("ngForOf",n.$implicit.code.enhancements)}function V(t,n){1&t&&y.Pb(0)}function D(t,n){if(1&t&&(y.Tb(0,"a",30),y.Hc(1),y.Fc(2,V,1,0,"ng-container",23),y.Sb()),2&t){const t=y.fc().$implicit;y.fc();const n=y.vc(59);y.oc("routerLink","../../",null==t.code?null:t.code.cookbookUrl,""),y.Bb(1),y.Jc(" ",t.title," "),y.Bb(1),y.mc("ngTemplateOutlet",n)("ngTemplateOutletContext",y.qc(4,N,null==t.code?null:t.code.version))}}function K(t,n){if(1&t&&(y.Rb(0),y.Ob(1,"span",31),y.Qb()),2&t){const t=y.fc().$implicit;y.Bb(1),y.mc("innerHTML",t.title,y.zc)}}function X(t,n){if(1&t&&(y.Fc(0,D,3,6,"a",29),y.Fc(1,K,2,1,"ng-container",2)),2&t){const t=n.$implicit;y.mc("ngIf",null==t.code?null:t.code.cookbookUrl),y.Bb(1),y.mc("ngIf",!(null!=t.code&&t.code.cookbookUrl))}}function W(t,n){1&t&&y.Pb(0)}function Y(t,n){1&t&&y.Ob(0,"ion-icon",34)}function Z(t,n){if(1&t&&(y.Tb(0,"a",1),y.Hc(1),y.Fc(2,Y,1,0,"ion-icon",33),y.Sb()),2&t){const t=y.fc().$implicit,n=y.fc();y.mc("href",n.getGithubIssueUrl(t.githubIssueNo),y.Cc),y.Bb(1),y.Jc(" ",null==t?null:t.status," "),y.Bb(1),y.mc("ngIf",null==t?null:t.githubIssueNo)}}function tt(t,n){if(1&t&&(y.Tb(0,"span"),y.Hc(1),y.Sb()),2&t){const t=y.fc().$implicit;y.Bb(1),y.Jc(" ",null==t?null:t.status," ")}}function nt(t,n){1&t&&y.Pb(0)}function et(t,n){if(1&t&&(y.Fc(0,W,1,0,"ng-container",23),y.Fc(1,Z,3,3,"a",32),y.Fc(2,tt,2,1,"span",2),y.Fc(3,nt,1,0,"ng-container",23)),2&t){const t=n.$implicit;y.fc();const e=y.vc(63),o=y.vc(59);y.mc("ngTemplateOutlet",e)("ngTemplateOutletContext",y.qc(6,N,null==t?null:t.status)),y.Bb(1),y.mc("ngIf",null==t?null:t.githubIssueNo),y.Bb(1),y.mc("ngIf",!(null!=t&&t.githubIssueNo)),y.Bb(1),y.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",y.qc(8,N,null==t?null:t.version))}}function ot(t,n){1&t&&y.Pb(0)}function ct(t,n){1&t&&y.Ob(0,"ion-icon",34)}function it(t,n){if(1&t&&(y.Tb(0,"a",1),y.Hc(1),y.Fc(2,ct,1,0,"ion-icon",33),y.Sb()),2&t){const t=y.fc().$implicit;y.mc("href",null==t?null:t.wireFrameUrl,y.Cc),y.Bb(1),y.Jc(" ",null==t?null:t.status," "),y.Bb(1),y.mc("ngIf",null==t?null:t.wireFrameUrl)}}function st(t,n){if(1&t&&(y.Rb(0),y.Hc(1),y.Qb()),2&t){const t=y.fc().$implicit;y.Bb(1),y.Jc(" ",null==t?null:t.status," ")}}function rt(t,n){1&t&&y.Pb(0)}function at(t,n){if(1&t&&(y.Fc(0,ot,1,0,"ng-container",23),y.Fc(1,it,3,3,"a",32),y.Fc(2,st,2,1,"ng-container",2),y.Fc(3,rt,1,0,"ng-container",23)),2&t){const t=n.$implicit;y.fc();const e=y.vc(61),o=y.vc(59);y.mc("ngTemplateOutlet",e)("ngTemplateOutletContext",y.qc(6,N,null==t?null:t.status)),y.Bb(1),y.mc("ngIf",null==t?null:t.wireFrameUrl),y.Bb(1),y.mc("ngIf",!(null!=t&&t.wireFrameUrl)),y.Bb(1),y.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",y.qc(8,N,null==t?null:t.version))}}function ut(t,n){if(1&t&&(y.Rb(0),y.Tb(1,"kirby-badge",35),y.Hc(2),y.gc(3,"number"),y.Sb(),y.Qb()),2&t){const t=y.fc().$implicit;y.Bb(2),y.Ic(y.ic(3,1,t,"1.1-2"))}}function lt(t,n){1&t&&y.Fc(0,ut,4,4,"ng-container",2),2&t&&y.mc("ngIf",n.$implicit)}function mt(t,n){1&t&&y.Ob(0,"ion-icon",41)}function bt(t,n){1&t&&y.Ob(0,"ion-icon",42)}function gt(t,n){1&t&&y.Ob(0,"ion-icon",43)}function dt(t,n){1&t&&y.Ob(0,"ion-icon",44)}function pt(t,n){1&t&&y.Ob(0,"ion-icon",45)}function ht(t,n){if(1&t&&(y.Fc(0,mt,1,0,"ion-icon",36),y.Fc(1,bt,1,0,"ion-icon",37),y.Fc(2,gt,1,0,"ion-icon",38),y.Fc(3,dt,1,0,"ion-icon",39),y.Fc(4,pt,1,0,"ion-icon",40)),2&t){const t=n.$implicit,e=y.fc();y.mc("ngIf",t===e.uxStatusEnum.underConsideration),y.Bb(1),y.mc("ngIf",t===e.uxStatusEnum.planned),y.Bb(1),y.mc("ngIf",t===e.uxStatusEnum.inProgress),y.Bb(1),y.mc("ngIf",t===e.uxStatusEnum.ready),y.Bb(1),y.mc("ngIf",t===e.uxStatusEnum.notCurrentlyPlanned)}}function ft(t,n){1&t&&y.Ob(0,"ion-icon",41)}function Ct(t,n){1&t&&y.Ob(0,"ion-icon",42)}function Ot(t,n){1&t&&y.Ob(0,"ion-icon",43)}function Pt(t,n){1&t&&y.Ob(0,"ion-icon",44)}function Tt(t,n){1&t&&y.Ob(0,"ion-icon",45)}function yt(t,n){if(1&t&&(y.Fc(0,ft,1,0,"ion-icon",36),y.Fc(1,Ct,1,0,"ion-icon",37),y.Fc(2,Ot,1,0,"ion-icon",38),y.Fc(3,Pt,1,0,"ion-icon",39),y.Fc(4,Tt,1,0,"ion-icon",40)),2&t){const t=n.$implicit,e=y.fc();y.mc("ngIf",t===e.codeStatusEnum.underConsideration),y.Bb(1),y.mc("ngIf",t===e.codeStatusEnum.planned),y.Bb(1),y.mc("ngIf",t===e.codeStatusEnum.inProgress),y.Bb(1),y.mc("ngIf",t===e.codeStatusEnum.ready),y.Bb(1),y.mc("ngIf",t===e.codeStatusEnum.notCurrentlyPlanned)}}function It(t,n){1&t&&y.Ob(0,"kirby-spinner")}const Mt=function(t,n){return[t,n]};let St=(()=>{class t{constructor(t,n){this.http=t,this.db=n,this.isLoading=!0,this.gitHubError=!1,this.sortedItems=[],this.searchTerm$=new a.a(""),this.uxStatusEnum=O,this.codeStatusEnum=P,this.excludedStatuses=[],this.newIssueUrl=C.a.githubBaseUrl+"/issues/new/choose",this.milestone$=this.loadCurrentMilestone()}ngOnInit(){this.items$=this.searchTerm$.pipe(Object(b.a)(t=>this.filterItems(this.sortedItems,t,this.excludedStatuses))),this.connectFirebase()}connectFirebase(){const t=this.db.collection("componentStatusV2").valueChanges();this.firebaseSubscription=t.subscribe(t=>{this.isLoading=!0,this.items=t[0].items,this.ghostItems=t[0].ghostItems,this.initializeGithubStatus()})}ngOnDestroy(){this.firebaseSubscription.unsubscribe()}toggleExcluded(t){this.excludedStatuses=t.detail.checked?t.detail.value:[],this.searchTerm$.next(this.searchTerm$.value)}loadCurrentMilestone(){const t={headers:new r.c({Authorization:"token "+C.a.oauth.githubToken1+C.a.oauth.githubToken2})};return this.http.get(C.a.githubApi+"/repos/kirbydesign/designsystem/milestones?sort=due_on",t).pipe(Object(b.a)(t=>t[0]))}initializeGithubStatus(){Promise.all([this.loadGithubComponentRequests(),this.loadGithubComponentEnhancementRequests()]).then(t=>{this.setCurrentGithubStatus().then(t=>{this.sortedItems=this.sortItems(this.items),this.isLoading=!1})})}loadGithubComponentRequests(){return new Promise(t=>{this.getStatusItemsFromGithubIssues().pipe(Object(g.a)()).subscribe(n=>{this.items=this.items.concat(n),t()})})}loadGithubComponentEnhancementRequests(){return new Promise(t=>{this.getEnhancementItemsFromGithubIssues().pipe(Object(g.a)()).subscribe(n=>{const e=this.flattenItems(this.items);n.forEach(t=>{e.filter(n=>n.code&&n.title===t.parentTitle).forEach(n=>{n.code.enhancements?n.code.enhancements.push(t):n.code.enhancements=[t]})}),t()})})}getStatusItemsFromGithubIssues(){const t=this.flattenItems(this.items);return this.getGithubIssues("component").pipe(Object(b.a)(n=>n.filter(n=>!(n=>!!t.find(t=>t.code.githubIssueNo===n.number))(n)).filter(t=>this.hasComponentTitleLabel(t)).map(t=>this.mapGithubIssueToStatusItem(t))))}getEnhancementItemsFromGithubIssues(){return this.getGithubIssues("enhancement").pipe(Object(b.a)(t=>t.filter(t=>this.hasComponentTitleLabel(t)).map(t=>this.mapGithubIssueToStatusItem(t))))}mapGithubIssueToStatusItem(t){const n=this.getZeplinUrl(t),e=this.getSketchUrl(t),o=n?O.ready:O.underConsideration,c=this.getComponentTitle(t),i=t.title.replace("[Enhancement] ",""),s=t.labels.find(t=>t.name.indexOf("enhancement")>-1);return{title:s?i:c,parentTitle:s?c:null,priority:0,ux:{status:o,wireFrameUrl:n||e},code:{status:P.underConsideration,githubIssueNo:t.number}}}getComponentTitle(t){return this.getComponentTitleLabel(t).name.split("component:")[1]}hasComponentTitleLabel(t){return!!this.getComponentTitleLabel(t)}getComponentTitleLabel(t){return t.labels.find(t=>t.name.indexOf("component:")>-1)}getZeplinUrl(t){let n=t.body.match(/(https:\/\/(app\.zeplin|zpl)\.io\/)((project\/[a-z,0-9]{24}\/screen\/[a-z,0-9]{24})|(\b(?!project)[a-z,0-9]{7}\b)|(styleguide\/[a-z,0-9]{24}\/components\?(seid|cseid)\=[a-z,0-9]{24}))/i);return n?n[0]:null}getSketchUrl(t){const n=t.body.match(/https:\/\/sketch\.cloud\/s\/[a-z,0-9]{5}\/[a-z,0-9]{7}(\/play)?/i);return n?n[0]:null}isUnderConsiderationOrNotPlanned(t){return!(t.ux.status!==O.underConsideration&&t.ux.status!==O.notCurrentlyPlanned||t.code.status!==P.underConsideration&&t.code.status!==P.notCurrentlyPlanned)}getGithubIssueUrl(t){return C.a.githubBaseUrl+"/issues/"+t}sortItems(t){return t.sort((t,n)=>{let e=this.sortByStatus(t,n);return 0===e&&(t.code.status==P.ready&&n.code.status==P.ready||(e=this.sortByPriority(t,n)),0===e&&(e=this.sortByComponentName(t,n))),e})}sortByStatus(t,n){return T[t.code.status]-T[n.code.status]}sortByPriority(t,n){return 0===t.priority?n.priority:0===n.priority?-t.priority:t.priority-n.priority}sortByComponentName(t,n){return t.title.localeCompare(n.title)}filterItems(t,n,e){const o=new RegExp(n,"i");return t.filter(t=>this.isIncluded(t,e)&&this.matchItem(t,o)).concat(this.getGhostItems(n))}isIncluded(t,n){return!this.isExcluded(t,n)||this.hasIncludedEnhancement(t,n)}isExcluded(t,n){return n.includes(t.code.status)}hasIncludedEnhancement(t,n){return t.code.enhancements&&t.code.enhancements.find(t=>!this.isExcluded(t,n))}matchItem(t,n){return n.test(t.title)||this.matchAliases(t.aliases,n)||this.matchChildComponents(t.children,n)}matchAliases(t,n){return!!Array.isArray(t)&&t.some(t=>n.test(t))}matchChildComponents(t,n){return!!Array.isArray(t)&&t.filter(t=>this.matchItem(t,n)).length>0}getGhostItems(t){const n=this.ghostItems.find(n=>n.name.toLowerCase()===t.toLowerCase());return n?[{title:n.tagline,priority:0,ux:{version:999,status:O.ready,wireFrameUrl:n.url||null},code:{version:999,status:P.ready}}]:[]}getGithubIssues(t){return this.getPageOfIssues(C.a.githubApi+`/repos/kirbydesign/designsystem/issues?labels=${t}&per_page=100`).pipe(Object(d.a)(({nextPageUrl:t})=>t?this.getPageOfIssues(t):u.a),Object(p.a)(({issues:t})=>t),Object(h.a)())}setCurrentGithubStatus(){return new Promise(t=>{this.getGithubProjectStatus().pipe(Object(g.a)()).subscribe(n=>{const e=this.flattenItems(this.items);n.forEach(t=>{e.filter(n=>n.code.githubIssueNo===t.number).forEach(n=>n.code.status=t.status)}),t()})})}flattenItems(t){return t.map(t=>[t,...t.children?this.flattenItems(t.children):[],...t.code&&t.code.enhancements?t.code.enhancements:[]]).reduce((t,n)=>t.concat(n),[])}getGithubProjectCards(t,n){const e={headers:new r.c({Authorization:"token "+C.a.oauth.githubToken1+C.a.oauth.githubToken2,Accept:"application/vnd.github.inertia-preview+json"})};return this.http.get(C.a.githubApi+"/projects/columns/"+t+"/cards",e).pipe(Object(f.a)(t=>(this.gitHubError=!0,this.isLoading=!1,Object(l.a)([]))),Object(b.a)(t=>this.mapGithubCardsToIssues(n,t)))}mapGithubCardsToIssues(t,n){return n.map(n=>{let e=0;const o=n.content_url.match(/issues\/(\d+)$/);return 2===o.length&&(e=+o[1]),{number:e,status:t}})}getGithubProjectStatus(){return Object(m.a)(this.getGithubProjectCards(4590936,P.planned),this.getGithubProjectCards(4590937,P.inProgress),this.getGithubProjectCards(5890332,P.inProgress),this.getGithubProjectCards(4590938,P.ready)).pipe(Object(b.a)(([t,n,e])=>[...t,...n,...e]))}getPageOfIssues(t){const n={headers:new r.c({Authorization:"token "+C.a.oauth.githubToken1+C.a.oauth.githubToken2}),observe:"response"};return this.http.get(t,n).pipe(Object(b.a)(t=>({issues:t.body,nextPageUrl:this.getNextPageUrl(t)})))}getNextPageUrl(t){let n;const e=t.headers.get("Link");if(e){const t=e.match(/<([^>]+)>;\s*rel="next"/);t&&([,n]=t)}return n}}return t.\u0275fac=function(n){return new(n||t)(y.Nb(r.a),y.Nb(I.a))},t.\u0275cmp=y.Hb({type:t,selectors:[["cookbook-component-status"]],decls:66,vars:11,consts:[[1,"hero"],[3,"href"],[4,"ngIf"],["href","https://github.com/kirbydesign/designsystem/projects/1"],[1,"search"],["autofocus","","type","text",3,"keyup"],["class","github-error",4,"ngIf"],[1,"filter"],[3,"value","ionChange"],["class","component-status",4,"ngIf","ngIfElse"],["itemTemplate",""],["enhancementTemplate",""],["componentTemplate",""],["codeTemplate",""],["uxTemplate",""],["versionTemplate",""],["uxStatusTemplate",""],["codeStatusTemplate",""],["loading",""],[1,"github-error"],["name","alert","color","danger"],[1,"component-status"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["componentrow",""],["color","medium",3,"name","click",4,"ngIf"],["color","medium",3,"name","click"],[3,"class","someday-maybe",4,"ngFor","ngForOf"],["themeColor","warning",1,"vnext"],[3,"routerLink",4,"ngIf"],[3,"routerLink"],[3,"innerHTML"],[3,"href",4,"ngIf"],["name","open",4,"ngIf"],["name","open"],[1,"version"],["color","medium","name","heart-empty",4,"ngIf"],["color","success","name","heart-empty",4,"ngIf"],["color","success","name","heart-half",4,"ngIf"],["name","heart","color","success",4,"ngIf"],["color","medium","name","heart-dislike",4,"ngIf"],["color","medium","name","heart-empty"],["color","success","name","heart-empty"],["color","success","name","heart-half"],["name","heart","color","success"],["color","medium","name","heart-dislike"]],template:function(t,n){if(1&t&&(y.Tb(0,"div",0),y.Tb(1,"h1"),y.Hc(2,"Component Status"),y.Sb(),y.Sb(),y.Tb(3,"p"),y.Hc(4," The latest component updates and changes. If you have a suggestion for a new component not listed here, an enhancement to an existing component or you found a bug, "),y.Tb(5,"a",1),y.Hc(6,"create an issue on GitHub"),y.Sb(),y.Sb(),y.Fc(7,_,4,2,"p",2),y.gc(8,"async"),y.Tb(9,"p"),y.Hc(10," You can follow working progress "),y.Tb(11,"a",3),y.Hc(12,"here - Kirby kan-ban board"),y.Sb(),y.Sb(),y.Tb(13,"h2"),y.Hc(14,"Versioning of components"),y.Sb(),y.Tb(15,"table"),y.Tb(16,"tr"),y.Tb(17,"td"),y.Hc(18,"v1.0"),y.Sb(),y.Tb(19,"td"),y.Hc(20,"Production ready"),y.Sb(),y.Sb(),y.Tb(21,"tr"),y.Tb(22,"td"),y.Hc(23,"v0.9"),y.Sb(),y.Tb(24,"td"),y.Hc(25,"Almost ready"),y.Sb(),y.Sb(),y.Tb(26,"tr"),y.Tb(27,"td"),y.Hc(28,"v0.5"),y.Sb(),y.Tb(29,"td"),y.Hc(30,"Halfway ready for production"),y.Sb(),y.Sb(),y.Tb(31,"tr"),y.Tb(32,"td"),y.Hc(33,"v0.1"),y.Sb(),y.Tb(34,"td"),y.Hc(35,"Walking Skeleton"),y.Sb(),y.Sb(),y.Sb(),y.Ob(36,"br"),y.Ob(37,"br"),y.Tb(38,"div",4),y.Hc(39," Search Component(s): "),y.Tb(40,"input",5),y.bc("keyup",function(t){return n.searchTerm$.next(t.target.value)}),y.Sb(),y.Sb(),y.Fc(41,F,3,0,"div",6),y.Tb(42,"div",7),y.Tb(43,"ion-item"),y.Tb(44,"ion-label"),y.Hc(45,"Only show components in progress:"),y.Sb(),y.Tb(46,"ion-toggle",8),y.bc("ionChange",function(t){return n.toggleExcluded(t)}),y.Sb(),y.Sb(),y.Sb(),y.Fc(47,E,11,3,"table",9),y.Fc(48,q,10,26,"ng-template",null,10,y.Gc),y.Fc(50,Q,1,1,"ng-template",null,11,y.Gc),y.Fc(52,X,2,2,"ng-template",null,12,y.Gc),y.Fc(54,et,4,10,"ng-template",null,13,y.Gc),y.Fc(56,at,4,10,"ng-template",null,14,y.Gc),y.Fc(58,lt,1,1,"ng-template",null,15,y.Gc),y.Fc(60,ht,5,5,"ng-template",null,16,y.Gc),y.Fc(62,yt,5,5,"ng-template",null,17,y.Gc),y.Fc(64,It,1,0,"ng-template",null,18,y.Gc)),2&t){const t=y.vc(65);y.Bb(5),y.mc("href",n.newIssueUrl,y.Cc),y.Bb(2),y.mc("ngIf",y.hc(8,6,n.milestone$)),y.Bb(34),y.mc("ngIf",n.gitHubError),y.Bb(5),y.mc("value",y.rc(8,Mt,n.codeStatusEnum.ready,n.codeStatusEnum.notCurrentlyPlanned)),y.Bb(1),y.mc("ngIf",!n.isLoading)("ngIfElse",t)}},directives:[c.r,i.p,i.v,i.N,i.b,i.o,c.q,c.s,M.a,o.j,i.T,S.a],pipes:[c.b,c.g],styles:['[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.search[_ngcontent-%COMP%]{margin-bottom:1rem}.github-error[_ngcontent-%COMP%]{font-style:italic}.github-error[_ngcontent-%COMP%]   ion-icon[name=alert][_ngcontent-%COMP%]{font-size:24px;vertical-align:text-bottom}.component-status[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;border-spacing:0;margin-left:1rem}.component-status[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{text-align:left}.component-status[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:400;line-height:1.6;text-transform:uppercase;letter-spacing:.1rem;padding:1rem;font-size:1.3rem}.component-status[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{padding-left:0}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%]{vertical-align:middle}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%]   .component[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{cursor:pointer;display:block;position:absolute;margin-left:-2rem;font-size:24px}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%] ~ .enhancement-subcomponent[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%] ~ .subcomponent[_ngcontent-%COMP%]{display:none}.component-status[_ngcontent-%COMP%]   tr.component.expanded[_ngcontent-%COMP%] ~ .enhancement-subcomponent[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.component.expanded[_ngcontent-%COMP%] ~ .subcomponent[_ngcontent-%COMP%]{display:table-row}.component-status[_ngcontent-%COMP%]   tr.component[_ngcontent-%COMP%]{border-top:.1rem solid var(--kirby-medium)}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]{vertical-align:middle;border-top:.1rem dashed var(--kirby-medium);color:var(--kirby-dark-tint);font-size:14px}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:1rem}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--kirby-dark-tint)}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   .vnext[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.subcomponent[_ngcontent-%COMP%]   .vnext[_ngcontent-%COMP%]{font-style:normal}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.component-status[_ngcontent-%COMP%]   tr.enhancement-subcomponent[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:2rem}.component-status[_ngcontent-%COMP%]   tr.enhancement[_ngcontent-%COMP%]   ion-icon[name=add-circle][_ngcontent-%COMP%]{font-size:16px;vertical-align:sub}.component-status[_ngcontent-%COMP%]   tr.someday-maybe[_ngcontent-%COMP%], .component-status[_ngcontent-%COMP%]   tr.someday-maybe[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--kirby-dark-tint);font-style:italic}.component-status[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:1rem}.component-status[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0}.component-status[_ngcontent-%COMP%]   td.component[_ngcontent-%COMP%]{font-weight:700}.component-status[_ngcontent-%COMP%]   a[href^="https://"][_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{vertical-align:sub;font-size:18px}.component-status[_ngcontent-%COMP%]   a[href^="https://"][_ngcontent-%COMP%]   ion-icon[name=open][_ngcontent-%COMP%]{color:var(--kirby-dark-tint)}.component-status[_ngcontent-%COMP%]   kirby-badge[_ngcontent-%COMP%]{vertical-align:sub}.component-status[_ngcontent-%COMP%]   kirby-badge.version[_ngcontent-%COMP%]{margin-left:.5rem;--ion-color-base:var(--kirby-semi-dark);--ion-color-contrast:var(--kirby-white)}']}),t})(),_t=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=y.Lb({type:t}),t.\u0275inj=y.Kb({imports:[[c.c,o.k.forChild([{path:"",component:St}]),i.P,s.j]]}),t})()}}]);