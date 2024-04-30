import fs from 'node:fs';
import path from 'node:path';
import test from 'ava';
import webpack from 'webpack';
import {temporaryDirectory} from 'tempy';
import pify from 'pify';
import config from './fixture/webpack.config.js';

test('main', async t => {
	const cwd = temporaryDirectory();
	config.output.path = cwd;
	const stats = await pify(webpack)(config);
	t.false(stats.hasErrors());
	t.true(fs.readFileSync(path.join(cwd, 'unicorn.js'), 'utf8').includes('🦄'));
	t.true(fs.readFileSync(path.join(cwd, 'rainbow.js'), 'utf8').includes('🌈'));
	t.true(fs.readFileSync(path.join(cwd, 'cake.js'), 'utf8').includes('🎂'));
	t.true(fs.readFileSync(path.join(cwd, 'cat.js'), 'utf8').includes('🐈'));
});
