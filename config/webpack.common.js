const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const htmlPages = require("./webpack.pages.js");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/javascripts/index.js",
    styleguide: "./src/javascripts/styleguide.js",
    articles: "./src/javascripts/articles.js",
    allStyles: "./src/javascripts/allStyles.js",
    test1: "./src/javascripts/test1.js",
    test2: "./src/javascripts/test2.js",
    test3: "./src/javascripts/test3.js",
    tests: "./src/javascripts/tests.js",
    searchVanilla: "./src/javascripts/search_vanilla.js",
    searchMolule: "./src/javascripts/search_vanilla_module.js",
    searchData: "./src/javascripts/search_data.js",
    reactBasics: "./src/javascripts/reactBasics.jsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(".", "docs"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), ...htmlPages],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },
};
