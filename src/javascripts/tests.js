let currentStage = 0;
const checkBoxes = document.querySelectorAll("input[type = checkbox]");
let resultCount = 0;

function initTest(stages) {
  const numberOfQuestion = document.querySelector(".A_NumberOfQuestion");
  const question = document.querySelector(".A_Question");
  const answers = document.querySelectorAll(".A_AnswerText");

  numberOfQuestion.innerText = `${currentStage + 1}/${stages.length}`;

  question.innerText = stages[currentStage].question;

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text;
  }

  for (let j = 0; j < checkBoxes.length; j++) {
    checkBoxes[j].dataset.count = stages[currentStage].answers[j].count;
  }
}

function chooseAnswer(stages, results) {
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        setTimeout(() => {
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
  const testContainer = document.querySelector(".O_Test");
  testContainer.innerHTML = "";

  const resultWrapper = document.createElement("div");
  resultWrapper.classList.add("W_TestQuestion");

  const resultCnt = document.createElement("p");
  resultCnt.classList.add("A_TestResultCount", "hd");
  resultCnt.innerText = `итого: ${resultCount}`;

  const resultHeader = document.createElement("h2");
  resultHeader.classList.add("A_TestResultHeader", "hd");

  const resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TestResultParagraph", "hd");

  const resultButton = document.createElement("a");
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

export { initTest, chooseAnswer };
