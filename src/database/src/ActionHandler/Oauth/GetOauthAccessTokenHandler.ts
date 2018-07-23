import { GetOauthAccessToken } from '../../Action/Oauth/GetOauthAccessToken';

import { IQueryHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import "reflect-metadata";
import { Container, Service } from 'typedi';
import {InjectManager} from "typeorm-typedi-extensions";
import { EntityManager } from 'typeorm';
import { OauthRepository } from '../../Infrastructure/Repository/OauthRepository';

@Service()
export class GetOauthAccessTokenHandler implements IQueryHandler {

  constructor(private command: GetOauthAccessToken) {}
  private oAuthRepository = Container.get(OauthRepository);

  async execute(): Promise<IResponse> {
    if (this.command.accessToken) {
        return this.oAuthRepository.getById(this.command.accessToken)
    } 
    if (this.command.userId) {
      return this.oAuthRepository.getByUserId(this.command.userId)
    } 
  }
}
