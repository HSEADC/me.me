import React from "react";
import { createRoot } from "react-dom/client";

import M_Footer from "../components/M_Footer.jsx";

const footer = document.querySelector(".M_Footer");

if (footer) {
  createRoot(footer).render(<M_Footer />);
}
