'use strict';
const AddAssetPlugin = require('..');

module.exports = {
	output: {
		filename: 'unicorn.js'
	},
	entry: __dirname,
	plugins: [
		new AddAssetPlugin('rainbow.js', '🌈'),
		new AddAssetPlugin('cake.js', () => '🎂'),
		new AddAssetPlugin('cat.js', () => Promise.resolve('🐈'))
	]
};
