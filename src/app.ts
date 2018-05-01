import * as compression from 'compression'; // compresses requests
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import "reflect-metadata";
import * as getUser from './controllers/get-user';

import { RouteDefinitions } from './routing/route-definitions.constant';

import "reflect-metadata";

// Create & Set Express server
const app = express();

const corsOptions = { origin: (origin: string, callback) => {
        callback(null, true)
    }
};

app.set('port', 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
// app.use(helmet());

app.get(RouteDefinitions['user'], getUser.execute);

module.exports = app;