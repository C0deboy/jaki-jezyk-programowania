<?php

use Respect\Validation\Exceptions\NestedValidationException;
use Respect\Validation\Rules\Email;
use Respect\Validation\Rules\Length;
use Respect\Validation\Rules\StringType;
use Respect\Validation\Rules\NotEmpty;
use Respect\Validation\Validator;

require_once __DIR__ . '/vendor/autoload.php';

/**
 * @param array $form
 *
 * @return array of errors
 */
function validateContactForm(array $form): array
{
    $errors = [];
    $rules = [
        'userEmail' => (new Validator())->addRules([new NotEmpty(), new Email()]),
        'subject' => (new Validator())->addRules([new NotEmpty(), new StringType(), new Length(4, 78)]),
        'message' => (new Validator())->addRules([new NotEmpty(), new StringType(), new Length(8, 6000)]),
    ];
    $validationMessages = (require_once __DIR__ . '/settings.php')['validationMessages'];

    foreach ($rules as $key => $validator) {
        /** @var $validator Validator */
        try {
            $validator->setName($key)->assert($form[$key] ?? null);
        } catch (NestedValidationException $exception) {
            $exception->findMessages($validationMessages);
            $errors[$key] = $exception->getMessages();
        }
    }

    if (validateReCaptcha($form['g-recaptcha-response'] ?? '') === false) {
        $errors['recaptcha'][] = "Potwierdź, że nie jesteś robotem!";
    }
    return $errors;
}

function validateReCaptcha(string $code): bool
{
    $url = 'https://www.google.com/recaptcha/api/siteverify?' . http_build_query([
            'secret' => (require __DIR__ . '/settings.php')['reCaptcha']['secret'],
            'response' => $code,
        ]);
    $content = file_get_contents($url);
    $response = json_decode($content, true);
    return $response['success'];
}

function getMailer(): Swift_Mailer
{
    $config = (require __DIR__ . '/settings.php')['mailer'];

    $transport = new Swift_SmtpTransport($config['host'], $config['port']);
    $transport->setUsername($config['username']);
    $transport->setPassword($config['password']);

    return new Swift_Mailer($transport);
}

function prepareMail(array $params): Swift_Message
{
    $config = (require __DIR__ . '/settings.php')['mailer'];

    $mail = new Swift_Message(
        $params['subject'],
        $params['message'],
        'text/plain',
        'UTF-8'
    );

    $mail->setFrom($params['userEmail']);
    $mail->setReplyTo($params['userEmail']);
    $mail->setTo($config['email']);

    return $mail;
}

function sendMail(array $params): bool
{
    $mailer = getMailer();
    return $mailer->send(prepareMail($params));
}
