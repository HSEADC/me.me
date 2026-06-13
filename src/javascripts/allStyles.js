import "../stylesheets/style.css";
import { applyTypographer, applyOutlineText } from "./typographer";

document.addEventListener("DOMContentLoaded", () => {
  applyTypographer();
  applyOutlineText();
});

// Inlined Random

document.addEventListener("DOMContentLoaded", () => {
  const imageBlocks = document.querySelectorAll(".Q_ImageInHeader, .Q_ImageOfPart");

  if (!imageBlocks.length) return;

  const req = require.context("../images/inlined", false, /^\.\/inlined-\d+\.webp$/i);
  const images = req.keys().map((key) => req(key));

  if (!images.length) return;

  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  imageBlocks.forEach((block, index) => {
    const imageUrl = shuffledImages[index % shuffledImages.length];

    block.style.backgroundImage = `url("${imageUrl}")`;
  });
});
