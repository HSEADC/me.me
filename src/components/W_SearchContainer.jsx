import React, { useState } from "react";

import { searchItems } from "../javascripts/search_data.js";
import A_SearchInput from "./A_SearchInput.jsx";
import C_Dropdown from "./C_Dropdown.jsx";

export default function W_SearchContainer() {
  const [value, setValue] = useState("");

  const normalizedValue = value.toLowerCase().trim();

  const results =
    normalizedValue.length < 2
      ? []
      : searchItems.filter((item) => {
          const searchableText = [item.title, item.description, item.type, ...(item.keywords || [])].join(" ").toLowerCase();

          return searchableText.includes(normalizedValue);
        });

  function handleSubmit(event) {
    event.preventDefault();

    if (normalizedValue.length < 2) return;

    window.location.href = `/me.me/search.html?q=${encodeURIComponent(normalizedValue)}`;
  }

  return (
    <form className="W_SearchContainer" onSubmit={handleSubmit}>
      <A_SearchInput value={value} onChange={setValue} />

      <button className="A_SearchButton" type="submit">
        Найти!
      </button>

      <C_Dropdown results={results} />
    </form>
  );
}
