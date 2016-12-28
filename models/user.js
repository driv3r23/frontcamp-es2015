var mongoose = require('mongoose');
var database = require('./database');

var userSchema = mongoose.Schema({
    username:  String,
    password: String
});

module.exports = mongoose.model('User', userSchema);