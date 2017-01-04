var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.get('/', function (req, res, next) {
    Post.find(function (error, data) {
        if (error) return console.error(error);
        res.render('index', {data: data});
    }).sort({date: -1})
});

module.exports = router;