import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { GetUserHandler } from '../../ActionHandler/User/GetUserHandler';
import { IQuery } from '../../Infrastructure/Lib/Bus/Query/IQuery';

export class GetUser implements IQuery {
  constructor(private _userId: string = null, private _email: string = null) {}

  get userId(): string {
    return this._userId;
  }

  get email(): string {
    return this._email;
  }

  getActionHandler(): IActionHandler {
    return new GetUserHandler(this);
  }
}
