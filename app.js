var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser());

// define routes

app.use(require('./todos'));

//start the server

app.listen(1337, function() {
    console.log('ready on port: 1337')
});








//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>Hello Dude!</h1>\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server fuckin\' runnin\' at http://127.0.0.1:1337/');
