var express = require('express');
var multer = require('multer');
var router = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({ storage: storage });

var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find(function (error, data) {
    if (error) return console.error(error);
    res.render('posts', { data: data });
  }).sort({ date: -1 })
});

router.get('/add', function(req, res, next) {
    res.render('add', {});
});

router.post('/create', upload.single('image'), function(req, res, next) {
  var post = new Post({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    image: 'uploads/' + req.file.filename
  });

  post.save(function (error, data) {
    if(error) console.error(error);
  });

  res.redirect("/posts");
});

module.exports = router;
