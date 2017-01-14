<?php
  $ourEmail='ellucky4@gmail.com';

  $userEmail=$_POST['userEmail'];

  $header  = "From: $userEmail \r\n";
  $header .= 'MIME-Version: 1.0'."\r\n";
  $header .= 'Content-type: text/html; charset=UTF-8'."\r\n";
  $header .= "Reply-To: $userEmail"."\r\n";
  $header .= "X-Mailer: PHP/" . PHP_VERSION."\r\n";

  $subject=htmlentities($_POST['subject']);
  $message=$_POST['message'];

  $secretKey = '6Le23hAUAAAAAOdypdQtwN1NG4k4kSfVu7Ph4MsY';

  $checkIfBot = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']);
  $answer = json_decode($checkIfBot);

  if(!filter_var($userEmail, FILTER_VALIDATE_EMAIL)){
    $response = json_encode(array(
        'text' => 'Podaj poprawny email!'
    ));
    die($response);
  }
  else if ($subject==""){
    $response = json_encode(array(
        'text' => 'Wpisz jakiś temat!'
    ));
    die($response);
  }
  else if ($message==""){
    $response = json_encode(array(
        'text' => 'Pusta wiadomość? naah...'
    ));
    die($response);
  }
  else if($answer->success==false){
    $response = json_encode(array( 
        'text' => 'Potwierdź, że nie jesteś robotem!'
    ));
    die($response);
  }
  
  else {

    $emailSent = mail($ourEmail,$subject,$message,$header);

    if ($emailSent===true){
      $response = json_encode(array( 
          'text' => 'Wysłano. Dziękujemy!'
      ));
      die($response);
    } 
    else {
      $response = json_encode(array( 
          'text' => 'Coś poszło nie tak.'
      ));
      die($response);
    }
  }
?>