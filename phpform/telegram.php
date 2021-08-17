<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['surname'];
$token = "1992050676:AAEKUJbdToaT1X-kpzPCh36Vn53KEzQ2otc";
$chat_id = "-505197049";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Фамилия: ' => $email
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