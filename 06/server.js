const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to save ID and password
app.post('/save', (req, res) => {
    const { userId, password } = req.body;
    // Save data to a file (example.txt)
    fs.appendFile('example.txt', `UserID: ${userId}, Password: ${password}\n`, (err) => {
        if (err) throw err;
        console.log('Data saved to file.');
        res.send('Data saved to file.');
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
