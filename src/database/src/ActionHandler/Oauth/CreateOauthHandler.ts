import { ICommandHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import "reflect-metadata";
import { Service, Container} from "typedi";
import { OauthRepository } from 'database/src/Infrastructure/Repository/OauthRepository';
import { CreateOauth } from '../../Action/Oauth/CreateOauth';

export class CreateOauthHandler implements ICommandHandler {
  private oAuthRepository = Container.get(OauthRepository);

  constructor(private command: CreateOauth) {}

  async execute(): Promise<IResponse> {
    console.log(this.command);
    return this.oAuthRepository.createOauth(this.command.oauth);
  }
}
