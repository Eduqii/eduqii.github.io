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
		 <div class="popup" onclick="myFunction()"><span style="font-size: 2.5rem;">BECE 2009 &nbsp; &nbsp;Instruction(s) &nbsp; &nbsp; <span style="font-size: 2.5rem;"><a href="../index.php" class="Exit">Exit</a></span></span>
  <span class="popuptext" id="myPopup">
  	<p style="font-size: 1.5rem">
  	&nbsp;Instruction(s): <br />&nbsp; 1. This quiz contains two passages (Passage I and Passage II -  Samedi Au Champ). To read, click on the passage icon below to toggle it.<br /><br />	
  	&nbsp;2. The passage above has ten numbered spaces followed by four options, Choose from the options the correct word(s) that will fit each numbered space <br /><br />
  	&nbsp;3. &nbsp; Above are ten sentences with blank spaces followed by four options, choose from the options the most correct answer that will fit into each blank space
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
<center><span style="font-size: 1.5rem; ">PASSAGE I</span></center><br />
              		Ce monsieur ____1_____ nous appelons Tonton ______2 ______ avec nous quand nous passons chez ______3_____
après les cours. Son magasin est _____4____ à côte ____5_____ la route qui mene à l’école.
Quand il est très occupé, nous le laissons ___6____ mais quand il n’y a plus ____7____ clients,
nous regardons les livres, surtout les contes de notre pays.
Il y a aussi des cahiers et des gommes qui ressemblent à ____8_____ jouets.
Le coin le plus interessant est toujours ______9_____ des journaux d’enfants.
Visiter la librairie est pour ___10___ une joie.
<br /> <br /><br />
<center><span style="font-size: 1.5rem; ">PASSAGE II <br />
Samedi Au Champ</span><br />
</center>
Titi et son frère cadet, Baba, sont élèves au collège de Kames, leur village natal. Les samedis, <br />
ils accompagnent leurs parents, Monsieur et Madame Samba au champ. Monsieur Samba n’aime pas beaucoup travailler avec sa femme. <br />
Il dit souvent : ‘les femmes sont bavardes. Elles ne travaillent pas vite’. Alors, il préfère travailler avec leurs deux fils.<br /><br />

Le travaille au champ dure toute la journée. Ils commencent quelquefois de très bonne heure ; à six heures et terminent vers dix-huit heures.<br />
Il y a seulement deux repos. Parfois, les deux garçons sont très fatigués et ils arrêtent de travailler.<br />
Mais, le père leur crie en disant : ‘paresseux ! debout ! Vous êtes hommes. Il faut être fort ! Allez ! Au travail !<br />
Et les deux frères obéissent à leur père et reprennent le travail. Ils continuent à travailler mais ils ne sont pas contents.<br /><br />

Pendant les repos, ils mangent silencieusement tous ensemble dans la même assiette.
Ce repas est souvent ‘L’AMPESI’ de manioc à la sauce du gombo. Cette nourriture est très délicieuse. <br />
Le soir, ils rentrent chez eux très contents d’avoir fait un bon travail au champ
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