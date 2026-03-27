console.clear();

import "../stylesheets/style.css";

import img1Blurred from "../images/tests/1-blurred.webp";
import img1Normal from "../images/tests/1-normal.webp";
import img2Blurred from "../images/tests/2-blurred.webp";
import img2Normal from "../images/tests/2-normal.webp";
import img3Blurred from "../images/tests/3-blurred.webp";
import img3Normal from "../images/tests/3-normal.webp";
import img4Blurred from "../images/tests/4-blurred.webp";
import img4Normal from "../images/tests/4-normal.webp";
import img5Blurred from "../images/tests/5-blurred.webp";
import img5Normal from "../images/tests/5-normal.webp";
import img6Blurred from "../images/tests/6-blurred.webp";
import img6Normal from "../images/tests/6-normal.webp";

// белый шум на фоне

const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawNoiseFrame() {
  const w = canvas.width;
  const h = canvas.height;
  const imageData = ctx.createImageData(w, h);
  const buffer = imageData.data;

  for (let i = 0; i < buffer.length; i += 4) {
    const shade = 120 + Math.random() * 130;
    buffer[i] = shade;
    buffer[i + 1] = shade;
    buffer[i + 2] = shade;
    buffer[i + 3] = 150;
  }

  ctx.putImageData(imageData, 0, 0);
}

let lastFrameTime = 0;

function animate(time) {
  if (time - lastFrameTime > 60) {
    drawNoiseFrame();
    lastFrameTime = time;
  }

  requestAnimationFrame(animate);
}

drawNoiseFrame();
requestAnimationFrame(animate);

// обводка

