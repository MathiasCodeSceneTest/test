!function(){"use strict";(self.webpackChunkdesignsystem=self.webpackChunkdesignsystem||[]).push([[1296],{81296:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return v},keyboardDidClose:function(){return b},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return g},resetKeyboardAssist:function(){return f},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return a},trackViewportChanges:function(){return l}});var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},s=!1,f=function(){o={},u={},s=!1},a=function(e){c(e),e.visualViewport&&(u=v(e.visualViewport),e.visualViewport.onresize=function(){l(e),p()||g(e)?d(e):b(e)&&h(e)})},c=function(e){e.addEventListener("keyboardDidShow",function(t){return d(e,t)}),e.addEventListener("keyboardDidHide",function(){return h(e)})},d=function(e,t){w(e,t),s=!0},h=function(e){y(e),s=!1},p=function(){return!s&&o.width===u.width&&(o.height-u.height)*u.scale>150},g=function(e){return s&&!b(e)},b=function(e){return s&&u.height===e.innerHeight},w=function(e,t){var n=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-u.height}});e.dispatchEvent(n)},y=function(e){var t=new CustomEvent(r);e.dispatchEvent(t)},l=function(e){o=Object.assign({},u),u=v(e.visualViewport)},v=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}])}();