import React from "react";

export default function A_SearchInput({ value, onChange }) {
  return <input type="text" placeholder="найти мем про..." className="A_SearchInput" value={value} onChange={(event) => onChange(event.target.value)} />;
}
