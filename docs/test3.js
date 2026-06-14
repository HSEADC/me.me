/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yd: () => (/* binding */ initImageTest),
/* harmony export */   dl: () => (/* binding */ chooseImageAnswer)
/* harmony export */ });
/* unused harmony exports initTest, chooseAnswer */
var currentStage = 0;
var resultCount = 0;
function getCheckBoxes() {
  return document.querySelectorAll("input[type=checkbox]");
}
function syncDataText(element, text) {
  element.innerText = text;
  element.dataset.text = text;
}

// Test 1

function initTest(stages) {
  var numberOfQuestion = document.getElementById("NumberOfQuestion");
  var question = document.getElementById("TestQuestion");
  var answers = document.querySelectorAll(".Q_MarkedListText");
  var checkBoxes = getCheckBoxes();
  numberOfQuestion.innerText = "".concat(currentStage + 1, "/").concat(stages.length);
  syncDataText(question, stages[currentStage].question);
  for (var i = 0; i < answers.length; i++) {
    syncDataText(answers[i], stages[currentStage].answers[i].text);
  }
  for (var j = 0; j < checkBoxes.length; j++) {
    checkBoxes[j].dataset.count = stages[currentStage].answers[j].count;
    checkBoxes[j].checked = false;
  }
}
function chooseAnswer(stages, results) {
  var nextButton = document.getElementById("TestButton");
  var checkBoxes = getCheckBoxes();
  checkBoxes.forEach(function (checkBox) {
    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        checkBoxes.forEach(function (otherCheckBox) {
          if (otherCheckBox !== checkBox) {
            otherCheckBox.checked = false;
          }
        });
      }
    });
  });
  if (!nextButton) return;
  nextButton.addEventListener("click", function () {
    var selectedCheckBox = Array.from(checkBoxes).find(function (checkBox) {
      return checkBox.checked;
    });
    if (!selectedCheckBox) return;
    resultCount += Number(selectedCheckBox.dataset.count);
    checkBoxes.forEach(function (checkBox) {
      checkBox.checked = false;
    });
    updateStage(stages, results);
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
function getResult(results) {
  if (resultCount >= 4) return results[0];
  if (resultCount >= 2) return results[1];
  return results[2];
}
function showResult(results) {
  var testContainer = document.querySelector(".O_TestWho");
  var result = getResult(results);
  testContainer.innerHTML = "";
  var resultHeaderWrapper = document.createElement("div");
  resultHeaderWrapper.classList.add("A_H4");
  var resultHeader = document.createElement("h4");
  resultHeader.classList.add("hd", "Q_Header4Text");
  syncDataText(resultHeader, result.header);
  var resultContent = document.createElement("div");
  resultContent.classList.add("O_TestTextButton");
  var resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TextBlock");
  resultParagraph.innerText = result.paragraph;
  var resultButton = document.createElement("a");
  resultButton.classList.add("A_Button");
  resultButton.innerText = "обратно к тестам";
  resultButton.href = "../tests.html";
  resultHeaderWrapper.appendChild(resultHeader);
  resultContent.appendChild(resultParagraph);
  resultContent.appendChild(resultButton);
  testContainer.appendChild(resultHeaderWrapper);
  testContainer.appendChild(resultContent);
}

// Test 3

function initImageTest(stages) {
  currentStage = 0;
  resultCount = 0;
  renderImageTestStage(stages);
}
function renderImageTestStage(stages) {
  var testContainer = document.querySelector(".O_Test");
  var stage = stages[currentStage];
  testContainer.innerHTML = "";
  var imageWrapper = document.createElement("div");
  imageWrapper.classList.add("A_TestImage");
  var testImage = document.createElement("img");
  testImage.id = "TestImage";
  testImage.classList.add("toned", "Q_ImageSelf");
  testImage.src = stage.blurredImage;
  var imageFrame = document.createElement("span");
  imageFrame.classList.add("Q_ImageHoverFrame");
  imageFrame.setAttribute("aria-hidden", "true");
  var contentWrapper = document.createElement("div");
  contentWrapper.classList.add("O_TestTextButton");
  var markedList = document.createElement("div");
  markedList.classList.add("M_MarkedList");
  for (var i = 0; i < stage.answers.length; i++) {
    var answerLine = document.createElement("div");
    answerLine.classList.add("A_MarkedListLine");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.dataset.correct = stage.answers[i].correct;
    var answerText = document.createElement("p");
    answerText.classList.add("hd", "Q_MarkedListText");
    syncDataText(answerText, stage.answers[i].text);
    answerLine.appendChild(checkBox);
    answerLine.appendChild(answerText);
    markedList.appendChild(answerLine);
  }
  var submitButton = document.createElement("button");
  submitButton.id = "TestButton";
  submitButton.classList.add("A_Button");
  submitButton.innerText = "ответить";
  imageWrapper.appendChild(testImage);
  imageWrapper.appendChild(imageFrame);
  contentWrapper.appendChild(markedList);
  contentWrapper.appendChild(submitButton);
  testContainer.appendChild(imageWrapper);
  testContainer.appendChild(contentWrapper);
}
function chooseImageAnswer(stages) {
  var testContainer = document.querySelector(".O_Test");
  if (!testContainer) return;
  testContainer.addEventListener("change", function (event) {
    if (event.target.type !== "checkbox") return;
    var checkBoxes = getCheckBoxes();
    if (event.target.checked) {
      checkBoxes.forEach(function (checkBox) {
        if (checkBox !== event.target) {
          checkBox.checked = false;
        }
      });
    }
  });
  testContainer.addEventListener("click", function (event) {
    if (event.target.id === "TestButton") {
      var selectedCheckBox = Array.from(getCheckBoxes()).find(function (checkBox) {
        return checkBox.checked;
      });
      if (!selectedCheckBox) return;
      var isCorrect = selectedCheckBox.dataset.correct === "true";
      showImageTestAnswer(stages, isCorrect);
    }
    if (event.target.id === "NextImageButton") {
      if (currentStage + 1 < stages.length) {
        currentStage++;
      } else {
        currentStage = 0;
      }
      renderImageTestStage(stages);
    }
  });
}
function showImageTestAnswer(stages, isCorrect) {
  var testContainer = document.querySelector(".O_Test");
  var stage = stages[currentStage];
  testContainer.innerHTML = "";
  var imageWrapper = document.createElement("div");
  imageWrapper.classList.add("A_TestImage");
  var testImage = document.createElement("img");
  testImage.id = "TestImage";
  testImage.classList.add("toned", "Q_ImageSelf");
  testImage.src = stage.normalImage;
  var imageFrame = document.createElement("span");
  imageFrame.classList.add("Q_ImageHoverFrame");
  imageFrame.setAttribute("aria-hidden", "true");
  var resultContent = document.createElement("div");
  resultContent.classList.add("O_TestTextButton");
  var testInfo = document.createElement("div");
  testInfo.classList.add("M_TestInfo");
  var resultHeaderWrapper = document.createElement("div");
  resultHeaderWrapper.classList.add("A_H4");
  var resultHeader = document.createElement("h4");
  resultHeader.classList.add("hd", "Q_Header4Text");
  if (isCorrect) {
    syncDataText(resultHeader, "Всё верно! Да ты знаток)");
  } else {
    syncDataText(resultHeader, "Эх, не совсем(");
  }
  var resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TextBlock");
  if (isCorrect) {
    resultParagraph.innerText = "";
  } else {
    resultParagraph.innerText = "Тебе стоит прокачать мемную насмотренность";
  }
  var nextButton = document.createElement("button");
  nextButton.id = "NextImageButton";
  nextButton.classList.add("A_Button");
  if (currentStage + 1 < stages.length) {
    nextButton.innerText = "ещё картинку";
  } else {
    nextButton.innerText = "начать заново";
  }
  var backButton = document.createElement("a");
  backButton.classList.add("A_Button");
  backButton.innerText = "обратно к тестам";
  backButton.href = "../tests.html";
  var buttonsBox = document.createElement("div");
  buttonsBox.classList.add("W_ButtonsBox");
  buttonsBox.appendChild(nextButton);
  buttonsBox.appendChild(backButton);
  imageWrapper.appendChild(testImage);
  imageWrapper.appendChild(imageFrame);
  resultHeaderWrapper.appendChild(resultHeader);
  testInfo.appendChild(resultHeaderWrapper);
  testInfo.appendChild(resultParagraph);
  testInfo.appendChild(buttonsBox);
  resultContent.appendChild(testInfo);
  testContainer.appendChild(imageWrapper);
  testContainer.appendChild(resultContent);
}


/***/ })

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
;// ./src/images/tests/1-blurred.webp
const _1_blurred_namespaceObject = __webpack_require__.p + "images/a677b21445d6b8670daa.webp";
;// ./src/images/tests/1-normal.webp
const _1_normal_namespaceObject = __webpack_require__.p + "images/28ebe16bb43b1543106f.webp";
;// ./src/images/tests/2-blurred.webp
const _2_blurred_namespaceObject = __webpack_require__.p + "images/bf6e28f4c708d4bb0f37.webp";
;// ./src/images/tests/2-normal.webp
const _2_normal_namespaceObject = __webpack_require__.p + "images/2f4b888a81840c4b59bd.webp";
;// ./src/images/tests/3-blurred.webp
const _3_blurred_namespaceObject = __webpack_require__.p + "images/343982c66ac567099973.webp";
;// ./src/images/tests/3-normal.webp
const _3_normal_namespaceObject = __webpack_require__.p + "images/e21eb43cbbfba0d6b553.webp";
;// ./src/images/tests/4-blurred.webp
const _4_blurred_namespaceObject = __webpack_require__.p + "images/1c20fb236d2e9497afbf.webp";
;// ./src/images/tests/4-normal.webp
const _4_normal_namespaceObject = __webpack_require__.p + "images/9b85d7ebbd4c6cc47ea7.webp";
;// ./src/images/tests/5-blurred.webp
const _5_blurred_namespaceObject = __webpack_require__.p + "images/27585379e126cf68ae30.webp";
;// ./src/images/tests/5-normal.webp
const _5_normal_namespaceObject = __webpack_require__.p + "images/e06410f88dac655465e7.webp";
;// ./src/images/tests/6-blurred.webp
const _6_blurred_namespaceObject = __webpack_require__.p + "images/4eca55d5df961a6ca4f2.webp";
;// ./src/images/tests/6-normal.webp
const _6_normal_namespaceObject = __webpack_require__.p + "images/fbe8ddcc0495f5b4db65.webp";
;// ./src/javascripts/test3.js
console.clear();














