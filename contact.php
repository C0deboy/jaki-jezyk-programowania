<?php
	$ourEmail='kariqem@gmail.com';

	$userEmail=$_POST['from'];

	$header  = "From: $userEmail \r\n";
	$header .= 'MIME-Version: 1.0'."\r\n";
	$header .= 'Content-type: text/html; charset=UTF-8'."\r\n";
	$header .= "Reply-To: $userEmail"."\r\n";
    $header .= "X-Mailer: PHP/" . PHP_VERSION."\r\n";

	$subject=$_POST['subject'];
	$message=$_POST['message'];

	$emailSent = mail($ourEmail,$subject,$message,$header);

	if ($emailSent) echo "Wysłano";
	else echo "Błąd";
?>
