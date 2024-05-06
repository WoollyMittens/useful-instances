# instances.js: Instances Library

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

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

Or use imported as a component in existing projects.

```js
@import {Instances} from "js/instances.js";
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
