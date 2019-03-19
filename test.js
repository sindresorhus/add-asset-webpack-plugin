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
	await pify(webpack)(config);
	t.true(fs.readFileSync(path.join(cwd, 'unicorn.js'), 'utf8').includes('🦄'));
	t.is(fs.readFileSync(path.join(cwd, 'rainbow.js'), 'utf8'), '🌈');
	t.is(fs.readFileSync(path.join(cwd, 'cake.js'), 'utf8'), '🎂');
	t.is(fs.readFileSync(path.join(cwd, 'cat.js'), 'utf8'), '🐈');
});
