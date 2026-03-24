import Airtable from "airtable";
import "../stylesheets/style.css";

// белый шум на фоне

const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

if (canvas && ctx) {
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function drawNoiseFrame() {
    const w = canvas.width;
    const h = canvas.height;
    const imageData = ctx.createImageData(w, h);
    const buffer = imageData.data;

    for (let i = 0; i < buffer.length; i += 4) {
      const shade = 120 + Math.random() * 130;

      buffer[i] = shade;
      buffer[i + 1] = shade;
      buffer[i + 2] = shade;
      buffer[i + 3] = 150;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  let lastFrameTime = 0;

  function animate(time) {
    if (time - lastFrameTime > 60) {
      drawNoiseFrame();
      lastFrameTime = time;
    }

    requestAnimationFrame(animate);
  }

  drawNoiseFrame();
  requestAnimationFrame(animate);
}

// типографика обводка фолбэк

document.querySelectorAll(".txt, .hd, .nv").forEach((el) => {
  el.setAttribute("data-text", el.textContent.trim());
});

// airtable

const token = "pat70c6PN6XNA8kY1.6dd7f89f94bc50a552d3db45f1c33cbafb9676f4881896b0b29e4935d6bcbae8";
const baseId = "apptbuydEGESibGer";
const tableName = "articles-list";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: token,
});

const base = Airtable.base(baseId);

// статьи по фильтрам фильтры по статьям

const articleFiltersMap = {
  "art-1": ["Filter-1", "Filter-2"],
  "art-2": ["Filter-3", "Filter-4"],
  "art-3": ["Filter-3", "Filter-5", "Filter-6"],
  "art-4": ["Filter-1", "Filter-2", "Filter-3"],
  "art-5": ["Filter-2", "Filter-3", "Filter-5"],
  "art-6": ["Filter-3", "Filter-5", "Filter-7"],
  "art-7": ["Filter-6", "Filter-7"],
  "art-8": ["Filter-1", "Filter-2"],
  "art-9": ["Filter-1", "Filter-2"],
  "art-10": ["Filter-4", "Filter-6", "Filter-7"],
};

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

function getArticlesTeasers() {
  return new Promise((resolve, reject) => {
    const content = [];

    base(tableName)
      .select({ maxRecords: 100 })
      .firstPage()
      .then((records) => {
        records.forEach((record) => {
          const f = record.fields || {};
          const imageUrl =
            Array.isArray(f.images) && f.images[0] && f.images[0].url ? f.images[0].url : "";

          content.push({
            id: record.id,
            title: f.title || "без названия",
            description: f.description || "",
            tags: Array.isArray(f.tags) ? f.tags : [],
            image: imageUrl,
            url: f.url || "#",
          });
        });

        content.sort((a, b) => {
          return getArticleOrder(a.url) - getArticleOrder(b.url);
        });

        resolve(content);
      })
      .catch((err) => reject(err));
  });
}

function getArticleSlug(url) {
  const match = String(url).match(/(art-\d+)\.html/i);
  return match ? match[1].toLowerCase() : "";
}

function getArticleOrder(url) {
  const match = String(url).match(/art-(\d+)\.html/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function getArticleFilterClasses(url) {
  const slug = getArticleSlug(url);
  return articleFiltersMap[slug] || [];
}

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
  const activeTags = document.querySelectorAll(".A_ArticlesFilter.active");
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

  return selectedFilters.every((filterName) => card.classList.contains(filterName));
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
  const input = document.querySelector(".Q_ArticlesSearchInput");
  const searchQuery = input ? input.value : "";

  cards.forEach((card) => {
    const filtersMatch = matchesActiveFilters(card, selectedFilters);
    const searchMatch = matchesSearchQuery(card, searchQuery);

    card.style.display = filtersMatch && searchMatch ? "" : "none";
  });
}

function updateInfo(content) {
  const root = document.querySelector(".C_ArticlesTeasers");
  if (!root) return;

  root.innerHTML = "";

  content.forEach((item) => {
    root.appendChild(createArticleTeaserCard(item));
  });
}

function createArticleTeaserCard(article) {
  const { title, image, url } = article;
  const filterClasses = getArticleFilterClasses(url);

  const link = document.createElement("a");
  link.href = url || "#";
  link.classList.add("M_ArticleCardLink");
  link.classList.add(...filterClasses);

  const titleSearch = normalizeSearchText(title || "");

  link.dataset.titleSearch = titleSearch;
  link.dataset.search = titleSearch;

  const card = document.createElement("div");
  card.classList.add("A_ArticleCard");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("toned", "Q_ArticleCardImage");

  if (image) {
    imgDiv.style.backgroundImage = `url("${image}")`;
    imgDiv.style.backgroundSize = "cover";
    imgDiv.style.backgroundPosition = "center";
    imgDiv.style.backgroundRepeat = "no-repeat";
  }

  const titleEl = document.createElement("h3");
  titleEl.classList.add("Q_ArticleCardCaption");
  titleEl.textContent = title || "без названия";

  card.appendChild(imgDiv);
  card.appendChild(titleEl);
  link.appendChild(card);

  return link;
}

// фильтрация ах фильтрация

function initArticlesFilter() {
  const tags = document.querySelectorAll(".A_ArticlesFilter");

  if (!tags.length) return;

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      tag.classList.toggle("active");
      applyArticlesFilterAndSearch();
    });
  });
}

function initArticlesSearch() {
  const input = document.querySelector(".Q_ArticlesSearchInput");

  if (!input) return;

  input.addEventListener("input", () => {
    applyArticlesFilterAndSearch();
  });
}

function filterArticlesByTag() {
  applyArticlesFilterAndSearch();
}

function filterAllArticles() {
  applyArticlesFilterAndSearch();
}
