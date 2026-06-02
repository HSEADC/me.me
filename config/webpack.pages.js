const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["allStyles", "index", "searchVanilla", "searchData"]),
  createPages("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPages("./src/pages/articles.ejs", "./pages/articles.html", ["articles"]),
  createPages("./src/pages/random.html", "./pages/random.html", ["index"]),
  createPages("./src/pages/constructor.html", "./pages/constructor.html", ["index"]),
  createPages("./src/pages/articles/art_1.html", "./pages/articles/art_1.html", ["articles"]),
  createPages("./src/pages/articles/art_2.html", "./pages/articles/art_2.html", ["articles"]),
  createPages("./src/pages/articles/art_3.html", "./pages/articles/art_3.html", ["articles"]),
  createPages("./src/pages/articles/art_4.html", "./pages/articles/art_4.html", ["articles"]),
  createPages("./src/pages/articles/art_5.html", "./pages/articles/art_5.html", ["articles"]),
  createPages("./src/pages/articles/art_8.html", "./pages/articles/art_8.html", ["articles"]),
  createPages("./src/pages/articles/art_12.html", "./pages/articles/art_12.html", ["articles"]),
  createPages("./src/pages/articles/art_14.html", "./pages/articles/art_14.html", ["articles"]),
  createPages("./src/pages/articles/art_18.html", "./pages/articles/art_18.html", ["articles"]),
  createPages("./src/pages/articles/art_22.html", "./pages/articles/art_22.html", ["articles"]),
  createPages("./src/pages/articles/art_23.html", "./pages/articles/art_23.html", ["articles"]),
  createPages("./src/pages/articles/art_24.html", "./pages/articles/art_24.html", ["articles"]),
  createPages("./src/pages/articles/art_38.html", "./pages/articles/art_38.html", ["articles"]),
  createPages("./src/pages/articles/art_41.html", "./pages/articles/art_41.html", ["articles"]),
  createPages("./src/pages/articles/art_47.html", "./pages/articles/art_47.html", ["articles"]),
  createPages("./src/pages/articles/art_49.html", "./pages/articles/art_49.html", ["articles"]),
  createPages("./src/pages/articles/art_51.html", "./pages/articles/art_51.html", ["articles"]),
  createPages("./src/pages/articles/art_52.html", "./pages/articles/art_52.html", ["articles"]),
  createPages("./src/pages/articles/art_53.html", "./pages/articles/art_53.html", ["articles"]),
  createPages("./src/pages/articles/art_54.html", "./pages/articles/art_54.html", ["articles"]),
  createPages("./src/pages/interactives.html", "./pages/interactives.html", ["index"]),
  createPages("./src/pages/tests.html", "./pages/tests.html", ["index"]),
  createPages("./src/pages/tests/test1.html", "./pages/tests/test1.html", ["test1"]),
  createPages("./src/pages/tests/test2.html", "./pages/tests/test2.html", ["test2"]),
  createPages("./src/pages/tests/test3.html", "./pages/tests/test3.html", ["test3"]),
  createPages("./src/styleguide.html", "./styleguide.html", ["styleguide"]),
  createPages("./src/404.html", "./404.html", ["index"]),
  createPages("./src/pages/react-basics.html", "./pages/react-basics.html", ["reactBasics"]),
];

module.exports = htmlPages;
