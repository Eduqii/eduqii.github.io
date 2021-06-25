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
		 <div class="popup" onclick="myFunction()"><span style="font-size: 2.5rem;">BECE 2012 &nbsp; &nbsp;Instruction(s) &nbsp; &nbsp; <span style="font-size: 2.5rem;"><a href="../index.php" class="Exit">Exit</a></span></span>
  <span class="popuptext" id="myPopup">
  	<p style="font-size: 1.5rem">
  	&nbsp;Instruction(s): <br />&nbsp; 1. This quiz contains two passages (Passage I - Une visite à Papa and Passage II - Après les cours ). To read, click on the passage icon below to toggle it.<br /><br />	
  	&nbsp;2. Above are ten sentences with blank spaces followed by four options, Choose from the options the most correct answer that will fit into each blank space<br /><br />
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
<center><span style="font-size: 1.5rem; ">Une visite à Papa</span></center><br />
              		Akua travaille dans la capitale. Un jour, elle décide de rendre visite à son père qui habite dans une autre ville qui s’appelle Ogua. Elle téléphone à Papa et lui dit qu’elle arrivera le samedi prochain. Ce jour-là, Akua se lève très tôt le matin. Elle fait vite sa toilette et se prépare pour le voyage. Elle quitte la maison à sept heures et va à la gare où il y à beaucoup de voitures qui vont à cette ville-là. Elle monte dans une voiture ; beaucoup de voyageurs sont déjà assis. Il n’y a qu’une place libre. Dès qu’elle est assise, le chauffeur monte à sa place et ils se mettent en route. Le voyage dure trois heures.<br />
Elle arrive chez Papa qui l’attend avec joie. Il lui dit : ‘Sois la bienvenue, ma fille. Comme je suis content de te voir’. Akua donne à Papa le cadeau qu’elle lui apporte parce que c’est l’anniversaire de Papa. Il est plein de joie et la remercie bien. Ensuite, ils se mettent à table et mangent ensemble. Après, ils se reposent un peu et puis, ils vont faire un tour de la ville. Ils rendent visite aux amis aussi. Papa achète beaucoup de choses pour Akua dans les grands magasins.




<br /> <br /><br />
<center><span style="font-size: 1.5rem; ">PASSAGE II <br />
	Après les cours</span>
</center>
&nbsp;A deux heures de l’après –midi, tous les élèves – 31 – les salles de classe. Ils disent ‘au revoir’ – 32 – professeurs et à leurs amis. Ils mettent les livres et les cahiers – 33 – leurs sacs. Les fameux sacs sont toujours – 34 – et lourd. Pourquoi ces gros sacs ? C’est parce que les élèves veulent plaire à – 35 – parents. Les parents pensent que ce sont des élèves sérieux – 36 – ont de gros sacs – 37 – ce n’est pas vrai. <br />
Frema est la plus sérieuse de la classe. Quand elle – 38 – ses camarades, les gros sacs au dos, très fatigués – 39 – route, elle décide de mettre quelques livres dans un placard à l’école. Elle ferme le placard à clé avant de – 40 – chez elle. Son sac n’est jamais lourd.

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