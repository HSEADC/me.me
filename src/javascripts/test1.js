console.clear;

import { initTest, chooseAnswer } from "./tests.js";
import "../stylesheets/style.css";

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

// обводка на типографике

function syncOutlinedText() {
  document.querySelectorAll(".txt, .hd, .nv, .A_HeaderPart, .A_Question, .A_NumberOfQuestion").forEach((el) => {
    el.setAttribute("data-text", el.textContent.trim());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  syncOutlinedText();

  // это чтобы обводка ставилась после того как проставится текст
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

document.addEventListener("DOMContentLoaded", () => {
  const imageBlocks = document.querySelectorAll(".Q_ImageInHeader, .Q_ImageBigFloat, .Q_ImageSmallFloat");
  if (!imageBlocks.length) return;

  const req = require.context("../images/inlined", false, /^\.\/inlined-\d+\.webp$/i);
  const urls = req.keys().map((k) => req(k));
  const shuffledImages = [...urls].sort(() => Math.random() - 0.5);

  imageBlocks.forEach((block, index) => {
    const imageUrl = shuffledImages[index % shuffledImages.length];
    block.style.backgroundImage = `url("${imageUrl}")`;
  });
});

// логика тестов

const stages = [
  {
    question: "кого называют NPC?",
    answers: [
      { text: "персонаж из игры без личности", count: 0 },
      { text: "человек, без своего мнения", count: 1 },
      { text: "бот в комментариях", count: 0 },
      { text: "человек без эмоций", count: 0 },
    ],
  },
  {
    question: "я дурею с этой прикормки — что означает эта фраза",
    answers: [
      { text: "рыбацкая хитрость", count: 0 },
      { text: "про вкусную еду", count: 0 },
      { text: "зависимость от чего-то", count: 1 },
      { text: "реклама", count: 0 },
    ],
  },
  {
    question: "gyatt чаще всего используется как",
    answers: [
      { text: "реакция на что-то впечатляющее", count: 1 },
      { text: "ругательство", count: 0 },
      { text: "приветствие", count: 0 },
      { text: "просто звук", count: 0 },
    ],
  },
  {
    question: "что такое свага?",
    answers: [
      { text: "трендовое движение", count: 0 },
      { text: "брендовая одежда", count: 0 },
      { text: "название тусовки", count: 0 },
      { text: "стиль и вайб", count: 1 },
    ],
  },
  {
    question: "выбери любое число",
    answers: [
      { text: "47", count: 0 },
      { text: "11", count: 0 },
      { text: "67", count: 1 },
      { text: "23", count: 0 },
    ],
  },
];

const results = [
  {
    header: "человек-мем",
    paragraph: "ученик превзошёл учителя! вы очень хорошо разбираетесь в мемах! не хотите написать нам пару статей и дать интервью? или отложить тик ток и потрогать траву?",
  },
  {
    header: "работяга",
    paragraph: "вы уверенно ориентируетесь в мемах! но на досуге советуем отложить все дела и посидеть в соцсетях часов эдак 6-8, чтобы подтянуть знания!",
  },
  {
    header: "первый день в интернете",
    paragraph: "в мемах вы не разбираетесь, но ничего! почитайте наши статьи и вы всё поймёте!",
  },
];

initTest(stages);
chooseAnswer(stages, results);
