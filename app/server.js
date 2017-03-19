'use strict';

// 1: NPM dependencies.
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    sequelize = require('sequelize'),
    passport = require('passport'),
    jwt = require('jsonwebtoken');

// 2: App related modules.
var hookJWTStrategy = require('./services/passportStrategy');

// 3: Initializations.
var app = express();

// 4: Parse as urlencoded and json.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 5: Hook up the HTTP logger.
app.use(morgan('dev'));

// 6: Hook up Passport.
app.use(passport.initialize());

// 6.1: Hook the passport JWT strategy.
hookJWTStrategy(passport);

// 7: Set the static files location.
app.use(express.static(__dirname + '/public'));

// 8: Home route.
app.get('/', function(req, res) {
    res.send('Nice meeting you wizard, I\'m Gandalf!');
});

// 9: Start the server.
app.listen('8080', function() {
    console.log('Magic happens at http://localhost:8080/! We are now all now doomed!');
});