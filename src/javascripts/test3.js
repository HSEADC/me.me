console.clear();

import "../stylesheets/style.css";

import { initImageTest, chooseImageAnswer } from "./tests.js";

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

const stages = [
  {
    blurredImage: img1Blurred,
    normalImage: img1Normal,
    answers: [
      { text: "собака с яблоками", correct: false },
      { text: "фу, покажи", correct: false },
      { text: "яблоко с языком", correct: true },
    ],
  },
  {
    blurredImage: img2Blurred,
    normalImage: img2Normal,
    answers: [
      { text: "окак", correct: false },
      { text: "фани хомяк", correct: true },
      { text: "троллфейс", correct: false },
    ],
  },
  {
    blurredImage: img3Blurred,
    normalImage: img3Normal,
    answers: [
      { text: "вряд ли", correct: false },
      { text: "sybau", correct: false },
      { text: "хомяк грустный", correct: true },
    ],
  },
  {
    blurredImage: img4Blurred,
    normalImage: img4Normal,
    answers: [
      { text: "я не договорила", correct: false },
      { text: "муся ты куда", correct: true },
      { text: "что происходит", correct: false },
    ],
  },
  {
    blurredImage: img5Blurred,
    normalImage: img5Normal,
    answers: [
      { text: "нифига себе муся", correct: true },
      { text: "мечта детства №1", correct: false },
      { text: "ачё)", correct: false },
    ],
  },
  {
    blurredImage: img6Blurred,
    normalImage: img6Normal,
    answers: [
      { text: "эльгато", correct: false },
      { text: "брейнрот", correct: false },
      { text: "кот-банан", correct: true },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const testImage = document.getElementById("TestImage");

  if (testImage) {
    initImageTest(stages);
    chooseImageAnswer(stages);
  }
});
