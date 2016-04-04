var ERNIInterface = {
	ERNIMainMenuConsole: function () {
		console.log("╔══════════════════════════════╗");
		console.log("║What do you want do do?       ║");
		console.log("║  1-Take off the drone.       ║");
		console.log("║  2-Land the drone.           ║");
		console.log("║  3-Manual control.           ║");
		console.log("║  [4 - 9]-Automatic mode.     ║");
		console.log("╚══════════════════════════════╝");
	},
	ERNICleanConsole: function () {
		process.stdout.write('\033c');
	},
	ERNIMainMenu: function (ch) {
		var current_state = 0;
		this.ERNIMainMenuConsole();
		try {
		  	switch(ch) {
		  		case "first":
		  		break;
		  		case "1":
		  			console.log("take off");
		  			current_state = 1;
		  		break;
		  		case "2":
		  			console.log("landing");
		  			current_state = 2;
		  		break;
			  	case "3":
			  		this.ERNICleanConsole();
			  		console.log("manual mode");
			  		console.log("waiting for commands ...");
			  		current_state = 3;
			  	break;
			  	case "4":
			  	case "5":
			  	case "6":
			  	case "7":
			  	case "8":
			  	case "9":
			  		console.log("automatic flight " + (ch-3));
			  		current_state = parseInt("4" + (ch-3));
			  	break;
			  	case "space":
			  		console.log("stop");
			  		current_state = 99;
			  	break;
			  	default:
			  		console.log("unknown character");
			}
		}
		catch (err)	{
			console.log("no ascii character allowed: " + err);	
			return -1;
		}
		return current_state;
	}
};


module.exports = ERNIInterface;