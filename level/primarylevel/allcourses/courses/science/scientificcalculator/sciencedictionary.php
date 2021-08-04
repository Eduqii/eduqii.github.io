<!DOCTYPE html>
<html lang="en">
<head>
  <title>Science Dictionary · Eduqii</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="shortcut icon" href="../../../images/favicon.ico">
</head>
<body>
  <ul class="nav nav-tabs">
  <li class="nav-item">
    <strong><a class="nav-link " href="../../../../../../index.php">Edu<span style="color: red;">qii</span></a></strong>
  </li> 
  <li class="nav-item">
    <a class="nav-link" href="#">Science</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Discuss</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="Sciencedictionary.php">Science Dictionary</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="index.php">Scientific Calculator</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Science facts</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Courses</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="../../../index.php">All Courses</a>
      <a class="dropdown-item" href="#">Science</a>
      <a class="dropdown-item" href="#">Social Studies</a>
      <a class="dropdown-item" href="#">Computing</a>
      <a class="dropdown-item" href="#">Religious and Moral Education</a>
      <a class="dropdown-item" href="#">English Language</a>
      <a class="dropdown-item" href="#">French</a>
    </div>
  </li>
</ul>

<div class="container">
  <ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Sets</a></li>
    <li class="breadcrumb-item"><a href="#">Geometry</a></li>
    <li class="breadcrumb-item"><a href="#">Circles</a></li>
    <li class="breadcrumb-item"><a href="#">Statistics</a></li>
    <li class="breadcrumb-item"><a href="#">Venn Diagram</a></li>
  </ul>
</div>

<div class="container">
  <div class="jumbotron">
    <div class="header2">
     <h2>Science Dictionary</h2>
     </div>

     <div class="wrapper">
     <div class="words">
       <input list="dict" id="search" placeholder="search ...">
       <datalist id="dict">
         <option value="Osmosis"></option>
         <option value="Diffusion"></option>
         <option value="Heart"></option>
         <option value="Eye"></option>
         <option value="Force"></option>
         <option value="Matter"></option>
         <option value="Energy"></option>
         <option value="Atom"></option>
         <option value="Molecules"></option>
         <option value="Potential Energy"></option>
         <option value="Kinetic Energy"></option>
         <option value="Periodic Table"></option>
         <option value="Base"></option>
         <option value="Alkaline"></option>
         <option value="Alloy"></option>
         <option value="Rusting"></option>
         <option value="Corrosion"></option>
         <option value="Rust"></option>
       </datalist>
       <button onclick="search()">Go</button> 

       <ul id="word_list"></ul>
        
     </div>
     <div class="word">
       <h3 id="word_text"></h3>
       <p id="definition"></p>

       <hr>

       <h3>Related words:</h3>
       <li id="related"></li>
     </div>
    </div> <!-- /the wrapper ends here -->
   

  </div>      
</div><!-- jumbotron end -->
<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">&copy;copyright 2020 Eduqii. Developed with &#128151; by the eduqii group. All rights reserved.</span>
  </div>
