"use strict";(self.webpackChunkdesignsystem=self.webpackChunkdesignsystem||[]).push([[7089],{37089:function(e,s,t){t.r(s),t.d(s,{startFocusVisible:function(){return c}});const n="ion-focused",o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],c=()=>{let e=[],s=!0;const t=document,c=s=>{e.forEach(e=>e.classList.remove(n)),s.forEach(e=>e.classList.add(n)),e=s},i=()=>{s=!1,c([])};t.addEventListener("keydown",e=>{s=o.includes(e.key),s||c([])}),t.addEventListener("focusin",e=>{if(s&&e.composedPath){const s=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));c(s)}}),t.addEventListener("focusout",()=>{t.activeElement===t.body&&c([])}),t.addEventListener("touchstart",i),t.addEventListener("mousedown",i)}}}]);