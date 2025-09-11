import type {Compiler, Compilation} from 'webpack';

/**
Dynamically add an asset to the webpack graph.

@example
```
import AddAssetPlugin from 'add-asset-webpack-plugin';

export default {
	// …
	plugins: [
		new AddAssetPlugin('file.js', `
			console.log('This is a dynamically created file');
		`)
	]
};
```
*/
declare class AddAssetPlugin {
	/**
	@param filePath - Relative file path for the asset.
	@param source - Asset source or a function that returns the asset source. If a function, it will receive the compilation instance.
	*/
	constructor(
		filePath: string,
		source: string | ((compilation: Compilation) => string | Promise<string>)
	);

	apply(compiler: Compiler): void;
}

export default AddAssetPlugin;
