import React from "react";
import { createRoot } from "react-dom/client";

import C_HeaderLinks from "../components/C_HeaderLinks.jsx";
import W_SearchContainer from "../components/W_SearchContainer.jsx";

import logo from "../images/logo.svg";

const menu = [
  {
    text: "главная",
    url: "/",
  },
  {
    text: "о нас",
    url: "/pages/about.html",
  },
  {
    text: "статьи",
    url: "/pages/articles.html",
  },
  {
    text: "интерактивы",
    url: "/pages/interactives.html",
  },
];

function M_Header() {
  return (
    <>
      <a href="/" className="A_LogoLink js-menu-toggle">
        <img src={logo} className="A_Logo" alt="ME.ME" />
      </a>

      <div className="W_Header_all_links">
        <C_HeaderLinks menu={menu} />
        <W_SearchContainer />
      </div>
    </>
  );
}

const header = document.querySelector(".M_Header");

if (header) {
  createRoot(header).render(<M_Header />);
}
