import React from "react";
import articles from "../data/articles.json";

function getArticleIdFromUrl() {
  return window.location.pathname.split("/").pop().replace(".html", "");
}

function getFixedPath(src) {
  return String(src).replace("./images/", "../../images/");
}

function splitContentIntoSections(content) {
  const sections = [];
  let currentSection = null;

  content.forEach((block) => {
    if (block.type === "h2") {
      currentSection = {
        title: block.text,
        paragraphs: [],
        notes: [],
      };

      sections.push(currentSection);
      return;
    }

    if (!currentSection) {
      currentSection = {
        title: "",
        paragraphs: [],
        notes: [],
      };

      sections.push(currentSection);
    }

    if (block.type === "p") {
      currentSection.paragraphs.push(block.text);
    }

    if (block.type === "note") {
      currentSection.notes.push(block.text);
    }
  });

  return sections;
}

function getMediaItems(article) {
  const images = article.media.images.map((src) => ({
    type: "image",
    src,
  }));

  const videos = article.media.videos.map((src) => ({
    type: "video",
    src,
  }));

  return [...images, ...videos];
}

function shouldRenderMediaFirst(articleOrder, sectionIndex) {
  const isEvenArticle = articleOrder % 2 === 0;
  const isEvenSection = sectionIndex % 2 === 0;

  return isEvenArticle ? isEvenSection : !isEvenSection;
}

function M_ArticleHead({ article }) {
  return (
    <section className="M_ArticleHead">
      <div className="A_H2">
        <h2 className="hd Q_Header2Text" data-text={article.h1}>
          {article.h1}
        </h2>
      </div>

      <div className="W_Tags">
        {article.tags.map((tag, index) => (
          <button className={`A_FilterTag Filter-${index + 1}`} key={tag}>
            <span className="Q_FilterText">{tag}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function fixHangingPrepositions(text) {
  return String(text).replace(/(^|\s)(в|во|на|за|к|ко|с|со|о|об|от|до|у|и|а|но|по|из|не|же|ли|бы)\s+/gi, "$1$2\u00A0");
}

function M_ArticleText({ section }) {
  const fixedTitle = fixHangingPrepositions(section.title);

  return (
    <div className="M_ArticleText">
      {section.title && (
        <div className="A_H4">
          <h4 className="hd Q_Header4Text" data-text={fixedTitle}>
            {fixedTitle}
          </h4>
        </div>
      )}

      {section.paragraphs.map((paragraph, index) => (
        <p className="A_ArticleTextBlock" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function A_ArticleImage({ src }) {
  return (
    <div className="A_Image">
      <div className="toned Q_ImageContent">
        <img src={getFixedPath(src)} className="Q_ImageSelf" alt="article image" />
      </div>
      <span className="Q_ImageHoverFrame" aria-hidden="true"></span>
    </div>
  );
}

function A_ArticleVideo({ src }) {
  return (
    <div className="A_Video">
      <video className="Q_ArticleVideo" src={getFixedPath(src)} autoPlay muted loop playsInline></video>
    </div>
  );
}

function A_ArticleMedia({ media }) {
  if (!media) return null;

  if (media.type === "video") {
    return <A_ArticleVideo src={media.src} />;
  }

  return <A_ArticleImage src={media.src} />;
}

function A_Interrupt({ text }) {
  return (
    <div className="A_Interrupt">
      <h3 className="Q_Header3Text">{text}</h3>
    </div>
  );
}

function O_ArticleSection({ article, section, media, sectionIndex }) {
  const mediaFirst = shouldRenderMediaFirst(article.order, sectionIndex);

  const textBlock = <M_ArticleText section={section} />;
  const mediaBlock = <A_ArticleMedia media={media} />;

  return (
    <>
      <section className="O_ArticleSect">
        {mediaFirst ? (
          <>
            {mediaBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {mediaBlock}
          </>
        )}
      </section>

      {section.notes.map((note, index) => (
        <A_Interrupt text={note} key={index} />
      ))}
    </>
  );
}

function W_MainButtons({ previousArticle, nextArticle }) {
  return (
    <div className="W_MainButtons">
      {previousArticle && (
        <a href={`./${previousArticle.id}.html`}>
          <button className="A_Button">предыдущая</button>
        </a>
      )}

      <a href="../articles.html">
        <button className="A_Button">назад к статьям!</button>
      </a>

      {nextArticle && (
        <a href={`./${nextArticle.id}.html`}>
          <button className="A_Button">следующая</button>
        </a>
      )}
    </div>
  );
}

export function W_ArticlePage() {
  const articleId = getArticleIdFromUrl();
  const article = articles.find((item) => item.id === articleId);

  if (!article) {
    return <p className="A_ArticleTextBlock">Статья не найдена</p>;
  }

  document.title = article.title || article.h1 || "ME.ME";

  const sections = splitContentIntoSections(article.content);
  const mediaItems = getMediaItems(article);
  const fallbackMedia = {
    type: "image",
    src: article.cover,
  };

  const articleIndex = articles.findIndex((item) => item.id === article.id);
  const previousArticle = articles[articleIndex - 1];
  const nextArticle = articles[articleIndex + 1];

  return (
    <>
      <M_ArticleHead article={article} />

      {sections.map((section, index) => (
        <O_ArticleSection article={article} section={section} media={mediaItems.length ? mediaItems[index % mediaItems.length] : fallbackMedia} sectionIndex={index} key={`${article.id}-section-${index}`} />
      ))}

      <W_MainButtons previousArticle={previousArticle} nextArticle={nextArticle} />
    </>
  );
}
