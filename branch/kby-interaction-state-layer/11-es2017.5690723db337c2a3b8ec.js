(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4T1Y":function(n,e,t){"use strict";t.r(e),e.default="@use '~@kirbydesign/core/src/scss/utils';\n\n/* Configure grid properties */\n$columns: 12;\n$gap: utils.size('m');\n\n/* Declare the grid container */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat($columns, 1fr);\n  gap: $gap;\n}\n\n/* Let grid items span all columns by default */\n.grid-item {\n  grid-column: span $columns;\n}\n\n/* Tablet size and above */\n@include utils.media('>=medium') {\n  .half-at-tablet-up {\n    grid-column: span ($columns * 0.5);\n  }\n}\n\n/* Desktop size and above */\n@include utils.media('>=large') {\n  .half-at-desktop-up {\n    grid-column: span ($columns * 0.5);\n  }\n\n  .third-at-desktop-up {\n    grid-column: span ($columns / 3);\n  }\n}\n\n/* Additional styles that are not essential to the example */\nmain {\n  background-color: var(--kirby-background-color);\n  min-height: 100%;\n  padding-block: 2rem 5rem;\n}\n"},"4aWZ":function(n,e,t){"use strict";t.r(e),e.default="@use '~@kirbydesign/core/src/scss/utils';\n\n/* Configure grid properties */\n$columns: 12;\n$gap: utils.size('m');\n\n/* Declare the grid container */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat($columns, 1fr);\n  gap: $gap;\n}\n\n/* Let grid items span all columns by default */\n.grid-item {\n  grid-column: span $columns;\n}\n\n/* Tablet size and above */\n@include utils.media('>=medium') {\n  .half-at-tablet-up {\n    grid-column: span ($columns * 0.5);\n  }\n}\n\n/* Desktop size and above */\n@include utils.media('>=large') {\n  .half-at-desktop-up {\n    grid-column: span ($columns * 0.5);\n  }\n\n  .third-at-desktop-up {\n    grid-column: span ($columns / 3);\n  }\n}\n\n/*********************************************************\n  Additional styles that are not essential to the example\n *********************************************************/\n\n$gutter: 16px;\n$safe-area: 16px;\n$max-width: 1196px;\n\nmain {\n  background-color: var(--kirby-background-color);\n  min-height: 100%;\n}\n\n.max-width-container {\n  max-width: $max-width;\n  margin-inline: auto;\n}\n\n.gutter {\n  padding-inline: $gutter;\n}\n\n.safe-area-inline {\n  padding-inline: $gutter;\n}\n\n.box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n\n.align-center {\n  text-align: center;\n}\n\n/*\n  Hidden area for demonstrating the non- parts of the layout.\n  Only visible when containing <main> element has class=\"debug\".\n*/\n.not-grid {\n  display: none;\n}\n\n.example-text {\n  &,\n  & > p {\n    font-size: clamp(1rem, 5vw, 2rem);\n  }\n}\n\n/* Extra Color Bonanza */\n.debug {\n  kirby-card {\n    --kirby-card-main-background-color: var(--kirby-white-contrast);\n    --kirby-card-main-color: var(--kirby-white);\n  }\n\n  h1,\n  h2 {\n    background-color: #fff;\n    color: #000;\n  }\n\n  .not-grid {\n    display: block;\n  }\n\n  .gutter {\n    background-color: chartreuse;\n    color: #000;\n  }\n\n  .safe-area-inline {\n    background-color: darkcyan;\n    color: #000;\n  }\n\n  .box {\n    background-color: hotpink;\n    color: #000;\n  }\n\n  #example-1 {\n    background-color: crimson;\n    color: #fff;\n  }\n\n  #example-2 {\n    background-color: rebeccapurple;\n    color: #fff;\n  }\n\n  #example-3 {\n    background-color: deepskyblue;\n    color: #000;\n  }\n}\n"},BXJT:function(n,e,t){"use strict";t.r(e),t.d(e,"GuideModule",function(){return g});var i=t("ofXK"),a=t("tyNb"),r=t("pW9a"),l=t("Mrki"),s=t("ZQSJ"),d=t("nEp1"),c=t("fXoL"),o=t("3TdF");let u=(()=>{class n{constructor(){this.exampleHtml=t("bab+").default,this.exampleCss=t("4aWZ").default}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ib({type:n,selectors:[["cookbook-grid-layout-extended"]],decls:4,vars:2,consts:[[3,"html"],[3,"scss"]],template:function(n,e){1&n&&(c.Ub(0,"h1"),c.Ic(1,"Grid Layout - extended"),c.Tb(),c.Pb(2,"cookbook-code-viewer",0),c.Pb(3,"cookbook-code-viewer",1)),2&n&&(c.Cb(2),c.nc("html",e.exampleHtml),c.Cb(1),c.nc("scss",e.exampleCss))},directives:[o.a],encapsulation:2}),n})(),b=(()=>{class n{constructor(){this.exampleHtml=t("ZZM4").default,this.exampleCss=t("4T1Y").default}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ib({type:n,selectors:[["cookbook-grid-layout-multiple-containers"]],decls:4,vars:2,consts:[[3,"html"],[3,"scss"]],template:function(n,e){1&n&&(c.Ub(0,"h1"),c.Ic(1,"Grid Layout - multiple grid containers"),c.Tb(),c.Pb(2,"cookbook-code-viewer",0),c.Pb(3,"cookbook-code-viewer",1)),2&n&&(c.Cb(2),c.nc("html",e.exampleHtml),c.Cb(1),c.nc("scss",e.exampleCss))},directives:[o.a],encapsulation:2}),n})(),m=(()=>{class n{constructor(){this.exampleHtml=t("gfkj").default,this.exampleCss=t("jcIk").default}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ib({type:n,selectors:[["cookbook-grid-layout-single-container"]],decls:4,vars:2,consts:[[3,"html"],[3,"scss"]],template:function(n,e){1&n&&(c.Ub(0,"h1"),c.Ic(1,"Grid Layout - single grid container"),c.Tb(),c.Pb(2,"cookbook-code-viewer",0),c.Pb(3,"cookbook-code-viewer",1)),2&n&&(c.Cb(2),c.nc("html",e.exampleHtml),c.Cb(1),c.nc("scss",e.exampleCss))},directives:[o.a],encapsulation:2}),n})();const p=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ib({type:n,selectors:[["cookbook-guides"]],decls:66,vars:8,consts:[["scope","col"],[3,"routerLink"],["href","https://ionicframework.com/docs/angular/virtual-scroll"],["href","https://material.angular.io/cdk/scrolling/overview"]],template:function(n,e){1&n&&(c.Ub(0,"article"),c.Ub(1,"h1"),c.Ic(2,"Kirby Guides"),c.Tb(),c.Ub(3,"p"),c.Ic(4," This section of the cookbook aims to bring together a few simple guides for common tasks. The guides are not complete solutions but working examples and code you can use as a starting point in your projects. "),c.Tb(),c.Ub(5,"h2"),c.Ic(6,"Virtual Scrolling"),c.Tb(),c.Ub(7,"table"),c.Ub(8,"thead"),c.Ub(9,"tr"),c.Ub(10,"th",0),c.Ic(11,"Example"),c.Tb(),c.Ub(12,"th",0),c.Ic(13,"Description"),c.Tb(),c.Tb(),c.Tb(),c.Ub(14,"tbody"),c.Ub(15,"tr"),c.Ub(16,"td"),c.Ub(17,"a",1),c.Ic(18,"List with virtual scrolling"),c.Tb(),c.Tb(),c.Ub(19,"td"),c.Ub(20,"p"),c.Ic(21," Basic list with virtual scrolling based on the Angular CDK Virtual Scroller. At the moment, CDK Virtual Scroller only supports fixed sized elements. For further information see "),c.Ub(22,"a",2),c.Ic(23,"Ionic Docs"),c.Tb(),c.Ic(24," and "),c.Ub(25,"a",3),c.Ic(26,"CDK Virtual Scrolling docs."),c.Tb(),c.Tb(),c.Ub(27,"a",1),c.Ic(28,"Show me the code"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(29,"h2"),c.Ic(30,"Grid Layout"),c.Tb(),c.Ub(31,"table"),c.Ub(32,"thead"),c.Ub(33,"tr"),c.Ub(34,"th",0),c.Ic(35,"Layout Recipe"),c.Tb(),c.Ub(36,"th",0),c.Ic(37,"Description"),c.Tb(),c.Tb(),c.Tb(),c.Ub(38,"tbody"),c.Ub(39,"tr"),c.Ub(40,"td"),c.Ub(41,"a",1),c.Ic(42,"Single grid container"),c.Tb(),c.Tb(),c.Ub(43,"td"),c.Ub(44,"p"),c.Ic(45," Basic example. Everything is within a single grid container. Contains some decorational styles, but no additional layout styles. "),c.Tb(),c.Ub(46,"a",1),c.Ic(47,"Show me the code"),c.Tb(),c.Tb(),c.Tb(),c.Ub(48,"tr"),c.Ub(49,"td"),c.Ub(50,"a",1),c.Ic(51,"Multiple grid containers"),c.Tb(),c.Tb(),c.Ub(52,"td"),c.Ub(53,"p"),c.Ic(54," The same layout as the single grid container example. Created with multiple grid containers. Contains some decorational styles, but no additional layout styles. "),c.Tb(),c.Ub(55,"a",1),c.Ic(56,"Show me the code"),c.Tb(),c.Tb(),c.Tb(),c.Ub(57,"tr"),c.Ub(58,"td"),c.Ub(59,"a",1),c.Ic(60,"Extended example"),c.Tb(),c.Tb(),c.Ub(61,"td"),c.Ub(62,"p"),c.Ic(63," The same layout as the basic examples, but with additional layout styles applied, e.g., there are constructs for a max-width container and for gutter. "),c.Tb(),c.Ub(64,"a",1),c.Ic(65,"Show me the code"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&n&&(c.Cb(17),c.nc("routerLink","/examples/virtual-scroll-list"),c.Cb(10),c.nc("routerLink","virtual-scroll-list"),c.Cb(14),c.nc("routerLink","/examples/grid-layout-single-container"),c.Cb(5),c.nc("routerLink","grid-layout-single-container"),c.Cb(4),c.nc("routerLink","/examples/grid-layout-multiple-containers"),c.Cb(5),c.nc("routerLink","grid-layout-multiple-containers"),c.Cb(4),c.nc("routerLink","/examples/grid-layout-extended"),c.Cb(5),c.nc("routerLink","grid-layout-extended"))},directives:[a.j],styles:["table[_ngcontent-%COMP%]{border-spacing:0;border-collapse:collapse;width:100%;margin-bottom:16px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--kirby-light-tint)}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{min-width:14rem}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid var(--kirby-medium);padding:1rem}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:3.5rem}"]}),n})()},{path:"virtual-scroll-list",component:(()=>{class n{constructor(){this.exampleHtml=t("Y7Dh").default}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ib({type:n,selectors:[["cookbook-list-virtual-scroll"]],decls:3,vars:1,consts:[[3,"html"]],template:function(n,e){1&n&&(c.Ub(0,"h1"),c.Ic(1,"Virtual Scroll - List"),c.Tb(),c.Pb(2,"cookbook-code-viewer",0)),2&n&&(c.Cb(2),c.nc("html",e.exampleHtml))},directives:[o.a],encapsulation:2}),n})()},{path:"grid-layout-single-container",component:m},{path:"grid-layout-multiple-containers",component:b},{path:"grid-layout-extended",component:u}];let g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Mb({type:n}),n.\u0275inj=c.Lb({imports:[[i.c,a.k.forChild(p),r.j,s.a,d.a,l.a]]}),n})()},Y7Dh:function(n,e,t){"use strict";t.r(e),e.default='<kirby-page title="Items">\n  <kirby-page-content>\n    <cdk-virtual-scroll-viewport\n      minBufferPx="840"\n      maxBufferPx="1120"\n      itemSize="56"\n      style="height: 720px;"\n    >\n      <kirby-list-experimental>\n        <kirby-item *cdkVirtualFor="let item of itemsFullList">\n          <h1>{{ item.id }}: {{ item.title }}</h1>\n        </kirby-item>\n      </kirby-list-experimental>\n    </cdk-virtual-scroll-viewport>\n  </kirby-page-content>\n</kirby-page>\n'},ZZM4:function(n,e,t){"use strict";t.r(e),e.default='<main>\n  <h1>Grid Layout - Multiple Grid Containers</h1>\n  <div class="grid-container">\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        1\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        2\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        3\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        4\n      </kirby-card>\n    </div>\n  </div>\n  <p><button kirby-button size="lg">Add</button></p>\n  <p>\n    Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k risk\n    market index.\n  </p>\n  <h1>Heading level 1</h1>\n  <p>\n    Government substantially taxpayer market exposure index funds. Fitch municipal bonds managed.\n  </p>\n  <div class="grid-container">\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n  </div>\n</main>\n'},"bab+":function(n,e,t){"use strict";t.r(e),e.default='<main>\n  <section>\n    <div class="safe-area-inline">\n      <div class="max-width-container gutter">\n        <h1>Grid Layout - Extended Example</h1>\n      </div>\n      <div class="max-width-container">\n        <div class="grid-container">\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">\n                  1\n                </div>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">\n                  2\n                </div>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">\n                  3\n                </div>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">\n                  4\n                </div>\n              </kirby-card>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class="safe-area-inline">\n    <div class="max-width-container gutter">\n      <div class="box">\n        <button kirby-button size="lg">Add</button>\n        <p class="align-center">\n          Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n          risk market index.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <section>\n    <div class="safe-area-inline">\n      <div class="max-width-container gutter">\n        <h1>Heading level 1</h1>\n        <p>\n          Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n          risk market index.\n        </p>\n      </div>\n      <div class="max-width-container">\n        <div class="grid-container">\n          <div class="grid-item half-at-tablet-up third-at-desktop-up">\n            <article>\n              <kirby-card hasPadding="true">\n                <h2>Heading level 2</h2>\n                <p>\n                  Fluctuate interest rates Dow Jones receive rise government term municipal market\n                  Nikkei passively return performance. Public finance holder fiat established bonds\n                  hedge fund benchmark.\n                </p>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up third-at-desktop-up">\n            <article>\n              <kirby-card hasPadding="true">\n                <h2>Heading level 2</h2>\n                <p>\n                  Fluctuate interest rates Dow Jones receive rise government term municipal market\n                  Nikkei passively return performance. Public finance holder fiat established bonds\n                  hedge fund benchmark.\n                </p>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up third-at-desktop-up">\n            <article>\n              <kirby-card hasPadding="true">\n                <h2>Heading level 2</h2>\n                <p>\n                  Fluctuate interest rates Dow Jones receive rise government term municipal market\n                  Nikkei passively return performance. Public finance holder fiat established bonds\n                  hedge fund benchmark.\n                </p>\n              </kirby-card>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  \x3c!--\n    Hidden area for demonstrating non-essential parts of the layout.\n    Only visible when inside a containing element with class="debug".\n    Apply class="debug" to <main> to make the not-grid area visible.\n  --\x3e\n  <div class="not-grid">\n    <div class="safe-area-inline">\n      <div class="max-width-container gutter">\n        <div id="example-1" class="box example-text align-center">\n          <div class="h1">\n            max-width + gutter + safe area\n          </div>\n          .safe-area-inline > .max-width-container.gutter\n        </div>\n      </div>\n    </div>\n    <div class="safe-area-inline">\n      <div id="example-2" class="box example-text align-center">\n        <div class="h1">Full width + safe area</div>\n        .safe-area-inline\n      </div>\n    </div>\n    <div id="example-3" class="box example-text align-center">\n      <div class="h1">Full width</div>\n    </div>\n  </div>\n</main>\n'},gfkj:function(n,e,t){"use strict";t.r(e),e.default='<main>\n  <div class="grid-container">\n    <div class="grid-item">\n      <h1>Grid Layout - Single Grid Container</h1>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        1\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        2\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        3\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">\n        4\n      </kirby-card>\n    </div>\n    <div class="grid-item">\n      <button kirby-button size="lg">Add</button>\n      <p class="align-center">\n        Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n        risk market index.\n      </p>\n    </div>\n    <div class="grid-item">\n      <h1>Heading level 1</h1>\n      <p>\n        Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n        risk market index.\n      </p>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n  </div>\n</main>\n'},jcIk:function(n,e,t){"use strict";t.r(e),e.default="@use '~@kirbydesign/core/src/scss/utils';\n\n/* Configure grid properties */\n$columns: 12;\n$gap: utils.size('m');\n\n/* Declare the grid container */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat($columns, 1fr);\n  gap: $gap;\n}\n\n/* Let grid items span all columns by default */\n.grid-item {\n  grid-column: span $columns;\n}\n\n/* Tablet size and above */\n@include utils.media('>=medium') {\n  .half-at-tablet-up {\n    grid-column: span ($columns * 0.5);\n  }\n}\n\n/* Desktop size and above */\n@include utils.media('>=large') {\n  .half-at-desktop-up {\n    grid-column: span ($columns * 0.5);\n  }\n\n  .third-at-desktop-up {\n    grid-column: span ($columns / 3);\n  }\n}\n\n/* Additional styles that are not essential to the example */\nmain {\n  background-color: var(--kirby-background-color);\n  min-height: 100%;\n  padding-block: 2rem 5rem;\n}\n"}}]);