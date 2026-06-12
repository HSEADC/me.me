const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../../..");

const vaultDir = path.join(rootDir, "src", "data", "articles_vault");
const vaultArticlesDir = path.join(vaultDir, "articles");
const vaultImagesDir = path.join(vaultDir, "images");

const outputJsonPath = path.join(rootDir, "src", "data", "articles.json");
const outputImagesDir = path.join(rootDir, "src", "images", "articles");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
const VIDEO_EXTENSIONS = [".mp4", ".webm"];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function safeRemoveDir(dirPath) {
  const normalizedDir = path.resolve(dirPath);
  const normalizedOutputImagesDir = path.resolve(outputImagesDir);

  if (!normalizedDir.startsWith(normalizedOutputImagesDir)) {
    throw new Error(`Опасное удаление остановлено: ${normalizedDir}`);
  }

  if (fs.existsSync(normalizedDir)) {
    fs.rmSync(normalizedDir, {
      recursive: true,
      force: true,
    });
  }
}

function parseFrontmatter(markdown, fileName) {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Нет frontmatter в файле ${fileName}`);
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

function parseMarkdownMedia(part) {
  const imageMatch = part.match(/^!\[(.*?)\]\((.*?)\)$/);

  if (imageMatch) {
    return {
      type: "image",
      alt: imageMatch[1].trim(),
      src: imageMatch[2].trim(),
    };
  }

  const videoMatch = part.match(/^!\[video:(.*?)\]\((.*?)\)$/i);

  if (videoMatch) {
    return {
      type: "video",
      alt: videoMatch[1].trim(),
      src: videoMatch[2].trim(),
    };
  }

  return null;
}

function parseContent(body) {
  const blocks = [];
  const lines = body.split(/\r?\n/);

  let paragraphLines = [];
  let noteLines = [];
  let isNote = false;

  function flushParagraph() {
    const text = paragraphLines.join("\n").trim();
    paragraphLines = [];

    if (!text) return;

    const mediaBlock = parseMarkdownMedia(text);

    if (mediaBlock) {
      blocks.push(mediaBlock);
      return;
    }

    blocks.push({
      type: "p",
      text: text.replace(/\n/g, " ").trim(),
    });
  }

  function flushNote() {
    const text = noteLines.join("\n").trim();
    noteLines = [];
    isNote = false;

    if (!text) return;

    blocks.push({
      type: "note",
      text: text.replace(/\n/g, " ").trim(),
    });
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith(":::note")) {
      flushParagraph();
      isNote = true;
      noteLines = [];
      continue;
    }

    if (isNote && line === ":::") {
      flushNote();
      continue;
    }

    if (isNote) {
      noteLines.push(rawLine);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();

      blocks.push({
        type: "h2",
        text: line.replace(/^##\s+/, "").trim(),
      });

      continue;
    }

    if (!line) {
      flushParagraph();
      continue;
    }

    paragraphLines.push(rawLine);
  }

  if (isNote) {
    flushNote();
  }

  flushParagraph();

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
    const publicPath = `./images/articles/${articleId}/${file}`;

    if (IMAGE_EXTENSIONS.includes(ext) && !file.toLowerCase().startsWith("cover")) {
      media.images.push(publicPath);
    }

    if (VIDEO_EXTENSIONS.includes(ext)) {
      media.videos.push(publicPath);
    }
  });

  media.images.sort();
  media.videos.sort();

  return media;
}

function copyMedia(articleId) {
  const sourceDir = path.join(vaultImagesDir, articleId);
  const targetDir = path.join(outputImagesDir, articleId);

  safeRemoveDir(targetDir);
  ensureDir(targetDir);

  if (!fs.existsSync(sourceDir)) return;

  const files = fs.readdirSync(sourceDir);

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

function getCoverPath(articleId, coverValue) {
  if (!coverValue) {
    return `./images/articles/${articleId}/cover.webp`;
  }

  const coverFileName = path.basename(coverValue.trim());

  return `./images/articles/${articleId}/${coverFileName}`;
}

function getArticleOrder(id) {
  const match = String(id).match(/art_(\d+)/);

  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function buildArticles() {
  ensureDir(path.dirname(outputJsonPath));
  ensureDir(outputImagesDir);

  if (!fs.existsSync(vaultArticlesDir)) {
    throw new Error(`Не найдена папка со статьями: ${vaultArticlesDir}`);
  }

  const files = fs
    .readdirSync(vaultArticlesDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const articles = [];

  files.forEach((file) => {
    const filePath = path.join(vaultArticlesDir, file);
    const markdown = fs.readFileSync(filePath, "utf8");

    const { data, body } = parseFrontmatter(markdown, file);

    const articleId = data.id;

    if (!articleId) {
      throw new Error(`Нет id в файле ${file}`);
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
      cover: getCoverPath(articleId, data.cover),
      tags: Array.isArray(data.tags) ? data.tags : [],
      media,
      content: parseContent(body),
      url: `./pages/articles/${articleId}.html`,
    });
  });

  articles.sort((a, b) => a.order - b.order);

  fs.writeFileSync(outputJsonPath, JSON.stringify(articles, null, 2), "utf8");

  console.log(`ура статей собрали вот столько ${articles.length}`);
  console.log(`json: ${outputJsonPath}`);
  console.log(`media: ${outputImagesDir}`);
}

buildArticles();
