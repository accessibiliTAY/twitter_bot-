var express = require('express');
var TwitterHandle = require('../../models/twitter_model.js');
var router = express.Router();


router.post('/new', function(req, res) {
  var twitterHandle = new TwitterHandle(req.body);
  twitterHandle.save(function(err) {
    if(err) {console.log("error:", err);}
    else {console.log("handles saved", twitterHandle);}
  });
});

router.get('/', function(req, res) {
  TwitterHandle.find({}, function(err, twitterhandles) {
    if(err) {console.log(err);}
    else {
      console.log("handles sent");
      res.send(twitterhandles);
  }

});
});

module.exports = router;
