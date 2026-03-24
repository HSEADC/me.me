import Airtable from "airtable";
import "../stylesheets/style.css";
import frameUrl from "../images/index/ArticleCardStroke.svg";
document.querySelectorAll(".txt, .hd, .nv").forEach(function (el) {
  el.setAttribute("data-text", el.textContent.trim());
});
var token = "pat70c6PN6XNA8kY1.6dd7f89f94bc50a552d3db45f1c33cbafb9676f4881896b0b29e4935d6bcbae8";
var baseId = "apptbuydEGESibGer";
var tableName = "articles-list";
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: token
});
var base = Airtable.base(baseId);
getArticlesTeasers().then(function (content) {
  updateInfo(content);
})["catch"](function (error) {
  console.error("Ошибка загрузки карточек статей:", error);
});
function getArticlesTeasers() {
  return new Promise(function (resolve, reject) {
    var content = [];
    base(tableName).select({
      maxRecords: 100
    }).firstPage().then(function (records) {
      records.forEach(function (record) {
        var f = record.fields || {};
        var imageUrl = Array.isArray(f.images) && f.images[0] && f.images[0].url ? f.images[0].url : "";
        content.push({
          id: record.id,
          title: f.title || "без названия",
          description: f.description || "",
          tags: Array.isArray(f.tags) ? f.tags : [],
          image: imageUrl,
          url: f.url || "#"
        });
      });
      resolve(content);
    })["catch"](function (err) {
      return reject(err);
    });
  });
}
function updateInfo(content) {
  var root = document.getElementById("articlesTeasers");
  if (!root) return;
  root.innerHTML = "";
  content.forEach(function (item, index) {
    root.appendChild(createArticleTeaserCard(item, index));
  });
}
function createArticleTeaserCard(article, index) {
  var title = article.title,
    image = article.image,
    url = article.url;
  var link = document.createElement("a");
  link.href = url || "#";
  var wrap = document.createElement("div");
  wrap.classList.add(index % 2 === 0 ? "a-prev-index-1" : "a-prev-index-2");
  var row = Math.floor(index / 2);
  var baseTop = 300;
  var rowStep = 760;
  wrap.style.top = "".concat(baseTop + row * rowStep, "rem");
  var imgDiv = document.createElement("div");
  imgDiv.classList.add(index % 2 === 0 ? "a-prev-img-1" : "a-prev-img-2");
  if (image) {
    imgDiv.style.backgroundImage = "url(\"".concat(image, "\")");
    imgDiv.style.backgroundSize = "cover";
    imgDiv.style.backgroundPosition = "center";
    imgDiv.style.backgroundRepeat = "no-repeat";
  }
  var frame = document.createElement("img");
  frame.src = frameUrl;
  frame.classList.add("art-prev-frame");
  frame.alt = "";
  var titleEl = document.createElement("p");
  titleEl.classList.add("art-text", index % 2 === 0 ? "a-1" : "a-2");
  titleEl.textContent = title || "без названия";
  wrap.appendChild(frame);
  wrap.appendChild(imgDiv);
  wrap.appendChild(titleEl);
  link.appendChild(wrap);
  return link;
}