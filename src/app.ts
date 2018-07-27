import * as compression from 'compression'; // compresses requests
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import "reflect-metadata";
import * as getUser from './controllers/get-user';
import * as createUser from './controllers/create-user';
import * as checkUser from './controllers/check-user';
import * as getOAuthAccess from './controllers/get-oauth-access';
import { RouteDefinitions } from './routing/route-definitions.constant';
import "reflect-metadata";

const app = express();
const bodyParser = require('body-parser');
const corsOptions = { origin: (origin: string, callback) => {
        callback(null, true)
    }
};

app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.render('index.ejs'); 
});
app.get('/login', (req, res) => {
    res.render('login.ejs'); 
});
app.get('/profile', (req, res) => {
    res.render('profile.ejs'); 
});
app.get(RouteDefinitions['user'], getUser.execute);
app.post(RouteDefinitions['user.create'], createUser.execute);
app.post(RouteDefinitions['user.auth'], checkUser.execute);
app.post(RouteDefinitions['user.auth'], getOAuthAccess.execute);

module.exports = app;