<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $id = $_POST['id'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Simple file storage (not recommended for production)
    $file = fopen('users.txt', 'a');
    fwrite($file, "$email,$id,$password\n");
    fclose($file);

    echo "Registration successful!";
}
?>
