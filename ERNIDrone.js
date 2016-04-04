
var keypress = require('keypress');
var ERNIDrone = require('./ERNIDrone/ERNIIndex');


//states
//0 --> idle
//1 --> take off
//2 --> landing
//3 --> manual control
//4X --> automatic group X
//99 --> Stop
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

ERNIDrone.control.ERNIInitDrone();
ERNIDrone.interface.ERNICleanConsole();
ERNIDrone.interface.ERNIMainMenu("first");

function menu(ch,key)
{
	//handle special keys
	var action = key ? key.name : ch;

	if (current_state == 0){
		ERNIDrone.interface.ERNICleanConsole();
		current_state = ERNIDrone.interface.ERNIMainMenu(action);
	}

	switch(current_state)
	{
		case 1: //1 --> take off
			ERNIDrone.interface.ERNICleanConsole();
			current_state = ERNIDrone.interface.ERNIMainMenu(action);
			ERNIDrone.control.ERNITakeOff();
		break;
		case 2: //2 --> landing
			ERNIDrone.interface.ERNICleanConsole();
			current_state = ERNIDrone.interface.ERNIMainMenu(action);
			ERNIDrone.control.ERNILanding();
		break;
		case 3: //3 --> manual control
			current_state = ERNIDrone.control.ERNIManualMenu(action);
		break;
		case 41: //41 --> automatic Group 1
			current_state = ERNIDrone.control.ERNIAutomaticMode1();
		break;
		case 42: //42 --> automatic Group 2
			current_state = ERNIDrone.control.ERNIAutomaticMode2();
		break;
		case 43: //43 --> automatic Group 3
			current_state = ERNIDrone.control.ERNIAutomaticMode3();
		break;
		case 44: //44 --> automatic Group 4
			current_state = ERNIDrone.control.ERNIAutomaticMode4();
		break;
		case 45: //45 --> automatic Group 5
			current_state = ERNIDrone.control.ERNIAutomaticMode5();
		break;
		case 46: //46 --> automatic Group 6
			current_state = ERNIDrone.control.ERNIAutomaticMode6();
		break;
		case 99: //99 --> stop
			ERNIDrone.control.ERNIStop();
		break;

	}
}
/////////////////////////////////////////
