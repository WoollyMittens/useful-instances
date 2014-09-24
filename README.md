# useful.instances.js: Instances Library

A library of useful functions to ease working with instances of constructors.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-instances">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-instances.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to start the script

```javascript
var instances = new useful.Instances(objs, constructor, cfgs);
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

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
