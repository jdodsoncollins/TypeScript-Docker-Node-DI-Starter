import { ApplicationCore } from "../database/src/Infrastructure/Lib/ApplicationCore";
import { User } from "../database/src/DomainModel/User/User";
import { OAuthAccessTokens } from "../database/src/DomainModel/Oauth/OAuth_access_tokens";
import { GetOauthAccessToken } from "../database/src/Action/Oauth/GetOauthAccessToken";
const bcrypt = require("bcrypt");
var _ = require('lodash');

export class OAuthModel {
  private config: any;
  private appCore: ApplicationCore;

  constructor() {
    this.appCore = new ApplicationCore();
  }

  // getAccessToken(bearerToken) {
  //   return OAuthAccessTokens.findOne({
  //     where: { access_token: bearerToken },
  //     attributes: [
  //       ["access_token", "accessToken"],
  //       ["expires", "accessTokenExpiresAt"],
  //       "scope"
  //     ],
  //     include: [
  //       {
  //         model: User,
  //         attributes: ["id", "username"]
  //       },
  //       OAuthClient
  //     ]
  //   })
  //     .then(function(accessToken) {
  //       if (!accessToken) return false;
  //       var token = accessToken.toJSON();
  //       token.user = token.User;
  //       token.client = token.OAuthClient;
  //       token.scope = token.scope;
  //       return token;
  //     })
  //     .catch(function(err) {
  //       console.log("getAccessToken - Err: ");
  //     });
  // }

  // getClient(clientId, clientSecret) {
  //   const options = {
  //     where: { client_id: clientId },
  //     attributes: ["id", "client_id", "redirect_uri", "scope"]
  //   };
  //   if (clientSecret) options.where.client_secret = clientSecret;

  //   return sqldb.OAuthClient.findOne(options)
  //     .then(function(client) {
  //       if (!client) return new Error("client not found");
  //       var clientWithGrants = client.toJSON();
  //       clientWithGrants.grants = [
  //         "authorization_code",
  //         "password",
  //         "refresh_token",
  //         "client_credentials"
  //       ];
  //       // Todo: need to create another table for redirect URIs
  //       clientWithGrants.redirectUris = [clientWithGrants.redirect_uri];
  //       delete clientWithGrants.redirect_uri;
  //       //clientWithGrants.refreshTokenLifetime = integer optional
  //       //clientWithGrants.accessTokenLifetime  = integer optional
  //       return clientWithGrants;
  //     })
  //     .catch(function(err) {
  //       console.log("getClient - Err: ", err);
  //     });
  // }

  // grantTypeAllowed(clientId, grantType, callback) {
  //   callback(false, true);
  // }

  // saveToken(token, client, user) {
  //   return Promise.all([
  //     OAuthAccessToken.create({
  //       access_token: token.accessToken,
  //       expires: token.accessTokenExpiresAt,
  //       client_id: client.id,
  //       user_id: user.id,
  //       scope: token.scope
  //     }),
  //     token.refreshToken
  //       ? OAuthRefreshToken.create({
  //           // no refresh token for client_credentials
  //           refresh_token: token.refreshToken,
  //           expires: token.refreshTokenExpiresAt,
  //           client_id: client.id,
  //           user_id: user.id,
  //           scope: token.scope
  //         })
  //       : []
  //   ])
  //     .then(function(resultsArray) {
  //       return _.assign(
  //         // expected to return client and user, but not returning
  //         {
  //           client: client,
  //           user: user,
  //           access_token: token.accessToken, // proxy
  //           refresh_token: token.refreshToken // proxy
  //         },
  //         token
  //       );
  //     })
  //     .catch(function(err) {
  //       console.log("revokeToken - Err: ", err);
  //     });
  // }

  // saveAuthorizationCode(code, client, user) {
  //   return OAuthAuthorizationCode.create({
  //     expires: code.expiresAt,
  //     client_id: client.id,
  //     authorization_code: code.authorizationCode,
  //     user_id: user.id,
  //     scope: code.scope
  //   })
  //     .then(function() {
  //       code.code = code.authorizationCode;
  //       return code;
  //     })
  //     .catch(function(err) {
  //       console.log("saveAuthorizationCode - Err: ", err);
  //     });
  // }

