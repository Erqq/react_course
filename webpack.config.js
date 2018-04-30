const path = require("path");
const webpack = require("webpack");

const config = {
  context: __dirname,
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    //  "webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000",
    "./js/ClientApp.jsx"
  ],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
    hot: true,
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: [
          path.resolve("js"),
          path.resolve("node_modules/preact-compat/src")
        ]
      }
    ]
  }
};
if (process.env.NODE_ENV === "production") {
  config.entry = "./js/ClientApp.jsx";
  config.devtool = false;
  config.plugins = [];
}
module.exports = config;
