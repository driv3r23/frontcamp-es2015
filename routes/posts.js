var express = require('express');
var router = express.Router();

var isLogged = function(req, res, next){
    if (req.isAuthenticated()) return next();
    else res.redirect('/users/login');
};

router.get("/", function(req, res) {
    res.render('posts', {});
});

router.get('/add', isLogged, function (req, res, next) {
    res.render('add', {});
});

module.exports = router;