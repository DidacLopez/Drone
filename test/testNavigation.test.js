describe("Start the drone", function (){
	it("verify if the initialization of the drone is correct", function (){
		ERNIControl.ERNIInitDrone();
		expect(ERNIControl.ERNIDrone._events.connection).toEqual(true);
		expect(ERNIControl.ERNIDrone._settings.absolutControl).toEqual(false);
	});
});

describe("Verify the drone state before input", function (){

	it("verify the state is 3 after send 'a' char", function (){
		spyOn(ERNIControl, "ERNIMove");
		var current_state = ERNIControl.ERNIManualMenu("a");

		expect(ERNIControl.ERNIMove).toHaveBeenCalledWith("left");
		expect(current_state).toEqual(3);
	});

	it("verify the state is 0 after send 'escape' key", function (){
		spyOn(ERNIControl, "ERNIMove");
		var current_state = ERNIControl.ERNIManualMenu("escape");
		expect(ERNIControl.ERNIMove).toHaveBeenCalledWith("stop");
		expect(current_state).toEqual(0);
	});


	// TODO Create unit tests for keypress functionality
		
});

describe("Verify the drone movements", function (){
	it("verify it's moving to the left", function (){
		ERNIControl.ERNIMove("left");
		expect(ERNIControl.ERNIDrone._pcmd_isSend).toEqual(true);
		expect(ERNIControl.ERNIDrone._pcmd.flag).toEqual(1);
		expect(ERNIControl.ERNIDrone._pcmd.pitch).toEqual(0);
		expect(ERNIControl.ERNIDrone._pcmd.roll).toBeLessThan(0);
		expect(ERNIControl.ERNIDrone._pcmd.yaw).toEqual(0);
		expect(ERNIControl.ERNIDrone._pcmd.gaz).toEqual(0);
	});


	// TODO Create unit tests for the drone movements functionality 

});

describe("Verify the automation drone moves correctly with time", function (){
	jasmine.clock().install();
	
	it("verify the correct movement after some time", function (){
		// TODO It needs to mock the ERNIControl with spyOn

		ERNIControl.ERNIMoveWithTime("left", 2000)

		expect(ERNIControl.ERNIDrone._pcmd_isSend).toEqual(true);
		expect(ERNIControl.ERNIDrone._pcmd.flag).toEqual(1);
		expect(ERNIControl.ERNIDrone._pcmd.pitch).toEqual(0);
		expect(ERNIControl.ERNIDrone._pcmd.roll).toBeLessThan(0);
		expect(ERNIControl.ERNIDrone._pcmd.yaw).toEqual(0);
		expect(ERNIControl.ERNIDrone._pcmd.gaz).toEqual(0);
		
		jasmine.clock().tick(3000);
		expect(ERNIControl.ERNIDrone._pcmd_isSend).toEqual(false);
		expect(ERNIControl.ERNIDrone._pcmd.flag).toEqual(1);
		expect(ERNIControl.ERNIDrone._pcmd.pitch).toEqual(0);
		expect(ERNIControl.ERNIDrone._pcmd.roll).toEqual(0);
		expect(ERNIControl.ERNIDrone._pcmd.yaw).toEqual(0);
		expect(ERNIControl.ERNIDrone._pcmd.gaz).toEqual(0);
	});

	// TODO Create unit tests to the ERNIMovePerInterval method

});

