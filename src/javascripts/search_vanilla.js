import { articles } from "./search_data.js";

initSearch(articles);

function initSearch(articles) {
  const input = document.querySelector(".A_SearchInput");
  const button = document.querySelector(".A_SearchButton");
  const dropdown = document.querySelector(".C_Dropdown");

  if (!input || !button || !dropdown) return;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase().trim();

    if (value.length < 2) {
      dropdown.innerHTML = "";
      dropdown.style.display = "none";
      return;
    }

    const results = articles.filter((article) => {
      return article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value);
    });

    button = results.length === 0;

    renderDropdown(results, dropdown, value);
  });
}

function renderDropdown(results, dropdown, value) {
  dropdown.innerHTML = "";

  if (!results.length) {
    dropdown.style.display = "none";
    return;
  }

  dropdown.style.display = "flex";

  results.forEach((result) => {
    const item = document.createElement("a");
    item.classList.add("M_SearchResult");
    item.href = result.url;

    const title = document.createElement("h5");
    title.classList.add("A_SearchResultHeader");
    title.textContent = result.title;

    const description = document.createElement("p");
    description.classList.add("A_SearchResultDescription");
    description.textContent = result.description;

    item.appendChild(title);
    item.appendChild(description);
    dropdown.appendChild(item);
  });
}
