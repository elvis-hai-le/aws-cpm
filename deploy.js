const express = require('express');

const app = express();

const path = require('path');

// serve the built front end files
app.use('/', express.static(path.join(__dirname, './frontend/dist/')));

// start the server
app.listen(80, () => {
    console.log('Server running on http://localhost:8080');
});