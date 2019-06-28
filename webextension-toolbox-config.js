const glob = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const webpack = require('webpack');

const purgeCss = {
	whitelist: ['theme--light', 'theme--dark', 'v-toolbar__content'],
	paths: glob.sync([
		path.join(__dirname, './src/**/*.html'),
		path.join(__dirname, './**/*.vue'),
		path.join(__dirname, './src/**/*.js'),
	])
};

module.exports = {
	webpack: (config) => {
		config.resolve.extensions = [
			'.js',
			'.json',
			'.vue'
		];

		config.entry = {
			'scripts/background': './scripts/background.js',
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
			new PurgecssPlugin(purgeCss),
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