var stages = [{
  blurredImage: _1_blurred_namespaceObject,
  normalImage: _1_normal_namespaceObject,
  answers: [{
    text: "собака с яблоками",
    correct: false
  }, {
    text: "фу, покажи",
    correct: false
  }, {
    text: "яблоко с языком",
    correct: true
  }]
}, {
  blurredImage: _2_blurred_namespaceObject,
  normalImage: _2_normal_namespaceObject,
  answers: [{
    text: "окак",
    correct: false
  }, {
    text: "фани хомяк",
    correct: true
  }, {
    text: "троллфейс",
    correct: false
  }]
}, {
  blurredImage: _3_blurred_namespaceObject,
  normalImage: _3_normal_namespaceObject,
  answers: [{
    text: "вряд ли",
    correct: false
  }, {
    text: "sybau",
    correct: false
  }, {
    text: "хомяк грустный",
    correct: true
  }]
}, {
  blurredImage: _4_blurred_namespaceObject,
  normalImage: _4_normal_namespaceObject,
  answers: [{
    text: "я не договорила",
    correct: false
  }, {
    text: "муся ты куда",
    correct: true
  }, {
    text: "что происходит",
    correct: false
  }]
}, {
  blurredImage: _5_blurred_namespaceObject,
  normalImage: _5_normal_namespaceObject,
  answers: [{
    text: "нифига себе муся",
    correct: true
  }, {
    text: "мечта детства №1",
    correct: false
  }, {
    text: "ачё)",
    correct: false
  }]
}, {
  blurredImage: _6_blurred_namespaceObject,
  normalImage: _6_normal_namespaceObject,
  answers: [{
    text: "эльгато",
    correct: false
  }, {
    text: "брейнрот",
    correct: false
  }, {
    text: "кот-банан",
    correct: true
  }]
}];
document.addEventListener("DOMContentLoaded", function () {
  var testImage = document.getElementById("TestImage");
  if (testImage) {
    (0,tests/* initImageTest */.Yd)(stages);
    (0,tests/* chooseImageAnswer */.dl)(stages);
  }
});
/******/ })()
;