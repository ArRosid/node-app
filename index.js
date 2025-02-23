require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Get the name from environment variable
const name = process.env.NAME;
if (!name) {
    throw new Error("Environment variable 'NAME' not found. Use .env file to set environment variable!");
}

// Get the port from environment variable or default to 5000
const port = process.env.PORT || 4321;

// Serve static files from 'views' directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { name });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
