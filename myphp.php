<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "abeladmassu3097@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";

    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $message = $_POST["Message"];

    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Method not allowed.";
}
?>
