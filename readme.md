# add-asset-webpack-plugin

> Dynamically add an asset to the [Webpack](https://webpack.js.org) graph

## Install

```sh
npm install add-asset-webpack-plugin
```

## Usage

```js
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

## API

### AddAssetPlugin(filePath, source)

#### filePath

Type: `string`

Relative file path for the asset.

#### source

Type: `string | (compilation => string | Promise<string>)`

Asset source or a function that returns the asset source.

If a function, it will receive the [`compilation` instance](https://webpack.js.org/api/compilation/). And if the function returns a promise, it will be awaited.

## Related

- [node-env-webpack-plugin](https://github.com/sindresorhus/node-env-webpack-plugin) - Simplified `NODE_ENV` handling
- [add-module-exports-webpack-plugin](https://github.com/sindresorhus/add-module-exports-webpack-plugin) - Add `module.exports` for Babel and TypeScript compiled code
