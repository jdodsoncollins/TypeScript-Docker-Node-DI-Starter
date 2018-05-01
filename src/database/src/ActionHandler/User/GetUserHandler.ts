import { GetUser } from '../../Action/User/GetUser';
import { IQueryHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IResponse } from '../../Infrastructure/Lib/Response/Response';
import { UserRepository } from '../../Infrastructure/Repository/UserRepository';
import "reflect-metadata";
import { Container, Service } from 'typedi';
import {InjectManager} from "typeorm-typedi-extensions";
import { EntityManager } from 'typeorm';
import { User } from '../../DomainModel/User/User';

@Service()
export class GetUserHandler implements IQueryHandler {

  constructor(private command: GetUser) {}
  private userRepository = Container.get(UserRepository);

  async execute(): Promise<IResponse> {
      console.log('command', this.command);
    if (this.command.userId) {
        return this.userRepository.getById(this.command.userId)
    } else {
        return this.userRepository.getByEmail(this.command.email)
    }
  }
}
