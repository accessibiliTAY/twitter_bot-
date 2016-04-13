var express = require('express');
var indexRouter = require('./routes/index.js');
var adjectives = require('./routes/adjectives');
var nouns = require('./routes/nouns');


var app = express();


app.use(express.static('server/public'));

app.use('/', indexRouter);

app.use('/nouns', nouns);
app.use('/adjectives', adjectives);









var server = app.listen(3000, function(){
 var port = server.address().port;
console.log('Listening on port', port);
})
