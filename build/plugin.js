const ImageminPlugin = require('imagemin-webpack-plugin').default;

exports.default = {
  config(cfg) {
    cfg.plugins.push(new ImageminPlugin({test: 'src/app/shared/mock/**'}));

    const fileLoader = cfg.module.rules.find(it => it.loader === 'file-loader');
    const jpegLoader = {
      loader: fileLoader.loader,
      options: fileLoader.options,
      test: /\.jpeg$/,
    };

    const markdownLoader = {
      test: /\.md$/,
      use: [
        {loader: 'html-loader'},
        {loader: 'markdown-loader'},
      ],
    };
    cfg.module.rules.push(markdownLoader, jpegLoader);

    return cfg;
  },
};
