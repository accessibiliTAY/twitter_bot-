var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res){
  var filePath = path.join(__dirname, '../public/views/index.html');
  response.sendFile(filePath);

});
module.exports = router;
