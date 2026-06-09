import { Input } from "postcss";
import React from "react";

export function A_SearchInput({ value, onChange }) {
  return <input placeholder="Мем..." type="text" className="A_SearchInput" value={value} onChange={(e) => onChange(e.target.value)} />;
}
