import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { resolve } from 'path';
import { User } from './database/src/DomainModel/User/User';
import { Oauth } from './database/src/DomainModel/Oauth/Oauth';

const projectRoot = resolve(__dirname, '../');

export class MysqlConnection implements MysqlConnectionOptions {
  readonly name = 'default';
  readonly type = 'mysql';
  readonly host = '127.0.0.1';
  readonly port = 33066;
  readonly username = 'root';
  readonly password = 'root';
  readonly database = 'test';
  readonly synchronize = true;
  readonly logging = true;
  // readonly debug = true;
  readonly entities = [
    User,
    Oauth
  ];
  readonly migrations = [
    projectRoot + '/migration/**/*.ts'
  ];
  static connect(): MysqlConnection {
    console.log('MAKING CONNECTION');
    return new this();
  }
}
