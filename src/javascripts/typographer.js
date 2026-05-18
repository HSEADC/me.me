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
  return text.replace(/\s-\s/g, " — ").replace(/(^|\s)(в|во|на|к|ко|с|со|у|о|об|от|до|за|из|по|и|а|но|не|ни|же|ли|бы|то)\s+/gi, "$1$2\u00A0");
}
