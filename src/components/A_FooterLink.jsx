import React from "react";

export default function A_FooterLink({ href, text }) {
  return (
    <a href={href} className="hd Q_FooterLink" data-text={text}>
      {text}
    </a>
  );
}
