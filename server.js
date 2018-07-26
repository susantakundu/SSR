const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

// Get our API routes
const api = require('./server/routes/api');

const port = 3000;
const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("server is running on localhost: " + port);
});