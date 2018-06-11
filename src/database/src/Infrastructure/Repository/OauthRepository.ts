import { Oauth } from "./../../DomainModel/Oauth/Oauth";
import {
  Connection,
  Repository,
  EntityRepository,
  EntityManager,
  useContainer,
  getConnectionManager,
  getConnection,
  ConnectionManager
} from "typeorm";
import "reflect-metadata";
import { Service, Container } from "typedi";
import {
  InjectConnection,
  InjectManager,
  InjectRepository
} from "typeorm-typedi-extensions";
import { access } from "fs";

interface IOauthRepository {
  getById(id: string);
}

@Service()
export class OauthRepository implements OauthRepository {
  private _connection: Connection;
  private _entityManager: EntityManager;

  constructor(
    @InjectConnection() private connection: Connection,
    @InjectManager() private entityManager: EntityManager
  ) {
    this._connection = connection;
    this._entityManager = entityManager;
  }

  public createOauth(oauth: Oauth) {
    return this._connection.manager.save(oauth);
  }

  public getById(id: string | Array<string>): Promise<Oauth[]> {
    let idArray: string | Array<string> = [];
    if (id instanceof Array) {
      idArray = id;
    } else {
      idArray.push(id);
    }
    return this._connection.getRepository(Oauth).findByIds(idArray);
  }

  public getByUserId(userId: string): Promise<Oauth[]> {
    return this._connection.getRepository(Oauth).find({ userId: userId });
  }

  public getByAccessToken(accessToken: string): Promise<Oauth[]> {
    return this._connection
      .getRepository(Oauth)
      .find({ accessToken: accessToken });
  }
}
