import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { ICommand } from '../../Infrastructure/Lib/Bus/Command/ICommand';
import { OAuthAccessToken } from '../../DomainModel/Oauth/OAuth_access_token';
import { CreateOauthAccessTokenHandler } from '../../ActionHandler/Oauth/CreateOauthAccessTokenHandler';

export class CreateOauthAccessToken implements ICommand {
  private _oAuthAccessToken: OAuthAccessToken | null;

  constructor(
    private _identifier: string | null = null,
    private _accessTokenExpiresOn: string | null = null,
    private _clientId: string | null = null,
    private _userId: string | null = null
  ) {
    this._oAuthAccessToken = new OAuthAccessToken();
    if (_identifier) {
      this.setIdentifier(_identifier);
    }
    if (_accessTokenExpiresOn) {
      this.setAccessTokenExpiresOn(_accessTokenExpiresOn);
    }
    if (_userId) {
      this.setUserId(_userId);
    }
    if (_clientId) {
      this.setClientId(_clientId);
    }
  }

  get oAuthAccessToken(): OAuthAccessToken {
    return this._oAuthAccessToken;
  }

  private setIdentifier(identifier) {
    this._oAuthAccessToken.identifier = identifier;
  }

  private setAccessTokenExpiresOn(accessTokenExpiresOn) {
    this._oAuthAccessToken.expiresAt = accessTokenExpiresOn;
  }

  private setClientId(clientId) {
    this._oAuthAccessToken.oAuthClientId = clientId;
  }

  private setUserId(userId) {
    this._oAuthAccessToken.userId = userId;
  }

  getActionHandler(): IActionHandler {
    return new CreateOauthAccessTokenHandler(this);
  }
}
