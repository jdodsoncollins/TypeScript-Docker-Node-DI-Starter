"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compression = require("compression"); // compresses requests
var express = require("express");
var cors = require("cors");
require("reflect-metadata");
var getUser = require("./controllers/get-user");
var createUser = require("./controllers/create-user");
var route_definitions_constant_1 = require("./routing/route-definitions.constant");
require("reflect-metadata");
var OAuthModel_1 = require("./auth/OAuthModel");
// Create & Set Express server
var app = express();
var bodyParser = require('body-parser');
var oAuth2Server = require('node-oauth2-server');
var corsOptions = { origin: function (origin, callback) {
        callback(null, true);
    }
};
var oAuthModel = new OAuthModel_1.OAuthModel();
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(helmet());
app.oauth = oAuth2Server({
    model: oAuthModel,
    grants: ['password'],
    debug: true
});
app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.get(route_definitions_constant_1.RouteDefinitions['user'], getUser.execute);
app.post(route_definitions_constant_1.RouteDefinitions['user.create'], createUser.execute);
// app.post('/registerUser', authRoutesMethods.registerUser);
// app.post('/login’, expressApp.oauth.grant()');
module.exports = app;
//# sourceMappingURL=app.js.map