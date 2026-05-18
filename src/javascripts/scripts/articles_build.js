const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();

const vaultDir = path.join(rootDir, "src", "data", "articles_vault");

const vaultArticlesDir = path.join(vaultDir, "articles");
const vaultImagesDir = path.join(vaultDir, "images");

const outputJsonPath = path.join(rootDir, "src", "data", "articles.json");

const outputImagesDir = path.join(rootDir, "src", "images", "articles");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Нет frontmatter");
  }

  const frontmatterText = match[1];
  const body = match[2];

  const data = {};

  const lines = frontmatterText.split(/\r?\n/);

  let currentArrayKey = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) continue;

    const arrayMatch = line.match(/^\s*-\s+(.+)$/);

    if (arrayMatch && currentArrayKey) {
      data[currentArrayKey].push(arrayMatch[1].trim());
      continue;
    }

    const keyValueMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);

    if (keyValueMatch) {
      const key = keyValueMatch[1];
      const value = keyValueMatch[2].trim();

      if (value === "") {
        data[key] = [];
        currentArrayKey = key;
      } else {
        data[key] = value;
        currentArrayKey = null;
      }
    }
  }

  return {
    data,
    body,
  };
}

function parseContent(body) {
  const blocks = [];

  const parts = body
    .split(/\n\s*\n/g)
    .map((part) => part.trim())
    .filter(Boolean);

  for (const part of parts) {
    if (part.startsWith("## ")) {
      blocks.push({
        type: "h2",
        text: part.replace(/^##\s+/, "").trim(),
      });

      continue;
    }

    if (part.startsWith("![")) {
      const imageMatch = part.match(/!\[(.*?)\]\((.*?)\)/);

      if (imageMatch) {
        blocks.push({
          type: "image",
          alt: imageMatch[1],
          src: imageMatch[2],
        });

        continue;
      }
    }

    blocks.push({
      type: "p",
      text: part.replace(/\n/g, " ").trim(),
    });
  }

  return blocks;
}

function getMedia(articleId) {
  const articleMediaDir = path.join(vaultImagesDir, articleId);

  const media = {
    images: [],
    videos: [],
  };

  if (!fs.existsSync(articleMediaDir)) {
    return media;
  }

  const files = fs.readdirSync(articleMediaDir);

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();

    if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext) && !file.startsWith("cover")) {
      media.images.push(file);
    }

    if ([".mp4", ".webm"].includes(ext)) {
      media.videos.push(file);
    }
  });

  media.images.sort();
  media.videos.sort();

  return media;
}

function copyMedia(articleId) {
  const sourceDir = path.join(vaultImagesDir, articleId);

  if (!fs.existsSync(sourceDir)) return;

  const targetDir = path.join(outputImagesDir, articleId);

  ensureDir(targetDir);

  const files = fs.readdirSync(sourceDir);

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    fs.copyFileSync(sourcePath, targetPath);
  });
}

function getArticleOrder(id) {
  const match = String(id).match(/art_(\d+)/);

  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function buildArticles() {
  ensureDir(path.dirname(outputJsonPath));
  ensureDir(outputImagesDir);

  const files = fs.readdirSync(vaultArticlesDir).filter((file) => file.endsWith(".md"));

  const articles = [];

  files.forEach((file) => {
    const filePath = path.join(vaultArticlesDir, file);

    const markdown = fs.readFileSync(filePath, "utf8");

    const { data, body } = parseFrontmatter(markdown);

    const articleId = data.id;

    if (!articleId) {
      throw new Error(`нет id тут ${file}`);
    }

    copyMedia(articleId);

    const media = getMedia(articleId);

    articles.push({
      id: articleId,

      order: getArticleOrder(articleId),

      title: data.title || "",

      h1: data.h1 || data.title || "",

      description: data.description || "",

      slug: data.slug || articleId,

      cover: `./images/articles/${articleId}/cover.webp`,

      tags: Array.isArray(data.tags) ? data.tags : [],

      media,

      content: parseContent(body),

      url: `./pages/articles/${articleId}.html`,
    });
  });

  articles.sort((a, b) => a.order - b.order);

  fs.writeFileSync(outputJsonPath, JSON.stringify(articles, null, 2), "utf8");

  console.log(`ура статей собрали вот столько ${articles.length}`);
}

buildArticles();
