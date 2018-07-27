"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compression = require("compression"); // compresses requests
var express = require("express");
var cors = require("cors");
require("reflect-metadata");
var getUser = require("./controllers/get-user");
var createUser = require("./controllers/create-user");
var checkUser = require("./controllers/check-user");
var getOAuthAccess = require("./controllers/get-oauth-access");
var route_definitions_constant_1 = require("./routing/route-definitions.constant");
require("reflect-metadata");
var app = express();
var bodyParser = require('body-parser');
var corsOptions = { origin: function (origin, callback) {
        callback(null, true);
    }
};
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.get('/login', function (req, res) {
    res.render('login.ejs');
});
app.get('/profile', function (req, res) {
    res.render('profile.ejs');
});
app.get(route_definitions_constant_1.RouteDefinitions['user'], getUser.execute);
app.post(route_definitions_constant_1.RouteDefinitions['user.create'], createUser.execute);
app.post(route_definitions_constant_1.RouteDefinitions['user.auth'], checkUser.execute);
app.post(route_definitions_constant_1.RouteDefinitions['user.auth'], getOAuthAccess.execute);
module.exports = app;
//# sourceMappingURL=app.js.map