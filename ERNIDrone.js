
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
		process.stdin.pause();
	}
	
});
process.stdin.setRawMode(true);
process.stdin.resume();
/////////////////////////////////////////////


/////////////MAIN/////////////////////////
ERNIDrone.interface.clean_console();
ERNIDrone.interface.main_menu_console();

function menu(ch,key)
{
	switch(current_state)
	{
		case 0:
		case 1:
		case 2:
			ERNIDrone.interface.clean_console();
			current_state = ERNIDrone.interface.main_menu(ch);
		break;
		case 3:
			current_state = ERNIDrone.control.manual_menu(key);
		break;
		case 4:
			ERNIDrone.control.automatic_mode();
		break;
	}

}
/////////////////////////////////////////