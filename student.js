var main = require('./main.js');

var Student = function(name, gender, grade, GPA, detentions, sleepingClass, catchPhrase){
	this.name = name,
	this.gender= gender,
	this.grade= grade,
	this.GPA = GPA,
	this.detentions= detentions,
	this.sleepingClass= sleepingClass,
	this.catchPhrase= catchPhrase,
	this.canStudentHaveFun = function(){
		if(this.GPA > 2 && this.detentions < 10){
			console.log('Student can have fun');
		}
	} 
};

module.exports = Student;