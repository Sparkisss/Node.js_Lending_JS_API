const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: {
    index: './src/index.js',
    page1: './src/test.js',
    page2: './src/test.js',
    page3: './src/test.js',
    page4: './src/test.js',
    page5: './src/test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, 'src', 'index.html'),
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: "page1.html",
      template: path.resolve(__dirname, 'src/pages', 'page1.html'),
      chunks: ['page1']
    }),
    new HtmlWebpackPlugin({
      filename: "page2.html",
      template: path.resolve(__dirname, 'src/pages', 'page2.html'),
      chunks: ['page2']
    }),
    new HtmlWebpackPlugin({
      filename: "page3.html",
      template: path.resolve(__dirname, 'src/pages', 'page3.html'),
      chunks: ['page3']
    }),
    new HtmlWebpackPlugin({
      filename: "page4.html",
      template: path.resolve(__dirname, 'src/pages', 'page4.html'),
      chunks: ['page4']
    }),
    new HtmlWebpackPlugin({
      filename: "page5.html",
      template: path.resolve(__dirname, 'src/pages', 'page5.html'),
      chunks: ['page5']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new CopyPlugin({
    //   patterns: [{ from: 'static', to: './' }],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',          
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          // 'sass-loader',
          // 'group-css-media-queries-loader',
          // {
          //   loader: 'resolve-url-loader',
          // },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff2?$/i,       // supported fonts woff and woff2
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: devMode
          ? []
          : [
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
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