var express = require('express');

var app = express();

// configure app
// use middleware
// define routes

app.get('/', function(req, res){
    res.render('index');
});

app.listen(1337, function() {
    console.log('ready on port: 1337')
});






//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>Hello Dude!</h1>\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server fuckin\' runnin\' at http://127.0.0.1:1337/');
