

describe("ParrotNavigation", function(){

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