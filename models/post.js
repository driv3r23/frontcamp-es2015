var mongoose = require('mongoose');
var database = require('./database');

var postSchema = mongoose.Schema({
    title:  {type: String, required: true},
    author: String,
    body:   String,
    date: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Post', postSchema);