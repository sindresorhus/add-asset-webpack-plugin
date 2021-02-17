'use strict';

module.exports = class ChildCompilerPlugin {
	apply(compiler) {
		compiler.hooks.make.tapAsync('ChildCompilerPlugin', (compilation, callback) => {
			const childCompiler = compilation.createChildCompiler('ChildCompilerPlugin');
			childCompiler.runAsChild(callback);
		});
	}
};
