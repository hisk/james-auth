'use strict';

var config = require('./../config'),
    Sequelize = require('sequelize');

module.exports = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.password,
    config.db.details
);