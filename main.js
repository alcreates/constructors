var prompt = require('prompt');
var Student = require('./student.js');
var bus = require('./bus.js');

prompt.start();
var currentbus = new Bus;




prompt.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'],function(err,result){
	var student = new Student(result.name, result.gender, result.grade,result.GPA, result.detentions,result.sleepingInClass,result.catchPhrase);
	student.canStudentHaveFun();

});
