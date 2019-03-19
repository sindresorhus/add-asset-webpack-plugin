'use strict';

module.exports = class AddAssetPlugin {
	constructor(filePath, source) {
		this.filePath = filePath;
		this.source = source;
	}

	apply(compiler) {
		compiler.plugin('emit', async (compilation, callback) => {
			const source = typeof this.source === 'string' ? this.source : await this.source(compilation);

			compilation.assets[this.filePath] = {
				source: () => source,
				size: () => source.length
			};

			callback();
		});
	}
};
