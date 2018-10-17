import * as compression from 'compression'; // compresses requests
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as getUser from './controllers/user/get-user';
import * as postOAuthAuthorize from './controllers/oauth/authorize';
import * as getOAuthConfirm from './controllers/oauth/confirm';
import { join } from 'path';
import * as getOAuthLogin from './controllers/oauth/login';
import { RouteDefinitions } from './routing/route-definitions.constant';
import 'reflect-metadata';
import * as nunjucks from 'nunjucks';
import { CreateUserController } from './controllers/user/create-user';
import { GetUserController } from './controllers/user/get-user';

const app = express();
const bodyParser = require('body-parser');
const corsOptions = {
  origin: (origin: string, callback) => {
    callback(null, true);
  },
};

const templatePath = join(__dirname, 'views');

nunjucks.configure(templatePath, {
  autoescape: true,
  express: app,
});

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index.njk');
});

app.get(RouteDefinitions['user'], GetUserController.execute);
app.post(RouteDefinitions['user.create'], CreateUserController.execute);

app.get(RouteDefinitions['oauth.login'], getOAuthLogin.get);
app.post(RouteDefinitions['oauth.authorize'], postOAuthAuthorize.authorize);
app.get(RouteDefinitions['oauth.confirm'], getOAuthConfirm.get);
app.get(RouteDefinitions['oauth.redirect'], getOAuthConfirm.redirect);

module.exports = app;
