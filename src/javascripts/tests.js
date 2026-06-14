let currentStage = 0;
let resultCount = 0;

function getCheckBoxes() {
  return document.querySelectorAll("input[type=checkbox]");
}

function syncDataText(element, text) {
  element.innerText = text;
  element.dataset.text = text;
}

// Test 1

function initTest(stages) {
  const numberOfQuestion = document.getElementById("NumberOfQuestion");
  const question = document.getElementById("TestQuestion");
  const answers = document.querySelectorAll(".Q_MarkedListText");
  const checkBoxes = getCheckBoxes();

  numberOfQuestion.innerText = `${currentStage + 1}/${stages.length}`;
  syncDataText(question, stages[currentStage].question);

  for (let i = 0; i < answers.length; i++) {
    syncDataText(answers[i], stages[currentStage].answers[i].text);
  }

  for (let j = 0; j < checkBoxes.length; j++) {
    checkBoxes[j].dataset.count = stages[currentStage].answers[j].count;
    checkBoxes[j].checked = false;
  }
}

function chooseAnswer(stages, results) {
  const nextButton = document.getElementById("TestButton");
  const checkBoxes = getCheckBoxes();

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

    if (!selectedCheckBox) return;

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
  if (resultCount >= 4) return results[0];
  if (resultCount >= 2) return results[1];

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
  syncDataText(resultHeader, result.header);

  const resultContent = document.createElement("div");
  resultContent.classList.add("O_TestTextButton");

  const resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TextBlock");
  resultParagraph.innerText = result.paragraph;

  const resultButton = document.createElement("a");
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
  const testContainer = document.querySelector(".O_Test");
  const stage = stages[currentStage];

  testContainer.innerHTML = "";

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("A_TestImage");

  const testImage = document.createElement("img");
  testImage.id = "TestImage";
  testImage.classList.add("toned", "Q_ImageSelf");
  testImage.src = stage.blurredImage;

  const imageFrame = document.createElement("span");
  imageFrame.classList.add("Q_ImageHoverFrame");
  imageFrame.setAttribute("aria-hidden", "true");

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("O_TestTextButton");

  const markedList = document.createElement("div");
  markedList.classList.add("M_MarkedList");

  for (let i = 0; i < stage.answers.length; i++) {
    const answerLine = document.createElement("div");
    answerLine.classList.add("A_MarkedListLine");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.dataset.correct = stage.answers[i].correct;

    const answerText = document.createElement("p");
    answerText.classList.add("hd", "Q_MarkedListText");
    syncDataText(answerText, stage.answers[i].text);

    answerLine.appendChild(checkBox);
    answerLine.appendChild(answerText);
    markedList.appendChild(answerLine);
  }

  const submitButton = document.createElement("button");
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
  const testContainer = document.querySelector(".O_Test");

  if (!testContainer) return;

  testContainer.addEventListener("change", (event) => {
    if (event.target.type !== "checkbox") return;

    const checkBoxes = getCheckBoxes();

    if (event.target.checked) {
      checkBoxes.forEach((checkBox) => {
        if (checkBox !== event.target) {
          checkBox.checked = false;
        }
      });
    }
  });

  testContainer.addEventListener("click", (event) => {
    if (event.target.id === "TestButton") {
      const selectedCheckBox = Array.from(getCheckBoxes()).find((checkBox) => checkBox.checked);

      if (!selectedCheckBox) return;

      const isCorrect = selectedCheckBox.dataset.correct === "true";

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
  const testContainer = document.querySelector(".O_Test");
  const stage = stages[currentStage];

  testContainer.innerHTML = "";

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("A_TestImage");

  const testImage = document.createElement("img");
  testImage.id = "TestImage";
  testImage.classList.add("toned", "Q_ImageSelf");
  testImage.src = stage.normalImage;

  const imageFrame = document.createElement("span");
  imageFrame.classList.add("Q_ImageHoverFrame");
  imageFrame.setAttribute("aria-hidden", "true");

  const resultContent = document.createElement("div");
  resultContent.classList.add("O_TestTextButton");

  const testInfo = document.createElement("div");
  testInfo.classList.add("M_TestInfo");

  const resultHeaderWrapper = document.createElement("div");
  resultHeaderWrapper.classList.add("A_H4");

  const resultHeader = document.createElement("h4");
  resultHeader.classList.add("hd", "Q_Header4Text");

  if (isCorrect) {
    syncDataText(resultHeader, "Всё верно! Да ты знаток)");
  } else {
    syncDataText(resultHeader, "Эх, не совсем(");
  }

  const resultParagraph = document.createElement("p");
  resultParagraph.classList.add("A_TextBlock");

  if (isCorrect) {
    resultParagraph.innerText = "";
  } else {
    resultParagraph.innerText = "Тебе стоит прокачать мемную насмотренность";
  }

  const nextButton = document.createElement("button");
  nextButton.id = "NextImageButton";
  nextButton.classList.add("A_Button");

  if (currentStage + 1 < stages.length) {
    nextButton.innerText = "ещё картинку";
  } else {
    nextButton.innerText = "начать заново";
  }

  const backButton = document.createElement("a");
  backButton.classList.add("A_Button");
  backButton.innerText = "обратно к тестам";
  backButton.href = "../tests.html";

  const buttonsBox = document.createElement("div");
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

export { initTest, chooseAnswer, initImageTest, chooseImageAnswer };
