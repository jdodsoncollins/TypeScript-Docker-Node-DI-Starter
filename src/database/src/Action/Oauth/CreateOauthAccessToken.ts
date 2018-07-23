import { IActionHandler } from "../../Infrastructure/Lib/Action/ActionHandler";
import { ICommand } from "../../Infrastructure/Lib/Bus/Command/ICommand";
import { OAuthAccessTokens } from "../../DomainModel/Oauth/OAuth_access_tokens";
import { CreateOauthAccessTokenHandler } from "../../ActionHandler/Oauth/CreateOauthAccessTokenHandler";

export class CreateOauthAccessToken implements ICommand {
  private _oAuthAccessToken: OAuthAccessTokens | null;

  constructor(
    private _accessToken: string | null,
    private _accessTokenExpiresOn: string | null,
    private _clientId: string | null = null,
    private _refreshToken: string | null,
    private _refreshTokenExpiresOn: string | null,
    private _userId: string | null
  ) {
    this._oAuthAccessToken = new OAuthAccessTokens();
    if (_accessToken) {
      this.setAccessToken(_accessToken);
    }
    if (_accessTokenExpiresOn) {
      this.setAccessTokenExpiresOn(_accessTokenExpiresOn);
    }
    if (_clientId) {
      this.setClientId(_clientId);
    }
  }

  get oAuthAccessToken(): OAuthAccessTokens {
    return this.oAuthAccessToken;
  }

  private setAccessToken(accessToken) {
    this._oAuthAccessToken = new OAuthAccessTokens(accessToken);
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
