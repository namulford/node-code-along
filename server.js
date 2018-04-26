var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/howdy', function(req, res) {
    res.end('We made it here.  Howdy!');
});

app.get('/cheer', function(req, res) {
    res.end('It is a wonderful evening');
});

app.get('/jeer', function(req, res) {
    res.end('It is not the best evening');
})

app.get('/greeting/:name', function(req, res) {
    res.send("How are you " + req.params.name)
});

var server = app.listen(3000, function() {
    console.log('Server fired up on PORT 3000');
})

