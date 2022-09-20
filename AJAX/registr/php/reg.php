<?php
header('Content-Type: text/html; charset=utf-8');
$mysqli = mysqli_connect("localhost", "purafrya_form", "12345", "purafrya_form");
if ($mysqli == false) {
print("error");
} else {

$name = $_POST["name"];
$lastname =$_POST["lastname"];
$email = trim(mb_strtolower($_POST["email"]));
$pass = trim($_POST["pass"]);
$pass = password_hash($pass, PASSWORD_DEFAULT);

$result=  $mysqli->query("SELECT * FROM `mytable` WHERE `email` = '$email'");
if ($result->num_rows ==! 0 && $password->num_rows >=2) {
print("pass_exist");
} elseif ($result->num_rows ==! 0)  {
print("email_exist");
} 
else{
$mysqli->query("INSERT INTO `mytable`(`name`, `lastname`, `email`, `pass`) VALUES ('$name', '$lastname', '$email', '$pass')");
print("ok");
}

}


