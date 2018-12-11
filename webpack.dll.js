const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less", ".css"],
    modules: [__dirname, "node_modules"]
  },

  entry: {
    dll: [
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "styled-components"
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/dll"),
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: "./dist/dll/[name].json"
    })
  ]
};
