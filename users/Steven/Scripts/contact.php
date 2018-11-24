<?php
#Send Email
if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$sentTo = "steven.cederrand@aschtech.se";
	$headers = "From: ".$email;
	$txt = "You have recieved an email from: ".$name.".\n\n".$message;


	mail($sentTo, $subject, $txt, $headers);
	header("Location: ../index.html?mailsend");
}
