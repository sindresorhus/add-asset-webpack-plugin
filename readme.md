# add-asset-webpack-plugin [![Build Status](https://travis-ci.org/sindresorhus/add-asset-webpack-plugin.svg?branch=master)](https://travis-ci.org/sindresorhus/add-asset-webpack-plugin)

> Dynamically add an asset to the [webpack](https://webpack.js.org) graph


## Install

```
$ npm install add-asset-webpack-plugin
```


## Usage

```js
const AddAssetPlugin = require('add-asset-webpack-plugin');

module.exports = {
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

Type: `string` `Function<string|Promise>`

Asset source or a function that returns the asset source.

If the function returns a promise, it will be awaited.

If a function, it will receive the [`compilation` instance](https://webpack.js.org/api/compilation/).


## Related

- [node-env-webpack-plugin](https://github.com/sindresorhus/node-env-webpack-plugin) - Simplified `NODE_ENV` handling
- [add-module-exports-webpack-plugin](https://github.com/sindresorhus/add-module-exports-webpack-plugin) - Add `module.exports` for Babel and TypeScript compiled code


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
