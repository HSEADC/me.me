import React from "react";
import A_HeaderLink from "./A_HeaderLink.jsx";

export default function C_HeaderLinks({ menu }) {
  return (
    <>
      {menu.map((item) => (
        <A_HeaderLink key={item.url} text={item.text} url={item.url} />
      ))}
    </>
  );
}
