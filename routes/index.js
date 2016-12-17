var express = require('express');
var router = express.Router();

var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  var post = new Post({
    title: "Southern rail strike: 64-hour walkout causes chaos for commuters",
    date: new Date("2016-12-14T13:12:11Z"),
    body: "Rail passengers endure travel chaos as striking train drivers bring the Southern network to a halt.",
    author: "BBC News",
    image: "http://ichef.bbci.co.uk/news/1024/cpsprodpb/CBF7/production/_92951225_9478f491-a7ba-429a-8eef-88263c5e62c0.jpg"
  });

  post.save(function (error, data) {
    res.render('index', { title: error ? error.errors.title.message : data.title });
  });
});

module.exports = router;
