/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/javascripts/typographer.js
// обводка на типографике

function applyOutlineText() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  root.querySelectorAll(".txt, .hd, .nv, .A_HeaderPart").forEach(function (el) {
    el.setAttribute("data-text", el.textContent.trim());
  });
}

// типограф

function applyTypographer() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var paragraphs = root.querySelectorAll("p");
  paragraphs.forEach(function (paragraph) {
    paragraph.childNodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = typographText(node.textContent);
      }
    });
  });
}
function typographText(text) {
  return text.replace(/\s-\s/g, " — ").replace(/(^|\s)(в|во|на|к|ко|с|со|у|о|об|от|до|за|из|по|и|а|но|не|ни|же|ли|бы|то)\s+/gi, "$1$2\xA0");
}
;// ./src/javascripts/allStyles.js


document.addEventListener("DOMContentLoaded", function () {
  applyTypographer();
  applyOutlineText();
});
/******/ })()
;