import { IQueryHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import "reflect-metadata";
import { Container, Service } from 'typedi';
import {InjectManager} from "typeorm-typedi-extensions";
import { EntityManager } from 'typeorm';
import { User } from '../../DomainModel/User/User';
import { OauthRepository } from 'database/src/Infrastructure/Repository/OauthRepository';
import { GetOauth } from '../../Action/Oauth/GetOauth';

@Service()
export class GetOauthHandler implements IQueryHandler {

  constructor(private command: GetOauth) {}
  private oAuthRepository = Container.get(OauthRepository);

  async execute(): Promise<IResponse> {
      return
    // if (this.command.oauth) {
    //     return this.oAuthRepository.getById(this.command.oauth)
    // } else {
    //     return this.oAuthRepository.getByEmail(this.command.email)
    // }
  }
}
