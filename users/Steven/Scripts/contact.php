<?php
#Send Email
if(isset($_post['submit'])) {
	$name = $_post['name'];
	$email = $_post['email'];
	$subject = $_post['subject'];
	$message = $_post['message'];

	$sentTo = "Steven.cederrand@aschtech.se";
	$headers = "From: ".$email;
	$txt = "You have recieved an email from: ".$name.".\n\n".$message;


	mail($sentTo, $subject, $txt, $headers);
	header("Location: index.php?mailsend");
}

 ?>
