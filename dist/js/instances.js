/*
	Source:
	van Creij, Maurice (2018). "instances.js: A library of useful functions to ease working with instances of constructors.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Instances = function (config) {

	this.only = function (config) {
		// start an instance of the script
		return new config.constructor(config, this);
	};

	this.each = function (config) {
		var _config, _context = this, instances = [];
		// for all element
		for (var a = 0, b = config.elements.length; a < b; a += 1) {
			// clone the configuration
			_config = Object.create(config);
			// insert the current element
			_config.element = config.elements[a];
			// delete the list of elements from the clone
			delete _config.elements;
			delete _config.constructor;
			// start a new instance of the object
			instances[a] = new config.constructor(_config, _context);
		}
		// return the instances
		console.log('instances', instances);
		return instances;
	};

	return (config.elements) ? this.each(config) : this.only(config);

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = Instances;
}
