const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  plugins: [
    new ImageminPlugin({test: 'src/app/shared/mock/**'}),
  ],
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
