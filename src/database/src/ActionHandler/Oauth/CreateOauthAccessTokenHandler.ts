import { ICommandHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import 'reflect-metadata';
import { Service, Container} from 'typedi';
import { OauthRepository } from '../../Infrastructure/Repository/OauthRepository';
import { CreateOauthAccessToken } from '../../Action/Oauth/CreateOauthAccessToken';

export class CreateOauthAccessTokenHandler implements ICommandHandler {
  private oAuthRepository = Container.get(OauthRepository);

  constructor(private command: CreateOauthAccessToken) {}

  async execute(): Promise<IResponse> {
    return this.oAuthRepository.createOauthAccessToken(this.command.oAuthAccessToken);
  }
}
