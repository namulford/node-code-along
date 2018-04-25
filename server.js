var express = require('express');
var app = express();


app.get('/howdy', function(req, res) {
    res.end('We made it here.  Howdy!');
});

var server = app.listen(3000, function() {
    console.log('Server fired up on PORT 3000');
})