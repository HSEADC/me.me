/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9076
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ chooseAnswer),
/* harmony export */   v: () => (/* binding */ initTest)
/* harmony export */ });
var currentStage = 0;
var checkBoxes = document.querySelectorAll("input[type = checkbox]");
var resultCount = 0;
function initTest(stages) {
  var numberOfQuestion = document.querySelector(".A_NumberOfQuestion");
  var question = document.querySelector(".A_Question");
  var answers = document.querySelectorAll(".A_AnswerText");
  numberOfQuestion.innerText = "".concat(currentStage + 1, "/").concat(stages.length);
  question.innerText = stages[currentStage].question;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text;
  }
  for (var j = 0; j < checkBoxes.length; j++) {
    checkBoxes[j].dataset.count = stages[currentStage].answers[j].count;
  }
}
function chooseAnswer(stages, results) {
  checkBoxes.forEach(function (checkBox) {
    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        setTimeout(function () {
          resultCount += Number(checkBox.dataset.count);
          updateStage(stages, results);
          checkBox.checked = false;
        }, 300);
      }
    });
  });
}
function updateStage(stages, results) {
  if (currentStage + 1 < stages.length) {
    currentStage++;
    initTest(stages);
  } else {
    showResult(results);
  }
}
function showResult(results) {
  var testContainer = document.querySelector(".O_Test");
  testContainer.innerHTML = "";
  var resultWrapper = document.createElement("div");
  resultWrapper.classList.add("W_TestQuestion");
  var resultCnt = document.createElement("p");
  resultCnt.classList.add("A_TestResultCount", "hd");
  resultCnt.innerText = "\u0438\u0442\u043E\u0433\u043E: ".concat(resultCount);
  var resultHeader = document.createElement("h2");
  resultHeader.classList.add("A_TestResultHeader", "hd");
  var resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TestResultParagraph", "hd");
  var resultButton = document.createElement("a");
  resultButton.classList.add("A_TestResultButton");
  resultButton.innerText = "вернуться к тестам";
  resultButton.href = "../tests.html";
  if (resultCount == 4) {
    resultHeader.innerText = results[0].header;
    resultParagraph.innerText = results[0].paragraph;
  } else if (resultCount == 3 || resultCount == 2) {
    resultHeader.innerText = results[1].header;
    resultParagraph.innerText = results[1].paragraph;
  } else {
    resultHeader.innerText = results[2].header;
    resultParagraph.innerText = results[2].paragraph;
  }
  resultWrapper.appendChild(resultCnt);
  resultWrapper.appendChild(resultHeader);
  resultWrapper.appendChild(resultParagraph);
  resultWrapper.appendChild(resultButton);
  testContainer.appendChild(resultWrapper);
}


/***/ },

/***/ 4357
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./inlined-1.webp": 248,
	"./inlined-10.webp": 4144,
	"./inlined-11.webp": 7187,
	"./inlined-12.webp": 2290,
	"./inlined-13.webp": 4205,
	"./inlined-14.webp": 5484,
	"./inlined-15.webp": 3727,
	"./inlined-16.webp": 478,
	"./inlined-17.webp": 5161,
	"./inlined-18.webp": 5416,
	"./inlined-19.webp": 3355,
	"./inlined-2.webp": 7701,
	"./inlined-20.webp": 5435,
	"./inlined-21.webp": 712,
	"./inlined-22.webp": 7237,
	"./inlined-23.webp": 3066,
	"./inlined-24.webp": 4263,
	"./inlined-25.webp": 3252,
	"./inlined-26.webp": 3617,
	"./inlined-3.webp": 9850,
	"./inlined-4.webp": 8919,
	"./inlined-5.webp": 5908,
	"./inlined-6.webp": 5169,
	"./inlined-7.webp": 1542,
	"./inlined-8.webp": 8547,
	"./inlined-9.webp": 2784
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4357;

/***/ },

/***/ 248
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/238a27873a673bc44a50.webp";

/***/ },

/***/ 4144
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/4e17b7931f9544474185.webp";

/***/ },

/***/ 7187
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/01a0aee8d93dad52e608.webp";

/***/ },

/***/ 2290
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/351ac147c1da4a6a8f78.webp";

/***/ },

/***/ 4205
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/2a6cb5cad88c6bd6f8c3.webp";

/***/ },

/***/ 5484
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/18fa2acc935344ed3d81.webp";

/***/ },

/***/ 3727
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/984ddecb13cd99df1a01.webp";

/***/ },

/***/ 478
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/1f14a30a97b2adb7d35a.webp";

/***/ },

/***/ 5161
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/a361a3663193e87a3290.webp";

/***/ },

/***/ 5416
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/17f2adaafd75c5b019ab.webp";

/***/ },

/***/ 3355
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/b91e63c489ca955f9d4c.webp";

