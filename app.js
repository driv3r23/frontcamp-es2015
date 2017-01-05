var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var validator = require('express-validator');
var flash = require('connect-flash');
var passport = require('passport');

var config = require('./config/config');

const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo')(session);

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: config.get('session:secret'),
    store: new MongoStore({
        url: 'mongodb://' + config.get('database:username') +
            ':' + config.get('database:password') +
            '@' + config.get('database:host') +
            ':' + config.get('database:port') +
            '/' + config.get('database:name')
    }),
    saveUninitialized: config.get('session:saveUninitialized'),
    resave: config.get('session:resave')
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(validator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }

        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

app.use(flash());

app.use(function (req, res, next) {
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
