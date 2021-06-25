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
		 <div class="popup" onclick="myFunction()"><span style="font-size: 2.5rem;">BECE 2010 &nbsp; &nbsp;Instruction(s) &nbsp; &nbsp; <span style="font-size: 2.5rem;"><a href="../index.php" class="Exit">Exit</a></span></span>
  <span class="popuptext" id="myPopup">
  	<p style="font-size: 1.5rem">
  	&nbsp;Instruction(s): <br />&nbsp; 1. This quiz contains two passages (Passage I - Paul est Malade and Passage II -  La Vie à Ladou). To read, click on the passage icon below to toggle it.<br /><br />	
  	&nbsp;2. Above are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space<br /><br />
  	&nbsp;3. &nbsp; The passage above has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space
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
<center><span style="font-size: 1.5rem; ">Paul est Malade</span></center><br />
              		Paul Quansah est malade. Maman l’emmène _____11_____. Il y a beaucoup de monde dans la salle _____12______.
Maman lui fait son carnet de santé au service de consultation. Vers dix _______13_____ , c’est le tour de Paul.
Paul et sa mère _____14____ dans le cabinet du médecin.
– ‘Ce n’____15____ pas grave,’ dit le _____16____, Paul a une légère ______17_____ et il lui faut du _____18_____.
Il faut aussi lui donner beaucoup de ____19____. Voici la liste des _______20_____ que vous devez acheter.

<br /> <br /><br />
<center><span style="font-size: 1.5rem; ">PASSAGE II <br />
La Vie à Ladou</span><br />
</center>
&nbsp;Ladou est une grande ville qui se trouve au bord de la mer comme la ville d’Accra.<br />
Il y a environs vingt milles habitants. La plupart des habitants sont travailleurs : pêcheurs, commerçants, mécaniciens et avocats.<br />
Chaque matin, les habitants quittent la maison de bonne heure pour le travail : les pêcheurs vont pêcher, les commerçants vont au marché, les mécaniciens ouvrent leurs garages et les avocats vont à la cour de justice. <br />
Il y a aussi beaucoup d’élèves qui vont à l’école. Tout le monde est pressé.<br /><br />
A Ladou, il y a de grandes maisons à étage et des supermarchés. Dans ces supermarchés, on peut acheter des marchandises comme des chaussures, des habits, de la nourriture, des livres et des cahiers. Il y a aussi des voitures qui transportent des passagers, des marchandises et des produits agricoles.<br />
Au centre de la ville, on a des salles de cinéma, un stade, un jardin public et d’autres sites touristiques.<br />
Le week-end, les gens visitent ces lieux importants pour s’amuser. La vie à Ladou est très intéressante.

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