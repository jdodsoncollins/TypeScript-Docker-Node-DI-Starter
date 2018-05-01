import { CreateUser } from '../../Action/User/CreateUser';
import { ApplicationCore } from './ApplicationCore';
import { GetUser } from '../../Action/User/GetUser';
import { Connection, ConnectionManager, createConnection, useContainer } from 'typeorm';
import "reflect-metadata";
import { MysqlConnection } from '../../../../ormconfig';
const connection = new Connection(MysqlConnection.connect());
const app = new ApplicationCore();

/*

Intentionally commented out. Use 'npm run test' for test/main.ts

*/

describe('ApplicationCore', () => {
  // test('test a command', () => {
  //   const command = new CreateUser('jason@raimondi.us');
  //   console.log(command);
  //   const response = app.dispatchCommand(command);
  //   console.log(response);
  //   expect(response).toBe('jason@raimondi.us');
  // });

  // test('test a query', () => {
  //   const query = new GetUser('jason@raimondi.us');
  //   console.log(query);
  //   const response = app.dispatchQuery(query);
  //     console.log(response);
  //     expect(response).resolves.toBe('jason@raimondi.us');
  // });
});
