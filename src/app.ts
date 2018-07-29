import * as compression from 'compression'; // compresses requests
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import "reflect-metadata";
import * as getUser from './controllers/user/get-user';
import * as createUser from './controllers/user/create-user';
import * as postOAuthAuthorize from './controllers/oauth/authorize';
import { join } from 'path';
import * as getOAuthLogin from './controllers/oauth/login';
import { RouteDefinitions } from './routing/route-definitions.constant';
import "reflect-metadata";
import * as nunjucks from 'nunjucks';

const app = express();
const bodyParser = require('body-parser');
const corsOptions = { origin: (origin: string, callback) => {
        callback(null, true)
    }
};

const templatePath = join(__dirname, 'views');
  
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
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.njk'); 
});

app.get(RouteDefinitions['user'], getUser.execute);
app.post(RouteDefinitions['user.create'], createUser.execute);

app.get(RouteDefinitions['oauth.login'], getOAuthLogin.get);
app.post(RouteDefinitions['oauth.authorize'], postOAuthAuthorize.authorize);

module.exports = app;