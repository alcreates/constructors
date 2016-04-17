var prompt = require('prompt');
var Student = require('./student.js');
var bus = require('./bus.js');
var fs = require('fs');

prompt.start();
var newbus = new bus();




prompt.get(['name','gender','grade','GPA','detentions','sleepingInClass','catchPhrase'],function(err,result){
	var newStudent = new Student(result.name, result.gender, result.grade,result.GPA, result.detentions,result.sleepingInClass,result.catchPhrase);
	newStudent.canStudentHaveFun();

	newbus.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result. detentions, result.sleepingInClass, result.catchPhrase);


});
