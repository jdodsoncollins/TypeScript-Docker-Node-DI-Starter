import { GetOauth } from './../../Action/Oauth/GetOauth';

import { IQueryHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import "reflect-metadata";
import { Container, Service } from 'typedi';
import {InjectManager} from "typeorm-typedi-extensions";
import { EntityManager } from 'typeorm';
import { OauthRepository } from '../../Infrastructure/Repository/OauthRepository';

@Service()
export class GetOauthHandler implements IQueryHandler {

  constructor(private command: GetOauth) {}
  private oAuthRepository = Container.get(OauthRepository);

  async execute(): Promise<IResponse> {
      console.log('command', this.command);
    if (this.command.accessToken) {
        return this.oAuthRepository.getByAccessToken(this.command.accessToken)
    } 
  }
}
