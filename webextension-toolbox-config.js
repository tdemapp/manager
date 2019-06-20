const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
	webpack: (config) => {
		config.resolve.extensions = [
			'.js',
			'.json',
			'.vue'
		];

		config.entry = {
			'scripts/content': './scripts/content.js',
			'options/options': './options/options.js',
		};

		config.module.rules.push(
			{
				test: /\.vue$/,
				use: [
					'vue-loader'
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
				],
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				],
			},
			{
				test: /\.svg$/,
				issuer: /\.(vue|js|ts|svg)$/,
				use: [
					'vue-loader',
					'svg-to-vue-component/loader'
				],
			}
		);

		config.plugins = [
			...config.plugins,
			new VueLoaderPlugin(),
			new MiniCssExtractPlugin(),
			new VuetifyLoaderPlugin(),
		];

		return config;
	},

	copyIgnore: [
		'**/*.js',
		'**/*.json',
		'**/*.css',
		'**/*.vue'
	],
};
