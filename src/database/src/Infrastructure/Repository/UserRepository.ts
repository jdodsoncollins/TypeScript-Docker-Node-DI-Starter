import {
  Connection,
  Repository,
  EntityRepository,
  EntityManager,
  useContainer,
  getConnectionManager,
  getConnection,
  ConnectionManager,
} from 'typeorm';
import { User } from '../../DomainModel/User/User';
import 'reflect-metadata';
import { Service, Container } from 'typedi';
import {
  InjectConnection,
  InjectManager,
  InjectRepository,
} from 'typeorm-typedi-extensions';

interface IUserRepository {
  getById(id: string);
  createUser(user: User);
}

@Service()
export class UserRepository implements IUserRepository {
  private _connection: Connection;
  private _entityManager: EntityManager;

  constructor(
    @InjectConnection() private connection: Connection,
    @InjectManager() private entityManager: EntityManager
  ) {
    this._connection = connection;
    this._entityManager = entityManager;
  }

  public createUser(user: User) {
    return this._connection.manager.save(user);
  }

  public getById(id: string | Array<string>): Promise<User[]> {
    let idArray: string | Array<string> = [];
    if (id instanceof Array) {
      idArray = id;
    } else {
      idArray.push(id);
    }
    return this._connection.getRepository(User).findByIds(idArray);
  }

  public getByEmail(email: string): Promise<User> {
    console.log(email);
    return this._connection
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .getOne();
  }
}
