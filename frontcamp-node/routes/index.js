var express = require('express');
var router = express.Router();

var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  var post = new Post({
    title: "Southern rail strike: 48-hour walkout causes chaos for commuters",
    date: new Date("2016-12-13T13:12:11Z"),
    body: "Rail passengers endure travel chaos as striking train drivers bring the Southern network to a halt.",
    author: "BBC News"
  });

  post.save(function (error, object) {
    res.render('index', { title: error ? error.errors.title.message : object.title });
  });
});

module.exports = router;
