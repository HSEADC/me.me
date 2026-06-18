import React from "react";
import { createRoot } from "react-dom/client";
import { W_ArticlePage } from "../components/W_ArticlePage.jsx";
import { applyTypographer, applyOutlineText } from "./typographer";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".W_ArticleContent");

  if (!container) return;

  const root = createRoot(container);

  root.render(<W_ArticlePage />);

  requestAnimationFrame(() => {
    applyTypographer();

    applyOutlineText();
    setTimeout(() => {
      applyTypographer();
      applyOutlineText();
    }, 100);
  });
});
