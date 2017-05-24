<?php

require_once __DIR__ . '/functions.php';

if ($errors = validateContactForm($_POST)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['errors' => $errors]);
} else {
    if (sendMail($_POST)) {
        http_response_code(200);
        echo json_encode(['status' => (require __DIR__ . '/settings.php')['validationMessages']['Sent']]);
    } else {
        http_response_code(500);
        echo json_encode(['status' => (require __DIR__ . '/settings.php')['validationMessages']['NotSent']]);
    }
}
