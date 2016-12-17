var mongoose = require('mongoose');
var database = require('./database');

var postSchema = mongoose.Schema({
    title:  {type: String, required: [true, 'Why no title?']},
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

module.exports = mongoose.model('Post', postSchema);