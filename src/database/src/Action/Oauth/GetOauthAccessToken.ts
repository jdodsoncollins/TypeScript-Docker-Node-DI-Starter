import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IQuery } from '../../Infrastructure/Lib/Bus/Query/IQuery';
import { GetOauthAccessTokenHandler } from '../../ActionHandler/Oauth/GetOauthAccessTokenHandler';

export class GetOauthAccessToken implements IQuery {
  constructor(private _accessToken: string = null, private _userId: string = null) {}

  get accessToken(): string {
    return this._accessToken;
  }

  get userId(): string {
    return this._userId;
  }

  getActionHandler(): IActionHandler {
    return new GetOauthAccessTokenHandler(this);
  }
}
