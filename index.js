'use strict';

const {Compilation, sources: {RawSource}} = require('webpack');

module.exports = class AddAssetPlugin {
	constructor(filePath, source) {
		this.filePath = filePath;
		this.source = source;
	}

	apply(compiler) {
		compiler.hooks.compilation.tap('AddAssetPlugin', compilation => {
			compilation.hooks.processAssets.tapPromise({
				name: 'AddAssetPlugin',
				stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
			}, async () => {
				const source = typeof this.source === 'string' ? this.source : await this.source(compilation);
				compilation.emitAsset(this.filePath, new RawSource(source));
			});
		});
	}
};
