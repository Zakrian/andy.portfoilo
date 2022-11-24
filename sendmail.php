<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';
// require 'path/to/PHPMailer/src/SMTP.php';


$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

// От кого письмо
$mail->setFrom('andycode@bk.ru', 'Andy_Code');
// Кому отправить
$mail->addAddress('andycode@bk.ru');
// Тема письма
$mail->Subject = 'Привет! Это Андрей Вселенски';

// Тело письма
$body = '<h1>Ответ на заявку</h1>';

if (trim(!empty($_POST['name']))) {
  $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
  $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['tel']))) {
  $body .= '<p><strong>Телефон:</strong> ' . $_POST['tel'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
  $body .= '<p><strong>Сообщение:</strong> ' . $_POST['message'] . '</p>';
}

$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
  $message = 'Ошибка';
} else {
  $message = 'Данные отправленны!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
