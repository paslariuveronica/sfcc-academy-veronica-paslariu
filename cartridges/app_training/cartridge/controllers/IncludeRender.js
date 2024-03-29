"use strict";

var server = require("server");

server.get("RenderTemplate", function(req, res, next) {
    res.render("remoteinclude/dummy");
    next();
});

server.get("TestRemoteInclude", function(req, res, next) {
    res.render("remoteinclude/remote-include");
    next();
});

server.get("TestDecorator", function(req, res, next) {
    res.render("remoteinclude/decorator");
    next();
});

module.exports = server.exports();