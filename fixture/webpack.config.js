'use strict';
const AddAssetPlugin = require('..');
const ChildCompilerPlugin = require('./child-compiler-plugin');

module.exports = {
	output: {
		filename: 'unicorn.js'
	},
	entry: __dirname,
	plugins: [
		new AddAssetPlugin('rainbow.js', 'console.log("🌈")'),
		new AddAssetPlugin('cake.js', () => 'console.log("🎂")'),
		new AddAssetPlugin('cat.js', () => Promise.resolve('console.log("🐈")')),
		new ChildCompilerPlugin()
	]
};
