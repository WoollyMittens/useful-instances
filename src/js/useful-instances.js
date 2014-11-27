/*
	Source:
	van Creij, Maurice (2014). "useful.instances.js: A library of useful functions to ease working with instances of constructors.", version 20141127, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/


	// create the constructor if needed
	var useful = useful || {};
	useful.Instances = useful.Instances || function () {};

	// extend the constructor
	useful.Instances.prototype.init = function (cfg) {
		// properties
		"use strict";
		this.cfg = cfg;
		this.elements = cfg.elements;
		this.constructor = cfg.constructor;
		this.constructs = [];
		// methods
		this.each = function () {
			var _cfg;
			// for all elements
			for (var a = 0, b = this.elements.length; a < b; a += 1) {
				// clone the configuration
				_cfg = Object.create(this.cfg);
				// insert the current element
				_cfg.element = this.elements[a];
				// delete the constructor from the clone
				delete _cfg.constructor;
				delete _cfg.elements;
				// start a new instance of the object
				this.constructs.push(new this.constructor(_cfg, this));
			}
		};
		this.getAll = function () {
			return this.constructs;
		};
		this.getByObject = function (element) {
			return this.constructs[this.constructs.indexOf(element)];
		};
		this.getByIndex = function (index) {
			return this.constructs[index];
		};
		// go
		this.each();
		this.init = function () {};
		return this;
	};

	// return as a require.js module
	if (typeof module !== 'undefined') {
		exports = module.exports = useful.Instances;
	}
