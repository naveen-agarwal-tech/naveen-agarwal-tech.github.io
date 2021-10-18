const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: "./src/assets/favicon.png",
    }),
    new HtmlWebpackPlugin({
      filename:"promo.html",
      template: "./src/promo.html",
      favicon: "./src/assets/favicon.png",
    }),
    new HtmlWebpackPlugin({
      filename:"vlog.html",
      template: "./src/vlog.html",
      favicon: "./src/assets/favicon.png",
    }),
    new HtmlWebpackPlugin({
      filename:"games.html",
      template: "./src/games.html",
      favicon: "./src/assets/favicon.png",
    }),
    new HtmlWebpackPlugin({
      filename:"montage.html",
      template: "./src/montage.html",
      favicon: "./src/assets/favicon.png",
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      
      },
    ],
  },
});
