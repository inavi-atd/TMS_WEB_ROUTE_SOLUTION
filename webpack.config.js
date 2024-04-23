module.exports = {
  entry: ["./App.jsx"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "js-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  loader: require.resolve("sass-loader"),
  options: {
    sourceMap: true,
  }
};
