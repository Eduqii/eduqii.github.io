
function check(){

	var question1 = document.quiz.question1ai.value;
	var question2 = document.quiz.question1aii.value;
	var question3 = document.quiz.question1aiii.value;
	var question4 = document.quiz.question1aiv.value;
	var question5 = document.quiz.question1av.value;
	var question6 = document.quiz.question1avi.value;
	var question7 = document.quiz.question1avii.value;
	var question8 = document.quiz.question1bi.value;
	var question8 = document.quiz.question1bii.value;
	var question8 = document.quiz.question1biii.value;
	var question8 = document.quiz.question1biv.value;
	var question8 = document.quiz.question1bv.value;
	var question8 = document.quiz.question1bvi.value;
	var question8 = document.quiz.question1c.value;
	var question8 = document.quiz.question1di.value;
	var question8 = document.quiz.question1dii.value;
	var question8 = document.quiz.question1diii.value;
	var question8 = document.quiz.question1div.value;
	var question8 = document.quiz.question1dv.value;
	var question8 = document.quiz.question2ai.value;
	var question8 = document.quiz.question2aii.value;
	var question8 = document.quiz.question2aiii.value;
	var question8 = document.quiz.question2bi.value;
	var question8 = document.quiz.question2bii.value;
	var question8 = document.quiz.question2c.value;
	var question8 = document.quiz.question2d.value;
	
	
	var correct = 0;


	if (question1 == '100 degrees celcius or 212 degrees fahrenheit' || question1 == "100 degrees celcius") {
		correct++;
}
	if (question2 == 'Nails 1, 2, 3 and 4 will drop off one after the other. Nail 1 drops first, nail 2 second, nail 3 third and nail 4 fourth' ) {
		correct++;
}	
	if (question3 == 'The readings of Thermometers A,B, C and D will increase progressively till they reach 100°C. – Thermometer A reaches 100°C first, B second,C third and D fourth') {
		correct++;
}
	if(question4 == 'iv. Mode of heat transfer – Conduction'){
		correct++;
}
	if(question5 == 'iv. Mode of heat transfer – Conduction'){
		correct++;
}
	if(question6 == 'iv. Mode of heat transfer – Conduction'){
		correct++;
}
if(question7 == 'iv. Mode of heat transfer – Conduction'){
		correct++;
}
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 6) {
		score = 1;
	}

	if (correct == 7) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("after_results").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
