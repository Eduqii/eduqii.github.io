<?php
//localhost, Mysqluser, password , database name
$con=mysqli_connect('localhost','u330923609_admin','eduqiI!^%9###','u330923609_Admin');


if (!$con) {
	die('Please check your Connection'.mysqli_error($con));
}

?>