import 'reflect-metadata';
import { ICommand } from './Bus/Command/ICommand';
import { IResponse } from './Response/Response';
import { IQuery } from './Bus/Query/IQuery';
import { CommandBus, ICommandBus } from './Bus/Command/CommandBus';
import { IQueryBus, QueryBus } from './Bus/Query/QueryBus';
import "reflect-metadata";
import "reflect-metadata";
import {Service, Container} from "typedi";
import { Connection, EntityManager } from 'typeorm';
import {InjectConnection} from "typeorm-typedi-extensions";

@Service()
export class ApplicationCore {
  constructor() {
    console.log('App Core constructed');
  }

  @InjectConnection()
  public connection: Connection;

  public dispatchCommand(command: ICommand): IResponse {
    return this.commandBus.execute(command);
  }

  public dispatchQuery(query: IQuery): IResponse {
    return this.queryBus.execute(query);
  }

  private get commandBus(): ICommandBus {
    return new CommandBus();
  }

  private get queryBus(): IQueryBus {
    return new QueryBus();
  }
}
