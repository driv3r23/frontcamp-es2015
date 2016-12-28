var express = require('express');
var router = express.Router();
var passport = require('passport');

var Strategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.use(new Strategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, user);
        });
    }
));

router.get('/', function(req, res, next) {
    res.render('login', {});
});

router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true })
);

module.exports = router;