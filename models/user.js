var mongoose = require('mongoose');
var database = require('./database');

var userSchema = mongoose.Schema({
    username:  { type: String, index: true, unique: true, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);