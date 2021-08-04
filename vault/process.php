<?php
require_once('connection.php');
session_start();

if (isset($_POST['login'])) {
	if (empty($_POST['username']) || empty($_POST['password'])) {
		header("location:index.php?Empty=Please Fill in the Blanks");
	}
	else {
		$query="select * from user where username='".$_POST['username']."' and Password='".$_POST['password']."'";
		$result=mysqli_query($con,$query);
		if (mysqli_fetch_assoc($result)) {
			$_SESSION['User']=$_POST['username'];
			header("location:../Dashboard/index.php");
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