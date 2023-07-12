// 'use strict';

// var server = require('server');

// server.extend(module.superModule);

// server.append('Show', function (req, res, next){
//     var viewData = res.getViewData();

//     viewData.example = "One String"

//     res.setViewData(viewData);

//     return next();
// });


// module.exports = server.exports();



"use strict";

var server = require("server");

server.extend(module.superModule);

server.append("Show", function(req, res, next) {
    var CartModel = require("*/cartridge/models/cart");
    var viewData = res.getViewData();
    var BasketMgr = require("dw/order/BasketMgr");

    var currentBasket = BasketMgr.getCurrentBasket();
    var basketModel = new CartModel(currentBasket);
    res.render("cart/cart", basketModel);

    return next();
});

module.exports = server.exports();