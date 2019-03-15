module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {loader: 'html-loader'},
          {loader: 'markdown-loader'},
        ],
      },
      {test: /\.(jpg|jpeg|png|gif)$/, use: 'file-loader'},
    ],
  },
};
