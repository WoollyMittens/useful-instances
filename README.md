# useful.instances.js: Instances Library

A library of useful functions to ease working with instances of constructors.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=instances">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/instances.min.js"></script>
```

## How to start the script

```javascript
var instances = new useful.Instances(objs, constructor, cfgs);
instances.start();
```

**instances : {object}** - This object gets filled with all the individual instances.

**objs : {DOM elements}** - A collection of DOM elements. i.e. document.getElementsByTagName('A');

**constructor : {function}** - A constructor for the functionality of the following format: MyConstructor(obj, cfg).

**cfg : {object}** - An optional object of name/value pairs that gets passed into every instance of the constructor as configuration data.

## How to control the script

### wait

```javascript
instances.wait();
```

Waits until the document is complete and then executes the .start() method of each instance of the constructor.

### getAll

```javascript
instances.getAll();
```

Returns an all instances in an array.

### getByIndex

```javascript
instances.getByIndex(index);
```

Returns a numbered instance.

**index : {integer}** - The number of the instance.

### getByObject

```javascript
instances.getByObject(object);
```

Returns an instance associated with the object.

**object : {DOM element}** - One of the DOM elements to make the instances.

## Prerequisites

To concatenate and minify the script yourself, the following prerequisites are required:
+ https://github.com/WoollyMittens/useful-polyfills

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
