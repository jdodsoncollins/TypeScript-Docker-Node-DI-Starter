import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { IQuery } from '../../Infrastructure/Lib/Bus/Query/IQuery';
import { GetOAuthClientHandler } from '../../ActionHandler/Oauth/GetOAuthClientHandler';

export class GetOAuthClient implements IQuery {
  constructor(private _identifier: string = null, private _secret: string | null = null, private _redirectUri: string | null = null, private _name: string | null = null) {}

  get identifier(): string {
    return this._identifier;
  }

  get secret(): string {
    return this._secret;
  }

  get redirectUri(): string {
    return this._redirectUri;
  }

  get name(): string {
    return this._name;
  }

  getActionHandler(): IActionHandler {
    return new GetOAuthClientHandler(this);
  }
}
