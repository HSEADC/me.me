import React from "react";

import logo from "../images/logo.svg";

export default function A_FooterLogo() {
  return (
    <a href="/" className="A_FooterLogoLink">
      <img src={logo} alt="logo" className="A_FooterLogo" />
    </a>
  );
}