</footer>
</body>
</html>
<script type="text/javascript">
  var dictionary = [
                      {
                        word: "force",
                        def: "In physics, a "+ "<strong>" + "force" + "</strong>" + " is any interaction that, when unopposed, will change the motion of an object." + "<br>" + "A force can cause an object with mass to change its velocity, i.e, to accelerate. Force can also be described as a push or a pull. A force has both magnitude and direction, making it a vector quantity." + "<br><br>" + "It is summarized by the equation: Force (N) = mass (kg) × acceleration (m/s" + "<sup>"+ "2" + "</sup>" + "). Thus, an object of constant mass accelerates in proportion to the force applied." + "<br /><br />" + "Aristotle famously described a force as anything that causes an object to undergo 'unnatural motion'" + "<br><br>" + "<strong style='color: #FF5733;'>" + "SI unit:" + "</strong>" + " Newton",
                        rel:["Newton","velocity","energy"]
                      },
                     {
                      word: "velocity",
                      def: " The velocity of an object is the rate of change of its position with respect to a frame of reference, and is a function of time. Velocity is equivalent to a specification of an object's speed and direction of motion." + "<br><br>" + "Velocity (v) is a vector quantity that measures displacement (or change in position, Δs) over the change in time (Δt), represented by the " + "<strong>" + "equation" + "</strong>" + " v = Δs/Δt. Speed (or rate, r) is a scalar quantity that measures the distance traveled (d) over the change in time (Δt), represented by the "+ "<b>" + "equation r" + "</b>" + "d/Δt." + "<br><br>"+ "<strong style='color: #FF5733;'>"+"In SI base units:" + "</strong style='color: #FF5733;'>" + " m/s",
                      rel:["force","toddler","energy"]
                    },
                     {
                      word: "energy",
                      def: "<strong>" + "Energy," + "</strong>" + "in physics, the capacity for doing work. It may exist in potential, Kinetic, thermal, electrical, chemical, nuclear, or other various forms. There are, moreover, heat and work ---i.e, " + "<strong>"+"energy"+"</strong>" + " in the process of transfer from one body to another" +"<br><br>" + "Albert Einstein proposed that mass and energy are related by the equation 'E = m_c^2, where 'E' is the object's energy in joules, 'm' is the object's" +"<b>"+ " mass" + "</b>"+  " and 'c' is the" + "<b>" + " speed" + "</b>" + " of light." + "<br><br>" + "<strong style='color: #FF5733;'>"+ "SI unit:"+"</strong>" + " joule" + "<table border='0%'>" + "<tr>" + "<td>" + "<strong style='color: #FF5733;'>" + "Common Symbols" + "</strong>" + "</td>" + 
                        "<td>" + " &nbsp;" + "</td>" +
                        "<td>" + " E" + "</td>" + "</tr>" + "</table>",
                      rel:["force","pressure","density"]
                    },
                     {
                      word: "pressure",
                      def: "Pressure is the force per unit area. This means that the pressure a solid object exerts on another solid surface is its weight in newtons divided by its area in square metres." + "<br /><br />" + "Pressure is the force per unit perpendicular area over which the force is applied, p=F/A." + "<br><br>" + "<strong style='color: #FF5733;'>" + "SI unit:" + "</strong>" + " Pascal." + "<br><br>" + "<strong style='color: #FF5733;'>" + "In SI base units:" + "</strong>" + " 1 N/m" + "<sup>" + "2" + "</sup>" + ", 1 kg/(m·s"+ "<sup>"+"2" + "</sup>"+"), or 1 J/m"+"<sup>"+"3"+"</sup>",
                      rel:["energy","density","palmtop"]
                    },
                    {
                      word: "mosquito",
                      def: "A mosquito is any member of a group of about 3,500 species of small insects belonging to the order Diptera. Within Diptera, mosquitoes constitute the family Culicidae. The word 'mosquito' is Spanish and Portuguese for 'little fly'.",
                      rel:["ant","beetle","butterfly"]
                    }
];

// fill the dictionary with words
init = function(){
  for (var i = 0; i < dictionary.length; i++){
       document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" + dictionary[i].word + "</li>";
  }
}
  // call the init function when page loads
init();

// display a word, its definition and related words
show = function(i){
  document.getElementById('word_text').innerHTML = dictionary[i].word;
  document.getElementById('definition').innerHTML = dictionary[i].def;

  var list = "";

  for (var j = 0; j < dictionary[i].rel.length; j++){
    list += "<li>" + dictionary[i].rel[j] + "</li>";
    document.getElementById('related').innerHTML = list;
  }
} 

//showing the first word in the dictionary when the page loads
show(0);

//search functionality
search = () => {
  query = document.getElementById('search').value;

  if (query == ""){
    return;
  }

  found = -1; // found is initialize to false

  for (var i = 0; i < dictionary.length; i++){
    if (query == dictionary[i].word){
      found = i;
      break;
    }else {
      document.getElementById('word_text').innerHTML = "Word not found";
      document.getElementById('definition').innerHTML = "The word you entered is not found in our dictionary";
      document.getElementById('related').innerHTML = "No related words"; 
    }
  }

  if (found >= 0){
    show(found);
  }
}

</script>
