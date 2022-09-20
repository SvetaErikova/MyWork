<?php
session_start();
header('Content-Type: text/html; charset=utf-8');
$mysqli = mysqli_connect("localhost", "purafrya_form", "12345", "purafrya_form");
if ($mysqli == false) {
  print("error");
} else {

$email = trim(mb_strtolower($_POST["email"]));
$pass = trim($_POST["pass"]);

$result =  $mysqli->query("SELECT * FROM `mytable` WHERE `email` = '$email'");
$result = $result -> fetch_assoc();

if (password_verify($pass, $result["pass"])){
  print "ok";
    $_SESSION["name"] = $result["name"];
    $_SESSION["lastname"] = $result["lastname"];
    $_SESSION["email"] = $result["email"];
    $_SESSION["id"] = $result["id"];
} else {
  print "user_not_found";
}}