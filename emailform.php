<?php
  require_once 'swiftmailer/lib/swift_required.php';
  $config = require_once 'emailconfig.php';

  $userEmail= $_POST['userEmail'];
  $subject= filter_var($_POST['subject'], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
  $message= filter_var($_POST['message'], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
  
  $secretKey = $config['secretKey'];

  $checkIfBot = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']);
  $answer = json_decode($checkIfBot);

  if(!filter_var($userEmail, FILTER_VALIDATE_EMAIL)){
    $alert = 'Podaj poprawny email!';
  }
  else if (empty($subject)){
    $alert = 'Wpisz jakiś temat!';
  }
  else if (empty($message)){
    $alert = 'Pusta wiadomość? Napisz coś!';
  }
  else if($answer->success==false){
    $alert = 'Potwierdź, że nie jesteś robotem!';
  }
  else {
    $transport = Swift_SmtpTransport::newInstance($config['serverName'], $config['port'])
      ->setUsername($config['username'])
      ->setPassword($config['password'])
      ;

    $mailer = Swift_Mailer::newInstance($transport);

    $message = Swift_Message::newInstance($subject)
    ->setFrom($userEmail)
    ->setReplyTo($userEmail)
    ->setTo($config['myEmail'])
    ->setBody($message)
    ;

    $result = $mailer->send($message);

    if ($result){
      $alert = 'Wysłano. Dzięki za wiadomość!';
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
