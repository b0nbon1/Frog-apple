const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader'
      }
  }
];
