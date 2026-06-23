import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import C_HeaderLinks from "../components/C_HeaderLinks.jsx";
import W_SearchContainer from "../components/W_SearchContainer.jsx";

import logo from "../images/logo.svg";
import burgerIcon from "../images/BurgerIcon.svg";
import burgerClose from "../images/BurgerClose.svg";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => {
      const next = !prev;

      document.body.style.overflow = next ? "hidden" : "";

      return next;
    });
  }

  function closeMenu() {
    document.body.style.overflow = "";
    setIsMenuOpen(false);
  }

  return (
    <>
      <a href="/" className="A_LogoLink">
        <img src={logo} className="A_Logo" alt="ME.ME" />
      </a>

      <button className="A_HeaderBurger" type="button" aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"} onClick={toggleMenu}>
        <img src={isMenuOpen ? burgerClose : burgerIcon} alt="" />
      </button>

      <div className={`C_HeaderLinks ${isMenuOpen ? "is-open" : ""}`}>
        <C_HeaderLinks menu={menu} onLinkClick={closeMenu} />
        <W_SearchContainer />
        <div className="W_HeaderMobileFooter">
          <a href="https://www.tiktok.com/@me.me.media?_r=1&_t=ZM-92T5yGjtwEe" className="hd Q_FooterLink" data-text="наш тик-ток">
            наш тик-ток
          </a>

          <a href="https://t.me/TyTxuxuxaxa" className="hd Q_FooterLink" data-text="наш телеграм">
            наш телеграм
          </a>
        </div>
      </div>
    </>
  );
}

const header = document.querySelector(".M_Header");

if (header) {
  createRoot(header).render(<M_Header />);
}
