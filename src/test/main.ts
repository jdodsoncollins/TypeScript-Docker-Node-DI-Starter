import "reflect-metadata";

import { Connection, createConnection, useContainer } from 'typeorm';
import { MysqlConnection } from '../ormconfig';
import { User } from '../database/src/DomainModel/User/User';
import { CreateUser } from '../database/src/Action/User/CreateUser';
import { ApplicationCore } from '../database/src/Infrastructure/Lib/ApplicationCore';
import { Container } from 'typedi';
import { GetUser } from '../database/src/Action/User/GetUser';

useContainer(Container);
createConnection(
  MysqlConnection.connect()
    )
  .then(
    async (connection: Connection) => {
        const appCore = Container.get(ApplicationCore);
        const newUserCommand = new CreateUser('Mickey', 'Mouse', 'mickey@mickeymouse.com');
        const newUserResponse = await appCore.dispatchCommand(newUserCommand);
        console.log('new user response', newUserResponse);
        const getUserCommand = new GetUser(null, 'mickey@mickeymouse.com');
        const getUserResponse = await appCore.dispatchQuery(getUserCommand);
        console.log('get user response', getUserResponse);
    }
  )
  .catch(error => console.log(error));


// const query = new GetUser('jason@raimondi.us');
// const response = app.dispatchQuery(query);
//
// const command = new CreateUser('jason@raimondi.us');
// const response = app.dispatchCommand(command);

// console.log('response: ', response);
