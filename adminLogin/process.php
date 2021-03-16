<?php
require_once('connection.php');
session_start();

if (isset($_POST['login'])) {
	if (empty($_POST['email']) || empty($_POST['password'])) {
		header("location:index.php?Empty=Please Fill in the Blanks");
	}
	else {
		$query="select * from ADMIN where email ='".$_POST['email']."' and password='".$_POST['password']."'";
		$result=mysqli_query($con,$query);
		if (mysqli_fetch_assoc($result)) {
			$_SESSION['admin']=$_POST['username'];
			header("location: https://eduqii.github.io/eduqiiAdmin/dashboard/index.html");
		}
		else {
			header("location:index.php?Invalid= Please enter correct username and password");
		}
	}
}
else{
	echo "Not Working Now";
}

?>