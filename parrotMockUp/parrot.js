"use strict"

var parrot = {
	_pcmd: {},
	_events:{},
	_settings:{
		absolutControl:true
	},
	PilotingSettings:{
		absolutControl: function (bool) {parrot._settings.absolutControl = bool;}
	},
	generateAllStates: function() {return true;},
	connect: function(callback) {
		if (callback) {callback();}
		this._events.connection = true;
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
//module.exports.bebop = bebop;
