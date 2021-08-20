function check(){
	confirmAction = confirm("Are you sure you are through with your work");
	if(!confirmAction){
		alert("Nice! Always remember to go over your work before you submit");
	}
	else{
		results();
	}
}
function results(){
	
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
	var question35 = document.quiz.question5a.value;
	var question36 = document.quiz.question5b.value;
	var question37 = document.quiz.question5ci.value;
	var question38 = document.quiz.question5cii.value;
	var question39 = document.quiz.question5d.value;
	
	var correct = 0;


	if (question1 == 'An experiment to determine the conditions necessary for rust.') {
		correct++;
}
	if (question2 == 'To remove oxygen' ) {
		correct++;
}	
	if (question3 == 'To prevent air from from entering the water / To seal out air' || question3 == 'To seal out air' || question3 == 'To prevent air from from entering the water') {
		correct++;
}
	if(question4 == 'To absorb moisture'){
		correct++;
}
	if(question5 == 'It rusted due to the presence of air and water'){
		correct++;
}
	if(question6 == '(a) The nail in Test B did not rust because it was exposed to only water/moisture.\n(b) The nail in Test C did not rust due to the absence of water/moisture'){
		correct++;
}
if(question7 == 'To Seal out air or to prevent air from getting into contact with the metal.'){
		correct++;
}
if(question8 == 'To demonstrate that sunglig is necessary for photosynthesis'){
		correct++;
}
if(question9 == '(a)I – To kill living cells\n(b)II – To remove chlorophyll\n(c) III – To soften the leaf and wash off alcohol'){
		correct++;
}
if(question10 == 'Leaf A turned turned blue-black'){
		correct++;
}
if(question11 == 'The color change exhibited was due to the presence of starch.'){
		correct++;
}
if(question12 == 'To remove any existing starch from the leaves.'){
		correct++;
}
if(question13 == 'The experiment demonstrates that without sunlight, photosynthesis cannot occur.'){
		correct++;
}
if(question14 == '(i)Equal quantities of soil samples of A and B are taken using the beam balance and then transferred into separate funnels each fitted with filter papers.\n(ii) The funnels are mounted over a measuring cylinder and equal volumes of water is poured into each funnel.\n(iii) The setups are allowed to stand until water drains completely in each setup.\n(iv) The soil sample within the setup where the least water was drained into the measuring cylinder is the soil which holds more water (Setup A).'){
		correct++;
}
if(question15 == 'To show that heat is transferred through metals by conduction.'){
		correct++;
}
if(question16 == '100 degrees celsius.'){
		correct++;
}
if(question17 == 'The pins eventually fall off as the wax melts.'){
		correct++;
}
if(question18 == 'The temperature at A would be the highest, followed by B and then C.'){
		correct++;
}
if(question19 == 'Heat is transmitted by the sun to the earth by radiation.'){
		correct++;
}
if(question20 == 'A food chain is a linear sequence of organisms through which nutrients and energy pass as one organism eats another.'){
		correct++;
}
if(question21 == 'Plants are primary producers because they produce their own food.'){
		correct++;
}
if(question22 == 'Consumers'){
		correct++;
}
if(question23 == '(a)A – Umbra\n(b)B – Penumbra'){
		correct++;
}
if(question24 == 'It illustrates that light travel in a straight line'){
		correct++;
}
if(question25 == '(i)Add water to the mixture of sand and sugar and stir vigorously.\n(ii) Filter the mixture using a filter paper.\n(iii) Heat the filtrate to evaporate the water.\n(iv) Pure sugar is obtained after all the water evaporates.'){
		correct++;
}
if(question26 == 'Afforestation, addition of manure,planting cover crops,crop rotation and mulching.'){
		correct++;
}
if(question27 == 'Potential energy'){
		correct++;
}
if(question28 == 'Potential Energy (P.E) = mass x gravity x height = 100 x 10 x 2 = 2000 J'){
		correct++;
}
if(question29 == 'Matter is anything that has weight and occupies space or matter is anything that has mass and takes up voulume.'){
		correct++;
}
if(question30 == 'solid, gas and liquid.'){
		correct++;
}
if(question31 == 'Loamy soil normally contains equal parts of clay, silt, and sand and large quantities of organic matter and nutrients.'){
		correct++;
}
if(question32 == 'Nitrogen , potassium, Phosphorus,Calcium,Iron & Magnesium.'){
		correct++;
}
if(question33 == '(a)cholera – Vibro Cholerae\n(b)tuberculosis – Mycobacterium tuberculosis or tubercle bacillus'){
		correct++;
}
if(question34 == ' Eating Hot foods' || question34 == ' Washing hands with soap and under running water.' || question34 == 'Proper disposal of faecal matter' || question34 == 'Keeping the environment clean'){
		correct++;
}
if(question35 == '(i)Fill the measuring cylinder with ample water.\n(ii)Record the volume as V1\n(iii) Tie a thread to the irregular shaped lead ball and gently dip into the cylinder with water.\n(iv) Record the new Volume (V2)\n(v) Calculate the difference in volumes (V2 – V1) as V3.\n(vi) V3, as calculated, is the volume of the irregular shape lead ball.'){
		correct++;
}
if(question36 == '(1)Reproduction\n (2)growth\n (3)respiration' || question38 == '(1)Reproduction\n (2)growth\n (3)respiration(4)feeding.'){
		correct++;
}
if(question37 == 'Pollution is the introduction of harmful substances into the environment.'){
		correct++;
}
if(question38 == 'smoke' || question38 == 'dust' || question38 == 'fumes.'){
		correct++;
}
if(question39 == '(1)Soil fertility\n (2)Rainfall\n (3)Sunlight' ||  question39 == '(1)Soil pH\n (2)Soil Structure\n(3)Availability of Market'){
		correct++;
}

	
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct >= 0 && correct < 23 ) {
		score = 2;
	}

	if (correct > 20 && correct < 40) {
		score = 1;
	}

	if (correct == 43) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("after_results").style.visibility = "visible";
	document.getElementById("button").style.visibility = "hidden";
	document.getElementById("restart").style.visibility = "visible";
	document.getElementById("answer").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
var count = 50;
var interval = setInterval(function(){
  document.getElementById('timer_sec').innerHTML=count;
  count--;
  if(count < 19){ //if timer is less than 19
            document.getElementById("timer_sec").style.color = "red";
        }
  if (count === 0){
    clearInterval(interval);
    document.getElementById('timer_sec').innerHTML='Time out';
	document.getElementById('mins').innerHTML='';
	document.getElementById('selection').style.visibility="hidden";
	document.getElementById("restart").style.visibility = "visible";
	document.getElementById("answer").style.visibility = "visible";

    // or...
    //alert("You're out of time!");
	results();
  }

}, 60000);
	