function syncOutlinedText() {
  document.querySelectorAll(".txt, .hd, .nv, .A_HeaderPart, .A_Question, .A_NumberOfQuestion, .A_TestGuessResultHeader, .A_TestGuessResultText, .A_AnswerText").forEach((el) => {
    el.setAttribute("data-text", el.textContent.trim());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  syncOutlinedText();

  const observer = new MutationObserver(() => {
    syncOutlinedText();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
});

// инлайн-картинки

function applyInlineHeaderImages() {
  const imageBlocks = document.querySelectorAll(".Q_ImageInHeader, .Q_ImageBigFloat, .Q_ImageSmallFloat");
  if (!imageBlocks.length) return;

  const req = require.context("../images/inlined", false, /^\.\/inlined-\d+\.webp$/i);
  const urls = req.keys().map((key) => req(key));
  const shuffledImages = [...urls].sort(() => Math.random() - 0.5);

  imageBlocks.forEach((block, index) => {
    const imageUrl = shuffledImages[index % shuffledImages.length];
    block.style.backgroundImage = `url("${imageUrl}")`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyInlineHeaderImages();
});

// данные теста

const stages = [
  {
    question: "какой это мем?",
    blurredImage: img1Blurred,
    normalImage: img1Normal,
    answers: ["собака с яблоками", "фу, покажи", "яблоко с языком"],
    correctAnswerIndex: 2,
  },
  {
    question: "какой это мем?",
    blurredImage: img2Blurred,
    normalImage: img2Normal,
    answers: ["окак", "фани хомяк", "троллфейс"],
    correctAnswerIndex: 1,
  },
  {
    question: "какой это мем?",
    blurredImage: img3Blurred,
    normalImage: img3Normal,
    answers: ["вряд ли", "sybau", "хомяк грустный"],
    correctAnswerIndex: 2,
  },
  {
    question: "какой это мем?",
    blurredImage: img4Blurred,
    normalImage: img4Normal,
    answers: ["я не договорила", "муся ты куда", "что происходит"],
    correctAnswerIndex: 1,
  },
  {
    question: "какой это мем?",
    blurredImage: img5Blurred,
    normalImage: img5Normal,
    answers: ["нифига себе муся", "мечта детства №1", "ачё)"],
    correctAnswerIndex: 0,
  },
  {
    question: "какой это мем?",
    blurredImage: img6Blurred,
    normalImage: img6Normal,
    answers: ["эльгато", "брейнрот", "кот-банан"],
    correctAnswerIndex: 2,
  },
];

let currentStage = 0;
let selectedAnswerIndex = null;

function getDom() {
  return {
    root: document.querySelector(".O_TestGuess"),
    questionContainer: document.querySelector(".W_TestGuessQuestion"),
    numberOfQuestion: document.querySelector(".A_NumberOfQuestion"),
    question: document.querySelector(".A_Question"),
    imageBlock: document.querySelector(".A_TestGuessImage"),
    answerRows: Array.from(document.querySelectorAll(".M_TestGuessAnswerRow")),
    checkBoxes: Array.from(document.querySelectorAll(".A_TestGuessCheckbox")),
    answerTexts: Array.from(document.querySelectorAll(".A_AnswerText")),
    submitButton: document.querySelector(".A_TestGuessSubmit"),
  };
}

function selectAnswer(index, dom) {
  selectedAnswerIndex = index;

  dom.checkBoxes.forEach((checkBox, checkBoxIndex) => {
    checkBox.checked = checkBoxIndex === index;
  });
}

function bindAnswerSelection(dom) {
  dom.answerRows.forEach((row, index) => {
    row.addEventListener("click", (event) => {
      const clickedCheckbox = event.target instanceof HTMLInputElement;
      if (!clickedCheckbox) {
        selectAnswer(index, dom);
      }
    });
  });

  dom.checkBoxes.forEach((checkBox, index) => {
    checkBox.addEventListener("change", () => {
      selectAnswer(index, dom);
    });
  });
}

function renderStage() {
  const dom = getDom();
  const stage = stages[currentStage];

  selectedAnswerIndex = null;

  dom.numberOfQuestion.innerText = `${currentStage + 1}/${stages.length}`;
  dom.question.innerText = stage.question;
  dom.imageBlock.style.backgroundImage = `url("${stage.blurredImage}")`;

  dom.answerTexts.forEach((answerText, index) => {
    answerText.innerText = stage.answers[index] || "";
  });

  dom.checkBoxes.forEach((checkBox) => {
    checkBox.checked = false;
  });

  bindAnswerSelection(dom);
  bindSubmit(dom);
  syncOutlinedText();
}

function buildResultLayout(isCorrect) {
  const dom = getDom();
  const stage = stages[currentStage];

  dom.questionContainer.innerHTML = `
    <div class="W_TestGuessResultMain">
      <div class="A_TestGuessImage"></div>

      <div class="W_TestGuessResultSide">
        <div class="M_TestGuessResultBox">
          <h2 class="hd A_TestGuessResultHeader"></h2>
          <p class="hd A_TestGuessResultText"></p>

          <div class="A_TestGuessResultButtons">
            <button type="button" class="A_TestGuessResultButton A_TestGuessNextButton">следующую хочу</button>
            <a href="../tests.html" class="A_TestGuessResultButton">вернуться к тестам</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const resultImage = document.querySelector(".A_TestGuessImage");
  const resultHeader = document.querySelector(".A_TestGuessResultHeader");
  const resultText = document.querySelector(".A_TestGuessResultText");
  const nextButton = document.querySelector(".A_TestGuessNextButton");

  resultImage.style.backgroundImage = `url("${stage.normalImage}")`;

  if (isCorrect) {
    resultHeader.innerText = "Всё верно! Да ты знаток)";
    resultText.innerText = "";
  } else {
    resultHeader.innerText = "Ой, эх, неправильно(";
    resultText.innerText = "Тебе стоит прокачать мемную насмотренность";
  }

  nextButton.addEventListener("click", () => {
    currentStage += 1;

    if (currentStage >= stages.length) {
      currentStage = 0;
    }

    restoreQuestionLayout();
    renderStage();
  });

  syncOutlinedText();
}

function bindSubmit(dom) {
  if (!dom.submitButton) return;

  dom.submitButton.onclick = () => {
    if (selectedAnswerIndex === null) return;

    const isCorrect = selectedAnswerIndex === stages[currentStage].correctAnswerIndex;
    buildResultLayout(isCorrect);
  };
}

function restoreQuestionLayout() {
  const questionContainer = document.querySelector(".W_TestGuessQuestion");

  questionContainer.innerHTML = `
    <div class="A_ArticleHeader A_TestGuessHeader">
      <span class="Q_ImageInHeader" aria-hidden="true"></span>
      <h2 class="hd A_Question"></h2>
      <span class="Q_ImageInHeader" aria-hidden="true"></span>
      <p class="hd A_NumberOfQuestion"></p>
    </div>

    <div class="W_TestGuessMain">
      <div class="A_TestGuessImage"></div>

      <div class="W_TestGuessSide">
        <div class="W_TestGuessAnswers">
          <div class="C_TestGuessAnswer">
            <div class="M_TestGuessAnswerRow">
              <input type="checkbox" class="A_TestGuessCheckbox" />
              <p class="hd A_AnswerText A_TestGuessAnswerText"></p>
            </div>
          </div>

          <div class="C_TestGuessAnswer">
            <div class="M_TestGuessAnswerRow">
              <input type="checkbox" class="A_TestGuessCheckbox" />
              <p class="hd A_AnswerText A_TestGuessAnswerText"></p>
            </div>
          </div>

          <div class="C_TestGuessAnswer">
            <div class="M_TestGuessAnswerRow">
              <input type="checkbox" class="A_TestGuessCheckbox" />
              <p class="hd A_AnswerText A_TestGuessAnswerText"></p>
            </div>
          </div>
        </div>

        <button type="button" class="A_TestGuessSubmit">ответить</button>
      </div>
    </div>
  `;

  applyInlineHeaderImages();
  syncOutlinedText();
}

// старт
document.addEventListener("DOMContentLoaded", () => {
  renderStage();
});
