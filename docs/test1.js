/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9076
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  numberOfQuestion.innerText = "\u0432\u043E\u043F\u0440\u043E\u0441 ".concat(currentStage + 1, " \u0438\u0437 ").concat(stages.length);
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
  resultWrapper.classList.add("M_TestResult");
  var resultCnt = document.createElement("p");
  resultCnt.classList.add("A_TestResultCount");
  resultCnt.innerText = "\u0438\u0442\u043E\u0433\u043E: ".concat(resultCount);
  var resultHeader = document.createElement("h2");
  resultHeader.classList.add("A_TestResultHeader");
  var resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TestResultParagraph");
  var resultImage = document.createElement("img");
  resultImage.classList.add("A_TestResultImage");
  if (resultCount == 4) {
    resultHeader.innerText = results[0].header;
    resultParagraph.innerText = results[0].paragraph;
    resultImage.src = results[0].image;
  } else if (resultCount == 3 || resultCount == 2) {
    resultHeader.innerText = results[1].header;
    resultParagraph.innerText = results[1].paragraph;
    resultImage.src = results[1].image;
  } else {
    resultHeader.innerText = results[2].header;
    resultParagraph.innerText = results[2].paragraph;
    resultImage.src = results[2].image;
  }
  resultWrapper.appendChild(resultCnt);
  resultWrapper.appendChild(resultHeader);
  resultWrapper.appendChild(resultParagraph);
  resultWrapper.appendChild(resultImage);
  testContainer.appendChild(resultWrapper);
}


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

// EXTERNAL MODULE: ./src/javascripts/tests.js
var tests = __webpack_require__(9076);
;// ./src/images/random/rnd-12.webp
const rnd_12_namespaceObject = __webpack_require__.p + "images/018321c3fff21551b576.webp";
;// ./src/images/random/rnd-16.webp
const rnd_16_namespaceObject = __webpack_require__.p + "images/f85129d77649d7977941.webp";
;// ./src/images/random/rnd-39.webp
const rnd_39_namespaceObject = __webpack_require__.p + "images/ded15b7c1305630d3bf4.webp";
;// ./src/javascripts/test1.js
console.clear;




var stages = [{
  question: "Что означает подпись «corecore опять вернулся»?",
  answers: [{
    text: "Новый фитнес-тренд",
    count: 0
  }, {
    text: "Нарезку из странных видео под тревожную музыку",
    count: 1
  }, {
    text: "Эстетику минимализма",
    count: 0
  }]
}, {
  question: "Если в видео внезапно появляется фраза «bro is NOT surviving», это обычно",
  answers: [{
    text: "Поддержка",
    count: 0
  }, {
    text: "Ироничный комментарий",
    count: 1
  }, {
    text: "Реальная новость",
    count: 0
  }]
}, {
  question: "Когда в комментариях массово пишут «chat, is this real?», это:",
  answers: [{
    text: "Вопрос стримеру",
    count: 0
  }, {
    text: "Новый челлендж",
    count: 1
  }, {
    text: "Мемная реакция на абсурдную ситуацию",
    count: 0
  }]
}, {
  question: "Если видео выглядит максимально бессмысленным, с резкими склейками и странным звуком, это:",
  answers: [{
    text: "Это специально сделанный абсурдный формат",
    count: 1
  }, {
    text: "Автор не умеет монтировать",
    count: 0
  }, {
    text: "Это реклама",
    count: 0
  }]
}];
var results = [{
  header: "отлично!!",
  paragraph: "вы и правда шарите, ученик превзошёл учителя",
  image: "".concat(rnd_12_namespaceObject)
}, {
  header: "не так уж и плохо!",
  paragraph: "но советуем на досуге посидеть в тик токе подтянуть свои знания",
  image: "".concat(rnd_16_namespaceObject)
}, {
  header: "ай-ай-ай",
  paragraph: "в мемах вы не разбираетесь, но ничего! почитайте наши статьи и вы всё поймёте!",
  image: "".concat(rnd_39_namespaceObject)
}];
(0,tests/* initTest */.v)(stages);
(0,tests/* chooseAnswer */.I)(stages, results);
/******/ })()
;