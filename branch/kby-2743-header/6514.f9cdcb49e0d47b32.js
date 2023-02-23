"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[6514],{46514:(H,l,r)=>{r.r(l),r.d(l,{GuideModule:()=>J});var m=r(36895),o=r(86814),b=r(15004),v=r(19338),k=r(9909),y=r(39658),f=r(50730),x=r(68900),e=r(94650),Z=r(68924),s=r(46379),_=r(24771);let d=(()=>{class n{constructor(){this.guideChartHtml='<div style="position: relative; height: 300px;">\n  <canvas id="{{ canvasId }}"> \x3c!-- Your accessible content here --\x3e</canvas>\n</div>',this.demoDataExample=`private ${x.Y.demoDataString}`,this.chartProperties="private _chart: Chart;",this.createChartFunctionExample="private _chart: Chart;\npublic ngOnDestroy(): void {\n   this._chart.destroy();\n }\n\nprivate createChart() {\n   let config = StockChartConfig.baseConfig;\n\n   config = {\n     ...config,\n     data: {\n       datasets: [\n         {\n           data: this.demoData.map((demoDataEntry) => demoDataEntry),\n         },\n       ],\n       labels: this.demoData.map((demoDataEntry) => demoDataEntry.x),\n     },\n   };\n   this._chart = new Chart(this.canvasId, config);\n }",this.inintExample="public ngAfterViewInit(): void {\n    StockChartConfig.registerPlugins();\n    this.createChart();\n}",this.destroyExample="public ngOnDestroy(): void {\n  this._chart.destroy();\n}"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cookbook-chart-config-guide"]],decls:132,vars:19,consts:[["href","https://www.chartjs.org/"],["routerLink","../../showcase/chart-stock-config"],["href","https://github.com/kirbydesign/designsystem/blob/develop/libs/designsystem/src/lib/components/charts/chart-config/chart-base-config.ts"],["href","https://github.com/kirbydesign/designsystem/blob/develop/libs/designsystem/src/lib/components/charts/chart-config/chart-stock-config/chart-stock-config.ts"],["href",""],[3,"hasPadding"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"],[3,"html","language","inlineLabel"],["href","https://www.chartjs.org/docs/latest/general/accessibility.html"],["href","https://www.chartjs.org/docs/latest/configuration/responsive.html#important-note"],[3,"inlineLabel","ts","language"],["href","https://angular.io/api/core/OnInit"],["href","https://angular.io/api/core/AfterViewInit"],["href","https://angular.io/api/core/OnDestroy"]],template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Chart config"),e.qZA(),e.TgZ(2,"p"),e._uU(3," The Kirby charts are based on a config strategy. The aim of this is to give the implementer full control of the chart. Kirby simply provides some configurations which must be passed to a "),e.TgZ(4,"a",0),e._uU(5,"ChartJS"),e.qZA(),e._uU(6," chart. "),e._UZ(7,"br")(8,"br"),e._uU(9," To see more showcases on how to implement charts, please click "),e.TgZ(10,"a",1),e._uU(11,"here"),e.qZA(),e._uU(12," .\n"),e.qZA(),e.TgZ(13,"h3"),e._uU(14,"Structure"),e.qZA(),e.TgZ(15,"p"),e._uU(16," Each chart type (line, stock, bar, pie) is served through a Kirby chart config class which is inherited from a base class "),e.TgZ(17,"code")(18,"a",2),e._uU(19," ChartBaseConfig "),e.qZA()(),e._uU(20," : "),e._UZ(21,"br"),e.TgZ(22,"code")(23,"a",3),e._uU(24," StockChartConfig "),e.qZA()(),e._UZ(25,"br"),e.TgZ(26,"code")(27,"a",4),e._uU(28,"BarChartConfig"),e.qZA(),e._uU(29," // Not yet implemented "),e.qZA()(),e.TgZ(30,"p"),e._uU(31,"In this guide we'll implement the following chart:"),e.qZA(),e.TgZ(32,"kirby-card",5),e._UZ(33,"cookbook-chart-example-config-base-stock"),e.qZA(),e._UZ(34,"br"),e.TgZ(35,"h3"),e._uU(36,"Getting started"),e.qZA(),e.TgZ(37,"p"),e._uU(38,"To implement a Kirby chart, you'll need three things:"),e.qZA(),e.TgZ(39,"ul")(40,"li")(41,"a",0),e._uU(42,"ChartJS"),e.qZA()(),e.TgZ(43,"li"),e._uU(44," A HTML "),e.TgZ(45,"a",6),e._uU(46,"canvas"),e.qZA(),e._uU(47," element "),e.qZA(),e.TgZ(48,"li"),e._uU(49,"Kirby chart config"),e.qZA()(),e.TgZ(50,"p"),e._uU(51," In your component template, add a canvas to your HTML and give it an "),e.TgZ(52,"code"),e._uU(53,"id"),e.qZA(),e._uU(54," :\n"),e.qZA(),e._UZ(55,"cookbook-code-viewer",7),e.TgZ(56,"p"),e._uU(57," It is up to the implementer to ensure the proper accessibility for the chart. Read more about ChartJS accessibility "),e.TgZ(58,"a",8),e._uU(59,"here"),e.qZA(),e._uU(60," .\n"),e.qZA(),e.TgZ(61,"p"),e._uU(62," The canvas must be wrapped in an element with "),e.TgZ(63,"code"),e._uU(64,"position: relative"),e.qZA(),e._uU(65," in order to be responsive. A thorough explanation can be found "),e.TgZ(66,"a",9),e._uU(67," here "),e.qZA(),e._uU(68," .\n"),e.qZA(),e.TgZ(69,"p"),e._uU(70," Add a property of type "),e.TgZ(71,"code"),e._uU(72,"Chart"),e.qZA(),e._uU(73," (from ChartJS). This will be used later to destroy the object.\n"),e.qZA(),e._UZ(74,"cookbook-code-viewer",10),e.TgZ(75,"h3"),e._uU(76,"Test data"),e.qZA(),e.TgZ(77,"p"),e._uU(78," Add some test data of type "),e.TgZ(79,"code"),e._uU(80,"ScatterPoint[]"),e.qZA(),e._uU(81," .\n"),e.qZA(),e._UZ(82,"cookbook-code-viewer",10),e.TgZ(83,"h3"),e._uU(84,"Configure the chart"),e.qZA(),e._uU(85,"\nIn a function, perform the following steps\n"),e.TgZ(86,"ul")(87,"li"),e._uU(88," Get the base config from the "),e.TgZ(89,"code"),e._uU(90,"StockChartConfig"),e.qZA()(),e.TgZ(91,"li"),e._uU(92,"Set the data"),e.qZA(),e.TgZ(93,"li"),e._uU(94," Create the "),e.TgZ(95,"code"),e._uU(96,"Chart"),e.qZA(),e._uU(97," object with the same id as on your canvas element and pass the config "),e.qZA()(),e._UZ(98,"cookbook-code-viewer",10),e.TgZ(99,"h3"),e._uU(100,"Instantiate the chart"),e.qZA(),e.TgZ(101,"p"),e._uU(102," The StockChart utilizes some standard plugins from ChartJS. These are registered using "),e.TgZ(103,"code"),e._uU(104,"registerPlugins"),e.qZA()(),e.TgZ(105,"p"),e._uU(106," The "),e.TgZ(107,"code"),e._uU(108,"createChart"),e.qZA(),e._uU(109," and "),e.TgZ(110,"code"),e._uU(111,"registerPlugins"),e.qZA(),e._uU(112," functions must be called in the "),e.TgZ(113,"code")(114,"a",11),e._uU(115,"ngOnInit"),e.qZA()(),e._uU(116," or "),e.TgZ(117,"code")(118,"a",12),e._uU(119,"ngAfterViewIinit"),e.qZA()(),e._uU(120," hook.\n"),e.qZA(),e._UZ(121,"cookbook-code-viewer",10)(122,"br"),e.TgZ(123,"h3"),e._uU(124,"Destruct the chart"),e.qZA(),e.TgZ(125,"p"),e._uU(126," Make sure to destruct the chart object when the component is destroyed in the "),e.TgZ(127,"code")(128,"a",13),e._uU(129,"ngOnDestroy"),e.qZA()(),e._uU(130," hook:\n"),e.qZA(),e._UZ(131,"cookbook-code-viewer",10)),2&t&&(e.xp6(32),e.Q6J("hasPadding",!0),e.xp6(23),e.Q6J("html",i.guideChartHtml)("language","html")("inlineLabel",!0),e.xp6(19),e.Q6J("inlineLabel",!0)("ts",i.chartProperties)("language","ts"),e.xp6(8),e.Q6J("inlineLabel",!0)("ts",i.demoDataExample)("language","ts"),e.xp6(16),e.Q6J("inlineLabel",!0)("ts",i.createChartFunctionExample)("language","ts"),e.xp6(23),e.Q6J("inlineLabel",!0)("ts",i.inintExample)("language","ts"),e.xp6(10),e.Q6J("inlineLabel",!0)("ts",i.destroyExample)("language","ts"))},dependencies:[o.rH,Z.A,s.V,_.T],encapsulation:2}),n})(),c=(()=>{class n{constructor(){this.exampleHtml='<main>\n  <section>\n    <div class="safe-area-inline">\n      <div class="max-width-container gutter">\n        <h1>Grid Layout - Extended Example</h1>\n      </div>\n      <div class="max-width-container">\n        <div class="grid-container">\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">1</div>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">2</div>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">3</div>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up">\n            <article>\n              <div class="gutter">\n                <h2>Heading level 2</h2>\n              </div>\n              <kirby-card hasPadding="true">\n                <div class="box example-text align-center">4</div>\n              </kirby-card>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class="safe-area-inline">\n    <div class="max-width-container gutter">\n      <div class="box">\n        <button kirby-button size="lg">Add</button>\n        <p class="align-center">\n          Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n          risk market index.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <section>\n    <div class="safe-area-inline">\n      <div class="max-width-container gutter">\n        <h1>Heading level 1</h1>\n        <p>\n          Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n          risk market index.\n        </p>\n      </div>\n      <div class="max-width-container">\n        <div class="grid-container">\n          <div class="grid-item half-at-tablet-up third-at-desktop-up">\n            <article>\n              <kirby-card hasPadding="true">\n                <h2>Heading level 2</h2>\n                <p>\n                  Fluctuate interest rates Dow Jones receive rise government term municipal market\n                  Nikkei passively return performance. Public finance holder fiat established bonds\n                  hedge fund benchmark.\n                </p>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up third-at-desktop-up">\n            <article>\n              <kirby-card hasPadding="true">\n                <h2>Heading level 2</h2>\n                <p>\n                  Fluctuate interest rates Dow Jones receive rise government term municipal market\n                  Nikkei passively return performance. Public finance holder fiat established bonds\n                  hedge fund benchmark.\n                </p>\n              </kirby-card>\n            </article>\n          </div>\n          <div class="grid-item half-at-tablet-up third-at-desktop-up">\n            <article>\n              <kirby-card hasPadding="true">\n                <h2>Heading level 2</h2>\n                <p>\n                  Fluctuate interest rates Dow Jones receive rise government term municipal market\n                  Nikkei passively return performance. Public finance holder fiat established bonds\n                  hedge fund benchmark.\n                </p>\n              </kirby-card>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  \x3c!--\n    Hidden area for demonstrating non-essential parts of the layout.\n    Only visible when inside a containing element with class="debug".\n    Apply class="debug" to <main> to make the not-grid area visible.\n  --\x3e\n  <div class="not-grid">\n    <div class="safe-area-inline">\n      <div class="max-width-container gutter">\n        <div id="example-1" class="box example-text align-center">\n          <div class="h1">max-width + gutter + safe area</div>\n          .safe-area-inline > .max-width-container.gutter\n        </div>\n      </div>\n    </div>\n    <div class="safe-area-inline">\n      <div id="example-2" class="box example-text align-center">\n        <div class="h1">Full width + safe area</div>\n        .safe-area-inline\n      </div>\n    </div>\n    <div id="example-3" class="box example-text align-center">\n      <div class="h1">Full width</div>\n    </div>\n  </div>\n</main>\n',this.exampleCss='/*\n  SPACINGS\n****************************************************************************/\n/*\n  FONT SETTINGS \n****************************************************************************/\n/* Icon\n****************************************************************************/\n/*\n  Z - Index overview\n****************************************************************************/\n/* Breakpoints\n****************************************************************************/\n/* Elevation\n****************************************************************************/\n/* avatar\n****************************************************************************/\n/* Page\n****************************************************************************/\n/* Modal\n****************************************************************************/\n/* Item\n****************************************************************************/\n/* Dropdown\n****************************************************************************/\n/* Button, Checkbox, Page, Radio\n****************************************************************************/\n/* Checkbox, Radio\n****************************************************************************/\n/* Transitions\n****************************************************************************/\n/* stylelint-disable */\n/**\n * Outputs all keys from map as CSS class selector list\n */\n/*\n* This mixin is applied both in the section-header styles, for using \n* headings and paragraphs directly, and in kirby-label styles, for \n* wrapping them in a kirby-label within a section-header. \n*/\n/*  \n    General imports for components\n    NOTICE: Must not contain anything that generates classes or else it will be generated for every component that imports this file.\n*/\n/* Configure grid properties */\n/* Declare the grid container */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 24px;\n}\n\n/* Let grid items span all columns by default */\n.grid-item {\n  grid-column: span 12;\n}\n\n/* Tablet size and above */\n@media (min-width: 721px) {\n  .half-at-tablet-up {\n    grid-column: span 6;\n  }\n}\n/* Desktop size and above */\n@media (min-width: 1025px) {\n  .half-at-desktop-up {\n    grid-column: span 6;\n  }\n  .third-at-desktop-up {\n    grid-column: span 4;\n  }\n}\n/*********************************************************\n  Additional styles that are not essential to the example\n *********************************************************/\nmain {\n  background-color: var(--kirby-background-color);\n  min-height: 100%;\n}\n\n.max-width-container {\n  max-width: 1196px;\n  margin-inline: auto;\n}\n\n.gutter {\n  padding-inline: 16px;\n}\n\n.safe-area-inline {\n  padding-inline: 16px;\n}\n\n.box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n}\n\n.align-center {\n  text-align: center;\n}\n\n/*\n  Hidden area for demonstrating the non- parts of the layout.\n  Only visible when containing <main> element has class="debug".\n*/\n.not-grid {\n  display: none;\n}\n\n.example-text, .example-text > p {\n  font-size: clamp(1rem, 5vw, 2rem);\n}\n\n/* Extra Color Bonanza */\n.debug kirby-card {\n  --kirby-card-main-background-color: var(--kirby-white-contrast);\n  --kirby-card-main-color: var(--kirby-white);\n}\n.debug h1,\n.debug h2 {\n  background-color: #fff;\n  color: #000;\n}\n.debug .not-grid {\n  display: block;\n}\n.debug .gutter {\n  background-color: chartreuse;\n  color: #000;\n}\n.debug .safe-area-inline {\n  background-color: darkcyan;\n  color: #000;\n}\n.debug .box {\n  background-color: hotpink;\n  color: #000;\n}\n.debug #example-1 {\n  background-color: crimson;\n  color: #fff;\n}\n.debug #example-2 {\n  background-color: rebeccapurple;\n  color: #fff;\n}\n.debug #example-3 {\n  background-color: deepskyblue;\n  color: #000;\n}'}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cookbook-grid-layout-extended"]],decls:4,vars:2,consts:[[3,"html"],[3,"scss"]],template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Grid Layout - extended"),e.qZA(),e._UZ(2,"cookbook-code-viewer",0)(3,"cookbook-code-viewer",1)),2&t&&(e.xp6(2),e.Q6J("html",i.exampleHtml),e.xp6(1),e.Q6J("scss",i.exampleCss))},dependencies:[s.V],encapsulation:2}),n})(),u=(()=>{class n{constructor(){this.exampleHtml='<main>\n  <h1>Grid Layout - Multiple Grid Containers</h1>\n  <div class="grid-container">\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">1</kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">2</kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">3</kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">4</kirby-card>\n    </div>\n  </div>\n  <p><button kirby-button size="lg">Add</button></p>\n  <p>\n    Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k risk\n    market index.\n  </p>\n  <h1>Heading level 1</h1>\n  <p>\n    Government substantially taxpayer market exposure index funds. Fitch municipal bonds managed.\n  </p>\n  <div class="grid-container">\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n  </div>\n</main>\n',this.exampleCss="/*\n  SPACINGS\n****************************************************************************/\n/*\n  FONT SETTINGS \n****************************************************************************/\n/* Icon\n****************************************************************************/\n/*\n  Z - Index overview\n****************************************************************************/\n/* Breakpoints\n****************************************************************************/\n/* Elevation\n****************************************************************************/\n/* avatar\n****************************************************************************/\n/* Page\n****************************************************************************/\n/* Modal\n****************************************************************************/\n/* Item\n****************************************************************************/\n/* Dropdown\n****************************************************************************/\n/* Button, Checkbox, Page, Radio\n****************************************************************************/\n/* Checkbox, Radio\n****************************************************************************/\n/* Transitions\n****************************************************************************/\n/* stylelint-disable */\n/**\n * Outputs all keys from map as CSS class selector list\n */\n/*\n* This mixin is applied both in the section-header styles, for using \n* headings and paragraphs directly, and in kirby-label styles, for \n* wrapping them in a kirby-label within a section-header. \n*/\n/*  \n    General imports for components\n    NOTICE: Must not contain anything that generates classes or else it will be generated for every component that imports this file.\n*/\n/* Configure grid properties */\n/* Declare the grid container */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 24px;\n}\n\n/* Let grid items span all columns by default */\n.grid-item {\n  grid-column: span 12;\n}\n\n/* Tablet size and above */\n@media (min-width: 721px) {\n  .half-at-tablet-up {\n    grid-column: span 6;\n  }\n}\n/* Desktop size and above */\n@media (min-width: 1025px) {\n  .half-at-desktop-up {\n    grid-column: span 6;\n  }\n  .third-at-desktop-up {\n    grid-column: span 4;\n  }\n}\n/* Additional styles that are not essential to the example */\nmain {\n  background-color: var(--kirby-background-color);\n  min-height: 100%;\n  padding-block: 2rem 5rem;\n}"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cookbook-grid-layout-multiple-containers"]],decls:4,vars:2,consts:[[3,"html"],[3,"scss"]],template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Grid Layout - multiple grid containers"),e.qZA(),e._UZ(2,"cookbook-code-viewer",0)(3,"cookbook-code-viewer",1)),2&t&&(e.xp6(2),e.Q6J("html",i.exampleHtml),e.xp6(1),e.Q6J("scss",i.exampleCss))},dependencies:[s.V],encapsulation:2}),n})(),p=(()=>{class n{constructor(){this.exampleHtml='<main>\n  <div class="grid-container">\n    <div class="grid-item">\n      <h1>Grid Layout - Single Grid Container</h1>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">1</kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">2</kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">3</kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up">\n      <h2>Heading level 2</h2>\n      <kirby-card hasPadding="true">4</kirby-card>\n    </div>\n    <div class="grid-item">\n      <button kirby-button size="lg">Add</button>\n      <p class="align-center">\n        Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n        risk market index.\n      </p>\n    </div>\n    <div class="grid-item">\n      <h1>Heading level 1</h1>\n      <p>\n        Strategy bonds IRA lucrative Fitch rates bondholders securities fiat public managed 401k\n        risk market index.\n      </p>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n    <div class="grid-item half-at-tablet-up third-at-desktop-up">\n      <kirby-card hasPadding="true">\n        <h2>Heading level 2</h2>\n        <p>\n          Fluctuate interest rates Dow Jones receive rise government term municipal market Nikkei\n          passively return performance. Public finance holder fiat established bonds hedge fund\n          benchmark.\n        </p>\n      </kirby-card>\n    </div>\n  </div>\n</main>\n',this.exampleCss="/*\n  SPACINGS\n****************************************************************************/\n/*\n  FONT SETTINGS \n****************************************************************************/\n/* Icon\n****************************************************************************/\n/*\n  Z - Index overview\n****************************************************************************/\n/* Breakpoints\n****************************************************************************/\n/* Elevation\n****************************************************************************/\n/* avatar\n****************************************************************************/\n/* Page\n****************************************************************************/\n/* Modal\n****************************************************************************/\n/* Item\n****************************************************************************/\n/* Dropdown\n****************************************************************************/\n/* Button, Checkbox, Page, Radio\n****************************************************************************/\n/* Checkbox, Radio\n****************************************************************************/\n/* Transitions\n****************************************************************************/\n/* stylelint-disable */\n/**\n * Outputs all keys from map as CSS class selector list\n */\n/*\n* This mixin is applied both in the section-header styles, for using \n* headings and paragraphs directly, and in kirby-label styles, for \n* wrapping them in a kirby-label within a section-header. \n*/\n/*  \n    General imports for components\n    NOTICE: Must not contain anything that generates classes or else it will be generated for every component that imports this file.\n*/\n/* Configure grid properties */\n/* Declare the grid container */\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 24px;\n}\n\n/* Let grid items span all columns by default */\n.grid-item {\n  grid-column: span 12;\n}\n\n/* Tablet size and above */\n@media (min-width: 721px) {\n  .half-at-tablet-up {\n    grid-column: span 6;\n  }\n}\n/* Desktop size and above */\n@media (min-width: 1025px) {\n  .half-at-desktop-up {\n    grid-column: span 6;\n  }\n  .third-at-desktop-up {\n    grid-column: span 4;\n  }\n}\n/* Additional styles that are not essential to the example */\nmain {\n  background-color: var(--kirby-background-color);\n  min-height: 100%;\n  padding-block: 2rem 5rem;\n}"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cookbook-grid-layout-single-container"]],decls:4,vars:2,consts:[[3,"html"],[3,"scss"]],template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Grid Layout - single grid container"),e.qZA(),e._UZ(2,"cookbook-code-viewer",0)(3,"cookbook-code-viewer",1)),2&t&&(e.xp6(2),e.Q6J("html",i.exampleHtml),e.xp6(1),e.Q6J("scss",i.exampleCss))},dependencies:[s.V],encapsulation:2}),n})();const S=function(){return["../../showcase/chart-stock-config"]};const L=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cookbook-guides"]],decls:85,vars:11,consts:[["scope","col"],[3,"routerLink"],["href","https://ionicframework.com/docs/angular/virtual-scroll"],["href","https://material.angular.io/cdk/scrolling/overview"]],template:function(t,i){1&t&&(e.TgZ(0,"article")(1,"h1"),e._uU(2,"Kirby Guides"),e.qZA(),e.TgZ(3,"p"),e._uU(4," This section of the cookbook aims to bring together a few simple guides for common tasks. The guides are not complete solutions but working examples and code you can use as a starting point in your projects. "),e.qZA(),e.TgZ(5,"h2"),e._uU(6,"Virtual Scrolling"),e.qZA(),e.TgZ(7,"table")(8,"thead")(9,"tr")(10,"th",0),e._uU(11,"Example"),e.qZA(),e.TgZ(12,"th",0),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td")(17,"a",1),e._uU(18,"List with virtual scrolling"),e.qZA()(),e.TgZ(19,"td")(20,"p"),e._uU(21," Basic list with virtual scrolling based on the Angular CDK Virtual Scroller. At the moment, CDK Virtual Scroller only supports fixed sized elements. For further information see "),e.TgZ(22,"a",2),e._uU(23,"Ionic Docs"),e.qZA(),e._uU(24," and "),e.TgZ(25,"a",3),e._uU(26," CDK Virtual Scrolling docs. "),e.qZA()(),e.TgZ(27,"a",1),e._uU(28,"Show me the code"),e.qZA()()()()(),e.TgZ(29,"h2"),e._uU(30,"Grid Layout"),e.qZA(),e.TgZ(31,"table")(32,"thead")(33,"tr")(34,"th",0),e._uU(35,"Layout Recipe"),e.qZA(),e.TgZ(36,"th",0),e._uU(37,"Description"),e.qZA()()(),e.TgZ(38,"tbody")(39,"tr")(40,"td")(41,"a",1),e._uU(42,"Single grid container"),e.qZA()(),e.TgZ(43,"td")(44,"p"),e._uU(45," Basic example. Everything is within a single grid container. Contains some decorational styles, but no additional layout styles. "),e.qZA(),e.TgZ(46,"a",1),e._uU(47,"Show me the code"),e.qZA()()(),e.TgZ(48,"tr")(49,"td")(50,"a",1),e._uU(51,"Multiple grid containers"),e.qZA()(),e.TgZ(52,"td")(53,"p"),e._uU(54," The same layout as the single grid container example. Created with multiple grid containers. Contains some decorational styles, but no additional layout styles. "),e.qZA(),e.TgZ(55,"a",1),e._uU(56,"Show me the code"),e.qZA()()(),e.TgZ(57,"tr")(58,"td")(59,"a",1),e._uU(60,"Extended example"),e.qZA()(),e.TgZ(61,"td")(62,"p"),e._uU(63," The same layout as the basic examples, but with additional layout styles applied, e.g., there are constructs for a max-width container and for gutter. "),e.qZA(),e.TgZ(64,"a",1),e._uU(65,"Show me the code"),e.qZA()()()()(),e.TgZ(66,"h2"),e._uU(67,"Chart config"),e.qZA(),e.TgZ(68,"table")(69,"thead")(70,"tr")(71,"th",0),e._uU(72,"Guide"),e.qZA(),e.TgZ(73,"th",0),e._uU(74,"Showcases"),e.qZA()()(),e.TgZ(75,"tbody")(76,"tr")(77,"td")(78,"a",1),e._uU(79,"Setting up a base chart"),e.qZA()(),e.TgZ(80,"td")(81,"p"),e._uU(82," Creating charts using Kirby's configurations. To see more ways to implement charts, see the "),e.TgZ(83,"a",1),e._uU(84,"showcases"),e.qZA()()()()()()()),2&t&&(e.xp6(17),e.Q6J("routerLink","/examples/virtual-scroll-list"),e.xp6(10),e.Q6J("routerLink","virtual-scroll-list"),e.xp6(14),e.Q6J("routerLink","/examples/grid-layout-single-container"),e.xp6(5),e.Q6J("routerLink","grid-layout-single-container"),e.xp6(4),e.Q6J("routerLink","/examples/grid-layout-multiple-containers"),e.xp6(5),e.Q6J("routerLink","grid-layout-multiple-containers"),e.xp6(4),e.Q6J("routerLink","/examples/grid-layout-extended"),e.xp6(5),e.Q6J("routerLink","grid-layout-extended"),e.xp6(14),e.Q6J("routerLink","chart-config"),e.xp6(5),e.Q6J("routerLink",e.DdM(10,S)))},dependencies:[o.rH],styles:["table[_ngcontent-%COMP%]{border-spacing:0;border-collapse:collapse;width:100%;margin-bottom:16px}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--kirby-light-tint)}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{min-width:14rem}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid var(--kirby-medium);padding:1rem}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:3.5rem}"]}),n})()},{path:"chart-config",component:d},{path:"virtual-scroll-list",component:(()=>{class n{constructor(){this.exampleHtml='<kirby-page title="Items">\n  <kirby-page-content>\n    <cdk-virtual-scroll-viewport\n      minBufferPx="840"\n      maxBufferPx="1120"\n      itemSize="56"\n      style="height: 720px"\n    >\n      <kirby-list-experimental>\n        <kirby-item *cdkVirtualFor="let item of itemsFullList">\n          <h1>{{ item.id }}: {{ item.title }}</h1>\n        </kirby-item>\n      </kirby-list-experimental>\n    </cdk-virtual-scroll-viewport>\n  </kirby-page-content>\n</kirby-page>\n'}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cookbook-list-virtual-scroll"]],decls:3,vars:1,consts:[[3,"html"]],template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Virtual Scroll - List"),e.qZA(),e._UZ(2,"cookbook-code-viewer",0)),2&t&&(e.xp6(2),e.Q6J("html",i.exampleHtml))},dependencies:[s.V],encapsulation:2}),n})()},{path:"grid-layout-single-container",component:p},{path:"grid-layout-multiple-containers",component:u},{path:"grid-layout-extended",component:c}];let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[o.Bz,o.Bz.forChild(L)]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,G,o.Bz,b.J_B,k.v,y.Q,v.Y,f.ShowcaseModule]}),n})()}}]);