"use strict";(globalThis.webpackChunkdesignsystem=globalThis.webpackChunkdesignsystem||[]).push([[5881],{57758:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>attachComponent,d:()=>detachComponent});var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(93924);const attachComponent=async(delegate,container,component,cssClasses,componentProps)=>{if(delegate)return delegate.attachViewToDom(container,component,componentProps,cssClasses);if("string"!=typeof component&&!(component instanceof HTMLElement))throw new Error("framework delegate is missing");const el="string"==typeof component?container.ownerDocument&&container.ownerDocument.createElement(component):component;return cssClasses&&cssClasses.forEach((c=>el.classList.add(c))),componentProps&&Object.assign(el,componentProps),container.appendChild(el),await new Promise((resolve=>(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el,resolve))),el},detachComponent=(delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()}},45881:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ion_modal:()=>Modal});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47854),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22035),_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(57758),_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(83087),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(13819),_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41368),_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(35304),_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(69299),_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(86326),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(93924);__webpack_require__(24890);const SwipeToCloseDefaults_MIN_PRESENTING_SCALE=.93,computeDuration=(remaining,velocity)=>(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_6__.j)(400,remaining/Math.abs(1.1*velocity),500),iosEnterAnimation=(baseEl,presentingEl)=>{const backdropAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().addElement(baseEl.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(wrapperAnimation);if(presentingEl){const isMobile=window.innerWidth<768,hasCardModal="ION-MODAL"===presentingEl.tagName&&void 0!==presentingEl.presentingElement,presentingAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),bodyEl=document.body;if(isMobile){const transformOffset=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",finalTransform=`translateY(${hasCardModal?"-10px":transformOffset}) scale(${SwipeToCloseDefaults_MIN_PRESENTING_SCALE})`;presentingAnimation.afterStyles({transform:finalTransform}).beforeAddWrite((()=>bodyEl.style.setProperty("background-color","black"))).addElement(presentingEl).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:finalTransform,borderRadius:"10px 10px 0 0"}]),baseAnimation.addAnimation(presentingAnimation)}else if(baseAnimation.addAnimation(backdropAnimation),hasCardModal){const finalTransform=`translateY(-10px) scale(${hasCardModal?SwipeToCloseDefaults_MIN_PRESENTING_SCALE:1})`;presentingAnimation.afterStyles({transform:finalTransform}).addElement(presentingEl.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:finalTransform}]);const shadowAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().afterStyles({transform:finalTransform}).addElement(presentingEl.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:finalTransform}]);baseAnimation.addAnimation([presentingAnimation,shadowAnimation])}else wrapperAnimation.fromTo("opacity","0","1")}else baseAnimation.addAnimation(backdropAnimation);return baseAnimation},iosLeaveAnimation=(baseEl,presentingEl,duration=500)=>{const backdropAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().addElement(baseEl.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(duration).addAnimation(wrapperAnimation);if(presentingEl){const isMobile=window.innerWidth<768,hasCardModal="ION-MODAL"===presentingEl.tagName&&void 0!==presentingEl.presentingElement,presentingAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((currentStep=>{if(1!==currentStep)return;presentingEl.style.setProperty("overflow","");Array.from(bodyEl.querySelectorAll("ion-modal")).filter((m=>void 0!==m.presentingElement)).length<=1&&bodyEl.style.setProperty("background-color","")})),bodyEl=document.body;if(isMobile){const transformOffset=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",finalTransform=`translateY(${hasCardModal?"-10px":transformOffset}) scale(${SwipeToCloseDefaults_MIN_PRESENTING_SCALE})`;presentingAnimation.addElement(presentingEl).keyframes([{offset:0,filter:"contrast(0.85)",transform:finalTransform,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),baseAnimation.addAnimation(presentingAnimation)}else if(baseAnimation.addAnimation(backdropAnimation),hasCardModal){const finalTransform=`translateY(-10px) scale(${hasCardModal?SwipeToCloseDefaults_MIN_PRESENTING_SCALE:1})`;presentingAnimation.addElement(presentingEl.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:finalTransform},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const shadowAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)().addElement(presentingEl.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:finalTransform},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);baseAnimation.addAnimation([presentingAnimation,shadowAnimation])}else wrapperAnimation.fromTo("opacity","1","0")}else baseAnimation.addAnimation(backdropAnimation);return baseAnimation},mdEnterAnimation=baseEl=>{const baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)(),backdropAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)(),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),baseAnimation.addElement(baseEl).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([backdropAnimation,wrapperAnimation])},mdLeaveAnimation=baseEl=>{const baseAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)(),backdropAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)(),wrapperAnimation=(0,_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_8__.c)(),wrapperEl=baseEl.querySelector(".modal-wrapper");return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(wrapperEl).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),baseAnimation.addElement(baseEl).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},Modal=class{constructor(hostRef){(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.didPresent=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionModalDidPresent",7),this.willPresent=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.B)},this.onDismiss=ev=>{ev.stopPropagation(),ev.preventDefault(),this.dismiss()},this.onLifecycle=modalEvent=>{const el=this.usersElement,name=LIFECYCLE_MAP[modalEvent.type];if(el&&name){const ev=new CustomEvent(name,{bubbles:!1,cancelable:!1,detail:modalEvent.detail});el.dispatchEvent(ev)}}}swipeToCloseChanged(enable){this.gesture?this.gesture.enable(enable):enable&&this.initSwipeToClose()}connectedCallback(){(0,_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.el)}async present(){if(this.presented)return;const container=this.el.querySelector(".modal-wrapper");if(!container)throw new Error("container is undefined");const componentProps=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await(0,_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_9__.a)(this.delegate,container,this.component,["ion-page"],componentProps),await(0,_index_c3ff7f2e_js__WEBPACK_IMPORTED_MODULE_3__.e)(this.usersElement),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)((()=>this.el.classList.add("show-modal"))),await(0,_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.d)(this,"modalEnter",iosEnterAnimation,mdEnterAnimation,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){if("ios"!==(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this))return;const animationBuilder=this.leaveAnimation||_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("modalLeave",iosLeaveAnimation),ani=this.animation=animationBuilder(this.el,this.presentingElement);this.gesture=((el,animation,onDismiss)=>{const height=el.offsetHeight;let isOpen=!1;const gesture=(0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_4__.createGesture)({el,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:detail=>{const target=detail.event.target;return null===target||!target.closest||null===target.closest("ion-content")},onStart:()=>{animation.progressStart(!0,isOpen?1:0)},onMove:detail=>{const step=(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_6__.j)(1e-4,detail.deltaY/height,.9999);animation.progressStep(step)},onEnd:detail=>{const velocity=detail.velocityY,step=(0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_6__.j)(1e-4,detail.deltaY/height,.9999),shouldComplete=(detail.deltaY+1e3*velocity)/height>=.5;let newStepValue=shouldComplete?-.001:.001;shouldComplete?(animation.easing("cubic-bezier(0.32, 0.72, 0, 1)"),newStepValue+=(0,_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__.g)([0,0],[.32,.72],[0,1],[1,1],step)[0]):(animation.easing("cubic-bezier(1, 0, 0.68, 0.28)"),newStepValue+=(0,_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__.g)([0,0],[1,0],[.68,.28],[1,1],step)[0]);const duration=computeDuration(shouldComplete?step*height:(1-step)*height,velocity);isOpen=shouldComplete,gesture.enable(!1),animation.onFinish((()=>{shouldComplete||gesture.enable(!0)})).progressEnd(shouldComplete?1:0,newStepValue,duration),shouldComplete&&onDismiss()}});return gesture})(this.el,ani,(()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1}))})),this.gesture.enable(!0)}async dismiss(data,role){if(this.gestureAnimationDismissing&&"gesture"!==role)return!1;const enteringAnimation=_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.h.get(this)||[],dismissed=await(0,_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.f)(this,data,role,"modalLeave",iosLeaveAnimation,mdLeaveAnimation,this.presentingElement);return dismissed&&(await(0,_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_9__.d)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),enteringAnimation.forEach((ani=>ani.destroy()))),this.animation=void 0,dismissed}onDidDismiss(){return(0,_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el,"ionModalWillDismiss")}render(){const mode=(0,_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.H,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign({[mode]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===mode},(0,_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_10__.g)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===mode&&(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"modal-shadow"}),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{tabindex:"0"}),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{tabindex:"0"}))}get el(){return(0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.i)(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},LIFECYCLE_MAP={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};Modal.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},13819:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);