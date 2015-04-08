var express = require('express');

var router = express.Router();

var todoItems = [
    { id: 1, name: 'Adrian' },
    { id: 2, name: 'Sabrina' },
    { id: 3, name: 'Mike' }
];

router.get('/', function (req, res){
    //load data from db
    res.render('index', {
        title: 'My App',
        items: todoItems
    });
});

router.post('/add', function (req, res) {
    var newItem = req.body.newItem;

    todoItems.push({
        id: todoItems.length + 1,
        name: newItem
    });

    res.redirect('/');
});

module.exports = router;
