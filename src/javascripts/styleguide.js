import "../stylesheets/styleguide.css";
// обводка на типографике

document.querySelectorAll(".txt, .hd, .nv").forEach((el) => {
  el.setAttribute("data-text", el.textContent.trim());
});
