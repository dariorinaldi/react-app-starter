const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    publicPath: 'http://localhost:3000',
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
