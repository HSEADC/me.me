import React from "react";

export default function M_SearchResult({ result }) {
  return (
    <a className="M_SearchResult" href={result.url}>
      <h5 className="A_SearchResultHeader">{result.title}</h5>
      <p className="A_SearchResultDescription">
        {result.type} · {result.description}
      </p>
    </a>
  );
}
