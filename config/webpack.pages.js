const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index"]),
  createPages("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPages("./src/pages/articles.html", "./pages/articles.html", ["articles"]),
  createPages("./src/pages/random.html", "./pages/random.html", ["index"]),
  createPages("./src/pages/constructor.html", "./pages/constructor.html", ["index"]),
  createPages("./src/pages/articles/art-1.html", "./pages/articles/art-1.html", ["articles"]),
  createPages("./src/pages/articles/art-2.html", "./pages/articles/art-2.html", ["articles"]),
  createPages("./src/pages/articles/art-3.html", "./pages/articles/art-3.html", ["articles"]),
  createPages("./src/pages/articles/art-4.html", "./pages/articles/art-4.html", ["articles"]),
  createPages("./src/pages/articles/art-5.html", "./pages/articles/art-5.html", ["articles"]),
  createPages("./src/pages/articles/art-6.html", "./pages/articles/art-6.html", ["articles"]),
  createPages("./src/pages/articles/art-7.html", "./pages/articles/art-7.html", ["articles"]),
  createPages("./src/pages/articles/art-8.html", "./pages/articles/art-8.html", ["articles"]),
  createPages("./src/pages/articles/art-9.html", "./pages/articles/art-9.html", ["articles"]),
  createPages("./src/pages/articles/art-10.html", "./pages/articles/art-10.html", ["articles"]),
  createPages("./src/pages/interactives.html", "./pages/interactives.html", ["index"]),
  createPages("./src/pages/tests.html", "./pages/tests.html", ["index"]),
  createPages("./src/pages/tests/test1.html", "./pages/tests/test1.html", ["test1"]),
  createPages("./src/pages/tests/test2.html", "./pages/tests/test2.html", ["test2"]),
  createPages("./src/pages/tests/test3.html", "./pages/tests/test3.html", ["test3"]),
  createPages("./src/styleguide.html", "./styleguide.html", ["styleguide"]),
  createPages("./src/404.html", "./404.html", ["index"]),
];

module.exports = htmlPages;