/***/ },

/***/ 7701
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/cc36c4d545d9dcfd6f65.webp";

/***/ },

/***/ 5435
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/2ec2bf70dd350e2f2c3a.webp";

/***/ },

/***/ 712
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/6e51bbdab3b4c358fa47.webp";

/***/ },

/***/ 7237
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/42ba1c357524a99d6190.webp";

/***/ },

/***/ 3066
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/90a31fb31867de19cd4f.webp";

/***/ },

/***/ 4263
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/541853868941a952f8f0.webp";

/***/ },

/***/ 3252
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/b431329603607ac29fa0.webp";

/***/ },

/***/ 3617
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/57c9f72acdfdee621664.webp";

/***/ },

/***/ 9850
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/1ac444997a3a309d0376.webp";

/***/ },

/***/ 8919
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/aa5b27f0dc116a918621.webp";

/***/ },

/***/ 5908
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/7c17f46875ca0e0710aa.webp";

/***/ },

/***/ 5169
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/71cdf0f3b8ca3deeaf93.webp";

/***/ },

/***/ 1542
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/e282a71d80c4bfb61634.webp";

/***/ },

/***/ 8547
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/6a6b6452a9f1e31065cb.webp";

/***/ },

/***/ 2784
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/c2018354c4483de531fe.webp";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _tests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9076);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
console.clear;



// обводка на типографике

function syncOutlinedText() {
  document.querySelectorAll(".txt, .hd, .nv, .A_HeaderPart, .A_Question, .A_NumberOfQuestion").forEach(function (el) {
    el.setAttribute("data-text", el.textContent.trim());
  });
}
document.addEventListener("DOMContentLoaded", function () {
  syncOutlinedText();

  // это чтобы обводка ставилась после того как проставится текст
  var observer = new MutationObserver(function () {
    syncOutlinedText();
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
});

// инлайн-картинки

document.addEventListener("DOMContentLoaded", function () {
  var imageBlocks = document.querySelectorAll(".Q_ImageInHeader, .Q_ImageBigFloat, .Q_ImageSmallFloat");
  if (!imageBlocks.length) return;
  var req = __webpack_require__(4357);
  var urls = req.keys().map(function (k) {
    return req(k);
  });
  var shuffledImages = _toConsumableArray(urls).sort(function () {
    return Math.random() - 0.5;
  });
  imageBlocks.forEach(function (block, index) {
    var imageUrl = shuffledImages[index % shuffledImages.length];
    block.style.backgroundImage = "url(\"".concat(imageUrl, "\")");
  });
});

// логика тестов

var stages = [{
  question: "кого называют NPC?",
  answers: [{
    text: "персонаж из игры без личности",
    count: 0
  }, {
    text: "человек, без своего мнения",
    count: 1
  }, {
    text: "бот в комментариях",
    count: 0
  }, {
    text: "человек без эмоций",
    count: 0
  }]
}, {
  question: "я дурею с этой прикормки — что означает эта фраза",
  answers: [{
    text: "рыбацкая хитрость",
    count: 0
  }, {
    text: "про вкусную еду",
    count: 0
  }, {
    text: "зависимость от чего-то",
    count: 1
  }, {
    text: "реклама",
    count: 0
  }]
}, {
  question: "gyatt чаще всего используется как",
  answers: [{
    text: "реакция на что-то впечатляющее",
    count: 1
  }, {
    text: "ругательство",
    count: 0
  }, {
    text: "приветствие",
    count: 0
  }, {
    text: "просто звук",
    count: 0
  }]
}, {
  question: "что такое свага?",
  answers: [{
    text: "трендовое движение",
    count: 0
  }, {
    text: "брендовая одежда",
    count: 0
  }, {
    text: "название тусовки",
    count: 0
  }, {
    text: "стиль и вайб",
    count: 1
  }]
}, {
  question: "выбери любое число",
  answers: [{
    text: "47",
    count: 0
  }, {
    text: "11",
    count: 0
  }, {
    text: "67",
    count: 1
  }, {
    text: "23",
    count: 0
  }]
}];
var results = [{
  header: "человек-мем",
  paragraph: "ученик превзошёл учителя! вы очень хорошо разбираетесь в мемах! не хотите написать нам пару статей и дать интервью? или отложить тик ток и потрогать траву?"
}, {
  header: "работяга",
  paragraph: "вы уверенно ориентируетесь в мемах! но на досуге советуем отложить все дела и посидеть в соцсетях часов эдак 6-8, чтобы подтянуть знания!"
}, {
  header: "первый день в интернете",
  paragraph: "в мемах вы не разбираетесь, но ничего! почитайте наши статьи и вы всё поймёте!"
}];
(0,_tests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .v)(stages);
(0,_tests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .I)(stages, results);
})();

/******/ })()
;