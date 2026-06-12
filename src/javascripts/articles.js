import articles from "../data/articles.json";

// обложки статей

const articleCoversReq = require.context("../images/articles", true, /cover\.(png|webp|jpg|jpeg)$/i);

function getArticleCover(article) {
  const possibleFiles = [`./${article.id}/cover.webp`, `./${article.id}/cover.png`, `./${article.id}/cover.jpg`, `./${article.id}/cover.jpeg`];

  for (const filePath of possibleFiles) {
    if (articleCoversReq.keys().includes(filePath)) {
      return articleCoversReq(filePath);
    }
  }

  return "";
}

function getArticlesTeasers() {
  return Promise.resolve(
    articles
      .slice()
      .sort((a, b) => a.order - b.order)
      .map((article) => ({
        id: article.id,
        title: article.h1 || article.title || "без названия",
        description: article.description || "",
        tags: Array.isArray(article.tags) ? article.tags : [],
        cover: getArticleCover(article),
        url: `./articles/${article.id}.html`,
      })),
  );
}

getArticlesTeasers()
  .then((content) => {
    updateInfo(content);
    initArticlesFilter();
    initArticlesSearch();
    applyArticlesFilterAndSearch();
  })
  .catch((error) => {
    console.error("Ошибка загрузки карточек статей:", error);
  });

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/й/g, "и")
    .replace(/[^a-zа-я0-9\s-]/gi, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getSearchTokens(value) {
  const normalized = normalizeSearchText(value);

  if (!normalized) return [];

  return normalized.split(" ").filter(Boolean);
}

function getTrigrams(value) {
  const normalized = `  ${normalizeSearchText(value)}  `;
  const trigrams = new Set();

  if (normalized.trim().length < 2) {
    return trigrams;
  }

  for (let i = 0; i < normalized.length - 2; i += 1) {
    trigrams.add(normalized.slice(i, i + 3));
  }

  return trigrams;
}

function getTrigramSimilarity(a, b) {
  const aTrigrams = getTrigrams(a);
  const bTrigrams = getTrigrams(b);

  if (!aTrigrams.size || !bTrigrams.size) {
    return 0;
  }

  let intersection = 0;

  aTrigrams.forEach((item) => {
    if (bTrigrams.has(item)) {
      intersection += 1;
    }
  });

  return (2 * intersection) / (aTrigrams.size + bTrigrams.size);
}

function getActiveFilterNames() {
  const activeTags = document.querySelectorAll(".A_FilterTag.active");
  const selectedFilters = [];

  activeTags.forEach((tag) => {
    const classList = tag.className.split(" ");

    classList.forEach((className) => {
      if (/^Filter-\d+$/i.test(className)) {
        selectedFilters.push(className);
      }
    });
  });

  return [...new Set(selectedFilters)];
}

function matchesActiveFilters(card, selectedFilters) {
  if (!selectedFilters.length) return true;

  const cardTags = (card.dataset.tags || "").split("|").filter(Boolean);

  return selectedFilters.every((filterName) => {
    const filterEl = document.querySelector(`.A_FilterTag.${filterName}`);
    const filterText = filterEl ? normalizeSearchText(filterEl.textContent) : normalizeSearchText(filterName);

    return cardTags.includes(filterText);
  });
}

function matchesSearchQuery(card, query) {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) return true;

  const searchText = card.dataset.search || "";

  if (!searchText) return false;

  if (searchText.includes(normalizedQuery)) {
    return true;
  }

  const queryTokens = getSearchTokens(normalizedQuery);

  if (queryTokens.length) {
    const allTokensMatch = queryTokens.every((token) => searchText.includes(token));

    if (allTokensMatch) {
      return true;
    }
  }

  const titleText = card.dataset.titleSearch || "";
  const similarityWithTitle = getTrigramSimilarity(titleText, normalizedQuery);
  const similarityWithAllText = getTrigramSimilarity(searchText, normalizedQuery);
  const similarity = Math.max(similarityWithTitle, similarityWithAllText);

  if (normalizedQuery.length <= 3) {
    return similarity >= 0.55;
  }

  if (normalizedQuery.length <= 6) {
    return similarity >= 0.42;
  }

  return similarity >= 0.32;
}

function applyArticlesFilterAndSearch() {
  const cards = document.querySelectorAll(".M_ArticleCardLink");
  const selectedFilters = getActiveFilterNames();
  const input = document.querySelector(".Q_SearchText");
  const searchQuery = input ? input.value : "";

  cards.forEach((card) => {
    const filtersMatch = matchesActiveFilters(card, selectedFilters);
    const searchMatch = matchesSearchQuery(card, searchQuery);

    card.style.display = filtersMatch && searchMatch ? "" : "none";
  });
}

function updateInfo(content) {
  const root = document.querySelector(".W_Articles");

  if (!root) return;

  root.innerHTML = "";

  content.forEach((item) => {
    root.appendChild(createArticleTeaserCard(item));
  });
}

function createArticleTeaserCard(article) {
  const { title, cover, url, tags } = article;

  const link = document.createElement("a");
  link.href = url;
  link.classList.add("M_ArticleCardLink");

  const normalizedTags = Array.isArray(tags) ? tags.map((tag) => normalizeSearchText(tag)) : [];
  const titleSearch = normalizeSearchText(title || "");
  const fullSearch = normalizeSearchText([title, ...(tags || [])].join(" "));

  link.dataset.titleSearch = titleSearch;
  link.dataset.search = fullSearch;
  link.dataset.tags = normalizedTags.join("|");

  const card = document.createElement("div");
  card.classList.add("A_ArticleCard");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("toned", "Q_ArticleImage");

  imgDiv.style.backgroundSize = "cover";
  imgDiv.style.backgroundPosition = "center";
  imgDiv.style.backgroundRepeat = "no-repeat";

  if (cover) {
    imgDiv.style.backgroundImage = `url("${cover}")`;
  }

  const titleEl = document.createElement("h3");
  titleEl.classList.add("Q_ArticleCaption");
  titleEl.textContent = title || "без названия";

  card.appendChild(imgDiv);
  card.appendChild(titleEl);
  link.appendChild(card);

  return link;
}

// фильтрация

function initArticlesFilter() {
  const tags = document.querySelectorAll(".A_FilterTag");

  if (!tags.length) return;

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("active");
      applyArticlesFilterAndSearch();
    });
  });
}

function initArticlesSearch() {
  const input = document.querySelector(".Q_SearchText");

  if (!input) return;

  input.addEventListener("input", () => {
    applyArticlesFilterAndSearch();
  });
}

// инлайн-картинки другой путь отдельно для статей

document.addEventListener("DOMContentLoaded", () => {
  const imageBlocks = document.querySelectorAll(".Q_ImageInHeader, .Q_ImageBigFloat, .Q_ImageSmallFloat");

  if (!imageBlocks.length) return;

  const req = require.context("../images/inlined", false, /^\.\/inlined-\d+\.webp$/i);

  const urls = req.keys().map((k) => req(k));

  const shuffledImages = [...urls].sort(() => Math.random() - 0.5);

  imageBlocks.forEach((block, index) => {
    const imageUrl = shuffledImages[index % shuffledImages.length];
    block.style.backgroundImage = `url("${imageUrl}")`;
  });
});
