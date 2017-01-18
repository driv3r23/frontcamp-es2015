var mongoose = require('mongoose');
var config = require('../config/config');

mongoose.connect('mongodb://' + config.get('database:username') +
    ':' + config.get('database:password') +
    '@' + config.get('database:host') +
    ':' + config.get('database:port') +
    '/' + config.get('database:name'));