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
  return String(text || "")
    .replace(/&nbsp;/g, " ")
    .replace(/\u00A0/g, " ")
    .replace(/\s-\s/g, " — ")
    .replace(/([^\s])\s+—\s+/g, "$1\u00A0— ")
    .replace(/(^|[\s(«"„“])((?:(?:в|к|с|у|о|а|и|но|да|во|ко|со|об|от|до|за|из|по|на|над|под|при|про|без|для|не|ни|же|ли|бы|то|что|как|это)\s+)+)(?=[а-яёa-z0-9])/gi, (match, before, chain) => {
      return before + chain.trim().replace(/\s+/g, "\u00A0") + "\u00A0";
    })
    .replace(/(—\s+)((?:(?:это|то|не|и|а|но|как|что)\s+)+)(?=[а-яёa-z0-9])/gi, (match, dash, chain) => {
      return dash + chain.trim().replace(/\s+/g, "\u00A0") + "\u00A0";
    });
}
