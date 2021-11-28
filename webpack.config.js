const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  // Coding from babeljs.io
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  // Creates "source map" files (ex. "bundle.js.map"). Modern browsers can automatically
  // Request these to "rebuild" your original source code in your dev tools (i.e. the Sources tab).
  // This makes debugging much, much nicer
  devtool: 'source-map',
};
