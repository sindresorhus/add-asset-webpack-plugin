'use strict';

module.exports = class AddAssetPlugin {
	constructor(filePath, source) {
		this.filePath = filePath;
		this.source = source;
	}

	// TODO: For when we target Node.js 8
	// apply(compiler) {
	// 	compiler.plugin('emit', async (compilation, cb) => {
	// 		const source = typeof this.source === 'string' ? this.source : await this.source(compilation);

	// 		compilation.assets[this.filePath] = {
	// 			source: () => source,
	// 			size: () => source.length
	// 		};

	// 		cb();
	// 	});
	// }

	apply(compiler) {
		compiler.plugin('emit', (compilation, cb) => {
			const rawSource = typeof this.source === 'string' ? this.source : this.source(compilation);

			Promise.resolve(rawSource).then(source => {
				compilation.assets[this.filePath] = {
					source: () => source,
					size: () => source.length
				};

				cb();
			});
		});
	}
};
