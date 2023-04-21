/*
    The API~
    Basically, on a get request, we want to be able to pull data from the database into a json format and give to the user through http.
    And on a post request, we want to be able to get the information from the json and store it into the database via SQL queries.

    This is just a simple hello world example for a basic API.
*/

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Parse JSON request body
app.use(bodyParser.json());

// Define a route for handling GET requests to the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Define a route for handling POST requests to the root endpoint
app.post('/', (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
