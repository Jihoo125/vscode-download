<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Check if email exists (simple file search)
    $file = fopen('users.txt', 'r');
    $found = false;

    while (($line = fgets($file)) !== false) {
        list($storedEmail, $storedId, $storedPassword) = explode(',', trim($line));
        if ($email == $storedEmail) {
            $found = true;
            break;
        }
    }
    fclose($file);

    if ($found) {
        echo "Instructions for recovering your account have been sent to $email.";
    } else {
        echo "Email not found.";
    }
}
?>
