"use strict";

var server = require("server");

server.get("Start", function(req, res, next) {

    var ProductMgr = require("dw/catalog/ProductMgr");

    var pid = req.querystring.pid;

    res.render("product/productfound", { productId: pid });

    return next();
});

module.exports = server.exports();