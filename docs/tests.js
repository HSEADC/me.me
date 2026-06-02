/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/* unused harmony exports initTest, chooseAnswer */
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

/******/ })()
;