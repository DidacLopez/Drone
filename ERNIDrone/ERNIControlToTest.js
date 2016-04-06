var drone = bebop.createClient();

var ERNIControl = {
	ERNIDrone: drone,
	ERNIInitDrone: function() {
		this.ERNIDrone.connect(function() {
			ERNIControl.ERNIDrone._pcmd_isSend = false;
			ERNIControl.ERNIDrone.PilotingSettings.absolutControl(false);
			ERNIControl.ERNIDrone._pcmd={   
							flag: 1,
						    roll: 0,
						    pitch: 0,
						    yaw: 0,
						    gaz: 0
						};
		});
		this.ERNIDrone.generateAllStates();
	},
	ERNIMove: function(action) {
		var speed = 20;
		this.ERNIDrone._pcmd_isSend = true;
		var pcmd={   
						flag: 1,
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
				pcmd.pitch = speed * 1;
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
				this.ERNIDrone._pcmd_isSend = false;
			break;
		}
		
		this.ERNIDrone._pcmd = pcmd;
		this.ERNIDrone.PilotingSettings.absolutControl(false);
		this.ERNIDrone.generateAllStates();
	},
	ERNITakeOff: function () {
		this.ERNIDrone._pcmd_isSend = false;	
		this.ERNIDrone.Piloting.takeOff();
		this.ERNIDrone.generateAllStates();
	},
	ERNILanding: function () {
		this.ERNIDrone._pcmd_isSend = false;
		this.ERNIDrone.Piloting.flatTrim();
		this.ERNIDrone.Piloting.landing();
		this.ERNIDrone.generateAllStates();
	} ,
	ERNIStop: function () {
		this.ERNIDrone._pcmd_isSend = false;
		this.ERNIDrone.Piloting.flatTrim();
		this.ERNIDrone.generateAllStates();
	},
	ERNIMoveWithTime: function (action, time){
		this.ERNIMove(action);
		setTimeout(function(){
			ERNIControl.ERNIMove("stop");
		}, time);
		return time;
	},
	ERNIMovePerInterval: function (action, startTime, intervalTime) {
		setTimeout( function (action,intervalTime) {
			this.ERNIMoveWithTime(action, intervalTime);
		}, startTime, action, intervalTime);
		return startTime + intervalTime + 1500;
	},
	ERNIManualMenu: function (key) {
		try {
			switch (key) {
				case "a":
					console.log("moving left");
					this.ERNIMove("left");
				break;
				case "d":
					console.log("moving right");
					this.ERNIMove("right");
				break;
				case "w":
					console.log("moving forward");
					this.ERNIMove("backward");
				break;
				case "s":
					console.log("moving back");
					this.ERNIMove("forward");
				break;
				case "q":
					console.log("counter clockwise rotation");
					this.ERNIMove("counterclockwise");
				break;
				case "e":
					console.log("clockwise rotation");
					this.ERNIMove("clockwise");
				break;
				case "y":
					console.log("going UP!");
					this.ERNIMove("up");
				break;
				case "h":
					console.log("going down");
					this.ERNIMove("down");
				break;
				case "space":
					console.log("stoping the drone");
					this.ERNIMove("stop");
				break;
				case "escape":
					console.log("exiting manual mode\n");
					this.ERNIMove("stop");
					return 0;
					break;
				case "3": //empty case
				break;
				default:
					console.log(key + ": Key not assigned");
			}
			return 3;
		}
		catch (err) {
			console.log("no ascii character allowed: " + err)
			return 0;
		}
	},
	ERNIAutomaticMode1:function () {
		return 0;
	},
	ERNIAutomaticMode2:function () {
		return 0;
	},
	ERNIAutomaticMode3:function () {
		return 0;
	},
	ERNIAutomaticMode4:function () {
		return 0;
	},
	ERNIAutomaticMode5:function () {
		return 0;
	},
	ERNIAutomaticMode6:function () {
		return 0;
	},
	ERNIAutomaticMode7:function () {
		return 0;
	},
	ERNIAutomaticMode8:function () {
		return 0;
	},
	ERNIAutomaticMode9:function () {
		return 0;
	},
	ERNIAutomaticMode10:function () {
		return 0;
	}
};