import React from "react";

export default function A_HeaderLink({ text, url, onClick }) {
  const currentPath = window.location.pathname;
  const linkPath = new URL(url, window.location.origin).pathname;

  const isCurrent = currentPath === linkPath;

  return (
    <a href={url} className={`hd ${isCurrent ? "Q_HeaderLinkCurrent" : "Q_HeaderLink"}`} data-text={text} onClick={onClick}>
      <h3>{text}</h3>
    </a>
  );
}
