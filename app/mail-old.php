<?php

$frm_name  = "Chistetika";
$recepient = "povlan@mail.ru";
$sitename  = "Chistetika";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["Chistetika"]);

$message = "
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
