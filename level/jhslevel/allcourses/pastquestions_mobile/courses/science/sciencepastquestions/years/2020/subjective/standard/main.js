
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
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
	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 6) {
		score = 1;
	}

	if (correct == 6) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("after_results").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
