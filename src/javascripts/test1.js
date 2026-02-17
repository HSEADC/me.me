console.clear;

import { initTest, chooseAnswer } from "./tests.js";

import imgGood from "../images/random/rnd-12.webp";
import imgOk from "../images/random/rnd-16.webp";
import imgBad from "../images/random/rnd-39.webp";

const stages = [
  {
    question: "Что означает подпись «corecore опять вернулся»?",
    answers: [
      {
        text: "Новый фитнес-тренд",
        count: 0,
      },
      {
        text: "Нарезку из странных видео под тревожную музыку",
        count: 1,
      },
      {
        text: "Эстетику минимализма",
        count: 0,
      },
    ],
  },
  {
    question:
      "Если в видео внезапно появляется фраза «bro is NOT surviving», это обычно",
    answers: [
      {
        text: "Поддержка",
        count: 0,
      },
      {
        text: "Ироничный комментарий",
        count: 1,
      },
      {
        text: "Реальная новость",
        count: 0,
      },
    ],
  },
  {
    question: "Когда в комментариях массово пишут «chat, is this real?», это:",
    answers: [
      {
        text: "Вопрос стримеру",
        count: 0,
      },
      {
        text: "Новый челлендж",
        count: 1,
      },
      {
        text: "Мемная реакция на абсурдную ситуацию",
        count: 0,
      },
    ],
  },
  {
    question:
      "Если видео выглядит максимально бессмысленным, с резкими склейками и странным звуком, это:",
    answers: [
      {
        text: "Это специально сделанный абсурдный формат",
        count: 1,
      },
      {
        text: "Автор не умеет монтировать",
        count: 0,
      },
      {
        text: "Это реклама",
        count: 0,
      },
    ],
  },
];

const results = [
  {
    header: "отлично!!",
    paragraph: "вы и правда шарите, ученик превзошёл учителя",
    image: `${imgGood}`,
  },
  {
    header: "не так уж и плохо!",
    paragraph:
      "но советуем на досуге посидеть в тик токе подтянуть свои знания",
    image: `${imgOk}`,
  },
  {
    header: "ай-ай-ай",
    paragraph:
      "в мемах вы не разбираетесь, но ничего! почитайте наши статьи и вы всё поймёте!",
    image: `${imgBad}`,
  },
];

initTest(stages);
chooseAnswer(stages, results);
