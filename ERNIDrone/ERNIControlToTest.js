
///////////////// INIT Drone ////////////////////////
//var bebop = require('node-bebop');
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
				erniObject.move("left");
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
			pcmd.yaw = speed * -1;
		break;
		case "counterclockwise":
			pcmd.yaw = speed;
		break;
		default:

		break;
	}
	//console.log(action);
	drone._pcmd = pcmd;
	drone.PilotingSettings.absolutControl(false);
	drone.generateAllStates();
}

var erniObject = {};
erniObject.move = ERNIMove;


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
	return startTime + intervalTime + 500;
}


/////////////////////////////////////////////////////////////////////////

function automatic_mode()
{
	var timeline = 1000;
	timeline = ERNIMovePerInterval("right",timeline,2000);
	timeline = ERNIMovePerInterval("forward",timeline,2000);
	timeline = ERNIMovePerInterval("left",timeline,2000);
	timeline = ERNIMovePerInterval("backward",timeline,2000);
	return 0;
}

function automatic_mode2()
{
	var switchAction = true
	var timer = setInterval( function(){
		if(switchAction) ERNIMoveWithTime("right",200);
		else ERNIMoveWithTime("counterclockwise");
		switchAction = !switchAction
	}, 500);

	setTimout(function(timer){
		clearInterval(timer);
	}, 5000, timer);

	return 0;
}








/////////////////////////////////////////////////////////////////////////