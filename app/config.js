// Application configuration.
'use strict';

var config = module.exports;

config.db = {
    user: 'root', 
    password: 'root',
    name: 'james_auth'
};

config.db.details = {
    host: 'localhost',
    port: 8889,      
    dialect: 'mysql'
};

config.keys = {
    secret: '/jVdfUX+u/Kn3qPY4+ahjwQgyV5UhkM5cdh1i2xhozE=' // Not anymore...
};