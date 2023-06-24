module.exports = {
  module: {
    rules: [
      {
        test: /\.raw.js$/i,
        use: "raw-loader",
      },
    ],
  },
}