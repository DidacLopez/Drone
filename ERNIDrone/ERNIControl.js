var current_state;

///////////////// INIT Drone ////////////////////////
var bebop = require('node-bebop');
var drone = bebop.createClient();

drone.connect(function() {
	drone.PilotingSettings.absolutControl(false);
	drone._pcmd={   
					flag: 1,
				    roll: 0,
				    pitch: 0,
				    yaw: 0,
				    gaz: 0
				};
});
drone.generateAllStates();

//////////////////////////////////////////////////

function manual_menu(key)
{
	try
	{
		switch (key)
		{
			case "a":
				console.log("moving left");
				ERNIMove("left");
				break;
			case "d":
				console.log("moving right");
				ERNIMove("right");
				break;
			case "w":
				console.log("moving forward");
				ERNIMove("forward");
				break;
			case "s":
				console.log("moving back");
				ERNIMove("backward");
				break;
			case "q":
				console.log("counter clockwise rotation");
				ERNIMove("counterclockwise");
				break;
			case "e":
				console.log("clockwise rotation");
				ERNIMove("clockwise");
				break;
			case "y":
				console.log("going UP!");
				ERNIMove("up");
				break;
			case "h":
				console.log("going down");
				ERNIMove("down");
				break;
			case "space":
				console.log("stoping the drone");
				ERNIMove("stop");
				break;

			case "escape":
				console.log("exiting manual mode\n");
				ERNIMove("stop");
				return 0;
				break;
			case "3":
			break;
			default:
				console.log(key + ": Key not assigned");
				return 3;
		}
		return 3;

	}
	catch (err)
	{
		console.log(err);
		typeof(key);
		console.log("no ascii character allowed")
		return 0;
	}
}

function ERNIMove(action){
	var speed = 20;
	drone.boolSend = true;
	var pcmd={   
					flag: 0,
				    roll: 0,
				    pitch: 0,
				    yaw: 0,
				    gaz: 0
				};
	switch(action)
	{
		case "up":
			pcmd.gaz = speed;
		break;
		case "down":
			pcmd.gaz = speed * -1;
		break;
		case "right":
			pcmd.flag = 1;
			pcmd.roll = speed;
		break;
		case "left":
			pcmd.flag = 1;
			pcmd.roll = speed * -1;
		break;
		case "backward":
			pcmd.flag = 1;
			pcmd.pitch = speed * -1;
		break;
		case "forward":
			pcmd.flag = 1;
			pcmd.pitch = speed;
		break;
		case "clockwise":
			pcmd.yaw = speed * -1 * 2;
		break;
		case "counterclockwise":
			pcmd.yaw = speed * 2;
		break;
		default:
			drone.boolSend = false;
		break;
	}
	console.log(drone.boolSend);
	drone._pcmd = pcmd;
	drone.PilotingSettings.absolutControl(false);
	drone.generateAllStates();
	console.log(drone._pcmd);
}


function ERNITakeOff(){
	drone.Piloting.takeOff();
	drone._pcmd={   
			flag: 1,
		    roll: 0,
		    pitch: 0,
		    yaw: 0,
		    gaz: 0
		};
	drone.generateAllStates();
}

function ERNILanding(){
		drone._pcmd={   
			flag: 1,
		    roll: 0,
		    pitch: 0,
		    yaw: 0,
		    gaz: 0
		};
	drone.Piloting.landing();
	drone.generateAllStates();
}

function ERNIMoveWithTime(action, time){
	ERNIMove(action);
	setTimeout(function(){
		ERNIMove("stop");
	}, time);
	return time;
}

function ERNIMovePerInterval(action, startTime, intervalTime){
	setTimeout(function(action,intervalTime){
		ERNIMoveWithTime(action, intervalTime);
	},startTime, action, intervalTime);
	return startTime + intervalTime + 1500;
}


/////////////////////////////////////////////////////////////////////////

function automatic_mode2()
{
	var timeline = 1000;

	timeline = ERNIMovePerInterval("right",timeline,2000);

	timeline = ERNIMovePerInterval("forward",timeline,2000);

	timeline = ERNIMovePerInterval("left",timeline,2000);

	timeline = ERNIMovePerInterval("backward",timeline,2000);


	return 0;
}

function automatic_mode()
{
	var timeline = 1000;

	timeline = ERNIMovePerInterval("right",timeline,2000);
	timeline = ERNIMovePerInterval("clockwise",timeline,1700);
	timeline = ERNIMovePerInterval("right",timeline,2000);
	timeline = ERNIMovePerInterval("clockwise",timeline,1700);
	timeline = ERNIMovePerInterval("right",timeline,2000);
	timeline = ERNIMovePerInterval("clockwise",timeline,1700);
	timeline = ERNIMovePerInterval("right",timeline,2000);
	timeline = ERNIMovePerInterval("clockwise",timeline,1700);

	return 0;
}



function automatic_mode3()
{
	var switchAction = true
	var timer = setInterval( function(){
		if(switchAction) ERNIMoveWithTime("right",300);
		else ERNIMoveWithTime("clockwise",800);
		switchAction = !switchAction
	}, 1000);

	/*setTimeout(function(timer){
		console.log("end");
		clearInterval(timer);
	}, 8000, timer);*/

	return 0;
}








/////////////////////////////////////////////////////////////////////////

module.exports.current_state = current_state;
module.exports.manual_menu = manual_menu;
module.exports.automatic_mode = automatic_mode;
module.exports.ERNITakeOff = ERNITakeOff;
module.exports.ERNILanding = ERNILanding;
module.exports.ERNIDrone = drone;
