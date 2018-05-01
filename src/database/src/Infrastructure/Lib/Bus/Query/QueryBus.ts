import { IQuery } from './IQuery';
import { IResponse } from '../../Response/Response';

export interface IQueryBus {
  execute(query: IQuery);
}

export class QueryBus implements IQueryBus {
  execute(query: IQuery) {
    let handler = query.getActionHandler();
    return handler.execute();
  }
}
