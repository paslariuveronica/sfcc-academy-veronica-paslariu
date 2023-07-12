'use strict';

var server = require('server');

server.get('Demo', function (req, res, next) {

    var myvariable = "Just a string"
    res.render("vartest/vartest");
    return next();
});

module.exports = server.exports();