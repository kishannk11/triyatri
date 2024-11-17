const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const userData = req.body;
    const filePath = './regUsers.json';

    // Read the existing users data
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(500).send({ message: "Error reading user data" });
        }
        let users = [];
        if (data.length > 0) {
            users = JSON.parse(data);
        }
        users.push(userData);

        // Write the updated users data back to the file
        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send({ message: "Error writing user data" });
            }
            res.send({ message: "User registered successfully" });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
