import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IQuery } from '../../Infrastructure/Lib/Bus/Query/IQuery';
import { GetOauthHandler } from '../../ActionHandler/Oauth/GetOauthHandler';

export class GetOauth implements IQuery {
  constructor(private _accessToken: string = null) {}

  get accessToken(): string {
    return this._accessToken;
  }

  getActionHandler(): IActionHandler {
    return new GetOauthHandler(this);
  }
}
