var express = require('express');
var router = express.Router();

var adjectives = ['jen', 'Pistachio', 'Sparkly', 'Banana', 'Nerdy', 'Rainbow',
'Invisible', 'Magnificent', 'Fancy', 'Lunar', 'Cantankerous',
'Geodesic', 'Spaghetti', 'Ursine', 'Spanky', 'Murderous', 'Code',
'Rambunctious', 'Urgent', 'Instant', 'Anonymous', 'Static', 'Tiny', 'Massive',
'Vegan', 'Hipster', 'Fighting', 'Quizzical', 'Tumbling', 'Tetra',
'The Chosen', 'Mellifluous', 'Hulking', 'Stinky',
'Egregious', 'Bovine', 'Real', 'Fake', 'Faux', 'Ancient', 'Blue',
'Unforgettable', 'Magnum', 'Neon', 'Retro', 'Unsavory', 'Aggressive',
'Feral'];


//The Fisher-Yates shuffle
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
  console.log('adjectives got');
res.send(shuffle(adjectives));

});



module.exports = router;
