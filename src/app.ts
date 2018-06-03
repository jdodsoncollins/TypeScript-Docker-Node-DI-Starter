import * as compression from 'compression'; // compresses requests
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import "reflect-metadata";
import * as getUser from './controllers/get-user';
import * as createUser from './controllers/create-user';

import { RouteDefinitions } from './routing/route-definitions.constant';

import "reflect-metadata";
import { OAuthModel } from './auth/OAuthModel';

// Create & Set Express server
const app = express();
const bodyParser = require('body-parser');
const oAuth2Server = require('node-oauth2-server');
const corsOptions = { origin: (origin: string, callback) => {
        callback(null, true)
    }
};
const oAuthModel = new OAuthModel();
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(helmet());
app.oauth = oAuth2Server({
    model: oAuthModel,
    grants: ['password'],
    debug: true
})
app.get('/', (req, res) => {
    res.render('index.ejs'); 
});
app.get(RouteDefinitions['user'], getUser.execute);
app.post(RouteDefinitions['user.create'], createUser.execute);
// app.post('/registerUser', authRoutesMethods.registerUser);
// app.post('/login’, expressApp.oauth.grant()');

module.exports = app;