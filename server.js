const express = require('express');
const app = express();
const port = 3000;

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.send(`The current time is ${currentTime}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});