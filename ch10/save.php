<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = $_POST['data'];

    // Specify the file where you want to save the data
    $file = 'data.txt';

    // Use file_put_contents to save the data
    // FILE_APPEND flag adds to the file instead of overwriting it
    file_put_contents($file, $data . PHP_EOL, FILE_APPEND);

    echo "Data saved successfully!";
} else {
    echo "Invalid request method.";
}
?>
