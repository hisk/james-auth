'use strict';

var JWTStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('./../models/user'),
    config = require('./../config');

// Hooks the JWT Strategy.
function hookJWTStrategy(passport) {
    var options = {};

    options.secretOrKey = config.keys.secret;
    options.jwtFromRequest = ExtractJwt.fromAuthHeader();
    options.ignoreExpiration = false;

    passport.use(new JWTStrategy(options, function(JWTPayload, callback) {
        User.findOne({ where: { username: JWTPayload.username } })
            .then(function(user) {
                if(!user) {
                    callback(null, false);
                    return;
                }

                callback(null, user);
            });
    }));
}


module.exports = hookJWTStrategy;