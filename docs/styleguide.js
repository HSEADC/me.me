/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// обводка на типографике

document.querySelectorAll(".txt, .hd, .nv").forEach(function (el) {
  el.setAttribute("data-text", el.textContent.trim());
});
/******/ })()
;