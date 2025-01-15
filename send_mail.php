<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "ibragimovazhanel18@gmail.com"; // Замените на свой email
    $subject = "Новое сообщение с сайта";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
    
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "success"; // Сообщение успешно отправлено
    } else {
        echo "error"; // Ошибка при отправке
    }
} else {
    echo "invalid"; // Некорректный запрос
}
?>
