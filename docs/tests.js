/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/* unused harmony exports initTest, chooseAnswer */
var currentStage = 0;
var checkBoxes = document.querySelectorAll("input[type=checkbox]");
var resultCount = 0;
function initTest(stages) {
  var numberOfQuestion = document.getElementById("NumberOfQuestion");
  var question = document.getElementById("TestQuestion");
  var answers = document.querySelectorAll(".Q_MarkedListText");
  var nextButton = document.getElementById("TestButton");
  numberOfQuestion.innerText = "".concat(currentStage + 1, "/").concat(stages.length);
  question.innerText = stages[currentStage].question;
  question.dataset.text = stages[currentStage].question;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text;
    answers[i].dataset.text = stages[currentStage].answers[i].text;
  }
  for (var j = 0; j < checkBoxes.length; j++) {
    checkBoxes[j].dataset.count = stages[currentStage].answers[j].count;
    checkBoxes[j].checked = false;
  }
}
function chooseAnswer(stages, results) {
  var nextButton = document.getElementById("TestButton");
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
    if (!selectedCheckBox) {
      return;
    }
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
  if (resultCount >= 4) {
    return results[0];
  }
  if (resultCount >= 2) {
    return results[1];
  }
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
  resultHeader.innerText = result.header;
  resultHeader.dataset.text = result.header;
  var resultContent = document.createElement("div");
  resultContent.classList.add("O_TestTextButton");
  var resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TextBlock");
  resultParagraph.innerText = result.paragraph;
  var resultButton = document.createElement("a");
  resultButton.classList.add("A_Button");
  resultButton.innerText = "обратно  к тестам";
  resultButton.href = "../tests.html";
  resultHeaderWrapper.appendChild(resultHeader);
  resultContent.appendChild(resultParagraph);
  resultContent.appendChild(resultButton);
  testContainer.appendChild(resultHeaderWrapper);
  testContainer.appendChild(resultContent);
}

/******/ })()
;