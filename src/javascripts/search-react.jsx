import { searchItems } from "./search_data.js";

const searchInput = document.querySelector(".Q_SearchText");
const resultsContainer = document.querySelector(".C_SearchResults");
const title = document.querySelector(".Q_Header2Text");
const queryTitle = document.querySelector(".Q_Header2Query");

const params = new URLSearchParams(window.location.search);
const queryFromUrl = params.get("q") || "";

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .trim();
}

function getSearchResults(query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  return searchItems.filter((item) => {
    const searchableText = normalizeText(`${item.title} ${item.description} ${item.type}`);

    return searchableText.includes(normalizedQuery);
  });
}

function createSearchResult(result) {
  const link = document.createElement("a");

  link.classList.add("M_SearchResult");
  link.href = result.url;

  link.innerHTML = `
    <div class="A_H3">
      <h3 class="Q_Header3Text">${result.title}</h3>
    </div>

    <p class="A_TextBlock">${result.description || ""}</p>

    <p class="A_SearchResultType">${result.type}</p>
  `;

  return link;
}

function updateTitle(query) {
  if (!title) return;

  if (!query) {
    title.textContent = "Что потеряли?";
    title.dataset.text = "Что потеряли?";

    if (queryTitle) {
      queryTitle.textContent = "";
      queryTitle.dataset.text = "";
    }

    return;
  }

  title.textContent = "Что нашлось по запросу";
  title.dataset.text = "Что нашлось по запросу";

  if (queryTitle) {
    queryTitle.textContent = `«${query}»`;
    queryTitle.dataset.text = `«${query}»`;
  }
}

function renderResults(query) {
  if (!resultsContainer) return;

  const normalizedQuery = query.trim();
  const results = getSearchResults(normalizedQuery);

  resultsContainer.innerHTML = "";

  updateTitle(normalizedQuery);

  if (!normalizedQuery) {
    resultsContainer.innerHTML = `
      <p class="A_TextBlock">Введите запрос в поисковую строку</p>
    `;
    return;
  }

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <p class="A_TextBlock">Ничего не нашлось :(</p>
    `;
    return;
  }

  results.forEach((result) => {
    resultsContainer.appendChild(createSearchResult(result));
  });
}

function goToSearchPage(query) {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) return;

  window.location.href = `https://mememedia.adc.ac/search.html?q=${encodeURIComponent(normalizedQuery)}`;
}

function initSearchPage() {
  if (searchInput) {
    searchInput.value = queryFromUrl;

    searchInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;

      goToSearchPage(searchInput.value);
    });
  }

  renderResults(queryFromUrl);
}

document.addEventListener("DOMContentLoaded", initSearchPage);
