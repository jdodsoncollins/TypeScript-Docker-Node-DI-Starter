import { GetOAuthClient } from '../../Action/Oauth/GetOAuthClient';

import { IQueryHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import 'reflect-metadata';
import { Container, Service } from 'typedi';
import {InjectManager} from 'typeorm-typedi-extensions';
import { EntityManager } from 'typeorm';
import { OauthRepository } from '../../Infrastructure/Repository/OauthRepository';

@Service()
export class GetOAuthClientHandler implements IQueryHandler {

  constructor(private command: GetOAuthClient) {}
  private oAuthRepository = Container.get(OauthRepository);

  async execute(): Promise<IResponse> {
    if (this.command.identifier) {
        return this.oAuthRepository.getClientByIdentifier(this.command.identifier)
    }
    
    if (this.command.redirectUri) {
      return this.oAuthRepository.getClientByRedirectUri(this.command.redirectUri)
    } 
  }
}
