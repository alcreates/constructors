var Student = require('./student.js');
var fs = require('fs');


var bus = function(studentsOnTheBus, driverName, color, gas){
	this.studentsOnTheBus = [],
	this.driverName = driverName,
	this.color = color,
	this.gas = gas,
	this.studentEntersBus = function(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase) {
		this.studentsOnTheBus.push(new Student(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase));
		console.log(name + "enters the bus!\n");
		fs.appendFile("schoolbus.txt", JSON.stringify(this.studentsOnTheBus) + "\r\n", function(err){
			if(err) {
				throw err;
			}

		});
		
	},
	this.busChatter = function(){
		console.log();
	}
}

module.exports = bus;