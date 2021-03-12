<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<title>Quiz Page</title>
	<link rel="shortcut icon" href="../../../../../../images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="game.css">
		<link rel="stylesheet" type="text/css" href="bootstrap.css">

	<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <style type="text/css">
 	/* Popup container - can be anything you want */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* The actual popup */
.popup .popuptext {
  visibility: hidden;
  width: 50%;
  background-color: #555;
  color: #fff;
  /*(text-align: center;*/
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;} 
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
 </style>
</head>
<body>
<div class="container">
	<div id="game" class="justify-center flex-column">
		<div id="hud">
			<div class="hud-item">
				<p id="progressText" class="hud-prefix">
				 Question	 
				</p>
				<div id="progressbar">
					<div id="progressBarFull"></div>
				</div>
			</div>
			<div class="hud-item">
				<p class="hud-prefix">
					Score
				</p>
				<h1 class="hud-main-text" id="score">
					0
				</h1>
			</div>
		</div>
		 <h1 id="question">What is the answer to this question</h1>
		 <div class="choice-container">
		 	<p class="choice-prefix">A</p>
		 	<p class="choice-text" data-number="1">Choice</p>
		 </div>
		 <div class="choice-container">
		 	<p class="choice-prefix">B</p>
		 	<p class="choice-text" data-number="2">Choice 2</p>
		 </div>
		 <div class="choice-container">
		 	<p class="choice-prefix">C</p>
		 	<p class="choice-text" data-number="3">Choice 3</p>
		 </div>
		 <div class="choice-container">
		 	<p class="choice-prefix">D</p>
		 	<p class="choice-text" data-number="4">Choice 4</p>
		 </div>
		 <div class="popup" onclick="myFunction()"><span style="font-size: 2.5rem;">BECE 2018 &nbsp; &nbsp;Instruction(s) &nbsp; &nbsp; <span style="font-size: 2.5rem;"><a href="../index.php" class="Exit">Exit</a></span></span>
  <span class="popuptext" id="myPopup">
  	<p style="font-size: 1.5rem">
  	&nbsp;Instruction(s): <br />&nbsp; 1. This quiz contains two passages (Passage I - Un mécanicien célèbre and Passage II - Un bon repas). To read, click on the passage icon below to toggle it.<br /><br />	
  	&nbsp;2. For each question, choose from the options the one that is most suitable to complete the sentence given.<br /><br />
  	&nbsp;3. &nbsp; The passage above has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space &nbsp; (click on exit button to end quiz.)
  	</p></span></div>
		 	<div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h4 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <span style="font-size: 2rem; color: #0000ff;">Passage </span>
              </button>
            </h4>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              	<span style="font-size: 1.8rem; ">
<center><span style="font-size: 1.5rem; ">PASSAGE I <br  />Un mécanicien célèbre</span></center><br />
Karibu est le mécanicien le plus célèbre dans son quartier. Son garage est à côté de la seule banque. Il y a un mur autour du garage. Karibu a beaucoup d’outils modernes dans son garage pour la réparation de toutes sortes d’autos.<br />
Karibu connait bien son métier. Il a beaucoup de clients alors, il est toujours occupé au garage. Chaque matin, à huit heures trente, l’heure où il arrive au garage, il y a déjà des clients qui l’attendent. Quelquefois, on l’appelle de loin pour aller réparer une voiture qui est tombée en panne. Souvent, il doit se coucher par terre sur une natte pour réparer les voitures. C’est pourquoi il aime porter des vêtements sombres.
Karibu a plusieurs apprentis qui l’aident, mais, souvent, les clients préfèrent lui-même pour la réparation de leurs voitures. C’est ainsi qu’à la fin de la journée, il rentre souvent à la maison sale et très fatigué.


<br /> <br /><br />
<center><span style="font-size: 1.5rem; ">PASSAGE II<br />
	Un bon repas
</span>
</center>
&nbsp;C’est le weekend. La mère de Kwame va préparer le fufu et elle demande à Kwame de l’aider. Mais, il – 31 – veut pas piler le fufu. Il – 32 – à sa mère qu’il – 33 – mal aux dents et il va – 34 – lit.<br />
A ce moment-là, Adzo, la sœur de Kwame, rentre du marché. Elle aide maman à – 35 – la cuisine. Elle – 36 – le fufu. Ensuite, elle nettoie la cuisine et après, maman – 37 – Adzo mangent le fufu. Elles – 38 – contentes parce que – 39 – repas est – 40 – . Pauvre Kwame ! Il ne mange rien.

<br /><br />

</span>
              	</div>
            </div>
          </div>
      </div>


		
	</div>
</div>
<script type="text/javascript" src="game.js"></script>
<script>
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
</script>
<script type="text/javascript" src="game.js"></script>
 <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>