const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Add Vue to file extensions
    config.resolve.extensions = ['.js', '.json', '.vue'];

    // Set entry points
    config.entry = {
      'js/content': './js/content.js',
      'options/options': './options/options.js',
    };

    // Add Vue loader to module rules
    config.module.rules.push({
        test: /\.vue$/,
        use: ['vue-loader'],
    });

    // Add CSS loader to module rules
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    // Create new Vue Loader plugin instance
    config.plugins.push(new VueLoaderPlugin());

    return config
  }
}