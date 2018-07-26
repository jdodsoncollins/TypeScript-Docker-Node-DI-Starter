import { User } from './database/src/DomainModel/User/User';

const app = require('./app');
import { Connection, ConnectionManager, createConnection, useContainer } from 'typeorm';
import { MysqlConnection } from './ormconfig';
import "reflect-metadata";
import { Container } from "typedi";
import { UserRepository } from './database/src/Infrastructure/Repository/UserRepository';
import { ApplicationCore } from './database/src/Infrastructure/Lib/ApplicationCore';
import { CreateUser } from './database/src/Action/User/CreateUser';
require('dotenv').config();

useContainer(Container);
createConnection(
        MysqlConnection.connect()
    ).then(async connection => {

        app.set('databaseConnection', connection);

        app.listen(app.get('port'), '0.0.0.0', () => {
            console.log(('  App is running at http://0.0.0.0:%d in %s mode'), app.get('port'), app.get('env'));
            console.log('  Press CTRL-C to stop\n');
        });

        return new ApplicationCore();

    }).catch(error => {
        console.log('Create connection failure:', error);
    });