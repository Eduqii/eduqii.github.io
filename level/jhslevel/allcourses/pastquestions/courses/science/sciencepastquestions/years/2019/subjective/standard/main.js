
function check(){

	var question1 = document.quiz.question1ai.value;
	var question2 = document.quiz.question1aii.value;
	var question3 = document.quiz.question1aiii.value;
	var question4 = document.quiz.question1aiv.value;
	var question5 = document.quiz.question1av.value;
	var question6 = document.quiz.question1avi.value;
	var question7 = document.quiz.question1avii.value;
	var question8 = document.quiz.question1bi.value;
	var question9 = document.quiz.question1bii.value;
	var question10 = document.quiz.question1biii.value;
	var question11 = document.quiz.question1biv.value;
	var question12 = document.quiz.question1bv.value;
	var question13 = document.quiz.question1bvi.value;
	var question14 = document.quiz.question1c.value;
	var question15 = document.quiz.question1di.value;
	var question16 = document.quiz.question1dii.value;
	var question17 = document.quiz.question1diii.value;
	var question18 = document.quiz.question1div.value;
	var question19 = document.quiz.question1dv.value;
	var question20 = document.quiz.question2ai.value;
	var question21 = document.quiz.question2aii.value;
	var question22 = document.quiz.question2aiii.value;
	var question23 = document.quiz.question2bi.value;
	var question24 = document.quiz.question2bii.value;
	var question25 = document.quiz.question2c.value;
	var question26 = document.quiz.question2d.value;
	var question27 = document.quiz.question3ai.value;
	var question28 = document.quiz.question3aii.value;
	var question29 = document.quiz.question3bi.value;
	var question30 = document.quiz.question3bii.value;
	var question31 = document.quiz.question3ci.value;
	var question32 = document.quiz.question3cii.value;
	var question33 = document.quiz.question3di.value;
	var question34 = document.quiz.question3dii.value;
	var question35 = document.quiz.question4a.value;
	var question36 = document.quiz.question4bi.value;
	var question37 = document.quiz.question4bii.value;
	var question38 = document.quiz.question4biii.value;
	var question39 = document.quiz.question4ci.value;
	var question40 = document.quiz.question4cii.value;
	var question41 = document.quiz.question4ciii.value;
	var question42 = document.quiz.question4di.value;
	var question43 = document.quiz.question4dii.value;
	
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
	
