<?php

$token = "1974150044:AAFECQtRsOqssU6dP2esCyY01_qs6WVbD6g";
$chat_id = "-557045990";
$name = $_POST["nameInput"];
$phone = $_POST["phoneInput"];
$first_q = $_POST['first-q-radio'];
$second_q = $_POST['second-q-radio'];
$third_q = $_POST['areaInput'];
$four_q = $_POST['fourth-q-radio'];
$fifth_q = $_POST['fifth-q-radio'];
$six_q = $_POST['six-q-radio'];
date_default_timezone_set('Europe/Zaporozhye');

$arr = array(
  'Нове замовлення. Час: ' => date('d/m/Y H:i', time()),
  'Клієнт: ' => $name,
  'Телефон: ' => $phone,
  'Тип приміщення: ' => $first_q,
  'Тип робіт: ' => $second_q,
  'Площа у м2: ' => $third_q,
  'Чи є власні матеріали: ' => $four_q,
  'Чи є електрична мережа: ' => $fifth_q,
  'Обрана знижка: ' => $six_q
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>