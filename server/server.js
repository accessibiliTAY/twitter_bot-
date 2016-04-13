var express = require('express');
var indexRouter = require('./routes/index.js');
var adjectives = require('./routes/adjectives');
var nouns = require('./routes/nouns');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var TwitterHandle = require('./routes/twitterhandles')


var app = express();

var MongoDB = mongoose.connect('mongodb://localhost/twitterbot').connection;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/', indexRouter);

app.use('/nouns', nouns);
app.use('/adjectives', adjectives);
app.use('/twitterhandles', TwitterHandle);

MongoDB.on('error', function(err) {
  console.log("Mongo connection error", err);
});

MongoDB.on('open', function(err) {
  console.log("Mongo connection open!");
});







var server = app.listen(3000, function(){
 var port = server.address().port;
console.log('Listening on port', port);
})
