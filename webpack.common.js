const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const isProductionMode = process.env.npm_lifecycle_script.includes('prod');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const sass = require('sass');
const templatesData = require('./src/templates/data.js');

module.exports = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          partialDirs: [
            path.join(__dirname, './src/templates/partials'),
            path.join(__dirname, './src/templates/components'),
          ],
          helperDirs: [
            path.join(__dirname, './src/templates/helpers')
          ],
          precompileOptions: {
            knownHelpersOnly: false,
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProductionMode ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer"
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new StylelintPlugin({
      context: './src/styles',
      exclude: 'fonts',
      fix: true,
    }),
    new HtmlWebPackPlugin({
      title: 'Good4Me',
      favicon: './src/images/favicon.ico',
      template: './src/templates/index.hbs',
      templateParameters: templatesData,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
};
