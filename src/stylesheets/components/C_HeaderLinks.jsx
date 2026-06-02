import React from "react";
import A_HeaderLinks from "./A_HeaderLink";

export default function W_Header_all_links({ homeURL, menu }) {
  const menuElements = menu.map(({ text, url }, i) => {
    const linkURL = homeURL + url;

    return <A_HeaderLink key={i} text={text} url={url} />;
  });

  return <div className="W_Header_all_links"></div>;
}
