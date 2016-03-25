module.exports = function(config){
	config.set({
		frameworks:['jasmine'],
		files:[
			'../parrotMockUp/parrot.js',
			'../ERNIDrone/ERNIControlToTest.js',
			'*.js'
		],
		reporters:[
			'kjhtml'
		]
	})
}