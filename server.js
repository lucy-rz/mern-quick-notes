const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//require and configure near to the top
require('dotenv').config();

//connect to the db
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

//put API routes here, before the 'catch all' route
app.use('/api/users', require('./routes/api/users'));

app.use('/api/notes', require('./routes/api/notes'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});