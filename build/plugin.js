const ImageminPlugin = require('imagemin-webpack-plugin').default;

exports.default = {
  config(cfg) {
    cfg.plugins.push(new ImageminPlugin({test: 'src/app/shared/mock/**'}));

    const markdownLoader = {
      test: /\bmock\/.*\.md$/,
      use: [
        {loader: 'html-loader'},
        {loader: 'markdown-loader'},
      ],
    };
    const htmlLoader = {
      test: /\bmock\/.*\.html$/,
      use: [
        {loader: 'html-loader'},
      ],
    };
    cfg.module.rules.push(markdownLoader, htmlLoader);

    return cfg;
  },
};
