import { ICommandHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import { CreateUser } from '../../Action/User/CreateUser';
import { UserRepository } from '../../Infrastructure/Repository/UserRepository';
import 'reflect-metadata';
import { Service, Container} from 'typedi';

export class CreateUserHandler implements ICommandHandler {
  private userRepository = Container.get(UserRepository);

  constructor(private command: CreateUser) {}

  async execute(): Promise<IResponse> {
    return this.userRepository.createUser(this.command.user);
  }
}
