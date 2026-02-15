<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // Проверка данных
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Некорректный email!";
        exit;
    }

    if (empty($message)) {
        echo "Сообщение не может быть пустым!";
        exit;
    }

    // Отправка письма
    $to = "admin@shrekclub.com"; // Укажите ваш email
    $subject = "Вопрос с сайта компьютерных клубов Шрек";
    $body = "Email отправителя: $email\n\nСообщение:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Ваше сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
