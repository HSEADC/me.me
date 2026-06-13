let currentStage = 0;
const checkBoxes = document.querySelectorAll("input[type=checkbox]");
let resultCount = 0;

function initTest(stages) {
  const numberOfQuestion = document.getElementById("NumberOfQuestion");
  const question = document.getElementById("TestQuestion");
  const answers = document.querySelectorAll(".Q_MarkedListText");
  const nextButton = document.getElementById("TestButton");

  numberOfQuestion.innerText = `${currentStage + 1}/${stages.length}`;
  question.innerText = stages[currentStage].question;
  question.dataset.text = stages[currentStage].question;

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerText = stages[currentStage].answers[i].text;
    answers[i].dataset.text = stages[currentStage].answers[i].text;
  }

  for (let j = 0; j < checkBoxes.length; j++) {
    checkBoxes[j].dataset.count = stages[currentStage].answers[j].count;
    checkBoxes[j].checked = false;
  }
}

function chooseAnswer(stages, results) {
  const nextButton = document.getElementById("TestButton");

  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        checkBoxes.forEach((otherCheckBox) => {
          if (otherCheckBox !== checkBox) {
            otherCheckBox.checked = false;
          }
        });
      }
    });
  });

  if (!nextButton) return;

  nextButton.addEventListener("click", () => {
    const selectedCheckBox = Array.from(checkBoxes).find((checkBox) => checkBox.checked);

    if (!selectedCheckBox) {
      return;
    }

    resultCount += Number(selectedCheckBox.dataset.count);

    checkBoxes.forEach((checkBox) => {
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
  const testContainer = document.querySelector(".O_TestWho");
  const result = getResult(results);

  testContainer.innerHTML = "";

  const resultHeaderWrapper = document.createElement("div");
  resultHeaderWrapper.classList.add("A_H4");

  const resultHeader = document.createElement("h4");
  resultHeader.classList.add("hd", "Q_Header4Text");
  resultHeader.innerText = result.header;
  resultHeader.dataset.text = result.header;

  const resultContent = document.createElement("div");
  resultContent.classList.add("O_TestTextButton");

  const resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TextBlock");
  resultParagraph.innerText = result.paragraph;

  const resultButton = document.createElement("a");
  resultButton.classList.add("A_Button");
  resultButton.innerText = "обратно  к тестам";
  resultButton.href = "../tests.html";

  resultHeaderWrapper.appendChild(resultHeader);

  resultContent.appendChild(resultParagraph);
  resultContent.appendChild(resultButton);

  testContainer.appendChild(resultHeaderWrapper);
  testContainer.appendChild(resultContent);
}

export { initTest, chooseAnswer };
