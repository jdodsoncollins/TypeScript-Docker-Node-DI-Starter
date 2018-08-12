import { OAuthAccessToken } from '../database/src/DomainModel/Oauth/OAuth_access_token';
import { GetOauthAccessToken } from '../database/src/Action/Oauth/GetOauthAccessToken';

export class BaseController {

  constructor() {
  }

  public static async checkHeaders(req, res, appCore) {
    const getOAuthTokenCommand = new GetOauthAccessToken(
      req.headers.authorization
    );
    const getOAuthTokenResponse = await appCore.dispatchQuery(
      getOAuthTokenCommand
    );

    if (!getOAuthTokenResponse) {
      res.status(403);
      return res.json('Unauthorized');
    }
  }
}
