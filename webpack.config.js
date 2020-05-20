/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          { loader: 'sass-resources-loader', options: { resources: './src/components/App/_resources.scss' } }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => `
        <!DOCTYPE html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body>
            <div class="root"></div>
          </body>
        </html>`
    }),
    new MiniCssExtractPlugin()
  ]
};