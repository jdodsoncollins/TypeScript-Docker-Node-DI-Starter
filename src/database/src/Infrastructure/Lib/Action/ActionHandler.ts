import { IResponse } from '../Response/Response';

export interface IActionHandler {
  execute(): Promise<IResponse>;
}

export interface ICommandHandler extends IActionHandler {}

export interface IQueryHandler extends IActionHandler {}
