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
.passage {
	box-sizing: border-box;
	border-collapse: collapse;
	font-size: 2.4rem;
	padding: 2rem 0;
	width: 38rem;
	text-align: center;
	margin-bottom: 1rem;
	text-decoration: none;
	color: rgb(28, 26, 26);
	background: linear-gradient(90deg, rgb(18, 92, 255)0%, rgb(0, 102, 255)100%);
	border-radius: 4px;
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
     
     <h3>BECE 2009 &nbsp; <span style="font-size: 2.5rem;"><a href="../index.php" class="Exit">Exit</a></span> | <span onclick="myfunc1()" style="font-size: 1.8rem; cursor: pointer;">&nbsp;&nbsp;Passage I </span><span onclick="myfunc2()" style="font-size: 1.8rem; cursor: pointer;">&nbsp;Passage II </span></h3>
      <!--<div class="accordion" id="accordionExample">
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

We were suddenly awakened at dawn by the screams of the tenants in our house. They were making a lot of commotion in the yard.<br />
Daddy quickly jumped from his bed and made for the door. Not long after, we heard him scream. We ran to the hall, switched on the
lights and saw him lying flat on his back holding his forehead.<br />
In his haste to get to the hall door, he must have forgotten to switch on the lights thus running straight and crashing his head
into the pillar in the middle of the hall. When we examined his forehead, we saw a big lump and blood oozing from a deep cut near
his eyebrow.<br />

Mummy, a retired nursing sister, shouted instructions to me to get the first-aid box, some ice cubes and Daddy’s towel. When the
items were brought, she set to work first on the cut. She put some ice cubes in the towel and pressed the towel on the cut for
about two minutes. She then wiped the blood gently.<br />
Afterwards, she put a little iodine on a piece of gauze, placed it on the cut and bandaged it. Turning to the lump, she massaged
it with some ice cubes, which reduced the swelling.<br />
She then opened the front door and we beheld a pathetic scene. Lying in the middle of the house was the motionless body of one
of the tenants. Trying to resist an attack from the armed robbers, he had been butchered mercilessly and his body left in the middle
of the house.


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
</script>-->
<!--<button style="size: 4rem;" onclick="myfunc()" class="passage">Passage</button>-->
<script type="text/javascript">
   function	myfunc1(){
		alert("Passage I\n\n We were suddenly awakened at dawn by the screams of the tenants in our house. They were making a lot of commotion in the yard. Daddy quickly jumped from his bed and made for the door. Not long after, we heard him scream.\n We ran to the hall, switched on thelights and saw him lying flat on his back holding his forehead.In his haste to get to the hall door, he must have forgotten to switch on the lights thus running straight and crashing his headinto the pillar in the middle of the hall. When we examined his forehead, we saw a big lump and blood oozing from a deep cut nearhis eyebrow.Mummy, a retired nursing sister, shouted instructions to me to get the first-aid box, some ice cubes and Daddy’s towel. When theitems were brought, she set to work first on the cut. She put some ice cubes in the towel and pressed the towel on the cut forabout two minutes.\n She then wiped the blood gently.Afterwards, she put a little iodine on a piece of gauze, placed it on the cut and bandaged it.\n Turning to the lump, she massaged it with some ice cubes, which reduced the swelling.She then opened the front door and we beheld a pathetic scene. Lying in the middle of the house was the motionless body of oneof the tenants. \nTrying to resist an attack from the armed robbers, he had been butchered mercilessly and his body left in the middle of the house. ")
	}
	function myfunc2(){
		alert("PASSAGE II \n\nWhere is the musical performance of songbirds held? It is not in any concert hall but rather on trees, fences and telephone wires.It is from these places that the little feathered creatures blend their voices in some of the most melodious songs sung in the world.Songbirds do not just make noise.\n The male voices in the choir, for instance, have two different messages.Firstly, it is a warning to other males not to come near their partners. \nSecondly, it is an invitation from the bachelors to the female birds. The most interesting songs which are sung with a lot of vigour are produced during the breeding season by the males to impress the lady birds.Songbirds are very remarkable. They sing three or four notes at a time. To the human ear it sounds like one beat but the birds can identify the different notes because of their keen sense of hearing.At times, what is heard may not be a song of our winged friends but simply an instruction to keep the flock together.It may also be a warning of an approaching danger.Just how birds compose their songs is an interesting subject.\n Some birds have their songs fixed in their brains at birth.Whilst some imitate others, other birds try to compose songs which are unique.\n They will never copy what they hear others sing.")
	}
</script>
<script type="text/javascript" src="game.js"></script>
 <script src="../../../assets/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>