"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Oauth_1 = require("../../DomainModel/Oauth/Oauth");
var CreateOauthHandler_1 = require("../../ActionHandler/Oauth/CreateOauthHandler");
var CreateOauth = /** @class */ (function () {
    function CreateOauth(_accessToken, _accessTokenExpiresOn, _clientId, _refreshToken, _refreshTokenExpiresOn, _userId) {
        if (_clientId === void 0) { _clientId = null; }
        this._accessToken = _accessToken;
        this._accessTokenExpiresOn = _accessTokenExpiresOn;
        this._clientId = _clientId;
        this._refreshToken = _refreshToken;
        this._refreshTokenExpiresOn = _refreshTokenExpiresOn;
        this._userId = _userId;
        this._oauth = new Oauth_1.Oauth();
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
    Object.defineProperty(CreateOauth.prototype, "oauth", {
        get: function () {
            return this._oauth;
        },
        enumerable: true,
        configurable: true
    });
    CreateOauth.prototype.setAccessToken = function (accessToken) {
        this._oauth.accessToken = accessToken;
    };
    CreateOauth.prototype.setAccessTokenExpiresOn = function (accessTokenExpiresOn) {
        this._oauth.accessTokenExpiresOn = accessTokenExpiresOn;
    };
    CreateOauth.prototype.setClientId = function (clientId) {
        this._oauth.clientId = clientId;
    };
    CreateOauth.prototype.setRefreshToken = function (refreshToken) {
        this._oauth.refreshToken = refreshToken;
    };
    CreateOauth.prototype.setRefreshTokenExpiresOn = function (refreshTokenExpiresOn) {
        this._oauth.refreshTokenExpiresOn = refreshTokenExpiresOn;
    };
    CreateOauth.prototype.setUserId = function (userId) {
        this._oauth.userId = userId;
    };
    CreateOauth.prototype.getActionHandler = function () {
        return new CreateOauthHandler_1.CreateOauthHandler(this);
    };
    return CreateOauth;
}());
exports.CreateOauth = CreateOauth;
//# sourceMappingURL=CreateOauth.js.map