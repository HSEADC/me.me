const homeURL = "http://localhost:8080/"; // для теста
// const homeURL = "https://mememedia.adc.ac/"; // доменное

const menu = [
  {
    text: "главная",
    url: "index.html",
  },
  {
    text: "о нас",
    url: "pages/about.html",
  },
  {
    text: "статьи",
    url: "pages/articles.html",
  },
  {
    text: "интерактивы",
    url: "pages/interactives.html",
  },
];

const props = {
  homeURL,
  menu,
};

export { props };
