import { OAuthAccessTokens } from "../../DomainModel/Oauth/OAuth_access_tokens";
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

  public createOauthAccessToken(oAuthAccessToken: OAuthAccessTokens) {
    return this._connection.manager.save(oAuthAccessToken);
  }

  public getById(id: string | Array<string>): Promise<OAuthAccessTokens[]> {
    let idArray: string | Array<string> = [];
    if (id instanceof Array) {
      idArray = id;
    } else {
      idArray.push(id);
    }
    return this._connection.getRepository(OAuthAccessTokens).findByIds(idArray);
  }

  public getByUserId(userId: string): Promise<OAuthAccessTokens[]> {
    return this._connection.getRepository(OAuthAccessTokens).find({ userId: userId });
  }

  // public getByAccessToken(identifier: string): Promise<OAuthAccessTokens[]> {
  //   return this._connection
  //     .getRepository(OAuthAccessTokens)
  //     .find({ identifier: identifier });
  // }
}
