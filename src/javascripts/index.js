import "../javascripts/articles.js";

// Constructor

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector(".Q_ConstructorCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const uploadBtn = document.getElementById("Upload");
  const fileInput = document.querySelector(".A_ConstructorFileInput");
  const textInput = document.getElementById("CreateInput");
  const downloadBtn = document.getElementById("Download");

  const presetsWrap = document.querySelector(".W_GenImages");
  const presetItems = presetsWrap ? Array.from(presetsWrap.querySelectorAll(".Q_GenImage")) : [];

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
    const match = bg.match(/url\(["']?(.*?)["']?\)/i);

    return match && match[1] ? match[1] : "";
  }

  function setImage(src, revokeObjectUrl) {
    const resolved = (() => {
      try {
        return new URL(src, window.location.href).href;
      } catch {
        return src;
      }
    })();

    const image = new Image();
    image.decoding = "async";

    image.onload = () => {
      img = image;
      render();

      if (revokeObjectUrl) {
        try {
          URL.revokeObjectURL(src);
        } catch (_) {}
      }
    };

    image.onerror = () => {
      console.warn("[meme] image failed:", resolved);
      render();
    };

    image.src = resolved;
  }

  presetItems.forEach((el) => {
    const activate = (event) => {
      event.preventDefault();

      const url = getBgUrl(el);

      if (!url) {
        console.warn("[meme] preset has no background-image");
        return;
      }

      setImage(url);
    };

    el.addEventListener("click", activate);
    el.addEventListener("pointerdown", activate);
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        activate(event);
      }
    });
  });

  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];

      if (!file) return;

      const objectUrl = URL.createObjectURL(file);

      setImage(objectUrl, true);

      fileInput.value = "";
    });
  }

  if (textInput) {
    textInput.addEventListener("input", render);
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const outputCanvas = document.createElement("canvas");
      outputCanvas.width = W;
      outputCanvas.height = H;

      const outputCtx = outputCanvas.getContext("2d");

      outputCtx.clearRect(0, 0, W, H);
      drawCover(outputCtx, img, W, H);
      grayscale(outputCtx, W, H);
      drawText(outputCtx, textInput ? textInput.value : "");

      outputCanvas.toBlob((blob) => {
        if (!blob) return;

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "meme.png";

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => URL.revokeObjectURL(link.href), 500);
      }, "image/png");
    });
  }

  function render() {
    ctx.clearRect(0, 0, W, H);
    drawCover(ctx, img, W, H);
    drawText(ctx, textInput ? textInput.value : "");
  }

  function drawCover(context, image, width, height) {
    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    if (!image || !image.naturalWidth) return;

    const ratio = Math.max(width / image.width, height / image.height);
    const sourceWidth = width / ratio;
    const sourceHeight = height / ratio;
    const sourceX = (image.width - sourceWidth) / 2;
    const sourceY = (image.height - sourceHeight) / 2;

    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
  }

  function drawText(context, text) {
    const cleanText = (text || "").trim();

    if (!cleanText) return;

    context.font = FONT;
    context.textBaseline = "top";
    context.lineJoin = "round";
    context.textAlign = "center";

    const lines = wrap(context, cleanText, MAX_W);
    const topLines = lines.slice(0, 2);
    const bottomLines = lines.slice(2, 4);

    context.lineWidth = 10;
    context.strokeStyle = "#000";
    context.fillStyle = "#fff";

    const centerX = W / 2;

    topLines.forEach((line, index) => {
      const y = TOP_Y + index * 72;

      context.strokeText(line, centerX, y);
      context.fillText(line, centerX, y);
    });

    bottomLines.forEach((line, index) => {
      const y = BOTTOM_Y + index * 72;

      context.strokeText(line, centerX, y);
      context.fillText(line, centerX, y);
    });
  }

  function wrap(context, text, maxWidth) {
    const words = text.split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = line ? `${line} ${words[i]}` : words[i];

      if (context.measureText(testLine).width <= maxWidth) {
        line = testLine;
      } else {
        if (line) lines.push(line);
        line = words[i];
      }
    }

    if (line) lines.push(line);

    return lines;
  }

  function grayscale(context, width, height) {
    const imageData = context.getImageData(0, 0, width, height);

    for (let i = 0; i < imageData.data.length; i += 4) {
      const gray = imageData.data[i] * 0.2126 + imageData.data[i + 1] * 0.7152 + imageData.data[i + 2] * 0.0722;

      imageData.data[i] = gray;
      imageData.data[i + 1] = gray;
      imageData.data[i + 2] = gray;
    }

    context.putImageData(imageData, 0, 0);
  }

  if (textInput && !textInput.value) {
    textInput.value = "";
  }

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

// Random

document.addEventListener("DOMContentLoaded", () => {
  const randomImages = document.querySelectorAll(".Q_RandContent");
  const randomButton = document.getElementById("RandomPageBtn");

  if (!randomImages.length) return;

  randomImages.forEach((image) => {
    image.style.transition = "opacity 220ms ease";
    image.style.opacity = "1";
  });

  const req = require.context("../images/random", false, /^\.\/rnd-\d+\.webp$/i);
  const images = req.keys().map((key) => req(key));

  if (!images.length) {
    console.warn("[random] Не нашлось rnd-*.webp в src/images/random");
    return;
  }

  let lastIndex = -1;
  let isAnimating = false;

  function getRandomIndex() {
    if (images.length === 1) return 0;

    let index = Math.floor(Math.random() * images.length);

    while (index === lastIndex) {
      index = Math.floor(Math.random() * images.length);
    }

    lastIndex = index;

    return index;
  }

  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => resolve(src);
      image.onerror = () => reject(src);
      image.src = src;
    });
  }

  async function showRandomImage() {
    if (isAnimating) return;

    isAnimating = true;

    const selectedImages = Array.from(randomImages).map(() => {
      return images[getRandomIndex()];
    });

    try {
      await Promise.all(selectedImages.map((imageUrl) => preloadImage(imageUrl)));

      randomImages.forEach((image) => {
        image.style.opacity = "0";
      });

      setTimeout(() => {
        randomImages.forEach((image, index) => {
          image.style.backgroundImage = `url("${selectedImages[index]}")`;
          image.style.opacity = "1";
        });

        isAnimating = false;
      }, 230);
    } catch {
      console.warn("[random] preload failed");
      isAnimating = false;
    }
  }

  showRandomImage();

  randomButton?.addEventListener("click", showRandomImage);
});

// Inlined Random

document.addEventListener("DOMContentLoaded", () => {
  const imageBlocks = document.querySelectorAll(".Q_ImageInHeader, .Q_ImageOfPart");

  if (!imageBlocks.length) return;

  const req = require.context("../images/inlined", false, /^\.\/inlined-\d+\.webp$/i);
  const images = req.keys().map((key) => req(key));

  if (!images.length) return;

  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  imageBlocks.forEach((block, index) => {
    const imageUrl = shuffledImages[index % shuffledImages.length];

    block.style.backgroundImage = `url("${imageUrl}")`;
  });
});

// Mobile

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".M_Header");
  const toggle = document.querySelector(".js-menu-toggle");
  const links = document.querySelectorAll(".W_Header_all_links a");

  if (!header || !toggle) return;

  toggle.addEventListener("click", (event) => {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      header.classList.toggle("is-open");
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
    });
  });
});
