var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var twitterSchema = new Schema({
  name: {type: String, required: true},
  url: {type: String, required: true},
  taken: {type: Boolean, required: true}
})

var TwitterHandle = mongoose.model("TwitterHandle", twitterSchema);

module.exports = TwitterHandle;
