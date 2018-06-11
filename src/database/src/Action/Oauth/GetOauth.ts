import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IQuery } from '../../Infrastructure/Lib/Bus/Query/IQuery';
import { GetOauthHandler } from '../../ActionHandler/Oauth/GetOauthHandler';

export class GetOauth implements IQuery {
  constructor(private _userId: string = null, private _email: string = null) {}

  // get userId(): string {
  //   return this._userId;
  // }

  // get email(): string {
  //     return this._email;
  // }

  getActionHandler(): IActionHandler {
    return new GetOauthHandler(this);
  }
}
