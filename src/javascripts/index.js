import "../stylesheets/style.css";

// белый шум на фоне

const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
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
    buffer[i + 3] = 200;
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

// обводка на типографике

document.querySelectorAll(".txt, .hd, .nv").forEach((el) => {
  el.setAttribute("data-text", el.textContent.trim());
});

// эх конструктор эх мемов эх

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("mbCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const uploadBtn = document.getElementById("mbUploadBtn");
  const fileInput = document.getElementById("mbFile");
  const textEl = document.getElementById("mbText");
  const downloadBtn = document.getElementById("mbDownloadBtn");

  const presetsWrap = document.querySelector(".mb-presets");
  const presetItems = presetsWrap
    ? Array.from(presetsWrap.querySelectorAll(".mb-preset"))
    : [];

  const W = canvas.width;
  const H = canvas.height;

  const FONT = "900 64px Arial Black, Arial, sans-serif";
  const PAD_X = Math.round(W * 0.08);
  const MAX_W = W - PAD_X * 2;
  const TOP_Y = Math.round(H * 0.12);
  const BOTTOM_Y = Math.round(H * 0.72);

  let img = new Image();
  img.onload = render;
  img.onerror = render;

  function getBgUrl(el) {
    const bg = window.getComputedStyle(el).backgroundImage || "";
    const m = bg.match(/url\(["']?(.*?)["']?\)/i);
    return m && m[1] ? m[1] : "";
  }

  function setImage(src, revokeObjectUrl) {
    const resolved = (() => {
      try {
        return new URL(src, window.location.href).href;
      } catch {
        return src;
      }
    })();

    const im = new Image();
    im.decoding = "async";

    im.onload = () => {
      img = im;
      render();
      if (revokeObjectUrl) {
        try {
          URL.revokeObjectURL(src);
        } catch (_) {}
      }
    };

    im.onerror = () => {
      console.warn("[meme] image failed:", resolved);
      render();
    };

    im.src = resolved;
  }

  presetItems.forEach((el) => {
    const activate = (e) => {
      e.preventDefault();
      const url = getBgUrl(el);
      if (!url) {
        console.warn("[meme] preset has no background-image");
        return;
      }
      setImage(url);
    };

    el.addEventListener("click", activate);
    el.addEventListener("pointerdown", activate);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") activate(e);
    });
  });

  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;

      const objUrl = URL.createObjectURL(file);
      setImage(objUrl, true);
      fileInput.value = "";
    });
  }

  if (textEl) textEl.addEventListener("input", render);

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const out = document.createElement("canvas");
      out.width = W;
      out.height = H;
      const octx = out.getContext("2d");

      octx.clearRect(0, 0, W, H);
      drawCover(octx, img, W, H);
      grayscale(octx, W, H);
      drawText(octx, textEl ? textEl.value : "");

      out.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "meme.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 500);
      }, "image/png");
    });
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawCover(ctx, img, W, H);
    drawText(ctx, textEl ? textEl.value : "");
  }

  function drawCover(c, image, w, h) {
    c.fillStyle = "#000";
    c.fillRect(0, 0, w, h);

    if (!image || !image.naturalWidth) return;

    const r = Math.max(w / image.width, h / image.height);
    const sw = w / r;
    const sh = h / r;
    const sx = (image.width - sw) / 2;
    const sy = (image.height - sh) / 2;

    c.drawImage(image, sx, sy, sw, sh, 0, 0, w, h);
  }

  function drawText(c, text) {
    const t = (text || "").trim();
    if (!t) return;

    c.font = FONT;
    c.textBaseline = "top";
    c.lineJoin = "round";

    c.textAlign = "center";

    const lines = wrap(c, t, MAX_W);
    const top = lines.slice(0, 2);
    const bottom = lines.slice(2, 4);

    c.lineWidth = 10;
    c.strokeStyle = "#000";
    c.fillStyle = "#fff";

    const centerX = W / 2;

    top.forEach((l, i) => {
      const y = TOP_Y + i * 72;
      c.strokeText(l, centerX, y);
      c.fillText(l, centerX, y);
    });

    bottom.forEach((l, i) => {
      const y = BOTTOM_Y + i * 72;
      c.strokeText(l, centerX, y);
      c.fillText(l, centerX, y);
    });
  }

  function wrap(c, text, maxW) {
    const words = text.split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const test = line ? line + " " + words[i] : words[i];
      if (c.measureText(test).width <= maxW) {
        line = test;
      } else {
        if (line) lines.push(line);
        line = words[i];
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function grayscale(c, w, h) {
    const d = c.getImageData(0, 0, w, h);
    for (let i = 0; i < d.data.length; i += 4) {
      const g =
        d.data[i] * 0.2126 + d.data[i + 1] * 0.7152 + d.data[i + 2] * 0.0722;
      d.data[i] = d.data[i + 1] = d.data[i + 2] = g;
    }
    c.putImageData(d, 0, 0);
  }

  if (textEl && !textEl.value) textEl.value = "Введи свой прикольчик";

  if (presetItems[0]) {
    const firstUrl = getBgUrl(presetItems[0]);
    if (firstUrl) {
      setImage(firstUrl);
      requestAnimationFrame(() => setImage(firstUrl));
    } else {
      render();
    }
  } else {
    render();
  }
});

// рандомный мем уррраааа рандом
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".rand-image");
  const btn = document.querySelector(".rand-btn");
  if (!box) return;

  box.style.transition = "opacity 220ms ease";
  box.style.opacity = "1";

  const req = require.context(
    "../images/random",
    false,
    /^\.\/rnd-\d+\.webp$/i
  );

  const urls = req.keys().map((k) => req(k));
  if (!urls.length) {
    console.warn("[random] Не нашлось rnd-*.webp в src/images/random");
    return;
  }

  let last = -1;
  let busy = false;

  function pickIndex() {
    if (urls.length === 1) return 0;
    let i = Math.floor(Math.random() * urls.length);
    while (i === last) i = Math.floor(Math.random() * urls.length);
    last = i;
    return i;
  }

  function preload(url) {
    return new Promise((resolve, reject) => {
      const im = new Image();
      im.onload = () => resolve(url);
      im.onerror = () => reject(url);
      im.src = url;
    });
  }

  async function setRandom() {
    if (busy) return;
    busy = true;

    const url = urls[pickIndex()];

    try {
      await preload(url);
      box.style.opacity = "0";
      setTimeout(() => {
        box.style.backgroundImage = `url("${url}")`;
        box.style.opacity = "1";
        busy = false;
      }, 230);
    } catch (e) {
      console.warn("[random] preload failed:", url);
      busy = false;
    }
  }

  setRandom();

  if (btn) btn.addEventListener("click", setRandom);
});
