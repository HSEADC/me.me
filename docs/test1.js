/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9076
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ic: () => (/* binding */ chooseAnswer),
/* harmony export */   vG: () => (/* binding */ initTest)
/* harmony export */ });
/* unused harmony exports initImageTest, chooseImageAnswer */
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* harmony import */ var _tests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9076);
console.clear;

var stages = [{
  question: "кого называют NPC?",
  answers: [{
    text: "персонаж из игры без личности",
    count: 0
  }, {
    text: "человек без своего мнения",
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
  paragraph: "ученик превзошёл учителя! вы очень хорошо разбираетесь в мемах! может, хотите написать нам пару статей и дать интервью? или отложить тик ток, пойти потрогать траву?"
}, {
  header: "работяга",
  paragraph: "вы уверенно ориентируетесь в мемах! но на досуге советуем отложить все дела и посидеть в соцсетях часов эдак 6-8, чтобы подтянуть знания!"
}, {
  header: "первый день в интернете",
  paragraph: "в мемах вы не разбираетесь, но ничего! почитайте наши статьи и вы всё поймёте!"
}];
var testQuestion = document.getElementById("TestQuestion");
var numberOfQuestion = document.getElementById("NumberOfQuestion");
if (testQuestion && numberOfQuestion) {
  (0,_tests_js__WEBPACK_IMPORTED_MODULE_0__/* .initTest */ .vG)(stages);
  (0,_tests_js__WEBPACK_IMPORTED_MODULE_0__/* .chooseAnswer */ .Ic)(stages, results);
}
/******/ })()
;