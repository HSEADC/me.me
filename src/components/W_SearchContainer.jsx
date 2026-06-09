import React from "react";

import { A_SearchInput } from "./A_SearchInput.jsx";
import { C_Dropdown } from "./C_Dropdown.jsx";

import { articles } from "../javascripts/search_data.js";

import { useMemo, useState } from "react";

export function W_SearchContainer() {
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return articles;
    }

    return articles.filter((article) => article.title.toLowerCase().includes(normalizedQuery) || article.description.toLowerCase().includes(normalizedQuery));
  });

  //   return {
  //     (<div className='W_SearchContainer'/>
  //     <A_SearchInput value = {query} onChange={setQuery}/>
  //     <C_Dropdown items={filteredArticles}/>)
  //   }
}
