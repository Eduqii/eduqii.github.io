<!DOCTYPE html>
<html lang="en">
<head>
  <title>Scientific Calculator · Eduqii</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="../../../images/favicon.ico">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</head>
<body>
	<ul class="nav nav-tabs">
	<li class="nav-item">
    <strong><a class="nav-link " href="../../../../../../index.php">Edu<span style="color: red;">qii</span></a></strong>
  </li>	
  <li class="nav-item">
    <a class="nav-link active" href="#">Science</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Discuss</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="Sciencedictionary.php">Science Dictionary</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Scietific Calculator</a>
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
  	<!-- start of Force -->
     <h1>Force</h1>  
     <em>F = m · a</em> 
     <pre>Formula: Force (N) = mass (kg) x acceleration (m/s<sup>2</sup>)</pre>   
    <div ng-app ng-init="mass=0">
 <p>mass, m: <input type="text" ng-model="mass"></p>
 <div ng-app ng-init="acceleration=0">
 <p>acceleration, a: <input type="text" ng-model="acceleration"></p>
 <p>Force of object: {{ mass * acceleration }}N</p> <hr noshade="noshade">
 
<!--start of square -->
 <h1>Velocity</h1> 
 <em> v = Δs/Δt</em><br /> 
 <em>where v = average velocity <br />
     where Δs = displacement <br />
     where Δt = change in time <br/>
 </em>
     <pre>Formula: Velocity (V) = displacement / change in time (s)</pre>      
    <div ng-app ng-init="distance2=0">
 <p>Distance2, d2: <input type="text" ng-model="distance2"></p>
 <div ng-app ng-init="distance1=0">
 <p>Distance1, d1: <input type="text" ng-model="distance1"></p>
 <p><i>Distance covered:</i> {{ distance2 - distance1 }}</p>
<div ng-app ng-init="time2=0">
 <p>time2, t2: <input type="text" ng-model="time2"></p>
 <div ng-app ng-init="time1=0">
 <p>Time1, t1: <input type="text" ng-model="time1"></p>
 <p><i>time taken:</i> {{ time2 - time1 }}</p>
 <!-- calculating our average velocity now -->
 <pre>Now let us calculate our average velocity</pre>

  <div ng-app ng-init="distance=0">
 <p>Distance covered: <input type="text" ng-model="distance"></p>
 <div ng-app ng-init="time=0">
 <p>time taken: <input type="text" ng-model="time"></p>
 <p>Average Velocity: {{ distance / time }}m/s</p>  <hr noshade="noshade">
<!-- start of a circle -->
 <h1>Circle</h1>      
    <div ng-app ng-init="radius=0">
 <p>Radius: <input type="text" ng-model="radius"></p>
 <p>Area of a circle: {{ (22/7) * radius * radius }}</p>
 <p>Circumference of a cirle: {{ 2 * (22/7) * radius }}</p>

 <!-- start of triangle -->
 <h1>Triangle</h1>      
    <div ng-app ng-init="tLength=0">
 <p>Length: <input type="text" ng-model="tLength"></p>
 <p>Area of a triangle: {{ tLength * tLength * tLength }}</p>

</div>
</div>
</div>
<!-- jumbotron end -->
  </div>      
</div>
</div>
<!-- Pagination -->

<ul class="pagination pagination-lg">
  <li class="page-item"><a class="page-link" href="#">&lt;</a></li>
  <li class="page-item" class="active"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
</ul>
<footer class="footer mt-auto py-3">
  <div class="container">
    <span class="text-muted">&copy;copyright 2020 Eduqii. Developed with &#128151; by eduqii All rights reserved.</span>
  </div>
</footer>
</body>
</html>