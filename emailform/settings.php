<?php

return [
    'reCaptcha' => [
        'secret' => '6Lc9_xMUAAAAANq0PsnW2tjar4qiB7TmXlYZiRt4',
    ],
    'mailer'    => [
        'host'     => 'mail.jaki-jezyk-programowania.pl',
        'port'     => '587',
        'username' => 'kontakt@jaki-jezyk-programowania.pl',
        'password' => '~=M+|#ZOX~-ybjNoH0n-',
        'email'    => 'kontakt@jaki-jezyk-programowania.pl',
    ],
    'validationMessages' => [
        'stringType'=> 'Musi być typu string',
        'length'    => 'Musi zawierać od {{minValue}} do {{maxValue}} znaków',
        'email'     => 'Niepoprawny email',
        'notEmpty'  => 'Pole nie może być puste',
        'NotSent'   => 'Coś poszło nie tak :(',
        'Sent'      => 'Wysłano! Dzięki za wiadomość!'
    ],
];
