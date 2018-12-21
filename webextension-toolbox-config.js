const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Remove unused resolutions and add `.vue`
    config.resolve.extensions = [ '.js', '.json', '.vue' ]

    // Add Vue loader to module rules
    config.module.rules.push({
        test: /\.vue$/,
        loaders: 'vue-loader',
    });

    // Add css loader to handle vuetify CSS
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    })

    config.plugins.push(new VueLoaderPlugin());

    return config
  }
}