var current_state;

function manual_menu(key)
{
	try
	{
		switch (key.name)
		{
			case "a":
				console.log("moving left");
				break;
			case "d":
				console.log("moving right");
				break;
			case "w":
				console.log("moving forward");
				break;
			case "s":
				console.log("moving back");
				break;
			case "q":
				console.log("counter clockwise rotation");
				break;
			case "e":
				console.log("clockwise rotation");
				break;
			case "y":
				console.log("going UP!");
				break;
			case "h":
				console.log("going down");
				break;
			case "space":
				console.log("stoping the drone");
				break;

			case "escape":
				console.log("exiting manual mode\n");
				return 0;
				break;

			default:
				console.log("Key not assigned");
		}
		return 3;

	}
	catch (err)
	{
		console.log("no ascii character allowed")
	}

	/*
	stdin.on( 'data', function(key){
	logMsg('Key pressed: ' + key);

	switch (key){
		case '\u001B': //escape key
			logMsg('exit application');
			process.exit();
		break;
		case '\u0031': //1 key
			logMsg('take off the drone!');
			drone.Piloting.takeOff();
		break;
		case '\u0032': //2 key
			logMsg('land the drone!');
			logMsg(drone.Piloting.landing());
		break;
		case '\u0020': //space key
			logMsg('stop the drone and hover');
			//logMsg(drone.flatTrim());
			//drone.Network.disconnect();
			//drone.connect(function (){
							drone._pcmd={   
									flag: 1,
								    roll: 0,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								}
			//				});

		break;
		case '\u0057': //W key
		case '\u0077': //w key
			logMsg('go forward');
			drone._pcmd={   
									flag: 1,
								    roll: 0,
								    pitch: vel,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};

								
			//drone.up(20);
		break;
		case '\u0041': //A key
		case '\u0061': //a key
			logMsg('go left');
			drone._pcmd={   
									flag: 1,
								    roll: nVel,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};
		break;
		case '\u0053': //S key
		case '\u0073': //s key
			logMsg('go back');
			drone._pcmd={   
									flag: 1,
								    roll: 0,
								    pitch: nVel,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};
			
			//drone.left(10);
		break;
		case '\u0044': //D key
		case '\u0064': //d key
			logMsg('go right');
			drone._pcmd={   
									flag: 1,
								    roll: vel,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};
		break;
		case '\u006D': //m key
			logMsg('save the current states')
			logMsg(drone.Common.allStates());
		break;
		case '\u0051': //Q key
		case '\u0071': //q key
			logMsg('counter clockwise');
			drone._pcmd={   
									flag: 0,
								    roll: 0,
								    pitch: 0,
								    yaw: vel,
								    gaz: 0,
									psi:0
								};
		break;
		case '\u0045': //E key
		case '\u0065': //e key
			logMsg('clockwise');
			drone._pcmd={   
									flag: 0,
								    roll: 0,
								    pitch: 0,
								    yaw: nVel,
								    gaz: 0,
									psi:0
								};
		break;
		case '\u0059': //Y key
		case '\u0079': //y key
			logMsg('up!');
			drone._pcmd={   
									flag: 0,
								    roll: 0,
								    pitch: 0,
								    yaw: 0,
								    gaz: vel,
									psi:0
								};
		break;
		case '\u0048': //H key
		case '\u0068': //h key
			logMsg('down');
			drone._pcmd ={   
									flag: 0,
								    roll: 0,
								    pitch: 0,
								    yaw: 0,
								    gaz: nVel,
									psi:0
								};
		break;
		case '\u006E': //n key
		case '\u004E': //N key
			logMsg('General Events:');
			logMsg('Drone is ready: ' + drone.ready);
			logMsg('Drone is flying: ' + drone.flying);
			logMsg('Drone is hovering: ' + drone.hovering);
			logMsg('Drone is landed: ' + drone.landed);
			logMsg('Drone is landing: ' + drone.landing);
			logMsg('Drone is taking off: ' + drone.takingOff);
			logMsg('Drone is emergency: ' + drone.emergency);

		break;
		case '\u0066': // f key
			logMsg(drone.Piloting.flatTrim());

		break;
		case '\u0033': //3 key
			//drone.Piloting.takeOff();
			setTimeout(function() {
			    			drone._pcmd={   
									flag: 1,
								    roll: vel,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};
			  }, 3000);
			setTimeout(function() {
			    			drone._pcmd={   
									flag: 1,
								    roll: nVel,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};
			  }, 6000);
			setTimeout(function() {
			    			drone.Piloting.landing();
			  }, 6500);

		break;

		default:
			logMsg('key not mapped');
		break;
	}
	drone.generateAllStates();

});
*/
}


function automatic_mode()
{
	console.log("TODO ...")
	return 0;

	/*
var bebop = require('node-bebop');
var drone = bebop.createClient();
drone.connect(function() {
	drone.PilotingSettings.absolutControl(false);
			drone._pcmd={   
									flag: 1,
								    roll: 0,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};

control_drone("takeoff", 500);
control_drone("hover", 2000);

control_drone("right", 5000);
//control_drone("left", 7000);
control_drone("hover", 7500);

control_drone("front", 10000);
//control_drone("back", 12000);
control_drone("hover", 12500);

control_drone("left", 15000);
//ontrol_drone("right", 10000);
control_drone("hover", 17500);

control_drone("back", 20000);
//control_drone("front", 13000);
control_drone("hover", 22500);

control_drone("landing",25000);
});

var vel = 60;

function control_drone(option, interval)
{	

	setTimeout(function(option) {
		switch (option)
		{
			case "takeoff":
				drone.Piloting.takeOff();
							drone._pcmd={   
									flag: 1,
								    roll: 0,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};
			break;
			case "landing":
				drone.Piloting.landing();
			break;
			case "hover":
				//drone = null;
				//drone.NetworkEvent.disconnection(1);
				//drone.Piloting.flatTrim();
							drone._pcmd={   
									flag: 1,
								    roll: 0,
								    pitch: 0,
								    yaw: 0,
								    gaz: 0,
									psi:0
								};
			break;
			case 'right':
				drone.right(vel);
			break;
			case 'left':
				drone.left(vel);
			break;
			case 'front':
				drone.forward(vel);
			break;
			case 'back':
				drone.backward(vel);
			break;
			default:
				console.log("default: " + option);
			break;
		}
		drone.generateAllStates();
	}, interval, option);
	

}

	*/
}


module.exports.current_state = current_state;
module.exports.manual_menu = manual_menu;