
var keypress = require('keypress');
var ERNIDrone = require('./ERNIDrone/ERNIIndex');


//states
//0 --> start
//1 --> take off
//2 --> landing
//3 --> manual control
//4 --> automatic
var current_state = 0;

///////////////////INPUT////////////////////
keypress(process.stdin);
process.stdin.on('keypress', function (ch, key) {
	menu(ch,key);
	//console.log(current_state)
	if (key && key.ctrl && key.name == 'c') 
	{
		process.exit();
	}
	
});
process.stdin.setRawMode(true);
process.stdin.resume();
/////////////////////////////////////////////


/////////////MAIN/////////////////////////

ERNIDrone.interface.clean_console();
ERNIDrone.interface.main_menu_console();

/*setInterval(function(){

		ERNIDrone.control.ERNIDrone.generateAllStates();
		console.log(ERNIDrone.control.ERNIDrone._pcmd);

	}, 700);*/
function menu(ch,key)
{
	if (current_state == 0){
		ERNIDrone.interface.clean_console();
		current_state = ERNIDrone.interface.main_menu(ch);
	}

	switch(current_state)
	{
		case 1:
			ERNIDrone.interface.clean_console();
			current_state = ERNIDrone.interface.main_menu(ch);
			ERNIDrone.control.ERNITakeOff();
		break;
		case 2:
			ERNIDrone.interface.clean_console();
			current_state = ERNIDrone.interface.main_menu(ch);
			ERNIDrone.control.ERNILanding();
		break;
		case 3:
			var action = key ? key.name : ch;
			current_state = ERNIDrone.control.manual_menu(action);
		break;
		case 4:
			current_state = ERNIDrone.control.automatic_mode();
		break;
	}
}
/////////////////////////////////////////
