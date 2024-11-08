<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $file = fopen('users.txt', 'r');
    $found = false;

    while (($line = fgets($file)) !== false) {
        list($storedEmail, $storedId, $storedPassword) = explode(',', trim($line));
        if ($email == $storedEmail && password_verify($password, $storedPassword)) {
            $found = true;
            break;
        }
    }
    fclose($file);

    if ($found) {
        echo "Login successful!";
    } else {
        echo "Invalid email or password.";
    }
}
?>
