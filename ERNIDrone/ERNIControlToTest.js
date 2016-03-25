//// MOCK UP ///////////////////////////////
//var bebop = require('../parrotMockUp/parrot');
/*var mockery = require('mockery');

mockery.registerMock('node-bebop', fsMock);
mockery.enable({
	warnOnUnregistered: false,
	warnonUnReplace:false,
	useCleanCache:true
});
////////////////////////////////////////////////*/
//var bebop = require('node-bebop');

//var drone = bebop.createClient();
drone = parrot;
var current_state;

function manual_menu(key)
{
	current_state = key;
}

function stop(){
	return true;
}

function automatic_mode()
{
	console.log("TODO ...")
	current_state = 0
}

