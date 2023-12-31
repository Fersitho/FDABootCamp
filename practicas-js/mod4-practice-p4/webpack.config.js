const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "js/main.js"),

  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset"
        // sin use podemos lanzar run serve, se ven las imgs
        // si pongo use: ['file-loader'] compila run build pero no se ven las imagenes
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "module-4",
      template: path.resolve(__dirname, "src", "index.html"),
      // template: path.resolve(__dirname, "src/views/filmx", "infoFilm.html"),
    }),
    new MiniCssExtractPlugin(),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },
};

module.exports = webpackConfig;
