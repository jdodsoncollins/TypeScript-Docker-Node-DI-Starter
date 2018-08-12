import { ICommand } from './ICommand';
import { IResponse } from '../../Response/Response';

export interface ICommandBus {
  execute(command: ICommand): IResponse;
}

export class CommandBus implements ICommandBus {
  execute(command: ICommand): IResponse {
    let handler = command.getActionHandler();
    return handler.execute();
  }
}
