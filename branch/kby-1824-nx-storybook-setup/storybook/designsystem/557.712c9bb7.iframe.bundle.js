"use strict";(globalThis.webpackChunkdesignsystem=globalThis.webpackChunkdesignsystem||[]).push([[557],{50557:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_text:()=>Text});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47854),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22035),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13819);const Text=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}render(){const mode=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color,{[mode]:!0})},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}};Text.style=":host(.ion-color){color:var(--ion-color-base)}"},13819:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);