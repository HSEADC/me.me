import { articles } from "./search_data.js";

initSearchPage(articles);

function initSearchPage(articles) {
  const input = document.querySelector(".A_SearchInput");
  const button = document.querySelector(".A_SearchButton");
  const results = document.querySelector(".C_SearchResults");

  if (!input || !button || !results) return;

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";

  input.value = query;

  renderResults(query, results, articles);

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase().trim();
    updateURL(value);
    renderResults(value, results, articles);
  });

  button.addEventListener("click", () => {
    const value = input.value.toLowerCase().trim();
    updateURL(value);
    renderResults(value, results, articles);
  });
}

function renderResults(query, results, articles) {
  results.innerHTML = "";

  if (query.length < 3) return;

  const list = articles.filter((article) => article.title.toLowerCase().includes(query) || article.description.toLowerCase().includes(query));

  if (list.length === 0) {
    results.innerHTML = "<p>Ничего не найдено</p>";
    return;
  }

  list.forEach((item) => {
    const card = document.createElement("a");
    card.classList.add("W_IndexSectionCard");
    card.href = item.url;

    const header = document.createElement("h3");
    header.classList.add("A_IndexSectionCardHeader");
    header.innerHTML = hightlight(item.title, query);

    const description = document.createElement("p");
    description.classList.add("A_IndexSectionCardDescription");
    description.innerHTML = hightlight(item.description, query);

    card.appendChild(header);
    card.appendChild(description);

    results.appendChild(card);
  });
}

function hightlight(text, value) {
  const regex = new RegExp(`${value}`, "gi");

  return text.replace(regex, `<span class="Q_Hightlight">${value}</span>`);
}

function updateURL(value) {
  const url = `search.html?q=${encodeURIComponent(value)}`;
  history.replaceState(null, "", url);
}
