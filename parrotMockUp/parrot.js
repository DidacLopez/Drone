"use strict"

var parrot = {
	connect: function(callback) {
		if (callback) {callback();}
		return true;
	},
	takeOff: function() {return true;},
	land: function() {return true;},
	stop: function() {return true;},
	forward: function(val) {return true;},
	backward: function(val) {return true;},
	left: function(val) {return true;},
	right: function(val) {return true;}
};
//var createClient = function (){ return parrot; };

var bebop = {
	createClient: function (){ return parrot; }
};

//module.exports.createClient = createClient;
