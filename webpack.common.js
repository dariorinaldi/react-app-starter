const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'core-js/modules/es6.promise',
    'core-js/modules/es6.array.iterator',
    'whatwg-fetch',
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader', //transpiles js and jsx files
        options: {
          presets: ['@babel/env', '@babel/react', '@babel/flow'],
          plugins: ['transform-class-properties', '@babel/plugin-syntax-dynamic-import'], //used to write functions without explicit binding inside classes
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    /* new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/dll/dll.json'),
    }), */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: false,
      appMountId: 'app',
    }),
  ],
  performance: {
    hints: 'warning',
  },
  target: 'web',
};
