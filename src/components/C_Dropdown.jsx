import React from "react";
import M_SearchResult from "./M_SearchResult.jsx";

export default function C_Dropdown({ results }) {
  if (!results.length) {
    return <div className="C_Dropdown"></div>;
  }

  return (
    <div className="C_Dropdown" style={{ display: "flex" }}>
      {results.map((result) => (
        <M_SearchResult key={result.url} result={result} />
      ))}
    </div>
  );
}
