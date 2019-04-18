'use strict';

module.exports = class AddAssetPlugin {
	constructor(filePath, source) {
		this.filePath = filePath;
		this.source = source;
	}

	apply(compiler) {
		compiler.hooks.emit.tapPromise('AddAssetPlugin', async compilation => {
			const source = typeof this.source === 'string' ? this.source : await this.source(compilation);

			compilation.assets[this.filePath] = {
				source: () => source,
				size: () => source.length
			};
		});
	}
};
