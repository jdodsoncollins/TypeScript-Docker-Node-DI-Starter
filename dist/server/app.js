"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compression = require("compression"); // compresses requests
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
require("reflect-metadata");
var getUser = require("./controllers/get-user");
var createUser = require("./controllers/create-user");
var route_definitions_constant_1 = require("./routing/route-definitions.constant");
require("reflect-metadata");
// Create & Set Express server
var app = express();
var corsOptions = { origin: function (origin, callback) {
        callback(null, true);
    }
};
app.set('port', 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
// app.use(helmet());
app.get(route_definitions_constant_1.RouteDefinitions['user'], getUser.execute);
app.post(route_definitions_constant_1.RouteDefinitions['user.create'], createUser.execute);
module.exports = app;
//# sourceMappingURL=app.js.map