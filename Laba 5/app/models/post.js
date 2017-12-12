var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    namearticle: String,
    shortdescription: String,
  longdescription: String
});

module.exports = mongoose.model('Post', PostSchema);
