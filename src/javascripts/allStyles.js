import "../stylesheets/style.css";
import { applyTypographer, applyOutlineText } from "./typographer";

document.addEventListener("DOMContentLoaded", () => {
  applyTypographer();
  applyOutlineText();
});
