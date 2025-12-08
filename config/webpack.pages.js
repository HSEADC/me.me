const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html"),
  createPages("./src/pages/about.html", "./pages/about.html"),
  createPages("./src/pages/splash.html", "./pages/splash.html"),
  createPages("./src/pages/articles.html", "./pages/articles.html"),
  createPages("./src/pages/articles/art-1.html", "./pages/articles/art-1.html"),
  createPages("./src/pages/articles/art-2.html", "./pages/articles/art-2.html"),
];

module.exports = htmlPages;
