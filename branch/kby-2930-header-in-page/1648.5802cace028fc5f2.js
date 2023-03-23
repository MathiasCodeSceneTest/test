"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[1648],{31648:(Qt,m,t)=>{t.r(m),t.d(m,{ExamplesRoutingModule:()=>Dt});var l=t(53666),i=t(76005),x=t(14289),v=t(93300),r=t(21689),g=t(5807),f=t(2469),y=t(46045),C=t(49618),M=t(87220),E=t(19906),A=t(10680),T=t(39426),Z=t(20814),u=t(99910),F=t(87877),P=t(31861),o=t(94650);let W=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["cookbook-fonts-example"]],decls:10,vars:0,consts:[[1,"kirby-text-large"],[1,"kirby-text-xsmall"],[1,"kirby-text-xxsmall"]],template:function(a,Kt){1&a&&(o.TgZ(0,"h1"),o._uU(1,"Heading 1"),o.qZA(),o.TgZ(2,"h2"),o._uU(3,"Heading 2"),o.qZA(),o.TgZ(4,"p",0),o._uU(5,"Kirby-text-large"),o.qZA(),o.TgZ(6,"p",1),o._uU(7,"xsmall text"),o.qZA(),o.TgZ(8,"p",2),o._uU(9,"xxsmall text"),o.qZA())},encapsulation:2}),n})();var O=t(76929),H=t(4459),U=t(6472),j=t(80081),B=t(4832),L=t(19706),V=t(2887),D=t(63729),K=t(46662),Q=t(88020),R=t(75139),X=t(96392),S=t(83173),z=t(5373),I=t(75168),N=t(63910),J=t(11446),Y=t(68251),$=t(5871),G=t(44257),b=t(55309),k=t(29514),w=t(53419);let q=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["cookbook-list-example"]],decls:2,vars:0,template:function(a,Kt){1&a&&(o.TgZ(0,"kirby-app"),o._UZ(1,"kirby-router-outlet"),o.qZA())},dependencies:[k.y,w.O],styles:["[_nghost-%COMP%]{padding:2px;width:100%;background:var(--kirby-background-color);height:100%;display:block}hr[_ngcontent-%COMP%]{visibility:hidden}h2[_ngcontent-%COMP%]{margin-top:40px}.footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px}.footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}"]}),n})();var _=t(29547),tt=t(63397),ot=t(92069),nt=t(76409),at=t(18900),c=t(66201),et=t(88393),pt=t(33658),d=t(62660),h=t(31238),mt=t(26500),lt=t(97220),ct=t(59423),dt=t(27943),ht=t(48709),st=t(83939),it=t(45439),xt=t(87946),vt=t(78490),rt=t(50101),gt=t(59570),ft=t(28056),yt=t(12867),Ct=t(98151),Mt=t(48001),Et=t(88374),At=t(32418),Tt=t(48593),Zt=t(22876),e=t(16334),ut=t(24680),Ft=t(55244),Pt=t(89270),Wt=t(68851),s=t(78050),Ot=t(64755),Ht=t(89907),Ut=t(95531),jt=t(63906),Bt=t(83387),Lt=t(3750);const Vt=[{path:"",component:u.k,children:[{path:"page",children:[{path:"",redirectTo:"simple",pathMatch:"full"},{path:"simple",component:vt.D},{path:"alignment-toolbar-title",component:ct.j},{path:"fit-heading",component:dt.t},{path:"fixed",component:it.X},{path:"fixed-footer",component:ht.u,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:st.q,data:{title:"Dashboard"}},{path:"account",children:[{path:"",component:e.W,data:{title:"Account"}},{path:"sub",component:e.W,data:{title:"Account Sub"}}]},{path:"inbox",component:e.W,data:{title:"Inbox"}}]},{path:"custom-title",component:lt.q},{path:"advanced",component:mt._},{path:"pull-to-refresh",component:Ot.i},{path:"content-width",component:xt.E},{path:"header-and-action-group",component:Lt.Q}]},{path:"tabs",component:ut.c,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:e.W,data:{title:"Dashboard"}},{path:"account",children:[{path:"",component:e.W,data:{title:"Account"}},{path:"sub",component:e.W,data:{title:"Account Sub"}}]},{path:"inbox",component:e.W,data:{title:"Inbox"}}]},{path:"reorder-list",component:yt.r},{path:"modal",component:c.Q,children:[{path:"page1",outlet:"modal",component:d.V},{path:"page2",outlet:"modal",component:h.F}]},{path:"modal-route-with-url-param/:id",component:c.Q,children:[{path:"page1",outlet:"modal",component:d.V},{path:"page2",outlet:"modal",component:h.F}]},{path:"modal-v2",children:[{path:"fullscreen",component:et.BH},{path:"drawer",component:pt.O1},{path:"nested",component:Bt.T7}]},{path:"form-field",children:[{path:"",component:U.p},{path:"date",component:O.c},{path:"decimal-mask",component:H.h}]},{path:"experimental",loadChildren:()=>Promise.resolve().then(t.bind(t,1022)).then(n=>n.ExperimentalExamplesModule)}]},{path:"item",component:K.b},{path:"item-sliding",component:R.b},{path:"item-group",component:Q.A},{path:"section-header",component:Ct.s},{path:"button",component:y.k},{path:"slide-button",component:Et.t},{path:"card",component:E.x},{path:"list",component:q,children:[{path:"",pathMatch:"full",redirectTo:"with-items"},{path:"with-items",component:z.A},{path:"with-selectable-items",component:G.f},{path:"with-colored-items",component:S.$},{path:"with-sections-and-colored-items",component:Y.B},{path:"with-header-and-footer",component:I.d},{path:"with-sections",component:J.N},{path:"with-items-no-dividers",component:N.u},{path:"with-stand-alone",component:b.k},{path:"with-sections-and-stand-alone",component:$._}]},{path:"list-swipe",component:nt.x},{path:"list-no-shape",component:ot.H},{path:"list-load-on-demand",component:tt.v},{path:"list-experimental",component:_.t},{path:"chart",component:A.e},{path:"grid",component:j.E},{path:"grid-layout-single-container",component:V.n},{path:"grid-layout-multiple-containers",component:L.M},{path:"grid-layout-extended",component:B.W},{path:"virtual-scroll-list",component:s.P},{path:"avatar",component:g.W},{path:"fonts",component:W},{path:"spinner",component:Tt.V},{path:"loading-overlay",component:at.h},{path:"action-sheet",component:v.o},{path:"alert",component:r.k},{path:"segmented-control",component:Mt.d},{path:"badge",component:f.j},{path:"flag",component:P.Q},{path:"icon",component:D.x},{path:"checkbox",component:T.K},{path:"toast",component:Ft.N},{path:"toggle",component:Wt.H},{path:"calendar",component:M.H},{path:"calendar-card",component:C.K},{path:"empty-state",component:Z.s},{path:"fab-sheet",component:F.u},{path:"dropdown",component:Ht.X},{path:"progress-circle",component:rt.Z},{path:"toggle-button",component:Pt.K},{path:"slides",component:At.A},{path:"accordion",component:x.D},{path:"radio",component:gt.V},{path:"range",component:ft.c},{path:"link",component:X.V},{path:"styling-HTML-lists",component:Zt.v},{path:"data-table",component:Ut.j},{path:"header",component:jt.p}];let Dt=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[l.Bz.forChild(Vt),i.Y,l.Bz]}),n})()}}]);