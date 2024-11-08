const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/template.html',
      inject: 'body',
      cdn: '<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">',
    }),
  ],
  output: {
    filename: 'main.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    clean: true,

  },
  module: {
    rules: [
      // CSS processing
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // HTML loader
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // Image and other static files
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Babel loader for JS files
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
