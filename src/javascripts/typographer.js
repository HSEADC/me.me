// обводка на типографике

export function applyOutlineText(root = document) {
  root.querySelectorAll(".txt, .hd, .nv, .A_HeaderPart").forEach((el) => {
    el.setAttribute("data-text", el.textContent.trim());
  });
}

// типограф

export function applyTypographer(root = document) {
  const paragraphs = root.querySelectorAll("p");

  paragraphs.forEach((paragraph) => {
    paragraph.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = typographText(node.textContent);
      }
    });
  });
}

function typographText(text) {
  return text
    .replace(/\s-\s/g, " — ")
    .replace(/\s—\s+(это|то|не|и|а|но)\s+/gi, " —\u00A0$1\u00A0")
    .replace(/,\s+(а|но|и)\s+(не)\s+/gi, ",\u00A0$1\u00A0$2\u00A0")
    .replace(/(^|[\s(«"„“])([а-яё]{1,2}|без|для|или|над|под|при|про|что|как|это|все|уже|ещё|еще)\s+/gi, "$1$2\u00A0");
}
