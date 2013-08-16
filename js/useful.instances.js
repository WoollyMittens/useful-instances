/*
	Source:
	van Creij, Maurice (2012). "useful.instances.js: A library of useful functions to ease working with instances of constructors.", version 20121126, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.

	Usage:
	var instances = new useful.Instances(document.querySelectorAll('#id.classname'), Constructor, {'foo':'bar'});
	instances.wait(); or instances.start();
	object = instances.get(element);
*/

(function (useful) {

	// Invoke strict mode
	"use strict";

	// public functions
	useful.Instances = function (objs, constructor, cfgs) {
		// properties
		this.objs = objs;
		this.constructor = constructor;
		this.cfgs = cfgs;
		this.constructs = [];
		this.delay = 200;
		// keeps trying until the DOM is ready
		this.wait = function () {
			var scope = this;
			scope.timeout = (document.readyState.match(/interactive|loaded|complete/i)) ?
				scope.start():
				setTimeout(function () { scope.wait(); }, scope.delay);
		};
		// starts and stores an instance of the constructor for every element
		this.start = function () {
			for (var a = 0, b = this.objs.length; a < b; a += 1) {
				// store a constructed instance with cloned cfgs object
				this.constructs[a] = new this.constructor(this.objs[a], Object.create(this.cfgs));
				this.constructs[a].start();
			}
			return null;
		};
		// returns the constructs
		this.getAll = function (element) {
			return this.constructs;
		};
		// returns the object that goes with the element
		this.getByObject = function (element) {
			return this.constructs[this.constructs.indexOf(element)];
		};
		// returns the object that goes with the index
		this.getByIndex = function (index) {
			return this.constructs[index];
		};
	}

	/*
		useful.polyfills.js
	*/

	// private functions
	var polyfills = polyfills || {};

	// allow document.querySelectorAll (https://gist.github.com/connrs/2724353)
	polyfills.querySelectorAll = function () {
		if (!document.querySelectorAll) {
			document.querySelectorAll = function (a) {
				var b = document, c = b.documentElement.firstChild, d = b.createElement("STYLE");
				return c.appendChild(d), b.__qsaels = [], d.styleSheet.cssText = a + "{x:expression(document.__qsaels.push(this))}", window.scrollBy(0, 0), b.__qsaels;
			};
		}
	};

	// allows Object.create (https://gist.github.com/rxgx/1597825)
	polyfills.objectCreate = function () {
		if (typeof Object.create !== "function") {
			Object.create = function (original) {
				function Clone() {}
				Clone.prototype = original;
				return new Clone();
			};
		}
	};

	// for immediate use
	polyfills.querySelectorAll();
	polyfills.objectCreate();

}(window.useful = window.useful || {}));
