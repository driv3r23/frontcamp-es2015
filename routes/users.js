var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

router.get('/register', function(req, res, next) {
    res.render('register', {});
});

router.get('/login', function(req, res, next) {
    res.render('login', {});
});

router.post('/register', function(req, res, next) {
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is incorrect').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password-repeat', 'Password do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if(errors) {
        res.render('register', {
            errors: errors
        })
    } else {
        var user = new User({
            username: req.body.username,
            email: req.body.email
        });

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                user.password = hash;

                user.save(function (error, data) {
                    if(error) console.error(error);
                });

                res.redirect('/users/login');
            });
        });
    }
});

passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
        if (err)
            return done(err);
        if (!user)
            return done(null, false, { message: 'Incorrect username' });

        bcrypt.compare(password, user.password, function(err, res) {
            if(res)
                return done(null, user);
            else
                return done(null, false, {message: 'Invalid password'});
        });
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;