
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

mongoose.connect('mongodb://salamij:Osalami20_@ds147979.mlab.com:47979/8080');
// mongoose.connection.on('error', function(){});

// Express
var app = express();

app.use(express.static(__dirname + './../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./api/appointment/'));

// Start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
