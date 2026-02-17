import Airtable from "airtable";
import "../stylesheets/style.css";
import frameUrl from "../images/indx-frame.svg";

document.querySelectorAll(".txt, .hd, .nv").forEach((el) => {
  el.setAttribute("data-text", el.textContent.trim());
});

const token =
  "pat70c6PN6XNA8kY1.6dd7f89f94bc50a552d3db45f1c33cbafb9676f4881896b0b29e4935d6bcbae8";
const baseId = "apptbuydEGESibGer";
const tableName = "articles-list";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: token,
});

const base = Airtable.base(baseId);

getArticlesTeasers().then((content) => {
  updateInfo(content);
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
            Array.isArray(f.images) && f.images[0] ? f.images[0].url : "";

          content.push({
            id: record.id,
            title: f.title,
            description: f.description,
            tags: Array.isArray(f.tags) ? f.tags : [],
            image: imageUrl,
            url: f.url,
          });
        });

        resolve(content);
      })
      .catch((err) => reject(err));
  });
}

function updateInfo(content) {
  const root = document.getElementById("articlesTeasers");
  if (!root) return;

  root.innerHTML = "";

  content.forEach((item, index) => {
    root.appendChild(createArticleTeaserCard(item, index));
  });
}

function createArticleTeaserCard(stroke, index) {
  const { title, image, url } = stroke;

  const link = document.createElement("a");
  link.href = url || "#";

  const wrap = document.createElement("div");

  const row = Math.floor(index / 2);
  const col = index % 2;

  wrap.classList.add(col === 0 ? "a-prev-1" : "a-prev-2");

  const baseTop = 400;
  const rowStep = 650;
  wrap.style.top = `${baseTop + row * rowStep}rem`;
  wrap.style.marginBottom = "120rem";

  const imgDiv = document.createElement("div");
  imgDiv.classList.add(col === 0 ? "a-prev-img-1" : "a-prev-img-2");

  if (image) {
    imgDiv.style.backgroundImage = `url("${image}")`;
    imgDiv.style.backgroundSize = "cover";
    imgDiv.style.backgroundPosition = "center";
    imgDiv.style.backgroundRepeat = "no-repeat";
  }

  const frame = document.createElement("img");
  frame.src = frameUrl;
  frame.classList.add("art-prev-frame");
  frame.alt = "";

  const p = document.createElement("p");
  p.classList.add("art-text", col === 0 ? "a-1" : "a-2");

  p.innerHTML = title || "без названия";

  wrap.appendChild(imgDiv);
  wrap.appendChild(frame);
  wrap.appendChild(p);
  link.appendChild(wrap);

  return link;
}
