const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const env = process.env.NODE_ENV;

const commonConfig = {
  mode: env,

  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
        watch: true,
      },
    ],
    port: 3000,
  },

  resolve: {
    fallback: {
      crypto: false,
    },
    // alias: {
    //   '~': path.resolve(__dirname, 'dist/img'),
    // },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css)$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|mp3)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },

  plugins: [
    new Dotenv({ systemvars: true }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

const vanillaConfig = merge(commonConfig, {
  name: 'vanilla',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
});

// TODO: Add entries for other implementations.

module.exports = [vanillaConfig];
