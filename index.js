'use strict';
const {Compilation, sources: {RawSource}} = require('webpack');

const tapOptions = {
	name: 'AddAssetPlugin',
	stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
};

module.exports = class AddAssetPlugin {
	constructor(filePath, source) {
		this.filePath = filePath;
		this.source = source;
	}

	apply(compiler) {
		compiler.hooks.thisCompilation.tap('AddAssetPlugin', compilation => {
			compilation.hooks.processAssets.tapPromise(tapOptions, async () => {
				let source;
				if (typeof this.source === 'string') {
					if (compilation.getAsset(this.filePath)) {
						// Skip emitting the asset again because it's immutable
						return;
					}

					source = this.source;
				} else {
					source = await this.source(compilation);
				}

				compilation.emitAsset(this.filePath, new RawSource(source));
			});
		});
	}
};
