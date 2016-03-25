function main_menu_console()
{
	//console.log("\n");
	console.log("╔══════════════════════════════╗");
	console.log("║What do you want do do?       ║");
	console.log("║  1-Take off the drone.       ║");
	console.log("║  2-Land the drone.           ║");
	console.log("║  3-Manual control.           ║");
	console.log("║  4-Automatic mode.           ║");
	console.log("╚══════════════════════════════╝");
}

function clean_console()
{
	process.stdout.write('\033c');
}

function main_menu(ch)
{
	var current_state = 0;
	main_menu_console();
	try 
	{
	  	switch(ch)
	  	{
	  		case "1":
	  			console.log("take off");
	  			current_state = 1;
	  			break;

	  		case "2":
	  			console.log("landing");
	  			current_state = 2;
	  			break;

		  	case "3":
		  		clean_console()
		  		console.log("manual mode");
		  		console.log("waiting for commands ...");
		  		current_state = 3;
		  		break;

		  	case "4":
		  		console.log("automatic");
		  		current_state = 4;
		  		break;

		  	default:
		  		console.log("unknown character");
		}
	}
	catch (err)
	{
		console.log("no ascii character allowed");	
		return -1;
	}
	return current_state;
}

module.exports.main_menu_console = main_menu_console;
module.exports.clean_console = clean_console;
module.exports.main_menu = main_menu;