var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'bower_components')));

// define routes
var todoItems = [
    { id: 1, name: 'Adrian',desc: 'person'},
    { id: 2, name: 'Sabrina',desc: 'person'},
    { id: 3, name: 'Mike',desc: 'person'},
    { id: 4, name: 'Todd',desc: 'person'},
    { id: 5, name: 'Jeremy',desc: 'person'},
];

app.get('/', function (req, res){
    //load data from db
    res.render('index', {
        title: 'My App',
        items: todoItems
    });
});

app.post('/add', function (req, res) {
    var newItem = req.body.newItem;

    todoItems.push({
        id: todoItems.length + 1,
        desc: newItem
    });

    res.redirect('/');
    console.log(newItem);
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
