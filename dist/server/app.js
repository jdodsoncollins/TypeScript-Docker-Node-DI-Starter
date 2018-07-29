"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compression = require("compression"); // compresses requests
var express = require("express");
var cors = require("cors");
require("reflect-metadata");
var getUser = require("./controllers/user/get-user");
var createUser = require("./controllers/user/create-user");
var postOAuthAuthorize = require("./controllers/oauth/authorize");
var path_1 = require("path");
var getOAuthLogin = require("./controllers/oauth/login");
var route_definitions_constant_1 = require("./routing/route-definitions.constant");
require("reflect-metadata");
var nunjucks = require("nunjucks");
var app = express();
var bodyParser = require('body-parser');
var corsOptions = { origin: function (origin, callback) {
        callback(null, true);
    }
};
var templatePath = path_1.join(__dirname, 'views');
nunjucks.configure(templatePath, {
    autoescape: true,
    express: app
});
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
    res.render('index.njk');
});
app.get(route_definitions_constant_1.RouteDefinitions['user'], getUser.execute);
app.post(route_definitions_constant_1.RouteDefinitions['user.create'], createUser.execute);
app.get(route_definitions_constant_1.RouteDefinitions['oauth.login'], getOAuthLogin.get);
app.post(route_definitions_constant_1.RouteDefinitions['oauth.authorize'], postOAuthAuthorize.authorize);
module.exports = app;
//# sourceMappingURL=app.js.map