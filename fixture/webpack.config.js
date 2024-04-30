import {fileURLToPath} from 'node:url';
import path from 'node:path';
import AddAssetPlugin from '../index.js';
import ChildCompilerPlugin from './child-compiler-plugin.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
	output: {
		filename: 'unicorn.js',
	},
	entry: __dirname,
	plugins: [
		new AddAssetPlugin('rainbow.js', 'console.log("🌈")'),
		new AddAssetPlugin('cake.js', () => 'console.log("🎂")'),
		new AddAssetPlugin('cat.js', async () => 'console.log("🐈")'),
		new ChildCompilerPlugin(),
	],
};

export default config;