  // /*
  //    * Method used only by password grant type.
  //    */

  // async getUser(username, password) {
  //   const getUserCommand = new GetUser(null, username);
  //   const getUserResponse = await this.appCore.dispatchQuery(getUserCommand);
  //   const match = await bcrypt.compare(
  //     password,
  //     getUserResponse[0]["_password"]
  //   );

  //   if (match) {
  //     return getUserResponse;
  //   } else {
  //     return "error: can`t get user";
  //   }
  // }

  // revokeToken(token) {
  //   return OAuthRefreshToken.findOne({
  //     where: {
  //       refresh_token: token.refreshToken
  //     }
  //   })
  //     .then(function(rT) {
  //       if (rT) rT.destroy();
  //       /***
  //        * As per the discussion we need set older date
  //        * revokeToken will expected return a boolean in future version
  //        * https://github.com/oauthjs/node-oauth2-server/pull/274
  //        * https://github.com/oauthjs/node-oauth2-server/issues/290
  //        */
  //       var expiredToken = token;
  //       expiredToken.refreshTokenExpiresAt = new Date(
  //         "2015-05-28T06:59:53.000Z"
  //       );
  //       return expiredToken;
  //     })
  //     .catch(function(err) {
  //       console.log("revokeToken - Err: ", err);
  //     });
  // }

  // revokeAuthorizationCode(code) {
  //   return OAuthAuthorizationCode.findOne({
  //     where: {
  //       authorization_code: code.code
  //     }
  //   })
  //     .then(function(rCode) {
  //       //if(rCode) rCode.destroy();
  //       /***
  //        * As per the discussion we need set older date
  //        * revokeToken will expected return a boolean in future version
  //        * https://github.com/oauthjs/node-oauth2-server/pull/274
  //        * https://github.com/oauthjs/node-oauth2-server/issues/290
  //        */
  //       var expiredCode = code;
  //       expiredCode.expiresAt = new Date("2015-05-28T06:59:53.000Z");
  //       return expiredCode;
  //     })
  //     .catch(function(err) {
  //       console.log("getUser - Err: ", err);
  //     });
  // }

  // getUserFromClient(client) {
  //   var options = {
  //     where: { client_id: client.client_id },
  //     include: [User],
  //     attributes: ["id", "client_id", "redirect_uri"]
  //   };
  //   if (client.client_secret)
  //     options.where.client_secret = client.client_secret;

  //   return OAuthClient.findOne(options)
  //     .then(function(client) {
  //       if (!client) return false;
  //       if (!client.User) return false;
  //       return client.User.toJSON();
  //     })
  //     .catch(function(err) {
  //       console.log("getUserFromClient - Err: ", err);
  //     });
  // }

  // getRefreshToken(refreshToken) {
  //   if (!refreshToken || refreshToken === "undefined") return false;

  //   return OAuthRefreshToken.findOne({
  //     attributes: ["client_id", "user_id", "expires"],
  //     where: { refresh_token: refreshToken },
  //     include: [OAuthClient, User]
  //   })
  //     .then(function(savedRT) {
  //       var tokenTemp = {
  //         user: savedRT ? savedRT.User.toJSON() : {},
  //         client: savedRT ? savedRT.OAuthClient.toJSON() : {},
  //         refreshTokenExpiresAt: savedRT ? new Date(savedRT.expires) : null,
  //         refreshToken: refreshToken,
  //         refresh_token: refreshToken,
  //         scope: savedRT.scope
  //       };
  //       return tokenTemp;
  //     })
  //     .catch(function(err) {
  //       console.log("getRefreshToken - Err: ", err);
  //     });
  // }

  // validateScope(token, client) {
  //   return user.scope === scope && client.scope === scope && scope !== null
  //     ? scope
  //     : false;
  // }

  // verifyScope(token, scope) {
  //   return token.scope === scope;
  // }
}
