const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["allStyles", "index", "headerReact", "footerReact"]),
  createPages("./src/pages/about.html", "./pages/about.html", ["allStyles", "index", "headerReact"]),
  createPages("./src/pages/articles.html", "./pages/articles.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/random.html", "./pages/random.html", ["allStyles", "index", "headerReact"]),
  createPages("./src/pages/constructor.html", "./pages/constructor.html", ["allStyles", "index", "headerReact"]),
  createPages("./src/pages/articles/art_1.html", "./pages/articles/art_1.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_2.html", "./pages/articles/art_2.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_3.html", "./pages/articles/art_3.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_4.html", "./pages/articles/art_4.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_5.html", "./pages/articles/art_5.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_8.html", "./pages/articles/art_8.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_12.html", "./pages/articles/art_12.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_14.html", "./pages/articles/art_14.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_18.html", "./pages/articles/art_18.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_22.html", "./pages/articles/art_22.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_23.html", "./pages/articles/art_23.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_24.html", "./pages/articles/art_24.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_38.html", "./pages/articles/art_38.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_41.html", "./pages/articles/art_41.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_47.html", "./pages/articles/art_47.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_49.html", "./pages/articles/art_49.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_51.html", "./pages/articles/art_51.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_52.html", "./pages/articles/art_52.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_53.html", "./pages/articles/art_53.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/articles/art_54.html", "./pages/articles/art_54.html", ["allStyles", "articles", "headerReact"]),
  createPages("./src/pages/interactives.html", "./pages/interactives.html", ["allStyles", "index", "headerReact"]),
  createPages("./src/pages/tests.html", "./pages/tests.html", ["allStyles", "index", "headerReact"]),
  createPages("./src/pages/tests/test1.html", "./pages/tests/test1.html", ["allStyles", "test1", "headerReact"]),
  createPages("./src/pages/tests/test2.html", "./pages/tests/test2.html", ["allStyles", "test1", "headerReact"]),
  createPages("./src/pages/tests/test3.html", "./pages/tests/test3.html", ["allStyles", "test1", "headerReact"]),
  createPages("./src/styleguide.html", "./styleguide.html", ["styleguide"]),
  createPages("./src/404.html", "./404.html", ["index"]),
];

module.exports = htmlPages;
