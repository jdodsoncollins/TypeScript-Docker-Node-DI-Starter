import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IQuery } from '../../Infrastructure/Lib/Bus/Query/IQuery';
import { GetOAuthClientHandler } from '../../ActionHandler/Oauth/GetOAuthClientHandler';

export class GetOAuthClient implements IQuery {
  constructor(private _identifier: string = null, private _secret: string = null) {}

  get identifier(): string {
    return this._identifier;
  }

  get secret(): string {
    return this._secret;
  }

  getActionHandler(): IActionHandler {
    return new GetOAuthClientHandler(this);
  }
}
