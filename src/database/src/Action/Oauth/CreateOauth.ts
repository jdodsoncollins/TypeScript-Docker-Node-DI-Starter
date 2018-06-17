import { IActionHandler } from "../../Infrastructure/Lib/Action/ActionHandler";
import { ICommand } from "../../Infrastructure/Lib/Bus/Command/ICommand";
import { Oauth } from "../../DomainModel/Oauth/Oauth";
import { CreateOauthHandler } from "../../ActionHandler/Oauth/CreateOauthHandler";

export class CreateOauth implements ICommand {
  private _oauth: Oauth | null;

  constructor(
    private _accessToken: string | null,
    private _accessTokenExpiresOn: string | null,
    private _clientId: string | null = null,
    private _refreshToken: string | null,
    private _refreshTokenExpiresOn: string | null,
    private _userId: string | null
  ) {
    this._oauth = new Oauth();
    if (_accessToken) {
      this.setAccessToken(_accessToken);
    }
    if (_accessTokenExpiresOn) {
      this.setAccessTokenExpiresOn(_accessTokenExpiresOn);
    }
    if (_clientId) {
      this.setClientId(_clientId);
    }
    if (_refreshToken) {
      this.setRefreshToken(_refreshToken);
    }
    if (_refreshTokenExpiresOn) {
      this.setRefreshToken(_refreshTokenExpiresOn);
    }
    if (_userId) {
      this.setRefreshToken(_userId);
    }
  }

  get oauth(): Oauth {
    return this._oauth;
  }

  private setAccessToken(accessToken) {
    this._oauth.accessToken = accessToken;
  }

  private setAccessTokenExpiresOn(accessTokenExpiresOn) {
    this._oauth.accessTokenExpiresOn = accessTokenExpiresOn;
  }

  private setClientId(clientId) {
    this._oauth.clientId = clientId;
  }

  private setRefreshToken(refreshToken) {
    this._oauth.refreshToken = refreshToken;
  }

  private setRefreshTokenExpiresOn(refreshTokenExpiresOn) {
    this._oauth.refreshTokenExpiresOn = refreshTokenExpiresOn;
  }

  private setUserId(userId) {
    this._oauth.userId = userId;
  }

  getActionHandler(): IActionHandler {
    return new CreateOauthHandler(this);
  }
}
