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
	var question20 = document.quiz.question3ai.value;
	var question21 = document.quiz.question3aii.value;
	var question22 = document.quiz.question3bi.value;
	var question23 = document.quiz.question3bii.value;
	var question24 = document.quiz.question3ci.value;
	var question25 = document.quiz.question3cii.value;
	var question26 = document.quiz.question3di.value;
	var question27 = document.quiz.question3dii.value;
	var question28 = document.quiz.question4a.value;
	var question29 = document.quiz.question4bi.value;
	var question30 = document.quiz.question4bii.value;
	var question31 = document.quiz.question4biii.value;
	var question32 = document.quiz.question4ci.value;
	var question33 = document.quiz.question4cii.value;
	var question34 = document.quiz.question4ciii.value;
	var question35 = document.quiz.question4di.value;
	var question36 = document.quiz.question4dii.value;
	var question37 = document.quiz.question5a.value;
	var question38 = document.quiz.question5b.value;
	var question39 = document.quiz.question5ci.value;
	var question40 = document.quiz.question5cii.value;
	var question41 = document.quiz.question5d.value;
	
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
if(question20 == 'Potential energy.'){
		correct++;
}
if(question21 == 'Potential Energy (P.E) = mass x gravity x height \n Potential Energy (P.E) = 100 x 10 x 2 = 2000 J'){
		correct++;
}
if(question22 == 'Matter is anything that has weight and occupies space or matter is anything that has mass and takes up voulume.'){
		correct++;
}
if(question23 == 'solid and liquid.' || question23 == 'solid and Gas.' || question23 == 'Gas and liquid.' || question23 == 'Gas and Solid.' || question23 == 'Solid and Liquid.' || question23 == 'liquid and solid.' || question23 == 'Solid and Gas.' || question23 == 'Liquid and Gas.'){
		correct++;
}
if(question24 == 'Loamy soil normally contains equal parts of clay, silt, and sand and large quantities of organic matter and nutrients.'){
		correct++;
}
if(question25 == 'Nitrogen and potassium' || question25 == '1. Nitrogen \n 2. potassium' || question25 == 'Phosphorus and Calcium' || question25 == '1. Phosphorus \n 2. Calcium' || question25 == 'Iron and Magnesium.' || question25 == '1. Iron \n 2. Magnesium.' || question25 == 'Nitrogen and Calcium.' || question25 == 'Nitrogen and Calcium' || question25 == '1. Nitrogen \n 2. Calcium' || question25 == 'Nitrogen and Magnesium.' || question25 == '1. Nitrogen \n 2. Magnesium' || question25 == 'Phosphorus and Magnesium.' || question25 == '1. Phosphorus \n 2. Magnesium' || question25 == 'Potassium and Iron' || question25 == '1. Potassium \n 2. Iron' || question25 == 'Nitrogen and Phosphorus' || question25 == '1. Nitrogen \n 2. Phosphorus'){
		correct++;
}
if(question26 == '(a)cholera – Vibro Cholerae\n(b)tuberculosis – Mycobacterium tuberculosis or tubercle bacillus'){
		correct++;
}
if(question27 == 'Eating Hot foods' || question27 == 'Washing hands with soap and under running water.' || question27 =='Proper disposal of faecal matter' || question27 == 'Keeping the environment clean'){
		correct++;
}
if(question28 == 'Tomato plant is likely to wilt if too much fertilizer is applied due to the high increment of soil concentration. This causes the loss of water by action of osmosis.'){
		correct++;
}
if(question29 == 'Accidental ingestion of poisonous susbstances.'){
		correct++;
}
if(question30 == 'Injury by broken bottles or pins/ Slipping / Injury by spilled acids.'){
		correct++;
}
if(question31 == 'Skin irritation/corossion/burns'){
		correct++;
}
if(question32 == 'Night Blindness'){
		correct++;
}
if(question33 == 'Vitamin A'){
		correct++;
}
if(question34 == 'Tomatoes, Egg, Liver' || question34 == 'Green leafy vegetables, cod Liver oil, Carrot' || question34 == 'Tomatoes,Green leafy vegetables, Liver' || question34 == 'Carrot, cod Liver oil, Tomatoes'){
		correct++;
}
if(question35 == 'Force is a push or pull.'){
		correct++;
}
if(question36 == 'This is due to the lack of friction between the car types and the road which is caused by the presence of water on the road surface.'){
		correct++;
}
if(question37 == '(i)Fill the measuring cylinder with ample water.\n(ii)Record the volume as V1\n(iii) Tie a thread to the irregular shaped lead ball and gently dip into the cylinder with water.\n(iv) Record the new Volume (V2)\n(v) Calculate the difference in volumes (V2 – V1) as V3.\n(vi) V3, as calculated, is the volume of the irregular shape lead ball.'){
		correct++;
}
if(question38 == '(1)Reproduction\n (2)growth\n (3)respiration' || question38 == '(1)Reproduction\n (2)growth\n (3)respiration(4)feeding.'){
		correct++;
}
if(question39 == 'Pollution is the introduction of harmful substances into the environment.'){
		correct++;
}
if(question40 == 'smoke' || question40 == 'dust' || question40 == 'fumes.'){
		correct++;
}
if(question41 == '(1)Soil fertility\n (2)Rainfall\n (3)Sunlight' ||  question41 == '(1)Soil pH\n (2)Soil Structure\n(3)Availability of Market'){
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

	if (correct == 41) {
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
	
