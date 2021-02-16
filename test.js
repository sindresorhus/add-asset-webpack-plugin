import fs from 'fs';
import path from 'path';
import test from 'ava';
import webpack from 'webpack';
import tempy from 'tempy';
import pify from 'pify';

test('main', async t => {
	const config = require('./fixture/webpack.config');
	const cwd = tempy.directory();
	config.output.path = cwd;
	const stats = await pify(webpack)(config);
	t.false(stats.hasErrors());
	t.true(fs.readFileSync(path.join(cwd, 'unicorn.js'), 'utf8').includes('🦄'));
	t.true(fs.readFileSync(path.join(cwd, 'rainbow.js'), 'utf8').includes('🌈'));
	t.true(fs.readFileSync(path.join(cwd, 'cake.js'), 'utf8').includes('🎂'));
	t.true(fs.readFileSync(path.join(cwd, 'cat.js'), 'utf8').includes('🐈'));
});
