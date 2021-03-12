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
      <p class="choice-text" data-number="1">Choice 1</p>
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
     <div class="popup" onclick="myFunction()"><span style="font-size: 2.5rem;">BECE 2010 &nbsp; &nbsp;Extract &nbsp; &nbsp; <span style="font-size: 2.5rem;"><a href="../index.php" class="Exit">Exit</a></span></span>
     <span class="popuptext" id="myPopup">
    
    	<center><span style="font-size: 1.5rem; ">Extract I </span></center><br />
<p style="font-size: 1.5rem">
&nbsp;‘Young lady, you are like…..<br />
&nbsp;The moon that walks beautifully across the sky,<br />
&nbsp;An eagle feather worn by a husband
    </p></span></div>
            </div>


    
  </div>
</div>
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