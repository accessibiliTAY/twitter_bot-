var express = require('express');
var router = express.Router();

var nouns = ['jeep7', 'Sandwich', 'Nerd', 'Monkey', 'Cowboy', 'Ninja', 'Pants',
'Octothorp', 'Unicorn', 'Hamster',
'Bunny', 'Glow Worm', 'Dome', 'Rhombus',
'Octopus', 'Punk', 'Prime Minister', 'Zoologist', 'Robot',
'Pi', 'Hipster', 'Pizza', 'Query', 'Array', 'Soup', 'Tumbleweed', 'SmartyPants',
'Bro', 'Barricuda', 'Diet', 'Gamer', 'Helicopter Pilot', 'Pirate', 'Pterodactyl',
'Chihuaua'];


/////shuffle
function shuffle(array) {

 var tempArr = array;
 var m = tempArr.length, t, i;

 // While there remain elements to shuffle…
 while (m) {

   // Pick a remaining element…
   i = Math.floor(Math.random() * m--);

   // And swap it with the current element.
   t = tempArr[m];
   tempArr[m] = tempArr[i];
   tempArr[i] = t;
 }

 return tempArr;
};



router.get('/', function(req, res){
  res.send(shuffle(nouns));

});


 module.exports = router;
