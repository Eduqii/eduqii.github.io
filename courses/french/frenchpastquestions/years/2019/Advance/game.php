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
     <div class="popup" onclick="myFunction()"><span style="font-size: 2.5rem;">BECE 2019 &nbsp; &nbsp;Instruction(s) &nbsp; &nbsp; <span style="font-size: 2.5rem;"><a href="../index.php" class="Exit">Exit</a></span></span>
  <span class="popuptext" id="myPopup">
    <p style="font-size: 1.5rem">
    &nbsp;Instruction(s): <br />&nbsp; 1. This quiz contains two passages (Passage I and Passage II - Le Ghana). To read, click on the passage icon below to toggle it.<br /><br /> 
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
<center><span style="font-size: 1.5rem; ">PASSAGE I </span></center><br />
Un jour, certains habitants de Kofikrom décident de quitter le village de leurs grands-parents pour aller vivre dans un nouveau village. Il se trouve à vingt kilomètres de l’ancien village. C’est un endroit qui est sur une petite colline où la terre est plus fertile.<br /><br />

Les villageois coupent les herbes et les arbres avec des coupe-coupe prépare la terre. Les femmes et les enfants viennent ramasser les herbes coupées et ils nettoient la terre. Ensuite, les hommes coupent les arbres et les branches de palmier à l’huile pour construire leurs nouvelles cases. Ces travaux durent deux semaines. Les cases de ce village ont les mêmes formes. II y a une sale à manger et une ou deux chambres.<br /><br />

Le nouveau village s’appelle Sovieto.


<br /> <br /><br />
<center><span style="font-size: 1.5rem; ">PASSAGE II<br />
  Le Ghana
</span>
</center>
&nbsp;Le Ghana – 31 – en Afrique. II est un – 32 – indépendant depuis 1957. La langue officielle – 33 – l’anglais mais il y a aussi beaucoup – 34 – langues locales.
Le Ghana – 35 – seize régions. La plupart des Ghanéens – 36 – cultivateurs, pécheurs – 37 – commerçants.<br />
Aujourd’hui, le Ghana est en train de se – 38 – , Maintenant, dans – 39 – village, il y’a – 40 – potable et l’électricité.

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