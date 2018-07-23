"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OAuth_access_tokens_1 = require("../../DomainModel/Oauth/OAuth_access_tokens");
var CreateOauthAccessTokenHandler_1 = require("../../ActionHandler/Oauth/CreateOauthAccessTokenHandler");
var CreateOauthAccessToken = /** @class */ (function () {
    function CreateOauthAccessToken(_accessToken, _accessTokenExpiresOn, _clientId, _refreshToken, _refreshTokenExpiresOn, _userId) {
        if (_clientId === void 0) { _clientId = null; }
        this._accessToken = _accessToken;
        this._accessTokenExpiresOn = _accessTokenExpiresOn;
        this._clientId = _clientId;
        this._refreshToken = _refreshToken;
        this._refreshTokenExpiresOn = _refreshTokenExpiresOn;
        this._userId = _userId;
        this._oAuthAccessToken = new OAuth_access_tokens_1.OAuthAccessTokens();
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
    Object.defineProperty(CreateOauthAccessToken.prototype, "oAuthAccessToken", {
        get: function () {
            return this.oAuthAccessToken;
        },
        enumerable: true,
        configurable: true
    });
    CreateOauthAccessToken.prototype.setAccessToken = function (accessToken) {
        this._oAuthAccessToken = new OAuth_access_tokens_1.OAuthAccessTokens(accessToken);
    };
    CreateOauthAccessToken.prototype.setAccessTokenExpiresOn = function (accessTokenExpiresOn) {
        this._oAuthAccessToken.expiresAt = accessTokenExpiresOn;
    };
    CreateOauthAccessToken.prototype.setClientId = function (clientId) {
        this._oAuthAccessToken.oAuthClientId = clientId;
    };
    CreateOauthAccessToken.prototype.setUserId = function (userId) {
        this._oAuthAccessToken.userId = userId;
    };
    CreateOauthAccessToken.prototype.getActionHandler = function () {
        return new CreateOauthAccessTokenHandler_1.CreateOauthAccessTokenHandler(this);
    };
    return CreateOauthAccessToken;
}());
exports.CreateOauthAccessToken = CreateOauthAccessToken;
//# sourceMappingURL=CreateOauthAccessToken.js.map