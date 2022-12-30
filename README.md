# instances.js: Instances Library

A library of useful functions to ease working with instances of constructors.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/instances.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/instances.js'
], function(Instances) {
	...
});
```

Or import into an MVC framework.

```js
var Instances = require('js/instances.js');
```

## How to start the script

```javascript
var instances = new Instances({
	'elements': document.querySelectorAll('#instance-test span'),
	'constructor': ChangeColor,
	'foo': 'bar'
});
```

**elements : {DOM elements}** - A collection of DOM elements. i.e. document.getElementsByTagName('A');

**constructor : {function}** - A constructor for the functionality of the following format: MyConstructor(cfg, parent).

**name : {value}** - Any number of other name:value pairs to be passed to the constructor.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
