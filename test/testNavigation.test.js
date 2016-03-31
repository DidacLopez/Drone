/*describe("ParrotNavigation", function(){

	it("ParrotUp", function(){
		manual_menu('w');
		expect(current_state).toEqual('w');
	});

	it("ParrotDown", function(){
		manual_menu('u');
		expect(current_state).toEqual('u');
	});

	it("Parrot stops", function(){
		var hasStopped = drone.stop();
		expect(hasStopped).toEqual(true);
	})

})
*/

describe("Start the drone", function (){
	it("Connection established", function (){
		expect(drone._events.connection).toEqual(true);
	});
	it("Check absolut control is false", function (){
		expect(drone._settings.absolutControl).toEqual(false)
	})
});

describe("Verify the drone state before input", function (){

	it("verify the state is 3 after send 'a' char", function (){
		spyOn(erniObject, "move");
		var current_state = manual_menu("a");

		expect(erniObject.move).toHaveBeenCalledWith("left");
		expect(current_state).toEqual(3);
	});

	it("verify the state is 3 after send 'w' char", function (){
		aux = ERNIMove;
		ERNIMove = jasmine.createSpy();
		var current_state = manual_menu("w");

		expect(ERNIMove).toHaveBeenCalledWith("forward");
		expect(current_state).toEqual(3);
		ERNIMove = aux;
	});
	it("verify the state is 3 after send 's' char", function (){
		var current_state = manual_menu("s");
		expect(current_state).toEqual(3);
	});
		it("verify the state is 0 after send 'escape' key", function (){
		var current_state = manual_menu("escape");
		expect(current_state).toEqual(0);
	});
		//TO DO: Code coverage, add all cases.
});

describe("Verify the drone movements", function (){
	it("verify it's moving to the left", function (){
		ERNIMove("left");
		expect(drone._pcmd.flag).toEqual(1);
		expect(drone._pcmd.pitch).toEqual(0);
		expect(drone._pcmd.roll).toBeLessThan(0);
		expect(drone._pcmd.yaw).toEqual(0);
		expect(drone._pcmd.gaz).toEqual(0);
	});

	it("verify it's moving to the right", function (){
		ERNIMove("right");
		expect(drone._pcmd.flag).toEqual(1);
		expect(drone._pcmd.pitch).toEqual(0);
		expect(drone._pcmd.roll).toBeGreaterThan(0);
		expect(drone._pcmd.yaw).toEqual(0);
		expect(drone._pcmd.gaz).toEqual(0);
	});

	//TODO the rest of movements
});

describe("Verify the automation drone moves correctly", function (){
	it("verify ....", function (){
		jasmine.clock().install();

		ERNIMoveWithTime("left",2000)

		expect(drone._pcmd.flag).toEqual(1);
		expect(drone._pcmd.pitch).toEqual(0);
		expect(drone._pcmd.roll).toBeLessThan(0);
		expect(drone._pcmd.yaw).toEqual(0);
		expect(drone._pcmd.gaz).toEqual(0);
		//setTimeout(function (){
		
		jasmine.clock().tick(3000);
			expect(drone._pcmd.flag).toEqual(0);
			expect(drone._pcmd.pitch).toEqual(0);
			expect(drone._pcmd.roll).toEqual(0);
			expect(drone._pcmd.yaw).toEqual(0);
			expect(drone._pcmd.gaz).toEqual(0);
		//}, 3000)
	});

	//TODO the rest of movements
});

