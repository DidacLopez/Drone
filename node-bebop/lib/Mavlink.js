

"use strict";

var commandToBuffer = require("./commandToBuffer");

var Mavlink = module.exports = function(self) {
  this.self = self;
};

Mavlink.prototype.start = function(obj) {

  var buffer = commandToBuffer(0, "Mavlink", "Start", obj);

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};

Mavlink.prototype.pause = function() {

  var buffer = commandToBuffer(0, "Mavlink", "Pause");

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};

Mavlink.prototype.stop = function() {

  var buffer = commandToBuffer(0, "Mavlink", "Stop");

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};
