<?php
  require_once 'swiftmailer/lib/swift_required.php';

  $userEmail=$_POST['userEmail'] ?? false;
  $subject= filter_var($_POST['subject'], FILTER_SANITIZE_STRING) ?? false;
  $message= filter_var($_POST['message'], FILTER_SANITIZE_STRING) ?? false;
  
  $secretKey = 'lmao';

  $checkIfBot = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']);
  $answer = json_decode($checkIfBot);

  if(!filter_var($userEmail, FILTER_VALIDATE_EMAIL)){
    $alert = 'Podaj poprawny email!';
  }
  else if (empty($subject)){
    $alert = 'Wpisz jakiś temat!';
  }
  else if (empty($message)){
    $alert = 'Pusta wiadomość? naah...';
  }
  else if($answer->success==false){
    $alert = 'Potwierdź, że nie jesteś robotem!';
  }
  else {
    $transport = Swift_SmtpTransport::newInstance('mail.jaki-jezyk-programowania.pl', 587)
      ->setUsername('lmao')
      ->setPassword('lmao')
      ;

    $mailer = Swift_Mailer::newInstance($transport);

    $message = Swift_Message::newInstance($subject)
    ->setFrom($userEmail)
    ->setReplyTo($userEmail)
    ->setTo('kontakt@jaki-jezyk-programowania.pl')
    ->setBody($message)
	  ;

    $result = $mailer->send($message);

    if ($result){
      $alert = 'Wysłano. Dziękujemy!';
    }
    else {
      $alert = 'Coś poszło nie tak.';
    }
  }

  $response = json_encode(array(
        'text' => $alert
  ));
  die($response);
?>
