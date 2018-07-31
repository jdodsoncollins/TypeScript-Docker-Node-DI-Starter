import { ICommandHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import { CreateUser } from '../../Action/User/CreateUser';
import { UserRepository } from '../../Infrastructure/Repository/UserRepository';
import 'reflect-metadata';
import { Service, Container} from 'typedi';
import { OauthRepository } from '../../Infrastructure/Repository/OauthRepository';

export class CreateUserHandler implements ICommandHandler {
  private userRepository = Container.get(UserRepository);
  private oAuthRepository = Container.get(OauthRepository);

  constructor(private command: CreateUser) {}

  async execute(): Promise<IResponse> {
    await this.oAuthRepository.getAccessTokenById(this.command.token);
    return this.userRepository.createUser(this.command.user);
  }
}
