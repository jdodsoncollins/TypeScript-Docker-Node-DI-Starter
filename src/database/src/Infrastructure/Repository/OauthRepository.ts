import { OAuthAccessToken } from '../../DomainModel/Oauth/OAuth_access_token';
import {
  Connection,
  Repository,
  EntityRepository,
  EntityManager,
  useContainer,
  getConnectionManager,
  getConnection,
  ConnectionManager
} from 'typeorm';
import 'reflect-metadata';
import { Service, Container } from 'typedi';
import {
  InjectConnection,
  InjectManager,
  InjectRepository
} from 'typeorm-typedi-extensions';
import { access } from 'fs';
import { OAuthClient } from '../../DomainModel/Oauth/OAuth_client';

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

  public createOauthAccessToken(oAuthAccessToken: OAuthAccessToken) {
    return this._connection.manager.save(oAuthAccessToken);
  }

  public getAccessTokenById(id: string | Array<string>): Promise<OAuthAccessToken[]> {
    let idArray: string | Array<string> = [];
    if (id instanceof Array) {
      idArray = id;
    } else {
      idArray.push(id);
    }
    return this._connection.getRepository(OAuthAccessToken).findByIds(idArray);
  }

  public getAccessTokenByUserId(userId: string): Promise<OAuthAccessToken> {
    return this._connection.getRepository(OAuthAccessToken)
    .createQueryBuilder('OAuthAccessToken')
    .where('OAuthAccessToken.user_id = :userId', { userId: userId })
    .getOne();
  }

  public getClientByRedirectUri(redirectUri: string): Promise<OAuthClient> {
    return this._connection.getRepository(OAuthClient)
    .createQueryBuilder('OAuthClient')
    .where('OAuthClient.redirect_uri = :redirectUri', { redirectUri: redirectUri })
    .getOne();
  }

  public getClientByIdentifier(identifier: string): Promise<OAuthClient> {
    return this._connection.getRepository(OAuthClient)
    .createQueryBuilder('OAuthClient')
    .where('OAuthClient.identifier = :identifier', { identifier: identifier })
    .getOne();
  }

}
